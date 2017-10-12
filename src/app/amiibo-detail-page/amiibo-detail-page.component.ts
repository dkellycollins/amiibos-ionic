import { OnInit, Component } from "@angular/core";
import { NavParams } from "ionic-angular";
import { AmiibosService, Amiibo } from "../services/amiibos.service";
import { Observable } from "rxjs";

@Component({
  templateUrl: 'amiibo-detail-page.component.html'
})
export class AmiiboDetailPageComponent implements OnInit {

  public amiibo$: Observable<Amiibo>;

  constructor(private _amiibosService: AmiibosService,
              private _navParams: NavParams) {

  }

  public ngOnInit(): void {
    const amiiboName = this._navParams.get('name');
    this.amiibo$ = this._amiibosService.getAmiiboByName(amiiboName).share();
  }
}
