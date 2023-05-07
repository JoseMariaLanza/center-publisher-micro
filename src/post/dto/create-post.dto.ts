import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength, IsDateString, IsInt, Min } from 'class-validator';

export class CreatePostDto {
  @ApiProperty({
    description: 'Post title',
    nullable: false,
    minLength: 1,
  })
  @IsString()
  @MinLength(1)
  title: string;

  @ApiProperty()
  @IsString()
  @MinLength(1)
  description: string;

  @ApiProperty({
    example: '2022-09-11T00:00:00.000+00:00',
    description: 'UTC DateTime string',
    uniqueItems: false,
    nullable: false,
  })
  @IsDateString()
  @MinLength(1)
  published_at: string;

  @IsInt()
  @Min(1)
  user_id: number;
}
