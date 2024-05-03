import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { mongo } from 'mongoose';

@Schema({
  timestamps: true,
  versionKey: '__v',
})
export class Product {
  @Prop({ required: true })
  name: string;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
  })
  category: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
