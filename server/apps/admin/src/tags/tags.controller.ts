import { Controller } from '@nestjs/common'
import { InjectModel } from 'nestjs-typegoose'
import { Tag } from '@libs/db/models/tag.model'
import { Crud } from 'nestjs-mongoose-crud'
import { ApiTags } from '@nestjs/swagger'
import { ReturnModelType } from '@typegoose/typegoose'

@Crud({
  model: Tag
})
@Controller('tags')
@ApiTags('标签')
export class TagsController {
  constructor(
    @InjectModel(Tag) private readonly model: ReturnModelType<typeof Tag>
  ) {}
}
