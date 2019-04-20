import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomMaterialModule } from './shared/custommaterial/custommaterial.module';
import { FooterComponent } from './shared/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { MattabledataComponent } from './services/mattabledata/mattabledata.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    MattabledataComponent
  ],
  imports: [
    BrowserModule,
    CustomMaterialModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
