
import {Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { VehicalComponent } from './vehical/vehical.component';
import { NgModule } from '@angular/core';
import { VehicalAddEditComponent } from './vehical/vehical-list/vehical-add-edit/vehical-add-edit.component';
import { VehicalViewComponent } from './vehical/vehical-list/vehical-view/vehical-view.component';

const appRoutes: Routes = [
    {path: "", component:HomeComponent},
    {path: "vehical", component:VehicalComponent,children: [
        {path: "add-vehical", component:VehicalAddEditComponent},
        {path:":id", component: VehicalViewComponent},
        {path:":id/edit-vehical", component:VehicalAddEditComponent}
    ]}
]


@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule{};