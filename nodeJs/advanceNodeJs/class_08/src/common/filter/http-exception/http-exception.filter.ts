import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import { Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter<T extends HttpException> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const respomse = context.getResponse<Response>();

    const status = exception.getStatus();
    const errorResponse = exception.getResponse();
    const stack = exception.stack;

    respomse.status(status).json({
      stack: stack,
      error: errorResponse,
      accredAt: new Date().getTime(),
    })
  }
}
