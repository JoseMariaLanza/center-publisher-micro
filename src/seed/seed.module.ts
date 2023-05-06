import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { PostModule } from 'src/post/post.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [PostModule],
})
export class SeedModule {}
