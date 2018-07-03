import { Component } from '@angular/core';
import { SampleDataClient, WeatherForecast } from '../app.generated';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public forecasts: WeatherForecast[];

  constructor(client: SampleDataClient) {
    client.weatherForecasts().subscribe(result => {
      this.forecasts = result;
    }, error => console.error(error));
  }
}
