import { Component, OnInit } from "@angular/core";
import { ProviderService } from "src/app/services/provider.service";
import { IAppointment } from "src/app/interfaces/interfaces";

@Component({
  selector: "app-appointment",
  templateUrl: "./appointment.component.html",
  styleUrls: ["./appointment.component.css"]
})
export class AppointmentComponent implements OnInit {
  appointments: IAppointment[] = [];

  patients = [];
  newAppointements = [];

  constructor(private provider: ProviderService) {}

  ngOnInit() {
    this.provider.getAppointments().then(res => {
      this.appointments = res;
      for (let i = 0; i < this.appointments.length; i++) {
        this.provider.getPatient(this.appointments[i].patient).then(res => {
          this.provider.getDoctor(this.appointments[i].doctor).then(r => {
            console.log(res);
            const newObject = {
              patientData: { ...res },
              doctorData: { ...r },
              ...this.appointments[i]
            };
            console.log(newObject);
            this.newAppointements.push(newObject);
          });
        });
      }
    });
  }
  getAppointments() {}
}
