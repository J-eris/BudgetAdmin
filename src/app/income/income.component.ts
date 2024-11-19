import { Component } from '@angular/core';
import { Income } from './income.model';
import { IncomeService } from './income.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-income',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './income.component.html',
  styleUrl: './income.component.css',
})
export class IncomeComponent {
  incomes: Income[] = [];

  constructor(private incomeService: IncomeService) {
    this.incomes = incomeService.incomes;
  }

  deleteIncome(income: Income) {
    this.incomeService.deleteIncome(income);
  }
}
