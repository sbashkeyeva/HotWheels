import { Component, OnInit } from "@angular/core";
import { IPatient } from "src/app/interfaces/interfaces";
import { ProviderService } from "src/app/services/provider.service";

@Component({
  selector: "app-patient",
  templateUrl: "./patient.component.html",
  styleUrls: ["./patient.component.css"]
})
export class PatientComponent implements OnInit {
  patients: IPatient[] = [];
  detailPatient: IPatient = {
    id: 0,
    name: "",
    mobile: "",
    address: ""
  };
  showPatient = false;
  ifUpdatePressed = false;
  constructor(private provider: ProviderService) {}

  ngOnInit() {
    this.provider.getPatients().then(res => {
      this.patients = res;
    });
  }
  updatePressed() {
    this.ifUpdatePressed = true;
  }
  updatePatient(patient: IPatient) {
    this.provider.updatePatient(patient).then(res => {
      console.log(patient.name + " updated");
      this.ifUpdatePressed = false;
    });
  }
  deletePatient(patient: IPatient) {
    this.provider.deletePatient(patient.id).then(res => {
      this.ifUpdatePressed = false;
      this.showPatient = false;
      this.provider.getPatients().then(res => {
        this.patients = res;
      });
    });
  }
  getDetailPatient(patient: IPatient) {
    this.showPatient = true;
    this.ifUpdatePressed = false;
    this.detailPatient.name = patient.name;
    this.detailPatient.id = patient.id;
    this.detailPatient.mobile = patient.mobile;
    this.detailPatient.address = patient.address;
  }
}
