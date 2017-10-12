import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs";

export interface Amiibo {
  name: string;
  displayName: string;
  series: {
    name: string;
    displayName: string;
  };
  releaseDate: string;
}

@Injectable()
export class AmiibosService {

  private SERVICE_URL = 'https://amiibos-api.herokuapp.com';

  constructor(public http: Http) {

  }

  public getAmiibos(): Observable<Amiibo[]> {
    return this.http.get(`${this.SERVICE_URL}/amiibos`)
      .map((res) => res.json());
  }

}
