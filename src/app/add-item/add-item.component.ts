import { BudgetItem } from './../../shared/models/budget-item.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {


  @Input() item:BudgetItem = new BudgetItem("",null);
  @Output()formSubmit :EventEmitter <BudgetItem> = new EventEmitter<BudgetItem>()

  constructor() { }

  ngOnInit(): void {
  }
 
  onSubmit(form:NgForm){
    this.formSubmit.emit(form.value);
    form.reset();
  }
}
