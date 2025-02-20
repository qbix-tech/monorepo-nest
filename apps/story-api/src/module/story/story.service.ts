import { Inject, Injectable } from '@nestjs/common';
import { schema } from '@org/database';
import { InferInsertModel } from 'drizzle-orm';
import { DRIZZLE } from '../drizzle/drizzle.module';
import type { DrizzleDB } from '../drizzle/types/drizzle';

@Injectable()
export class StoryService {
  constructor(@Inject(DRIZZLE) private db: DrizzleDB) {}

  async getAll() {
    return await this.db.select().from(schema.story.story);
  }

  async create(data: InferInsertModel<typeof schema.story.story>) {
    return await this.db
      .insert(schema.story.story)
      .values(data)
      .returning()
      .then((records) => records[0]);
  }
}
