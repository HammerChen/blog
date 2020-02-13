import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { DbModule } from '@libs/db'
import { ArticlesModule } from './articles/articles.module'
import { TagsModule } from './tags/tags.module'
import { MulterModule } from '@nestjs/platform-express'
import { CommonModule } from 'libs/common/src'

const MAO = require('multer-aliyun-oss')

@Module({
  imports: [
    CommonModule,
    MulterModule.registerAsync({
      useFactory() {
        return {
          storage: MAO({
            config: {
              region: process.env.OSS_REGION,
              accessKeyId: process.env.OSS_ACCESS_KEY_ID,
              accessKeySecret: process.env.OSS_ACCESS_KEY_SECRET,
              bucket: process.env.OSS_BUCKET
            }
          })
        }
      }
    }),
    ArticlesModule,
    TagsModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
