import { BehaviorSubject, Observable, of } from 'rxjs';
import { ICurrentWeather } from '../interfaces';
import { IWeatherService } from './weather.service';

// Fake of our weather service for unit testing purposes.
export class WeatherServiceFake implements IWeatherService {
  // Private members.
  private fakeWeather: ICurrentWeather = {
    city: 'Bursa',
    country: 'TR',
    date: 1485789600,
    image: '',
    temperature: 280.32,
    description: 'light intensity drizzle',
  };

  currentWeather = new BehaviorSubject<ICurrentWeather>(this.fakeWeather);

  getCurrentWeather(
    city: string | number,
    country?: string
  ): Observable<ICurrentWeather> {
    return of(this.fakeWeather);
  }

  getCurrentWeatherByCoords(coords: Coordinates): Observable<ICurrentWeather> {
    // Return our current weather fake as an Observable (hence the "of").
    return of(this.fakeWeather);
  }
}
