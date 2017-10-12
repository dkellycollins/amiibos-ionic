import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, IonicPageModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { App } from './app.component';
import { AmiibosListPageComponent } from './amiibos-list-page/amiibos-list-page.component';
import { AmiibosListComponent } from './amiibos-list/amiibos-list.component';
import { AmiibosService } from './services/amiibos.service';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    App,
    AmiibosListPageComponent,
    AmiibosListComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpModule,
    IonicModule.forRoot(App),
    IonicPageModule.forChild(AmiibosListPageComponent)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    App,
    AmiibosListPageComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AmiibosService
  ]
})
export class AppModule {}
