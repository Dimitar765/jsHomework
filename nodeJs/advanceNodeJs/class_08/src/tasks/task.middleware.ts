import { NestMiddleware } from "@nestjs/common";
import { Request, Response } from "express";

export class TaskMidleware implements NestMiddleware {
    use(req: Request, res: Response, next: Function) {
        console.log("this is task middleware");

        next();
        
    }
}