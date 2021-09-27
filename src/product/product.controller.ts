import {
  Controller,
  Post,
  Res,
  HttpStatus,
  Body,
  Get,
  Param,
  NotFoundException,
  Delete,
  Put,
} from '@nestjs/common';
import { CreateProductDTO } from './dto/product.dto';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post('/create')
  async createPost(@Res() res, @Body() createProductDTO: CreateProductDTO) {
    const product = await this.productService.create(createProductDTO);

    return res.status(HttpStatus.OK).json({
      message: 'Successfully created',
      data: product,
    });
  }

  @Get('/')
  async getProducts(@Res() res) {
    const products = await this.productService.index();
    return res.status(HttpStatus.OK).json({
      data: products,
    });
  }

  @Get('/:id')
  async getProduct(@Res() res, @Param('id') id) {
    const product = await this.productService.show(id);
    if (!product) throw new NotFoundException('Product Does not exists');
    return res.status(HttpStatus.OK).json(product);
  }

  @Delete('/:id')
  async deleteProduct(@Res() res, @Param('id') id) {
    const product = await this.productService.destroy(id);
    if (!product) throw new NotFoundException('Product Does not exists');
    return res.status(HttpStatus.OK).json({
      message: 'Deleted Succesfully',
      data: product,
    });
  }

  @Put('/:id')
  async updateProduct(
    @Res() res,
    @Body() createProductDTO: CreateProductDTO,
    @Param('id') id,
  ) {
    const product = await this.productService.update(id, createProductDTO);
    if (!product) throw new NotFoundException('Product Does not exists');
    return res.status(HttpStatus.OK).json({
      message: 'Updated Succesfully',
      data: product,
    });
  }
}
