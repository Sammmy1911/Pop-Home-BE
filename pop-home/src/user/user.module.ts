import { Module } from '@nestjs/common';
import { UserService } from './user.service.js'
import { UserController } from './user.controller.js';
import {TypeOrmModule} from '@nestjs/typeorm' 

@Module({
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
