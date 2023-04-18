import {Injectable, OnInit} from '@angular/core';
import { IMqttMessage, MqttService } from "ngx-mqtt";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class Mqtt implements OnInit {
  constructor(
    private mqttService: MqttService
  ) { }

  ngOnInit() {

  }

  topic(topic:string) : Observable<IMqttMessage> {
    return this.mqttService.observe("MyStuffRestSays"+topic);
  }

  subscribe(topic:string) : Observable<IMqttMessage> {
    return this.mqttService.observe(topic);
  }

  publish(topic:string, payload:any):void
  {
    this.mqttService.publish(topic,payload).subscribe(data => {});
  }
}
