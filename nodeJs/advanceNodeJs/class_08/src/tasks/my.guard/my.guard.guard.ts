import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Request } from 'express';

@Injectable()
export class MyGuardGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const CUSTOM_API_KEY = "1234567";
    const request = context.switchToHttp().getRequest<Request>();
    const authHeader = request.header('Autorization');
    return authHeader !== CUSTOM_API_KEY;
  }
}
