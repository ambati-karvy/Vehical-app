import { Component, OnInit } from '@angular/core';
import { VehicalService } from 'src/app/services/vehical.service';
import { Vehical } from 'src/app/model/vehical';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-vehical-view',
  templateUrl: './vehical-view.component.html'
})
export class VehicalViewComponent implements OnInit {
  id: number;
  vehical : Vehical
  constructor(private vehicalService: VehicalService, public route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.vehical = this.vehicalService.getVehicalById(this.id);
    })
    
    //console.log(this.vehical);
  }

}
