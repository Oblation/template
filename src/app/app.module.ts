import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { OneWayBindingComponent } from './one-way-binding/one-way-binding.component';
import { AttributesComponent } from './attributes/attributes.component';
import { ClassesComponent } from './classes/classes.component';
import { StylesComponent } from './styles/styles.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    OneWayBindingComponent,
    AttributesComponent,
    ClassesComponent,
    StylesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
