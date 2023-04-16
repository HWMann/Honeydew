import {Component, Input} from '@angular/core';
import {MqttService} from "ngx-mqtt";

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.scss']
})
export class ScreenComponent {
  @Input() public title:string = "a screen title"
  @Input() public id:string = "screen_id"
  public visibleId:string = "main"

  constructor(private mqttService: MqttService) {
  }

  machma():void {
    console.log("jo!");
    this.mqttService.unsafePublish("amarsch", JSON.stringify({"stat" : 2}), {qos: 1, retain: true});
  }
}
