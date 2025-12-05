import { BadRequestException, PipeTransform } from '@nestjs/common';

export class ParseIdPipe implements PipeTransform<string, number> {
  transform(value: string): number {
    const id = parseInt(value, 10);
    if (isNaN(id)) throw new BadRequestException('Id Must be a number');
    if (id <= 0) throw new BadRequestException('Id must be a positive number');

    return id;
  }
}
