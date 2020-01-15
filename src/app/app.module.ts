import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { VehicalComponent } from './vehical/vehical.component';
import { AppRoutingModule } from './app.routing.module';
import { AlertModule } from 'ngx-bootstrap';
import { VehicalService } from './services/vehical.service';
import { VehicalListComponent } from './vehical/vehical-list/vehical-list.component';
import { VehicalDetailComponent } from './vehical/vehical-list/vehical-detail/vehical-detail.component';
import { VehicalAddEditComponent } from './vehical/vehical-list/vehical-add-edit/vehical-add-edit.component';
import { VehicalViewComponent } from './vehical/vehical-list/vehical-view/vehical-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    VehicalComponent,
    VehicalListComponent,
    VehicalDetailComponent,
    VehicalAddEditComponent,
    VehicalViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AlertModule.forRoot()
  ],
  providers: [VehicalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
