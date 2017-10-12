import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { AmiiboDetailPageComponent } from '../amiibo-detail-page/amiibo-detail-page.component';

@Component({
  selector: 'amiibos-list-page',
  templateUrl: 'amiibos-list-page.component.html',
})
export class AmiibosListPageComponent {

  constructor(private _navCtrl: NavController) {

  }

}
