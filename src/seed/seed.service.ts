import { Injectable } from '@nestjs/common';
import { faker } from '@faker-js/faker';
import { Post } from 'src/post/entities/post.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Post.name)
    private readonly postModel: Model<Post>,
  ) {}

  async runSeeder() {
    try {
      const posts = [];
      for (let index = 1; index <= 10000; index++) {
        posts.push(this.createPost(index));
      }
      await this.postModel.insertMany(posts);
      console.log('Seeds created successfuly!');
    } catch (error) {
      console.log(`Error creating seeds ${error}`);
    }
  }

  createPost(regNumber: number): Post {
    const post = new this.postModel();

    post.title = `${faker.name.firstName()} ${faker.name.lastName()} post number ${regNumber}`;
    post.description = faker.lorem.text();
    post.published_at = faker.date
      .between('2020-01-01T00:00:00.000Z', '2023-01-01T00:00:00.000Z')
      .toString();
    post.user_id = Math.ceil(Math.random() * 10);

    return post;
  }
}
