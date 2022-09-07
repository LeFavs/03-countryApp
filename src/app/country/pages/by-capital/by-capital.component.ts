import { Component } from '@angular/core';
import { CountryInterface } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
})
export class ByCapitalComponent {

  inputData: string = "";
  errorExist: boolean = false;
  countries: CountryInterface[] = [];

  constructor(private countryService: CountryService) { }

  search(inputData: string) {
    this.errorExist = false;
    this.inputData = inputData;
    this.countryService.searchCapital(inputData)
      .subscribe((countries) => {
        this.countries = countries;
      }, (err) => {
        this.errorExist = true;
        this.countries = [];
      });
  }
}
