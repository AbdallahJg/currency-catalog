import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrenciesComponent } from './currencies/currencies.component';
import { CurrencyComponent } from './currency/currency.component';
const routes: Routes = [
{
    path: '',
    component: CurrenciesComponent
  },
{
    path: 'currency/:id',
    component: CurrencyComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
