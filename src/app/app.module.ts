import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ScreenComponent } from './components/screen/screen.component';
import { TitleComponent } from './components/title/title.component';

import { Observable } from 'rxjs';
import {IMqttMessage, MqttModule, IMqttServiceOptions} from 'ngx-mqtt';
import { ButtonComponent } from './components/button/button.component';
import { ServiceWorkerModule } from '@angular/service-worker';

export const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
  hostname: 'kermit',
  port: 8080,
  path: '/mqtt'
};

@NgModule({
  declarations: [
    AppComponent,
    ScreenComponent,
    TitleComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    MqttModule.forRoot(MQTT_SERVICE_OPTIONS),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
