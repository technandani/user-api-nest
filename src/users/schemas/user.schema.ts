import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true })  // Adds createdAt/updatedAt
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, min: 0 })
  age: number;

  @Prop({ required: true, enum: ['admin', 'user'] })
  role: string;
}

export const UserSchema = SchemaFactory.createForClass(User);