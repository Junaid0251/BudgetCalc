import { BudgetItem } from './../../../shared/models/budget-item.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-budget-remark',
  templateUrl: './budget-remark.component.html',
  styleUrls: ['./budget-remark.component.scss']
})
export class BudgetRemarkComponent implements OnInit {

  @Input() item:BudgetItem;

  constructor() { }

  ngOnInit(): void {
  }

}
