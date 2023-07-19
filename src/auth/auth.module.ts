import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from "src/auth/auth.controller"

@Module({
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
