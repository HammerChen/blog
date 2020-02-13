import { prop, modelOptions, arrayProp, Ref } from '@typegoose/typegoose'
import { ApiProperty } from '@nestjs/swagger'
import { Tag } from './tag.model'

@modelOptions({
  schemaOptions: {
    timestamps: true
  }
})
export class Article {
  @ApiProperty({ description: '标题' })
  @prop()
  title: string

  @ApiProperty({ description: '描述' })
  @prop()
  description: string

  @ApiProperty({ description: '标签' })
  @arrayProp({ itemsRef: 'Tag' })
  tags: Ref<Tag>[]

  @ApiProperty({ description: '内容' })
  @prop()
  content: string
}
