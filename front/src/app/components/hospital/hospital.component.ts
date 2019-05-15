import { Component, OnInit } from '@angular/core';
import { IHospital } from 'src/app/interfaces/interfaces';
import { ProviderService } from 'src/app/services/provider.service';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})
export class HospitalComponent implements OnInit {

  public hospitals: IHospital[] = [];

  constructor(private provider: ProviderService) { }

  ngOnInit() {
   
  }
  

  getHospitals(){
    this.provider.getHospitals().then(res => {
      this.hospitals = res;
    });
  }
}
