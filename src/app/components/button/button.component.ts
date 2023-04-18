import {Component, Input, OnInit} from '@angular/core';
import {MqttService} from "ngx-mqtt";
import {WidgetModel} from "../../models/widget.model";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() public widget:WidgetModel = new WidgetModel()

  constructor(
    private mqttService: MqttService
  ) {}

  ngOnInit() {
  }

  andAction() {
    this.widget.actors.forEach((actor:any) => {
      this.mqttService.unsafePublish(actor.topic,actor.payload);
    })
  }

}
