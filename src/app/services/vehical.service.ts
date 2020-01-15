import { Injectable } from '@angular/core';
import { Vehical } from '../model/vehical';
import { Properties } from '../model/properties';
import { Subject } from 'rxjs';

@Injectable()
export class VehicalService {

  vehicalChanged = new Subject<Vehical[]>();

  constructor() { }
  vehicals: Vehical[] = [
    new Vehical('Truck','white color Truck',"https://accesslink.njtransit.com/FILE/Apps/Paratransit/CustomerInfo/images/Bus_NYC_skyline.jpg", 
     new Properties('Truck', 'white')),
    new Vehical('Truck','white color Truck',"https://upload.wikimedia.org/wikipedia/commons/5/5b/Coach_USA_MCI.jpg", 
    new Properties('Truck', 'white')),
    // new Vehical('Truck','white color Truck',"https://upload.wikimedia.org/wikipedia/commons/5/5b/Coach_USA_MCI.jpg", 
    // new Properties('Truck', 'white')),
    // new Vehical('Truck','white color Truck',"https://farm5.static.flickr.com/4163/34246785596_d2ffa79ec9_b.jpg", 
    // new Properties('Truck', 'white')),
    // new Vehical('Truck','white color Truck',"https://farm6.static.flickr.com/5266/5630712019_d62ddde296_b.jpg", 
    // new Properties('Truck', 'white')),
    // new Vehical('Truck','white color Truck',"https://farm4.static.flickr.com/3952/15005219263_af516364c5_b.jpg", 
    // new Properties('Truck', 'white')),
    // new Vehical('Truck','white color Truck',"https://upload.wikimedia.org/wikipedia/commons/5/5b/Coach_USA_MCI.jpg", 
    // new Properties('Truck', 'white')),
    // new Vehical('Truck','white color Truck',"https://upload.wikimedia.org/wikipedia/commons/5/5b/Coach_USA_MCI.jpg", 
    // new Properties('Truck', 'white')),
    // new Vehical('Truck','white color Truck',"https://farm4.static.flickr.com/3105/5808185549_24fd975ae9_b.jpg", 
    // new Properties('Truck', 'white')),
    // new Vehical('Truck','white color Truck',"http://www.intosomerset.co.uk/application/files/6014/4552/8009/Cropped_Into_Somerset_lorry.jpg", 
    // new Properties('Truck', 'white'))


  ]

  getVehicals() {
    return this.vehicals.slice();
  }

  getVehicalById(index: number) {
    return this.vehicals[index];
  }

  updateVehical(id: number, newVehical: Vehical) {
    this.vehicals[id] = newVehical;
    this.vehicalChanged.next(this.vehicals.slice());
  }
  addVehical(vehical: Vehical) {
    this.vehicals.push(vehical);
    this.vehicalChanged.next(this.vehicals.slice());
  }

}
