import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Transaction } from './transactions.schema';

@Injectable()
export class TransactionService {
  constructor(
    @InjectModel(Transaction.name)
    private transactionModel: Model<Transaction>,
  ) {}

  getTransactions() {
    return this.transactionModel.find();
  }

  createTransaction(transaction: Transaction) {
    return this.transactionModel.create(transaction);
  }
}
