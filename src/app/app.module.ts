import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AddItemComponent } from './add-item/add-item.component';
import { BudgetItemListComponent } from './budget-item-list/budget-item-list.component';
import { BudgetItemCardComponent } from './budget-item-list/budget-item-card/budget-item-card.component';
import { FormsModule } from '@angular/forms';
import { BudgetRemarkComponent } from './budget-item-list/budget-remark/budget-remark.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AddItemComponent,
    BudgetItemListComponent,
    BudgetItemCardComponent,
    BudgetRemarkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
