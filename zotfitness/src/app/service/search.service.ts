import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'; //added {, HttpHeaders}
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http:HttpClient) { }

  //return sample data from calling baseURL in environments folder
  private sendRequestToExpress(endpoint: string):Observable<any> {
    let resp = this.http.get(`${environment.baseURL}${endpoint}`,
//       params: {muscle: 'biceps'},
      {headers: {'X-Api-Key': environment.apiKey}});
    return resp;
  }

  //prints sample data from url 'https://api.api-ninjas.com/v1/exercises?type=strength&muscle=biceps'
  //'muscle=biceps', type=strength&muscle=biceps
  getMuscleWorkouts():void{
//     console.log(this.sendRequestToExpress('biceps'));
    this.sendRequestToExpress('type=strength&muscle=biceps').subscribe(data => {
      console.log(data);
    });
  }

}