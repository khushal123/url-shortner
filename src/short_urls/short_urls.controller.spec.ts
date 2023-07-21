import { Test, TestingModule } from '@nestjs/testing';
import { ShortUrlsController } from './short_urls.controller';
import { ShortUrlsService } from './short_urls.service';

describe('ShortUrlsController', () => {
  let controller: ShortUrlsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShortUrlsController],
      providers: [ShortUrlsService],
    }).compile();

    controller = module.get<ShortUrlsController>(ShortUrlsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
