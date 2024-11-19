import { Injectable } from '@angular/core';
import { Expenditure } from './expenditure.model';

@Injectable({
  providedIn: 'root',
})
export class ExpenditureService {
  expenditures: Expenditure[] = [
    new Expenditure('Rent', 1000),
    new Expenditure('Food', 300),
    new Expenditure('Transport', 200),
  ];

  constructor() {}

  deleteExpenditure(expenditure: Expenditure) {
    const index: number = this.expenditures.indexOf(expenditure);
    this.expenditures.splice(index, 1);
  }
}
