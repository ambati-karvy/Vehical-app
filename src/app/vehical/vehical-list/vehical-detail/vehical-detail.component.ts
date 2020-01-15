import { Component, OnInit, Input } from '@angular/core';
import { Vehical } from 'src/app/model/vehical';

@Component({
  selector: 'app-vehical-detail',
  templateUrl: './vehical-detail.component.html'
})
export class VehicalDetailComponent {
  @Input() vehical : Vehical;
  @Input() i : number;
}
