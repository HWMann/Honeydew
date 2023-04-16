import {Component, Input} from '@angular/core';
import {MqttService} from "ngx-mqtt";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() public title:string = ""
  @Input() public topic:string = ""
  @Input() public data:any = null

  constructor(private mqttService: MqttService) {
  }

  sendMQTT(topic:string, data:any) {
    this.mqttService.unsafePublish(topic,JSON.stringify(data));
  }

}
