import { Test, TestingModule } from '@nestjs/testing';
import { ShortUrlsService } from './short_urls.service';
import { CreateShortUrlDto } from './dto/create-short_url.dto';
import { ShortUuidService } from 'src/short-uuid-wrapper/short-uuid-service';

describe('ShortUrlsService', () => {
  let service: ShortUrlsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShortUrlsService],
    }).compile();

    service = module.get<ShortUrlsService>(ShortUrlsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should set the URL hash with a generated UUID', async () => {
    const mockUuid = 'mocked-uuid';
    const createShortUrlDto: CreateShortUrlDto = { url: 'https://example.com', urlHash: mockUuid };
    await service.create(createShortUrlDto);
    expect(createShortUrlDto.urlHash).toBe(mockUuid);
  });


  it('should set the URL hash with a generated UUID', async () => {
    const mockUuid = 'mocked-uuid';
    let createShortUrlDto: CreateShortUrlDto = { url: 'https://example.com', urlHash: mockUuid };
    createShortUrlDto = await service.create(createShortUrlDto);
    expect(createShortUrlDto.urlHash).toBe(mockUuid);
  });

  it('should get the url by hash', async () => {
    const mockUuid = 'mocked-uuid';
    const createShortUrlDto: CreateShortUrlDto = await service.findOne(mockUuid)
    expect(createShortUrlDto.urlHash).toBe(mockUuid);
  });

});
