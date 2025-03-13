import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateIngredientDto {
  @ApiProperty({
    description: 'The name of the ingredient',
    example: 'Eggplant',
  })
  readonly name: string;

  @ApiProperty({
    description: 'A description of the ingredient',
    example: 'Purple vegetable',
  })
  readonly description?: string;

  @ApiProperty({
    description: 'A quantity of the ingredient',
    example: '5',
  })
  readonly quantity: number;
}
