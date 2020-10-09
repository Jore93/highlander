import { Test, TestingModule } from '@nestjs/testing';
import { WorkhistoryService } from './workhistory.service';

describe('WorkhistoryService', () => {
  let service: WorkhistoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkhistoryService],
    }).compile();

    service = module.get<WorkhistoryService>(WorkhistoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
