import { Injectable } from '@nestjs/common';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';
import { ingredients, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class IngredientsService {
  constructor(private prisma: PrismaService) {}

  async createIngredient(createIngredientDto: CreateIngredientDto) {
    return this.prisma.ingredients.create({
      data: createIngredientDto,
    });
  }

  async ingredient(
    ingredientsWhereUniqueInput: Prisma.ingredientsWhereUniqueInput,
  ) {
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
  }) {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.ingredients.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  update(id: number, updateIngredientDto: UpdateIngredientDto) {
    return this.prisma.ingredients.update({
      where: { id },
      data: updateIngredientDto,
    });
  }

  remove(id: number) {
    return this.prisma.ingredients.delete({
      where: { id },
    });
  }
}
