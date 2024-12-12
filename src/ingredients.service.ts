import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { ingredients, Prisma } from '@prisma/client';

@Injectable()
export class IngredientsService {
  constructor(private prisma: PrismaService) {}

  async ingredient(
    ingredientsWhereUniqueInput: Prisma.ingredientsWhereUniqueInput,
  ): Promise<ingredients | null> {
    return this.prisma.ingredients.findUnique({
      where: ingredientsWhereUniqueInput,
    });
  }

  async ingredients(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ingredientsWhereUniqueInput;
    where?: Prisma.ingredientsWhereInput;
    orderBy?: Prisma.ingredientsOrderByWithRelationInput;
  }): Promise<ingredients[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.ingredients.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async ingredientsPagination(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.ingredientsWhereUniqueInput;
    where?: Prisma.ingredientsWhereInput;
    orderBy?: Prisma.ingredientsOrderByWithRelationInput;
  }): Promise<{ data: ingredients[]; rowCount: number }> {
    const { skip, take, cursor, where, orderBy } = params;
    const rowCount = await this.prisma.ingredients.count();
    const ingredients = await this.prisma.ingredients.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy: { name: 'asc' },
    });
    await this.delay(1000);
    return { data: ingredients, rowCount: rowCount };
  }

  async createIngredient(
    data: Prisma.ingredientsCreateInput,
  ): Promise<ingredients> {
    return this.prisma.ingredients.create({
      data,
    });
  }

  async updateUser(params: {
    where: Prisma.ingredientsWhereUniqueInput;
    data: Prisma.ingredientsUpdateInput;
  }): Promise<ingredients> {
    const { where, data } = params;
    return this.prisma.ingredients.update({
      data,
      where,
    });
  }

  async deleteUser(
    where: Prisma.ingredientsWhereUniqueInput,
  ): Promise<ingredients> {
    return this.prisma.ingredients.delete({
      where,
    });
  }
}
