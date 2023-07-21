import { Module } from '@nestjs/common';
import { ShortUrlsService } from './short_urls.service';
import { ShortUrlsController } from './short_urls.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ShortUuidWrapperModule } from 'src/short-uuid-wrapper/short-uuid-wrapper.module';
import { ShortUuidService } from 'src/short-uuid-wrapper/short-uuid-service';

@Module({
  imports: [PrismaModule, ShortUuidWrapperModule.register()],
  controllers: [ShortUrlsController],
  providers: [ShortUrlsService, ShortUuidService],
})
export class ShortUrlsModule { }
