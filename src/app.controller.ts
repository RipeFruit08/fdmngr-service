import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { IngredientsService } from './ingredients.service';
import { ingredients as IngredientModel } from '@prisma/client';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly ingredientService: IngredientsService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('ingredients')
  async getAllIngredients(): Promise<IngredientModel[]> {
    return this.ingredientService.ingredients({});
  }

  @Get('ingredients/pagination')
  async getIngredientsPagination(
    @Query('page') page: number,
    @Query('pageSize') pageSize: number,
  ): Promise<{ data: IngredientModel[]; rowCount: number }> {
    console.log('here', page, pageSize);
    return this.ingredientService.ingredientsPagination({
      skip: page * pageSize,
      take: Number(pageSize),
    });
  }

  @Post('ingredient')
  async createIngredient(
    @Body()
    ingredientData: {
      name: string;
      description?: string;
      quantity?: number;
    },
  ): Promise<IngredientModel> {
    const { name, description, quantity } = ingredientData;
    return this.ingredientService.createIngredient({
      name,
      description,
      quantity,
    });
  }
}
