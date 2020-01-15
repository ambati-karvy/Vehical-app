import { Component, OnInit } from '@angular/core';
import { VehicalService } from 'src/app/services/vehical.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Vehical } from 'src/app/model/vehical';

@Component({
  selector: 'app-vehical-add-edit',
  templateUrl: './vehical-add-edit.component.html'
})
export class VehicalAddEditComponent implements OnInit {
  id: number;
  editMode: boolean = false;
  vehicalEditForm1;
  newForm: boolean = false;
  imagePath: string;
  
  constructor(private vehicalService: VehicalService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.newForm = params['id'] === undefined;
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  initForm() {
    var name = ""
    var imagepath = "";
    var description = "";
    if(this.editMode) {
      let vehical = this.vehicalService.getVehicalById(this.id);
      name = vehical.vehicalName;
      imagepath = vehical.imagepath;
      description = vehical.description;
    }

    this.vehicalEditForm1 = new FormGroup({
      'name' : new FormControl(name, Validators.required),
      'imagepath' : new FormControl(imagepath, Validators.required),
      'description' : new FormControl(description, Validators.required)
    })
  }

  onSubmit() {
    const newVehical = new Vehical(this.vehicalEditForm1.value['name'],this.vehicalEditForm1.value['description'],this.vehicalEditForm1.value['imagepath'],null)
    
    if (!this.newForm) {
      this.vehicalService.updateVehical(this.id, newVehical);
      this.router.navigate(['/vehical', this.id]);
    } else {
      this.vehicalService.addVehical(newVehical);
      this.router.navigate(['/vehical'])
    }
  }

  onCancel() {
    this.router.navigate(['/vehical']);
  }


}
