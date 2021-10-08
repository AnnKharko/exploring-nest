import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from './schema/products.schema';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ProductsService {
  constructor(
    private readonly configService: ConfigService,
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

  async getAll(): Promise<Product[]> {
    // this.configService.get('')
    return this.productModel.find().exec();
  }

  async getOneById(id: string): Promise<Product> {
    return this.productModel.findById(id);
  }

  async create(productDto: CreateProductDto): Promise<Product> {
    const newProduct = await this.productModel.create(productDto);
    return newProduct.save();
  }
}
