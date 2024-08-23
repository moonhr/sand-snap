import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGODB_URI), // MongoDB 연결 설정
    // 다른 모듈들 추가
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
