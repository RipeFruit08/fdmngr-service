import { ApiProperty } from '@nestjs/swagger';
import { ingredients } from '@prisma/client';

export class IngredientEntity implements ingredients {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty({ required: false, nullable: true })
  description: string;

  @ApiProperty()
  quantity: number;
}
