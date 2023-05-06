import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Post extends Document {
  @Prop({ unique: true, index: true })
  title: string;

  @Prop()
  description: string;

  @Prop()
  published_at: string;

  @Prop()
  user_id: number;
}

export const PostSchema = SchemaFactory.createForClass(Post);
