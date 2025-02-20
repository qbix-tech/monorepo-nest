import { z } from 'zod';

export const createStorySchema = z.object({
  userId: z.string(),
  title: z.string(),
  content: z.string().min(8),
});

export type CreateStoryDto = z.output<typeof createStorySchema>;
