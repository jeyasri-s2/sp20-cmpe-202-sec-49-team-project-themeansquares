import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { EmployeeHomePageComponent } from './employee-home-page/employee-home-page.component';
import { AdminHomePageComponent } from './admin-home-page/admin-home-page.component';
import { VehiclePageComponent } from './vehicle-page/vehicle-page.component';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { HomePageComponent } from './home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';



//import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterPageComponent,
    EmployeeHomePageComponent,
    AdminHomePageComponent,
    VehiclePageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    TooltipModule.forRoot(),
    BrowserAnimationsModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatButtonToggleModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    HttpClientModule


  ],
  providers: [MatDatepickerModule,MatNativeDateModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
