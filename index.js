// Your code here
class Polygon {
    constructor(array) {
        this.array = array;
    }

    get countSides() {
        return this.array.length;
    }

    get perimeter() {
        return this.array.reduce((a, b) => a + b, 0);
    }
}

class Triangle extends Polygon {
    get isValid() {
        if (this.countSides === 3) {
            return (
                this.array[0] + this.array[1] > this.array[2]
                && this.array[0] + this.array[2] > this.array[1]
                && this.array[1] + this.array[2] > this.array[0]
            );
        }
    }
}

class Square extends Polygon {
    get isValid() {
        if (this.countSides === 4) {
            return (
                this.array[0] === this.array[1]
                && this.array[0] === this.array[2]
                && this.array[0] === this.array[3]
            );
        }
    }

    get area() {
        return this.array[0] * this.array[1];
    }
}