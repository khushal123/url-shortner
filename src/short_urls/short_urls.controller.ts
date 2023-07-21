import { Controller, Get, Post, Body, Param, Res } from '@nestjs/common';
import { ShortUrlsService } from './short_urls.service';
import { CreateShortUrlDto } from './dto/create-short_url.dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { ShortUrlEntity } from './entities/short_url.entity';
import { Response } from 'express';

@Controller('links')
@ApiTags("links")
export class ShortUrlsController {
  constructor(private readonly shortUrlsService: ShortUrlsService) { }

  @Post()
  @ApiCreatedResponse({ type: ShortUrlEntity })
  async create(@Body() createShortUrlDto: CreateShortUrlDto) {
    return this.shortUrlsService.create(createShortUrlDto);
  }


  @Get(':urlHash')
  @ApiCreatedResponse({ type: ShortUrlEntity })
  async findOne(@Param('urlHash') urlHash: string, @Res() response: Response) {
    try {
      const shortUrl = await this.shortUrlsService.findOne(urlHash);
      return response.status(302).header("Location", shortUrl.url).end()
    } catch (error) {
      console.error(error)
      return error
    }
  }

  @Get()
  @ApiCreatedResponse({ type: [ShortUrlEntity] })
  async findAll() {
    return this.shortUrlsService.findAll();
  }

}
