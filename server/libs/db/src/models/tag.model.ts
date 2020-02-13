import { prop, modelOptions } from '@typegoose/typegoose'
import { ApiProperty } from '@nestjs/swagger'

@modelOptions({
  schemaOptions: {
    timestamps: true
  }
})
export class Tag {
  @ApiProperty({ description: '名称' })
  @prop()
  name: string

  @ApiProperty({ description: '描述' })
  @prop()
  description: string
}
