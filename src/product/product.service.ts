import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './dto/interfaces/product.interface';
import { CreateProductDTO } from './dto/product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}

  async index(): Promise<Product[]> {
    const products = await this.productModel.find();
    return products;
  }

  async show(id: string): Promise<Product> {
    const product = await this.productModel.findById(id);
    return product;
  }

  async create(createProductDTO: CreateProductDTO): Promise<Product> {
    const product = new this.productModel(createProductDTO);
    return await product.save();
  }

  async update(
    id: string,
    createProductDTO: CreateProductDTO,
  ): Promise<Product> {
    const product = await this.productModel.findByIdAndUpdate(
      id,
      createProductDTO,
      { new: true },
    );
    return product;
  }

  async destroy(id: string): Promise<Product> {
    const deletedProduct = await this.productModel.findByIdAndDelete(id);
    return deletedProduct;
  }
}
