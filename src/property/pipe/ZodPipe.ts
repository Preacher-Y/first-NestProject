import { BadRequestException, PipeTransform } from '@nestjs/common';
import type { ZodSchema } from 'zod';

export class ZodPipeValidation implements PipeTransform {
  constructor(private schema: ZodSchema) {}
  transform(value: any) {
    const parsed = this.schema.safeParse(value);
    if (!parsed.success) {
      throw new BadRequestException(
        `Validation failed: ${parsed.error.message}`,
      );
    }
    return parsed.data;
  }
}
