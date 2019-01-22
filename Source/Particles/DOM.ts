import Particle from "Link/Particle";
import LinkElement from "Link/Element";

export default class DOM extends Particle {

  static QuerySelector(Selector: string, global: boolean = false) {
    return function (Target: any, Key: string) {
      DOM.Register(Target);
      DOM.Getter(Key, function () {
        return (global ? document : this.Root).querySelector(Selector);
      });
    }
  }

  static Events: string[];

  static Event(EventN: string) {
    return function (Target: any, Key: string) {
      DOM.Register(Target);
      if (!Target.hasOwnProperty("$Events")) Target.$Events = [];
      Target.$Events.push([EventN, Target[Key]]);
    }
  }

  static Connected(El: LinkElement & { $Events?: [string, Function] }) {
    if ("$Events" in El)
      for (const Ev of El.$Events) {
        El.addEventListener(Ev[0], Ev[1]);
      }
  }

  static Disconnected(El: LinkElement & { $Events?: [string, Function] }) {
    if ("$Events" in El)
      for (const Ev of El.$Events) {
        El.removeEventListener(Ev[0], Ev[1]);
      }
  }
}