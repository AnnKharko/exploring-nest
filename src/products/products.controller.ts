import {
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  // Req,
  // Res,
} from '@nestjs/common';
// import { Request, Response } from 'express';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductsService } from './products.service';
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  // @Get()
  // getAll(@Req() req: Request, @Res() res: Response) {
  //   res.status(200).end();
  //   return 'getAll';
  // }

  @Get()
  getAll() {
    return this.productsService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): string {
    // return this.productsService.getOneById(id);
    return id;
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Header('Cache-Control', 'none')
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }
}
