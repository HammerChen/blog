import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { DbModule } from '@libs/db'
import { ArticlesModule } from './articles/articles.module';
import { TagsModule } from './tags/tags.module';

@Module({
  imports: [DbModule, ArticlesModule, TagsModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
