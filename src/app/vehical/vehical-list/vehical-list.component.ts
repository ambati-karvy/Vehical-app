import { Component, OnInit } from '@angular/core';
import { VehicalService } from 'src/app/services/vehical.service';
import { Vehical } from 'src/app/model/vehical';


@Component({
  selector: 'app-vehical-list',
  templateUrl: './vehical-list.component.html'
})
export class VehicalListComponent implements OnInit {

  vehicals : Vehical[];
  constructor(private vehicalService: VehicalService) { }

  ngOnInit() {
    this.vehicalService.vehicalChanged.subscribe(
      (vehicals: Vehical[]) => {
        this.vehicals = vehicals
      }
    )
    this.vehicals = this.vehicalService.getVehicals();
  }
}
