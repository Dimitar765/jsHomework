import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor( private readonly userService: UserService)
    {}

    @Get()
    getUser(username: string){
        const user = this.userService.findUser(username)

        return user;
    }
}
