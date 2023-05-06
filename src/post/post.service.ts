import {
  Injectable,
  BadRequestException,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Model, isValidObjectId } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Post } from './entities/post.entity';

import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PaginationDto } from 'src/common/dto/pagination.dto';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PostService {
  defaultLimit = 10;
  defaultOffset = 0;

  constructor(
    @InjectModel(Post.name)
    private readonly postModel: Model<Post>,
    private readonly configService: ConfigService,
  ) {
    console.log('CONFIG SERVICE MODULE VALUES: ', configService);
    // Bellow line will throw an error because jwt-key does not exists
    // console.log('ERROR HANDLE: ', configService.getOrThrow('jwt-key'));

    // Next lines will convert string values from .env to respective types
    const port = configService.get<number>('port');
    // Next line print a number in console
    console.log(port);
  }

  async create(createPostDto: CreatePostDto) {
    try {
      createPostDto.title = createPostDto.title.trim();
      createPostDto.description = createPostDto.description.trim();

      const post = await this.postModel.create(createPostDto);

      return post;
    } catch (error) {
      if (error.code === 11000) {
        throw new BadRequestException(
          `Post already exists in db ${JSON.stringify(error.keyValue)}`,
        );
      }
      console.log(error);
      throw new InternalServerErrorException(
        `Can't create Post - Check server logs`,
      );
    }
  }

  findAll(paginationDto: PaginationDto) {
    // offset is the pagination (e.g. page = 3)
    const { limit = this.defaultLimit, offset = this.defaultOffset } =
      paginationDto;

    return this.postModel
      .find()
      .limit(limit)
      .skip(offset)
      .sort({
        _id: 'desc',
      })
      .select('-__v');
  }

  // Must connect with python backend, get the current logged user ID and search all posts for the user
  // TODO: findAllByAuthenticatedUser

  async findOne(searchTerm: string) {
    try {
      let post: Post;
      if (isNaN(+searchTerm)) {
        post = await this.postModel.findOne({ title: searchTerm });
      }

      if (!post && isValidObjectId(searchTerm)) {
        post = await this.postModel.findById(searchTerm);
      }

      if (!post) {
        post = await this.postModel.findOne({ description: searchTerm.trim() });
      }

      if (!post)
        throw new NotFoundException(
          `Post with id, title or description "${searchTerm}" not found`,
        );

      return post;
    } catch (error) {}
  }

  async update(id: string, updatePostDto: UpdatePostDto) {
    try {
      updatePostDto.title = updatePostDto.title.trim();
      updatePostDto.description = updatePostDto.description.trim();

      return await this.postModel.findByIdAndUpdate(id, updatePostDto, {
        new: true,
      });
    } catch (error) {
      console.log('Error updating post. Error: ', error);
    }
  }

  async remove(id: string) {
    try {
      const { deletedCount } = await this.postModel.deleteOne({ _id: id });
      if (deletedCount < 1) throw new BadRequestException('Post not found.');
    } catch (error) {
      console.log('Error deleting post. Error: ', error);
    }
  }
}
