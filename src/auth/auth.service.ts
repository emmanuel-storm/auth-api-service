import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { AuthServiceClient } from './auth/auth_grpc_pb'; // Importe le stub généré
import { LoginRequest, LoginResponse } from './auth/auth_pb'; // Importe les messages générés

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