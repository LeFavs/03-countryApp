import { Component } from '@angular/core';
import { CountryInterface } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
})
export class ByCountryComponent {

  inputData: string = "";
  errorExist: boolean = false;
  countries: CountryInterface[] = [];

  constructor( private countryService : CountryService) { }

  search( inputData: string ) {
    this.errorExist = false;
    this.inputData = inputData;

    this.countryService.searchCountry ( inputData )
    .subscribe( (countries) => {
      this.countries = countries;
    }, (err) => {
      this.errorExist = true;
      this.countries = [];
    });
  }

  suggestions( inputData: string ) {
    this.errorExist = false;
    //create suggestions
  }

}
