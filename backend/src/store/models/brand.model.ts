import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
  versionKey: '__v',
})
export class Brand {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop()
  description: string;

  @Prop()
  logo: string;
}

export const BrandSchema = SchemaFactory.createForClass(Brand);
