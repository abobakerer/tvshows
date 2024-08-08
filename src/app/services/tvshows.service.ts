import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TvshowsService {
  constructor(private http: HttpClient) {}

  apiKey = 'f56cf57111c2f4a6b26c3db77d388272';
  getAllShows(pg: number = 1  ): Observable<any> {
    return this.http.get<any>(
      `https://api.themoviedb.org/3/tv/popular?api_key=${this.apiKey}&page=${pg}`
    );
  }

  getShowDetails(id: number): Observable<any> {
    return this.http.get<any>(
      `https://api.themoviedb.org/3/tv/${id}?api_key=${this.apiKey}`
    );
  }
}
