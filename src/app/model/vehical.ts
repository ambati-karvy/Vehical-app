import {Properties} from './properties'

export class Vehical {
    public vehicalName: string;
    public description: string;
    public imagepath: string;
    public properties: Properties;

    constructor(vehicalName: string, description: string, imagepath: string, properties: Properties) {
        this.vehicalName = vehicalName;
        this.description = description;
        this.imagepath = imagepath;
        this.properties = properties;
    }
}
