import { Injectable } from "@angular/core";
import { MainService } from "./main.service";

import {
  IDoctor,
  IPatient,
  IHospital,
  IAppointment,
  IMedicine,
  IAuthResponse
} from "../interfaces/interfaces";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ProviderService extends MainService {
  public isStaff: boolean = null;

  constructor(http: HttpClient) {
    super(http);
    this.isStaff = false;
  }
  public result: string = "";

  getDoctors(): Promise<IDoctor[]> {
    if (this.isStaff) this.result = "doctors";
    else this.result = "vdoctors";
    return this.get(`http://localhost:8000/api/doctors/`, {});
  }

  getDoctor(id: number): Promise<IDoctor> {
    return this.get(`http://localhost:8000/api/doctors/${id}`, {});
  }

  createDoctor(name: string, mobile: string, address: string): Promise<any> {
    return this.post(`http://localhost:8000/api/doctors/`, {
      name,
      mobile,
      address
    });
  }

  deleteDoctor(id: number): Promise<any> {
    return this.delet(`http://localhost:8000/api/doctors/${id}`, {});
  }

  updateDoctor(doctor: IDoctor): Promise<IDoctor> {
    return this.put(`http://localhost:8000/api/doctors/${doctor.id}`, {
      name: doctor.name,
      mobile: doctor.mobile,
      address: doctor.address
    });
  }

  getPatients(): Promise<IPatient[]> {
    if (this.isStaff) this.result = "patients";
    else this.result = "vpatients";
    return this.get(`http://localhost:8000/api/patients/`, {});
  }

  getPatient(id: number): Promise<IPatient> {
    return this.get(`http://localhost:8000/api/patients/${id}`, {});
  }

  createPatient(name: string, mobile: string, address: string): Promise<any> {
    return this.post(`http://localhost:8000/api/patients/`, {
      name,
      mobile,
      address
    });
  }

  deletePatient(id: number): Promise<any> {
    return this.delet(`http://localhost:8000/api/patients/${id}`, {});
  }

  updatePatient(patient: IPatient): Promise<IPatient> {
    return this.put(`http://localhost:8000/api/patients/${patient.id}/`, {
      name: patient.name,
      mobile: patient.mobile,
      address: patient.address
    });
  }

  getHospitals(): Promise<IHospital[]> {
    if (this.isStaff) this.result = "hospitals";
    else this.result = "vhospitals";
    return this.get(`http://localhost:8000/api/hospitals/`, {});
  }

  getHospital(id: number): Promise<IHospital> {
    return this.get(`http://localhost:8000/api/hospitals/${id}`, {});
  }

  createHospital(
    name: string,
    type: string,
    description: string,
    place: string,
    address: string
  ): Promise<any> {
    return this.post(`http://localhost:8000/api/hospitals/`, {
      name,
      type,
      address,
      place,
      description
    });
  }

  deleteHospital(id: number): Promise<any> {
    return this.delet(`http://localhost:8000/api/hospitals/${id}`, {});
  }

  updateHospital(hospital: IHospital): Promise<IHospital> {
    return this.put(`http://localhost:8000/api/hospitals/${hospital.id}/`, {
      name: hospital.name,
      address: hospital.address,
      type: hospital.type,
      place: hospital.place,
      description: hospital.description
    });
  }

  getAppointments(): Promise<IAppointment[]> {
    if (this.isStaff) this.result = "appointments";
    else this.result = "vappointments";
    return this.get(`http://localhost:8000/api/appointments/`, {});
  }

  getAppointment(id: number): Promise<IAppointment> {
    return this.get(`http://localhost:8000/api/appointments/${id}`, {});
  }

  createAppointment(
    name: string,
    type: string,
    description: string,
    doctor: IDoctor,
    patient: IPatient
  ): Promise<any> {
    return this.post(`http://localhost:8000/api/appointments/`, {
      name,
      type,
      doctor,
      patient,
      description
    });
  }

  deleteAppointment(id: number): Promise<any> {
    return this.delet(`http://localhost:8000/api/appointments/${id}`, {});
  }

  updateAppointment(appointment: IAppointment): Promise<IAppointment> {
    return this.put(
      `http://localhost:8000/api/appointments/${appointment.id}`,
      {
        name: appointment.name,
        type: appointment.type,
        description: appointment.description,
        doctor: appointment.doctor,
        patient: appointment.patient
      }
    );
  }

  getMedicines(): Promise<IMedicine[]> {
    return this.get(`http://localhost:8000/api/vmedicines/`, {});
  }

  getMedicine(id: number): Promise<IMedicine> {
    return this.get(`http://localhost:8000/api/medicines/${id}`, {});
  }

  createMedicine(
    name: string,
    company: string,
    cost: number,
    type: string,
    description: string
  ): Promise<any> {
    return this.post(`http://localhost:8000/api/medicines/`, {
      name,
      company,
      cost,
      type,
      description
    });
  }

  deleteMedicine(id: number): Promise<any> {
    return this.delet(`http://localhost:8000/api/medicines/${id}`, {});
  }

  updateMedicine(medicine: IMedicine): Promise<IMedicine> {
    return this.put(`http://localhost:8000/api/medicines/${medicine.id}`, {
      name: medicine.name,
      company: medicine.company,
      cost: medicine.cost,
      type: medicine.type,
      description: medicine.description
    });
  }

  auth(login: any, password: any): Promise<IAuthResponse> {
    return this.post("http://localhost:8000/api/login/", {
      username: login,
      password: password
    });
  }

  logout(): Promise<any> {
    return this.post("http://localhost:8000/api/logout/", {});
  }

  signup(username: string, email: string, password: string): Promise<any> {
    return this.post("http://localhost:8000/api/signup/", {
      username,
      email,
      password
    });
  }
}
