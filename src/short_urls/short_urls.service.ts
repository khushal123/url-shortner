import { Injectable } from '@nestjs/common';
import { CreateShortUrlDto } from './dto/create-short_url.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ShortUuidService } from 'src/short-uuid-wrapper/short-uuid-service';

@Injectable()
export class ShortUrlsService {
  constructor(private prismaService: PrismaService, private uuidService: ShortUuidService) { }

  async create(createShortUrlDto: CreateShortUrlDto) {
    createShortUrlDto.urlHash = this.uuidService.get()
    return this.prismaService.shortUrl.create({
      data: createShortUrlDto,
    });
  }

  async findOne(urlHash: string) {
    return this.prismaService.shortUrl.findUnique({ where: { urlHash } })
  }

  async findAll() {
    return this.prismaService.shortUrl.findMany()
  }

}
