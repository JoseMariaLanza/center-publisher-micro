import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PostService } from './post.service';
import { PostController } from './post.controller';
import { Post, PostSchema } from './entities/post.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [PostController],
  providers: [PostService],
  imports: [
    ConfigModule,
    MongooseModule.forFeature([
      {
        name: Post.name,
        schema: PostSchema,
      },
    ]),
  ],
  exports: [MongooseModule],
})
export class PostModule {}
