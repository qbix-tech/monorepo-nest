import { Module } from '@nestjs/common';
import { StoryService } from './story.service';
import { StoryController } from './story.controller';
import { DrizzleModule } from '../drizzle/drizzle.module';

@Module({
  imports: [DrizzleModule],
  providers: [StoryService],
  controllers: [StoryController],
})
export class StoryModule {}
