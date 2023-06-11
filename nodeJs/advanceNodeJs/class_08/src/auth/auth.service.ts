import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UsersService){}
    async validateUser(username: string, password: string){
       
        }
        // return null;
    }

