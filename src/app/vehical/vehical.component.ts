import { Component, OnInit } from '@angular/core';
import { Vehical } from '../model/vehical';
import { VehicalService } from '../services/vehical.service'

@Component({
  selector: 'app-vehical',
  templateUrl: './vehical.component.html'
})
export class VehicalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
