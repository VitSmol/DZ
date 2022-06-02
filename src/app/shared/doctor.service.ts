import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FbResponse } from "./interfaces";

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(
    private http: HttpClient
  ) { }

  create(doctor: any) {
    return this.http.post(`${environment.dbUrl}/doctors.json`, doctor)
    .pipe(map((res: FbResponse) => {
      return {
        ...doctor,
        id: res.name,
      }
      }))
  }
  getAll(){
    return this.http.get(`${environment.dbUrl}/doctors.json`)
    .pipe( map((res:any) => {
      return Object.keys(res).map(key => ({
        ...res[key],
        id: key,
        // date: new Date(res[key].date)
      }))

    }) )
  }
}
