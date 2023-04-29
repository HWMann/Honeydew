import {Component, Input, OnInit} from '@angular/core';
import {MqttService} from "ngx-mqtt";
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
  }

}
