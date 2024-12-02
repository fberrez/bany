import { Controller, Get, Post, Body, ValidationPipe, UsePipes } from '@nestjs/common';
import { TransactionService } from './transactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';

@Controller('transactions')
export class TransactionController {
  constructor(private transactionService: TransactionService) {}

  @Get()
  getTransactions() {
    return this.transactionService.getTransactions();
  }

  @Post()
  @UsePipes(new ValidationPipe())
  createTransaction(@Body() transaction: CreateTransactionDto) {
    return this.transactionService.createTransaction(transaction);
  }
}
