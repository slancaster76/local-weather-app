import { Component, OnInit } from "@angular/core";
import { ICurrentWeather } from "../interfaces";

@Component({
  selector: "app-current-weather",
  templateUrl: "./current-weather.component.html",
  styleUrls: ["./current-weather.component.css"]
})
export class CurrentWeatherComponent implements OnInit {
  // Public properties.
  current: ICurrentWeather;

  // Constructor.
  constructor() {
    // Temp code.
    this.current = {
      city: "Bethesda",
      country: "US",
      date: new Date(),
      image: "assets/img/sunny.svg",
      temperature: 72,
      description: "sunny"
    } as ICurrentWeather;
  }

  ngOnInit() {}
}
