import { Body, Controller, Get, Post, UsePipes } from '@nestjs/common';
import { StoryService } from './story.service';
import { ZodValidationPipe } from '../../common/zod-validation-pipe';
import { CreateStoryDto, createStorySchema } from './dto/create-story.dto';

@Controller(['story'])
export class StoryController {
  constructor(private readonly storyService: StoryService) {}

  @Get('all')
  async getAll() {
    return await this.storyService.getAll();
  }

  @Post()
  @UsePipes(new ZodValidationPipe(createStorySchema))
  async create(@Body() createStoryDto: CreateStoryDto) {
    const data = {
      userId: createStoryDto.userId,
      title: createStoryDto.title,
      content: createStoryDto.content,
    };

    return await this.storyService.create(data);
  }
}
