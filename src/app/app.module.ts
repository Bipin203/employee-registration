import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';


@NgModule({
  declarations: [
    AppComponent,    
    EmployeeRegistrationComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
