import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'db',
      port: 3307,
      username: 'manu',
      password: 'manu',
      database: 'auth_db',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})
export class AuthModule {}
