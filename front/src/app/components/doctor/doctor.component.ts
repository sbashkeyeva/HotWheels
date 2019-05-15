import { Component, OnInit } from '@angular/core';
import { IDoctor } from 'src/app/interfaces/interfaces';
import { ProviderService } from 'src/app/services/provider.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  public doctors: IDoctor[] = [];

  constructor(private provider: ProviderService) { }

  ngOnInit() {

     
  }
  getDoctors(){
    this.provider.getDoctors().then(res => {
      this.doctors = res;
  });
  }


}
