import { Test, TestingModule } from '@nestjs/testing';
import { FormatRdvService } from './format-rdv.service';

describe('FormatRdvService', () => {
  let service: FormatRdvService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FormatRdvService],
    }).compile();

    service = module.get<FormatRdvService>(FormatRdvService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
