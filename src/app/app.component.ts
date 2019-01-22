import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <mat-toolbar color="primary"> <span>LocalCast Weather</span> </mat-toolbar>
      <div fxLayoutAlign="center">
        <div class="mat-caption">
          Your city, your forecast, right now!
        </div>
      </div>
      <div fxLayout="row">
        <div fxFlex></div>
        <div fxFlex="300px">
          <mat-card>
            <mat-card-header>
              <mat-card-title>
                <div class="mat-title">Current Weather</div>
              </mat-card-title>
            </mat-card-header>
            <mat-card-content>
              <app-current-weather></app-current-weather>
            </mat-card-content>
          </mat-card>
        </div>
        <div fxFlex></div>
      </div>
    </div>
  `,
})
export class AppComponent {
  title = 'local-weather-app';
}
