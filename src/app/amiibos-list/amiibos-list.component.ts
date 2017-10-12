import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Amiibo, AmiibosService } from '../services/amiibos.service';
import { NavController } from 'ionic-angular';
import { AmiiboDetailPageComponent } from '../amiibo-detail-page/amiibo-detail-page.component';

@Component({
  selector: 'amiibos-list',
  templateUrl: 'amiibos-list.component.html'
})
export class AmiibosListComponent implements OnInit {

  public amiibos$: Observable<Amiibo[]>;

  constructor(private _amiibosService: AmiibosService,
              private _navCtrl: NavController) {

  }

  public ngOnInit(): void {
    this.amiibos$ = this._amiibosService.getAmiibos();
  }

  public getImageSrc(amiibo: Amiibo): string {
    return `https://storage.googleapis.com/amiibo-collector/${amiibo.name}.png`;
  }

  //TODO: Move to page component.
  public openAmiibo(amiibo) {
    this._navCtrl.push(AmiiboDetailPageComponent, {
      name: amiibo.name
    });
  }

}
