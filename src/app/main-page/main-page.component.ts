import { BudgetItem } from './../../shared/models/budget-item.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  budgetItems : BudgetItem [] = new Array<BudgetItem>();
  amountTotal:number = 0 ;
  constructor() { }

  ngOnInit(): void {
  }

  addItem (item:BudgetItem){
    this.budgetItems.push(item);
    this.amountTotal += item.amount;
  }

  deleteCard(item:BudgetItem){
    let itemIndex = this.budgetItems.indexOf(item);
    this.budgetItems.splice(itemIndex,1);
    this.amountTotal -=item.amount
  }
}
