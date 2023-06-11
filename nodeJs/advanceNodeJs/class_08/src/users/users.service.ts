import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        {   
            id: "1",
            username: "aaa",
            password: "bbb"
        }
    ]
        
    

    findOne(username: string){

    }
}
