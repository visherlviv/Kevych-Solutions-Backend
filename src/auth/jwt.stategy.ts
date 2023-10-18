import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { JwtPayload } from "./jwt-payload.interface";
import { AuthService } from "./auth.service";
import { PrismaService } from "../prisma.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private prisma: PrismaService) {
        super({
            secretOrKey: 'SecretJWT',
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
        })

    }

    async validate(payload: JwtPayload) {
        const { login } = payload;
        const user = await this.prisma.entity.findFirst({ where: { login } });
        if (!user) {
            throw new UnauthorizedException('')
        }
        return user;
    }
}