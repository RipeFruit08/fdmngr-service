import { ApiProperty } from '@nestjs/swagger';
import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Min,
  MinLength,
} from 'class-validator';

export class CreateIngredientDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @ApiProperty({
    description: 'The name of the ingredient',
    example: 'Eggplant',
  })
  name: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'A description of the ingredient',
    example: 'Purple vegetable',
    required: false,
  })
  description?: string;

  @IsInt()
  @Min(0)
  @IsOptional()
  @ApiProperty({
    description: 'A quantity of the ingredient',
    example: '5',
    required: false,
  })
  quantity: number;
}
