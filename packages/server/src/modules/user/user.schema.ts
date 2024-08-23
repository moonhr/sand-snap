import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Document } from 'mongoose';

//UserDocument: User 클래스와 Document 타입을 결합하여, Mongoose의 문서 기능을 사용.
export type UserDocument = User & Document;

//timestamps를 설정하여 createdAt과 updatedAt를 자동으로 관리한다.
@Schema({ timestamps: true })
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  passwordHash: string;

  @Prop({ required: true })
  profilePicture: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
