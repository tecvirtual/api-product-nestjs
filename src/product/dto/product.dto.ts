export class CreateProductDTO {
  readonly name: string;
  readonly description: string;
  readonly image_url: string;
  readonly price: number;
  readonly created_at: Date;
}
