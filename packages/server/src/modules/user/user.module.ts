import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User, UserSchema } from './user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [UserService], // 서비스 제공자 등록
  controllers: [UserController], // 컨트롤러 등록
  exports: [UserService], // 다른 모듈에서 UserService를 사용할 수 있도록 내보내기
})
export class UserModule {}
