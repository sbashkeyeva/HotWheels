import { Placeholder } from "@angular/compiler/src/i18n/i18n_ast";

export interface IHospital{
    id: number,
    name: string,
    type: string, 
    description: string,
    place: string,
    address: string
}

export interface IDoctor{
    id: number,
    name: string,
    mobile: string,
    address: string
}

export interface IPatient{
    id: number,
    name: string,
    mobile: string,
    address: string
}

export interface IMedicine{
    id: number,
    name: string,
    company: string,
    cost: number,
    type: string,
    description: string
}

export interface IAppointment{
    id: number,
    name: string,
    type: string,
    description: string,
    patient: IPatient,
    doctor: IDoctor
}
export interface IAuthResponse {
    token: string;
    is_staff: boolean;
    username: string;
  }