import { Component, OnInit } from '@angular/core';
import { IPatient } from 'src/app/interfaces/interfaces';
import { ProviderService } from 'src/app/services/provider.service';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  patients: IPatient[] = [];

  constructor(private provider: ProviderService) { }

  ngOnInit() {
   
  }
  
  getPatients(){
    this.provider.getPatients().then(res => {
      this.patients = res;
   });
  }
}
