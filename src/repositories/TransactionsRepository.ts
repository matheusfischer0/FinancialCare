import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}
interface CreateAppointmentDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class TransactionsRepository {
  private transactions: Transaction[];

  private balance: Balance;

  constructor() {
    this.transactions = [];
    this.balance = { income: 0, outcome: 0, total: 0 };
  }

  public all(): Transaction[] {
    // TODO
    return this.transactions;
  }

  public getBalance(): Balance {
    // TODO
    this.balance = { income: 0, outcome: 0, total: 0 };

    this.transactions.forEach(transaction => {
      switch (transaction.type) {
        case 'income':
          this.balance.income += transaction.value;
          break;
        case 'outcome':
          this.balance.outcome += transaction.value;
          break;

        default:
          break;
      }
    });
    this.balance.total = this.balance.income - this.balance.outcome;

    return this.balance;
  }

  public create({ title, value, type }: CreateAppointmentDTO): Transaction {
    // TODO
    const transaction = new Transaction({ title, value, type });
    this.transactions.push(transaction);
    return transaction;
  }
}

export default TransactionsRepository;
