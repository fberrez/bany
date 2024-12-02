import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString, IsDate, IsBoolean } from 'class-validator';

export class CreateTransactionDto {
  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @IsNotEmpty()
  @IsString()
  payee: string;

  @IsString()
  category: string;

  @IsNotEmpty()
  @IsString()
  type: string;

  @IsNotEmpty()
  @Type(() => Date)
  @IsDate()
  date: Date;

  @IsString()
  description: string;

  @IsBoolean()
  isCleared: boolean;
} 
