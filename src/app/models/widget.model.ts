import {ActorModel} from "./actor.model";

export class WidgetModel {
  id: number = 0
  name: string | null = null
  visible: boolean = false
  statusActor:ActorModel|null = null
}
