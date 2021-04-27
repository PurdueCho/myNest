import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,            // decorator 가 없는 validator 는 거른다.
    forbidNonWhitelisted: true,
    transform: true,            // ㅌㅏ입을 받아서 넘겨줄 떄 자동으로 타입 변환  
  }
  )); // Code validation
  await app.listen(3000);
}
bootstrap();
