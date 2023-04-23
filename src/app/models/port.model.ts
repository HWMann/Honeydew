import {ActorModel} from "./actor.model";

export class PortModel {
  id: number = 0
  name: string | null = null
  payload: string | null = null
  actor:ActorModel | null = null

  constructor(actor:ActorModel) {
    this.actor=actor
  }
}
