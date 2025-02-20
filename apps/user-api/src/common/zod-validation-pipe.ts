import { PipeTransform, BadRequestException } from '@nestjs/common';
import type { ZodSchema } from 'zod';

export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodSchema) {}

  transform<T>(value: unknown) {
    try {
      const parsedValue = this.schema.parse(value) as T;
      return parsedValue;
    } catch {
      throw new BadRequestException('Validation failed');
    }
  }
}
