import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonDesignComponent } from './common-design/common-design.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { CommonBtnComponent } from './common-btn/common-btn.component';
import { StudentDataComponent } from './student-data/student-data.component';

@NgModule({
  declarations: [
    AppComponent,
    CommonDesignComponent,
    StyleBindingComponent,
    CommonBtnComponent,
    StudentDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
