import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';
import { CreateUserDto } from '@server/src/dtos/create-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  // 사용자 생성 메서드
  async createUser(createUserDto: CreateUserDto): Promise<User> {
    // 새로운 사용자 인스턴스 생성
    const createdUser = new this.userModel(createUserDto);
    // 데이터베이스에 저장
    return createdUser.save();
  }

  // 사용자 조회 메서드 (예시)
  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  // 사용자 ID로 조회 메서드 (예시)
  async findOne(id: string): Promise<User | null> {
    return this.userModel.findById(id).exec();
  }

  // 사용자 삭제 메서드 (예시)
  async delete(id: string): Promise<User | null> {
    return this.userModel.findByIdAndDelete(id).exec();
  }

  // 사용자 정보 수정 메서드 (예시)
  async update(
    id: string,
    updateUserDto: Partial<CreateUserDto>,
  ): Promise<User | null> {
    return this.userModel
      .findByIdAndUpdate(id, updateUserDto, { new: true })
      .exec();
  }
}
