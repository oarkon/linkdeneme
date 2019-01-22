import Particle from "Link/Particle";
export default class Storage extends Particle {
    static GlobalMap: Map<any, any>;
    static Global(Key: any): (Target: any, Field: string) => void;
}
