import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { AuthService } from './auth.service';
import { AuthRequest, AuthResponse } from './interfaces/auth.interface';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @GrpcMethod('AuthService', 'Authenticate')
  async authenticate(data: AuthRequest): Promise<AuthResponse> {
    const { email, password } = data;
    const isAuthenticated = await this.authService.authenticateUser(email, password);

    return { isAuthenticated };
  }
}
