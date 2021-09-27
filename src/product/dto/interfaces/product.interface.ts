import { Document } from 'mongoose';

export interface Product extends Document {
  readonly name: string;
  readonly description: string;
  readonly image_url: string;
  readonly price: number;
  readonly created_at: Date;
}
