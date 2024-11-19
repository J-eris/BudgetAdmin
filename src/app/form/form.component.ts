import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IncomeService } from '../income/income.service';
import { ExpenditureService } from '../expenditure/expenditure.service';
import { Income } from '../income/income.model';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  type: string = 'incomeOperation';
  descriptionInput: string | null = '';
  valueInput: number | null = null;

  constructor(
    private incomeService: IncomeService,
    private expenditureService: ExpenditureService
  ) {}

  changeType(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.type = target.value;
    // console.log(this.type);
  }

  addValue() {
    if (this.descriptionInput != null && this.valueInput != null) {
      if (this.type === 'incomeOperation') {
        this.incomeService.incomes.push(
          new Income(this.descriptionInput, this.valueInput)
        );
      } else {
        this.expenditureService.expenditures.push(
          new Income(this.descriptionInput, this.valueInput)
        );
      }
    } else {
      console.log('Introduce un valor y una descripción válidos');
    }
    this.descriptionInput = '';
    this.valueInput = null;
  }
}
