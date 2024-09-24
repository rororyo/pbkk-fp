import { Test, TestingModule } from '@nestjs/testing';
import { StoreOwnerController } from './store-owner.controller';

describe('StoreOwnerController', () => {
  let controller: StoreOwnerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StoreOwnerController],
    }).compile();

    controller = module.get<StoreOwnerController>(StoreOwnerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
