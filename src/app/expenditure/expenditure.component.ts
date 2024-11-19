import { Component, Input } from '@angular/core';
import { Expenditure } from './expenditure.model';
import { ExpenditureService } from './expenditure.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-expenditure',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './expenditure.component.html',
  styleUrl: './expenditure.component.css',
})
export class ExpenditureComponent {
  @Input() incomeTotal!: number;

  expenditures: Expenditure[] = [];

  constructor(private expenditureService: ExpenditureService) {
    this.expenditures = expenditureService.expenditures;
  }

  deleteExpenditure(expenditure: Expenditure) {
    this.expenditureService.deleteExpenditure(expenditure);
  }

  // calculate the porcentage of the expenditure
  calculatePercentage(expenditure: Expenditure) {
    return expenditure.value / this.incomeTotal;
  }
}
