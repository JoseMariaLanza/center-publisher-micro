import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

@Schema()
export class Post extends Document {
  @ApiProperty()
  @Prop({ unique: true, index: true })
  title: string;

  @ApiProperty()
  @Prop()
  description: string;

  @ApiProperty({
    example: '2022-09-11T00:00:00.000+00:00',
    description: 'UTC DateTime string',
    uniqueItems: false,
  })
  @Prop()
  published_at: string;

  @Prop()
  user_id: number;
}

export const PostSchema = SchemaFactory.createForClass(Post);
