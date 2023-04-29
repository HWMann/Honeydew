import {NgModule, isDevMode, APP_INITIALIZER, Optional, Injectable} from '@angular/core';
import {
  BrowserModule,
} from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ScreenComponent } from './components/screen/screen.component';
import { TitleComponent } from './components/title/title.component';

import {MqttModule, IMqttServiceOptions} from 'ngx-mqtt';
import { ButtonComponent } from './components/button/button.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import {HttpClientModule} from "@angular/common/http";
import {ConfigService} from "./services/config.service";
import { HomeComponent } from './components/home/home.component';
import { WidgetComponent } from './components/widget/widget.component';

import * as Hammer from 'hammerjs';
import {
  HammerModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG}
  from '@angular/platform-browser';

@Injectable()
export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any>{
    'pan': {
      direction: Hammer.DIRECTION_ALL,
      threshold: 5
    } // override default settings
  };

}


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
    ButtonComponent,
    HomeComponent,
    WidgetComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HammerModule,
    MqttModule.forRoot(MQTT_SERVICE_OPTIONS),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [ConfigService],
      useFactory: (configService: ConfigService) => {
        return () => {
          return configService.loadAppConfig();
        };
      }
    },
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
