import { Component, Output, EventEmitter, OnInit, Input} from '@angular/core';
import { __core_private_testing_placeholder__ } from '@angular/core/testing';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-input-country',
  templateUrl: './input-country.component.html',
  styleUrls: ['./input-country.component.css']
})
export class InputCountryComponent implements OnInit{

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = "";

  debouncer: Subject<string> = new Subject();

  inputData: string = "";

  constructor() { }

  ngOnInit() {
    this.debouncer
    .pipe(
      debounceTime(300))
    .subscribe(value =>{
      this.onDebounce.emit(value);
    });
  }

  search() {
    this.onEnter.emit( this.inputData );
  }

  // pressKey( event: any ){
  //   const value = event.target.value;
  //   console.log(value);
  //   console.log(this.inputData);
  // }

  pressKey() {
      this.debouncer.next( this.inputData);
    }

}
