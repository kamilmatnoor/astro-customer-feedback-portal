import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as ENV } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http: HttpClient) { }

  getAll(): Promise<any> {
    return new Promise(resolve => {
      this.http.get(`${ENV.API_URL}/review/get-all`).subscribe((response: any) => {
        if (response.error) {
          console.error(response);
          return;
        }

        resolve(response);
      });
    });
  }

  addNew(req): Promise<any> {
    return new Promise(resolve => {
      this.http.post(`${ENV.API_URL}/review/add-new`, req.data).subscribe((response: any) => {
        if (response.error) {
          console.error(response);
          return;
        }

        resolve(response);
      });
    });
  }
}

