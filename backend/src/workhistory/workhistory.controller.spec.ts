import { Test, TestingModule } from '@nestjs/testing';
import { WorkhistoryController } from './workhistory.controller';

describe('WorkhistoryController', () => {
  let controller: WorkhistoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WorkhistoryController],
    }).compile();

    controller = module.get<WorkhistoryController>(WorkhistoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
