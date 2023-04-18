import {Component, Input, OnInit} from '@angular/core';
import {MqttService} from "ngx-mqtt";
import {ApiService} from "../../services/api.service";
import {ScreenModel} from "../../models/screen.model";

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss']
})
export class ScreenComponent implements OnInit{
  @Input() public screen:ScreenModel = new ScreenModel()

  constructor(
    private mqttService: MqttService,
  ) {
  }

  ngOnInit() {
    console.log(this.screen);
  }

  machma():void {
    this.mqttService.unsafePublish("amarsch", JSON.stringify({"stat" : 2}), {qos: 1, retain: true});
  }
}
