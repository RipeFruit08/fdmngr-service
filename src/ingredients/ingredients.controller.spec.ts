import { TestBed, Mocked } from '@suites/unit';
import { IngredientsController } from './ingredients.controller';
import { IngredientsService } from './ingredients.service';
import { IngredientEntity } from './entities/ingredient.entity';

describe('IngredientsController', () => {
  let controller: IngredientsController;
  let service: Mocked<IngredientsService>;

  beforeAll(async () => {
    const { unit, unitRef } = await TestBed.solitary(
      IngredientsController,
    ).compile();
    controller = unit;
    service = unitRef.get(IngredientsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create new ingredient', async () => {
    const createIngredient: IngredientEntity = {
      id: 1,
      name: 'ingredient',
      description: 'test ingredient',
      quantity: 2,
    };
    service.createIngredient.mockResolvedValue(createIngredient);
    const result = await controller.create({
      name: 'ingredient',
      description: 'test ingredient',
      quantity: 2,
    });
    expect(result).toBe(createIngredient);
  });

  it('should get all ingredients', async () => {
    const ingredients: IngredientEntity[] = [
      {
        id: 1,
        name: 'ingredient',
        description: 'test ingredient',
        quantity: 2,
      },
      {
        id: 2,
        name: 'ingredient2',
        description: null,
        quantity: 8,
      },
    ];
    service.ingredients.mockResolvedValue(ingredients);
    const result = await controller.getAllIngredients();
    expect(result).toBe(ingredients);
  });

  it('should get ingredient by id', async () => {
    const fetchedIngredient: IngredientEntity = {
      id: 1,
      name: 'ingredient',
      description: 'test ingredient',
      quantity: 2,
    };
    service.ingredient.mockResolvedValue(fetchedIngredient);
    const result = await controller.getIngredientById('1');
    expect(result).toBe(fetchedIngredient);
  });

  it('should update ingredient', async () => {
    const updatedIngredient: IngredientEntity = {
      id: 1,
      name: 'new name',
      description: 'desc',
      quantity: 2,
    };
    service.update.mockResolvedValue(updatedIngredient);
    const reuslt = await controller.update('1', { name: 'new name' });
    expect(reuslt).toBe(updatedIngredient);
  });

  it('should delete ingredient', async () => {
    const deletedIngredient: IngredientEntity = {
      id: 1,
      name: 'ingredient',
      description: 'test ingredient',
      quantity: 2,
    };
    service.remove.mockResolvedValue(deletedIngredient);
    const result = await controller.remove('1');
    expect(result).toBe(deletedIngredient);
  });
});
