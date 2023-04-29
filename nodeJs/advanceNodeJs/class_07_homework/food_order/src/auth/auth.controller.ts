import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
// import { AuthGuard } from './auth.guard';
import { Public } from './constants';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}
    // @UseGuards(AuthGuard)
    @Public()
    @Post('login')
    signIn(@Body() signInDto: Record<string, any>){  //create signIn DTO
        return this.authService.signIn(signInDto.username, signInDto.password)
    }
    
    
}
