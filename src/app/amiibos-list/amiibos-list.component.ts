import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Amiibo, AmiibosService } from '../services/amiibos.service';

@Component({
  selector: 'amiibos-list',
  templateUrl: 'amiibos-list.component.html'
})
export class AmiibosListComponent implements OnInit {

  public amiibos$: Observable<Amiibo[]>;

  constructor(private _amiibosService: AmiibosService) {

  }

  public ngOnInit(): void {
    this.amiibos$ = this._amiibosService.getAmiibos();
  }

  public getImageSrc(amiibo: Amiibo): string {
    return `https://storage.googleapis.com/amiibo-collector/${amiibo.name}.png`;
  }

}
