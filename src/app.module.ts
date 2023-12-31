import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ShortUrlsModule } from './short_urls/short_urls.module';
import { ShortUuidWrapperModule } from './short-uuid-wrapper/short-uuid-wrapper.module';
import { ShortUuidService } from './short-uuid-wrapper/short-uuid-service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [PrismaModule, ShortUrlsModule, ShortUuidWrapperModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService, ShortUuidService],
})
export class AppModule {}
