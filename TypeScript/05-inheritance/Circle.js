"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
const Shape_1 = require("./Shape");
class Circle extends Shape_1.Shape {
    constructor(theX, theY, // Regular parameter
    _radius) {
        super(theX, theY); // Superclass constructor calls Shape constructor
        this._radius = _radius;
    }
    get radius() {
        return this._radius;
    }
    set radius(value) {
        this._radius = value;
    }
    // Override getInfo
    getInfo() {
        // Calls Superclass getInfo from shape.getInfo() method, then add to it for circle.getInfo()
        return super.getInfo() + `, radius=${this._radius}`;
    }
}
exports.Circle = Circle;
