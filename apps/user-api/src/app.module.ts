import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DrizzleModule } from './module/drizzle/drizzle.module';
import { UserModule } from './module/user/user.module';

@Module({
  imports: [
    DrizzleModule,
    UserModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
})
export class AppModule {}
