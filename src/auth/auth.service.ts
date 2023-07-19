import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Client, ClientGrpc, Transport } from '@nestjs/microservices'
import { AuthServiceClient } from '../src/auth_grpc_pb';
import { LoginRequest, LoginResponse } from '../src/auth_pb';

const authOption: ClientGrpc = {
  transport: Transport.GRPC,
  options: {
    url: 'localhost:3000',
    package: 'auth',
    protoPath: '../auth.proto',
  },
};

@Injectable()
export class AuthService {
  @Client(authOption) // Configure le client gRPC avec l'option d'authentification
  private readonly authClient: AuthServiceClient; // Utilise le stub comme client gRPC

  async login(data: LoginRequest): Promise<LoginResponse> {
    try {
      // Appelle la méthode du service distant en utilisant le client gRPC avec le stub
      const response = await this.authClient.login(data).toPromise();
      return response;
    } catch (error) {
      // En cas d'erreur, gère les erreurs spécifiques ici, par exemple une erreur d'authentification
      throw new UnauthorizedException('Invalid credentials');
    }
  }
}
