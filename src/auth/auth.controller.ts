import { Body, ConflictException, Controller, HttpCode, HttpStatus, Post, Req, UseGuards } from '@nestjs/common';
import { EntityDto } from './dto/entity.dto';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';


@Controller('auth')
export class AuthController {
    constructor(private readonly AuthService: AuthService) {

    }

    @Post('/signup')
    @HttpCode(HttpStatus.CREATED)
    signUp(@Body() EntityDto: EntityDto) {
        return this.AuthService.signUp(EntityDto);
    };

    @Post('/signin')
    @HttpCode(HttpStatus.CREATED)
    signIn(@Body() EntityDto: EntityDto): Promise<{ accessToken: string }> {
        return this.AuthService.signIn(EntityDto);
    }
    @Post('/test')
    @UseGuards(AuthGuard())
    test(@Req() req) {
        console.log('req', req)
    }
}
