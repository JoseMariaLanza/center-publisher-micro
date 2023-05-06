import { IsNumber, IsOptional, IsPositive, Min } from 'class-validator';

export class PaginationDto {
  @IsOptional()
  @IsPositive()
  @IsNumber()
  @Min(1)
  limit?: number;

  // offset is the pagination (e.g. page = 3)
  @IsOptional()
  @IsPositive()
  offset?: number;
}
