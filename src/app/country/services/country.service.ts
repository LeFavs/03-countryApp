import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CountryInterface } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiURL: string = "https://restcountries.com/v3.1"

  constructor(
    private http: HttpClient
    ) { }

  searchCountry(inputData: string): Observable<CountryInterface[]> {

    const url = `${this.apiURL}/name/${inputData}`;
    return this.http.get<CountryInterface[]>(url);

  }

  searchCapital(inputData: string): Observable<CountryInterface[]> {

    const url = `${this.apiURL}/capital/${inputData}`;
    return this.http.get<CountryInterface[]>(url);

  }

  getCountryID(id: string): Observable<CountryInterface> {

    const url = `${this.apiURL}/alpha/${id}`;
    return this.http.get<CountryInterface>(url);

  }
}
