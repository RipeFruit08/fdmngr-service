import { IngredientsService } from './ingredients.service';
import { PrismaService } from 'src/prisma.service';
import { TestBed, Mocked } from '@suites/unit';
import { IngredientEntity } from './entities/ingredient.entity';

describe('IngredientsService Unit Test', () => {
  let service: IngredientsService;
  let prismaService: Mocked<PrismaService>;

  beforeAll(async () => {
    const { unit, unitRef } =
      await TestBed.solitary(IngredientsService).compile();
    service = unit;
    prismaService = unitRef.get(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create ingredient', async () => {
    const createIngredient: IngredientEntity = {
      id: 1,
      name: 'ingredient',
      description: 'test ingredient',
      quantity: 2,
    };
    prismaService.ingredients.create.mockResolvedValue(createIngredient);
    const result = await service.createIngredient({
      name: 'ingredient',
      description: 'test ingredient',
      quantity: 2,
    });
    expect(result).toEqual(createIngredient);
  });

  it('should fetch ingredient', async () => {
    const fetchedIngredient: IngredientEntity = {
      id: 1,
      name: 'ingredient',
      description: 'test ingredient',
      quantity: 2,
    };
    prismaService.ingredients.findUnique.mockResolvedValue(fetchedIngredient);
    const result = await service.ingredient({ id: 1 });
    expect(result).toEqual(fetchedIngredient);
  });
  it('should fetch all ingredients', async () => {
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
    prismaService.ingredients.findMany.mockResolvedValue(ingredients);
    const results = await service.ingredients({});
    expect(results).toEqual(ingredients);
  });

  it('should update an ingredient', async () => {
    const updatedIngredient: IngredientEntity = {
      id: 1,
      name: 'new name',
      description: 'desc',
      quantity: 2,
    };
    prismaService.ingredients.update.mockResolvedValue(updatedIngredient);
    const result = await service.update(1, { name: 'new name' });
    expect(result).toEqual(updatedIngredient);
  });

  it('should delete an ingredient', async () => {
    const deletedIngredient: IngredientEntity = {
      id: 1,
      name: 'ingredient',
      description: 'test ingredient',
      quantity: 2,
    };
    prismaService.ingredients.delete.mockResolvedValue(deletedIngredient);
    const result = await service.remove(1);
    expect(result).toEqual(deletedIngredient);
  });
});
