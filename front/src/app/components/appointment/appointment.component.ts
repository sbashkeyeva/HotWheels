import { Component, OnInit } from '@angular/core';
import { ProviderService } from 'src/app/services/provider.service';
import { IAppointment } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  appointments: IAppointment[] = [];

  constructor(private provider: ProviderService) { }

  ngOnInit() {

  }
  getAppointments(){
    this.provider.getAppointments().then(res => {
      this.appointments = res;
  });
  }
}
