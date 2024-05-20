import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Brand } from './models/brand.model';
import { Model } from 'mongoose';
import { Category } from './models/category.model';
import { Product } from './models/product.model';

@Injectable()
export class StoreService {
  constructor(
    @InjectModel(Brand.name) private readonly brandModel: Model<Brand>,
    @InjectModel(Category.name) private readonly categoryModel: Model<Category>,
    @InjectModel(Product.name) private readonly productModel: Model<Product>,
  ) {}

  // Implement the CRUD operations for the Brand model
  findAllBrands() {
    return this.brandModel.find().exec();
  }
  createBrand(createBrandDto) {
    const brand = new this.brandModel();
    const saved = brand.save();

    return saved;
  }

  async updateBrand(id: string, updateBrandDto) {
    const brand = await this.brandModel.findByIdAndUpdate(updateBrandDto);
    if (!brand) {
      throw new HttpException('Brand Not Found', HttpStatus.NOT_FOUND);
    }
    return brand;
  }

  async getBrandById(id: string) {
    const brand = await this.brandModel.findById(id);
    if (!brand) {
      throw new HttpException('Brand Not Found', HttpStatus.NOT_FOUND);
    }
    return brand;
  }

  async deleteBrand(id: string) {
    const brand = await this.brandModel.findById(id);
    if (!brand) {
      throw new HttpException('Brand Not Found', HttpStatus.NOT_FOUND);
    }
    return brand;
  }
}
