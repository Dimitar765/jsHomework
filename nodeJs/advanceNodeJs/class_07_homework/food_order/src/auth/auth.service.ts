import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor( private readonly userService: UserService,
        private readonly jwtService: JwtService
        )
    {}

    signUp(){
        return {msg: "hi"}
    }


    async signIn(username: string, pass: string): Promise<any>{
        const user = await this.userService.findUser(username);

        if(user?.password !== pass){
            throw new UnauthorizedException()
        }

        const payload = { username: user.username, sub: user.id}
        console.log(payload);
        
        return {
            access_token: await this.jwtService.signAsync(payload)
            
        }

    }



}
