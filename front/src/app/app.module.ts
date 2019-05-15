import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ClassProvider } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {AuthInterceptor} from './AuthInterceptor';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { DoctorComponent } from './components/doctor/doctor.component';
import { PatientComponent } from './components/patient/patient.component';
import { HospitalComponent } from './components/hospital/hospital.component';
import { MedicineComponent } from './components/medicine/medicine.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { ProviderService } from './services/provider.service';
import { MainComponent } from './components/main/main.component';

import { FormsModule }   from '@angular/forms';
 
@NgModule({
  declarations: [
    AppComponent,
    DoctorComponent,
    PatientComponent,
    HospitalComponent,
    MedicineComponent,
    AppointmentComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ ProviderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    } as ClassProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
