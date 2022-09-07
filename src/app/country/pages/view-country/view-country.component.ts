import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap} from "rxjs/operators";

import { CountryService } from '../../services/country.service';
import { CountryInterface } from '../../interfaces/country.interface';

@Component({
  selector: 'app-view-country',
  templateUrl: './view-country.component.html',
  styleUrls: ['./view-country.component.css']
})
export class ViewCountryComponent implements OnInit {

  country!: CountryInterface;

  constructor(
    private activatedRoute: ActivatedRoute,
    private CountryService: CountryService
    ) { }

  ngOnInit() {

    this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.CountryService.getCountryID(id)), 
        tap(console.log)
      )
      .subscribe( country => { this.country = country[0]; 
        console.log("hola:", this.country)});
    // Same Shit:
    //  this.activatedRoute.params
    //    .subscribe(({ id }) => {
    //     console.log(id);
    //     this.CountryService.getCountryID(id)
    //     .subscribe( country => {
    //       this.country = country
    //     });
    //   }); 
  }

}
