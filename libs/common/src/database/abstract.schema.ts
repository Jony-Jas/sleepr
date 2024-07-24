import { Prop, Schema } from '@nestjs/mongoose';
import { SchemaTypes } from 'mongoose';

@Schema()
export class AbstractDocument {
  @Prop({ type: SchemaTypes.ObjectId, auto: true })
  _id: string;
}
