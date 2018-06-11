import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrenciesComponent } from './currencies/currencies.component';
import { CurrencyComponent } from './currency/currency.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HttpClientModule}  from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterPipe }from './filter.pipe';
import { FormsModule } from '@angular/forms';
import { OrderByPipe } from './pipe';

@NgModule({
  declarations: [
    AppComponent,
    CurrenciesComponent,
    CurrencyComponent,
    SidebarComponent,
    FilterPipe,
    OrderByPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
