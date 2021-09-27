import { Schema } from 'mongoose';

export const ProductSchema = new Schema({
  name: String,
  description: String,
  image_url: String,
  price: Number,
  create_at: {
    type: Date,
    default: Date.now,
  },
});
