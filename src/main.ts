import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { PackageDefinition } from '@grpc/proto-loader';
import { config } from 'dotenv';
import { AuthServiceClient } from "src/src/auth_grpc_pb"; // Importe le stub généré

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Charger le fichier proto
  const protoPath = join(__dirname, "src/auth.proto"); // Chemin vers le fichier auth.proto
  const packageDefinition = PackageDefinition(protoPath);

  // Configurer le microservice gRPC avec le stub
  const microservice = app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      package: 'auth', // Nom du package défini dans le fichier proto (auth.proto)
      protoLoader: packageDefinition,
      loader: {
        // Utiliser grpc-js
        binaryAsBase64: true,
        longsAsStrings: true,
        enumsAsStrings: false,
      },
      // Utiliser le stub comme client gRPC
      url: 'localhost:50051', // Port à écouter pour le service auth
      loader: AuthServiceClient, // Utilise le stub AuthServiceClient
    },
  });

  await app.startAllMicroservicesAsync();
  await app.listen(3000);
}
bootstrap();
