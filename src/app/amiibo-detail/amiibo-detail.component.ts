import { Component, Input } from "@angular/core";
import { Amiibo } from "../services/amiibos.service";

@Component({
  selector: 'amiibo-detail',
  templateUrl: 'amiibo-detail.component.html'
})
export class AmiiboDetailComponent {

  @Input('amiibo') public amiibo: Amiibo;

  constructor() {

  }

  public getImageSrc(): string {
    if(!this.amiibo) {
      return '';
    }

    return `https://storage.googleapis.com/amiibo-collector/${this.amiibo.name}.png`;
  }

  public getName(): string {
    if(!this.amiibo) {
      return '';
    }

    return this.amiibo.displayName;
  }

  public getSeries(): string {
    if(!this.amiibo || !this.amiibo.series) {
      return 'N/A';
    }

    return this.amiibo.series.displayName;
  }

  public getReleaseDate(): string {
    if(!this.amiibo || !this.amiibo.releaseDate) {
      return '';
    }

    return this.amiibo.releaseDate
  }
}
