import { Injectable } from '@nestjs/common';
import { User } from './user_entity/user.entity';

@Injectable()
export class UserService {
    private users: User[] = [
        {
            id: 1,
            username: 'pero',
            password: '123'
        },

        {
            id: 2,
            username: 'kamikaza',
            password: '123'
        }
    ]

    async findUser(username: string){
        const user = this.users.find((user) => user.username === username)

        return user;
    }

}
