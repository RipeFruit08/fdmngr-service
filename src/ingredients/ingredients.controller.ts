import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { IngredientsService } from './ingredients.service';
import { CreateIngredientDto } from './dto/create-ingredient.dto';
import { UpdateIngredientDto } from './dto/update-ingredient.dto';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { IngredientEntity } from './entities/ingredient.entity';

@Controller('ingredients')
@ApiTags('ingredients')
export class IngredientsController {
  constructor(private readonly ingredientsService: IngredientsService) {}

  @Post()
  @ApiOperation({ summary: 'Creates a new ingredient' })
  @ApiCreatedResponse({ type: IngredientEntity })
  async create(@Body() createIngredientDto: CreateIngredientDto) {
    return this.ingredientsService.createIngredient(createIngredientDto);
  }

  @Get()
  @ApiOperation({ summary: 'Fetches all ingredients' })
  @ApiOkResponse({ type: IngredientEntity, isArray: true })
  async getAllIngredients() {
    return this.ingredientsService.ingredients({});
  }

  @Get(':id')
  @ApiOperation({ summary: 'Fetches a single ingredient' })
  @ApiOkResponse({ type: IngredientEntity })
  async getIngredientById(@Param('id') id: string) {
    return this.ingredientsService.ingredient({ id: Number(id) });
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Updates an ingredient' })
  @ApiOkResponse({ type: IngredientEntity })
  update(
    @Param('id') id: string,
    @Body() updateIngredientDto: UpdateIngredientDto,
  ) {
    return this.ingredientsService.update(+id, updateIngredientDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletes an ingredient' })
  @ApiOkResponse({ type: IngredientEntity })
  remove(@Param('id') id: string) {
    return this.ingredientsService.remove(+id);
  }
}
