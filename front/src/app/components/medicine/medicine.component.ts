import { Component, OnInit } from '@angular/core';
import { IMedicine } from 'src/app/interfaces/interfaces';
import { ProviderService } from 'src/app/services/provider.service';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class MedicineComponent implements OnInit {
  medicines: IMedicine[] = [];

  constructor(private provider: ProviderService) { }

  ngOnInit() {
   
  }

  getMedicines(){
    this.provider.getMedicines().then(res => {
      this.medicines = res;
 });
  }

}
