import { Module, Global } from '@nestjs/common'
import { DbService } from './db.service'
import { TypegooseModule } from 'nestjs-typegoose'
import { Article } from './models/article.model'
import { Tag } from './models/tag.model'

const models = TypegooseModule.forFeature([Article, Tag])

@Global()
@Module({
  imports: [
    TypegooseModule.forRoot('mongodb://localhost:32768/blog', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }),
    models
  ],
  providers: [DbService],
  exports: [DbService, models]
})
export class DbModule {}
