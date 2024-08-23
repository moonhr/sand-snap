import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
//유효성dto를 활성화하기 위한 전역 파이프 설정 ValidationPipe
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3001);
}
bootstrap();
