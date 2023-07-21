import { Test, TestingModule } from '@nestjs/testing';
import { ShortUuidService } from './short-uuid-service';

describe('ShortUuidServiceService', () => {
  let service: ShortUuidService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShortUuidService],
    }).compile();

    service = module.get<ShortUuidService>(ShortUuidService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
