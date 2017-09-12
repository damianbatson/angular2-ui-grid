import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';

import { RouterModule } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { Ng1ComponentFacade } from "../ng1/grid.directive";
import { GridComponent } from "../ng1/grid.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild([{
      path: "",
      component: HomeComponent,
      children: [{
        path: "about",
        component: AboutComponent
      }]
    }])
  ],
  declarations: [
    HomeComponent,
    AboutComponent,
    GridComponent,
    Ng1ComponentFacade
  ],
  bootstrap: [HomeComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class HomeModule {}
