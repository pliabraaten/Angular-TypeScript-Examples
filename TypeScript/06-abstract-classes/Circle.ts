import { Shape } from "./Shape";

export class Circle extends Shape {

    constructor(theX: number, theY: number, // Regular parameter
                private _radius: number) {  // Parameter property

        super(theX, theY);  // Superclass constructor calls Shape constructor
    }

    public get radius(): number {
        return this._radius;
    }
    public set radius(value: number) {
        this._radius = value;
    }

    // Override getInfo
    getInfo(): string {
        // Calls Superclass getInfo from shape.getInfo() method, then add to it for circle.getInfo()
        return super.getInfo() + `, radius=${this._radius}`;
    }

    // Implement abstract method
    calculateArea(): number {
        return Math.PI * Math.pow(this._radius, 2);
    }
}

