import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { WeatherService } from '../weather/weather.service';

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.css'],
})
export class CitySearchComponent implements OnInit {
  // Public properties.
  search = new FormControl('', [Validators.minLength(2)]);

  // Constructor.
  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    // Subscribe to changes in the input search control.
    this.search.valueChanges.pipe(debounceTime(1000)).subscribe((searchValue: string) => {
      if (!this.search.invalid) {
        // Split the input value.
        const userInput = searchValue.split(',').map(s => s.trim());
        this.weatherService
          .getCurrentWeather(
            userInput[0],
            userInput.length > 1 ? userInput[1] : undefined
          )
          .subscribe(data => console.log(data));
      }
    });
  }

  getErrorMessage() {
    return this.search.hasError('minLength')
      ? 'Type more than one character to search'
      : '';
  }
}
