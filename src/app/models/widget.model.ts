import {ActorModel} from "./actor.model";

export class WidgetModel {
  id: number = 0
  name: string | null = null
  actors: ActorModel[] = []
  visible: boolean = false
}
