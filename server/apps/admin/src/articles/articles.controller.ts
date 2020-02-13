import { Controller } from '@nestjs/common'
import { InjectModel } from 'nestjs-typegoose'
import { Article } from '@libs/db/models/article.model'
import { Crud } from 'nestjs-mongoose-crud'
import { ApiTags } from '@nestjs/swagger'
import { ReturnModelType } from '@typegoose/typegoose'

@Crud({
  model: Article,
  routes: {
    find: {
      populate: 'tags'
    }
  }
})
@Controller('articles')
@ApiTags('文章')
export class ArticlesController {
  constructor(
    @InjectModel(Article)
    private readonly model: ReturnModelType<typeof Article>
  ) {}
}
