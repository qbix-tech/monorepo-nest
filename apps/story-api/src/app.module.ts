import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DrizzleModule } from './module/drizzle/drizzle.module';
import { StoryModule } from './module/story/story.module';

@Module({
  imports: [
    DrizzleModule,
    StoryModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
})
export class AppModule {}
