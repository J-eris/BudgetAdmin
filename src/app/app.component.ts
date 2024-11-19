import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FormComponent } from './form/form.component';
import { IncomeComponent } from './income/income.component';
import { ExpenditureComponent } from './expenditure/expenditure.component';
import { Income } from './income/income.model';
import { Expenditure } from './expenditure/expenditure.model';
import { IncomeService } from './income/income.service';
import { ExpenditureService } from './expenditure/expenditure.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FormComponent,
    IncomeComponent,
    ExpenditureComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  incomes: Income[] = [];
  expenditures: Expenditure[] = [];

  constructor(
    private incomeService: IncomeService,
    private expenditureService: ExpenditureService
  ) {
    this.incomes = this.incomeService.incomes;
    this.expenditures = this.expenditureService.expenditures;
  }

  getIncomeTotal() {
    let incomeTotal = 0;

    this.incomes.forEach((income) => {
      incomeTotal += income.value;
    });
    return incomeTotal;
  }

  getExpenditureTotal() {
    let expenditureTotal = 0;

    this.expenditures.forEach((expenditure) => {
      expenditureTotal += expenditure.value;
    });
    return expenditureTotal;
  }

  getPorcentageTotal() {
    return this.getExpenditureTotal() / this.getIncomeTotal();
  }

  getBalanceTotal() {
    return this.getIncomeTotal() - this.getExpenditureTotal();
  }
}
