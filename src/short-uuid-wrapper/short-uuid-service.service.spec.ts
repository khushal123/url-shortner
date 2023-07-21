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

  // Test case: Check if the service is defined
  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should generate a short UUID as a string', () => {
    const generatedUuid = service.get();
    expect(generatedUuid).toBeDefined()
  });
});
