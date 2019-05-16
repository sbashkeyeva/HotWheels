import { Component, OnInit } from "@angular/core";
import { IHospital } from "src/app/interfaces/interfaces";
import { ProviderService } from "src/app/services/provider.service";

@Component({
  selector: "app-hospital",
  templateUrl: "./hospital.component.html",
  styleUrls: ["./hospital.component.css"]
})
export class HospitalComponent implements OnInit {
  public hospitals: IHospital[] = [];
  public hospitalsWithNewField = [];
  public ifAddHospitalPressed = false;
  public createHospital: IHospital = {
    id: 0,
    name: "",
    type: "",
    description: "",
    place: "",
    address: ""
  };
  constructor(private provider: ProviderService) {}

  ngOnInit() {
    this.provider.getHospitals().then(res => {
      this.hospitals = res;
      console.log("this.hospitals", this.hospitals);
      for (let i = 0; i < this.hospitals.length; i++) {
        const updatePressed = false;
        const newObject = {
          ...this.hospitals[i],
          updatePressed: updatePressed
        };
        this.hospitalsWithNewField.push(newObject);
        console.log("suka", this.hospitalsWithNewField);
      }
    });
  }
  showAddHospital() {
    this.ifAddHospitalPressed = true;
  }
  updatePressed(id) {
    for (let i = 0; i < this.hospitalsWithNewField.length; i++) {
      if (id == this.hospitalsWithNewField[i].id) {
        this.hospitalsWithNewField[i].updatePressed = true;
      } else {
        this.hospitalsWithNewField[i].updatePressed = false;
      }
    }
    console.log(this.hospitalsWithNewField);
  }
  updateHospital(hospital) {
    this.provider.updateHospital(hospital).then(res => {
      console.log("updated");
      for (let i = 0; i < this.hospitalsWithNewField.length; i++) {
        this.hospitalsWithNewField[i].updatePressed = false;
      }
    });
  }
  deleteHospital(hospital) {
    this.hospitalsWithNewField = [];
    this.provider.deleteHospital(hospital.id).then(r => {
      this.provider.getHospitals().then(res => {
        this.hospitals = res;
        console.log("this.hospitals", this.hospitals);
        for (let i = 0; i < this.hospitals.length; i++) {
          const updatePressed = false;
          const newObject = {
            ...this.hospitals[i],
            updatePressed: updatePressed
          };
          this.hospitalsWithNewField.push(newObject);
          console.log("suka", this.hospitalsWithNewField);
        }
      });
    });
  }
  createHospitalFunc(hospital: IHospital) {
    this.provider
      .createHospital(
        hospital.name,
        hospital.type,
        hospital.description,
        hospital.place,
        hospital.address
      )
      .then(r => {
        this.hospitalsWithNewField = [];
        this.provider.getHospitals().then(res => {
          this.hospitals = res;
          this.ifAddHospitalPressed = false;
          console.log("this.hospitals", this.hospitals);
          for (let i = 0; i < this.hospitals.length; i++) {
            const updatePressed = false;
            const newObject = {
              ...this.hospitals[i],
              updatePressed: updatePressed
            };
            this.hospitalsWithNewField.push(newObject);
            console.log("suka", this.hospitalsWithNewField);
          }
        });
      });
  }
}
