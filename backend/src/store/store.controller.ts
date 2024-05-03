import { Controller } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Brand } from './models/brand.model';
import { Model } from 'mongoose';
import { Category } from './models/category.model';
import { Product } from './models/product.model';

@Controller('store')
export class StoreController {
  constructor(
    @InjectModel(Brand.name) private readonly brandModel: Model<Brand>,
    @InjectModel(Category.name) private readonly categoryModel: Model<Category>,
    @InjectModel(Product.name) private readonly productModel: Model<Product>,
  ) {}

  // Implement the CRUD operations for the Brand model
  findAllBrands() {
    return this.brandModel.find().exec();
  }
}
