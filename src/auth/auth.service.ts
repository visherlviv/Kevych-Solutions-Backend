import { ConflictException, Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { EntityDto } from './dto/entity.dto';
import { Entity } from './auth.model';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt-payload.interface';

@Injectable()
export class AuthService {

    constructor(
        private prisma: PrismaService,
        private jwtService: JwtService
    ) {

    }
    async signUp(data: Entity): Promise<EntityDto> {
        const credentials: Entity = data;
        try {
            const { password, login } = data;
            const salt = await bcrypt.genSalt();
            const hashedPassword = await bcrypt.hash(password, salt);

            return this.prisma.entity.create({ data: { password: hashedPassword, login } });
        } catch (e) {
            if (e.code === 23505) {
                throw new ConflictException('Username already exixsts')
            }
        }
    }

    async signIn(data: Entity): Promise<{ accessToken: string }> {
        const { login, password } = data;
        const user = await this.prisma.entity.findFirst({ where: { login } });
        if (user && (await bcrypt.compare(password, user.password))) {
            const payload: JwtPayload = { login }
            const accessToken = await this.jwtService.sign(payload)
            return { accessToken }

        } else {
            throw new UnauthorizedException('Password incorrect or user no exists')
        }
    }
}