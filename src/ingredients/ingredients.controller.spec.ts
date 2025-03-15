import { TestBed, Mocked } from '@suites/unit';
import { IngredientsController } from './ingredients.controller';
import { IngredientsService } from './ingredients.service';

describe('IngredientsController', () => {
  let controller: IngredientsController;

  beforeAll(async () => {
    const { unit, unitRef } = await TestBed.solitary(
      IngredientsController,
    ).compile();
    controller = unit;
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
