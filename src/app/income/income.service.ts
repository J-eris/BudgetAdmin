import { Injectable } from '@angular/core';
import { Income } from './income.model';

@Injectable({
  providedIn: 'root',
})
export class IncomeService {
  incomes: Income[] = [
    new Income('Salary', 5000),
    new Income('Freelance', 1000),
    new Income('Dividends', 300),
  ];

  constructor() {}

  deleteIncome(income: Income) {
    const index = this.incomes.indexOf(income);
    this.incomes.splice(index, 1);
  }
}
