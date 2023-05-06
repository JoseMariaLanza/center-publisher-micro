import { IsString, MinLength, IsDateString, IsInt, Min } from 'class-validator';

export class CreatePostDto {
  @IsString()
  @MinLength(1)
  title: string;

  @IsString()
  @MinLength(1)
  description: string;

  @IsDateString()
  @MinLength(1)
  published_at: string;

  @IsInt()
  @Min(1)
  user_id: number;
}
