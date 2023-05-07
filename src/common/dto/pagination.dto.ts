import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsPositive, Min } from 'class-validator';

export class PaginationDto {
  @ApiProperty({ default: 10, description: 'How many rows do you need' })
  @IsOptional()
  @IsPositive()
  @IsNumber()
  @Min(1)
  limit?: number;

  // offset is the pagination (e.g. page = 3)
  @ApiProperty({ default: 0, description: 'Which page do you need' })
  @IsOptional()
  @Min(0)
  offset?: number;
}
