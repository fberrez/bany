import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
export type TransactionDocument = HydratedDocument<Transaction>;

@Schema()
export class Transaction {
  @Prop({ required: true })
  amount: number;

  @Prop({ required: true })
  type: string;

  @Prop({ required: true })
  date: Date;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  category: string;

  @Prop({ required: true })
  payee: string

  @Prop({ default: false })
  isCleared: boolean;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);
