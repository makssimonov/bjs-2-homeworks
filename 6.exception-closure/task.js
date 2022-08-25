// Задача 1

function parseCount(value) {
    let parsed = Number.parseInt(value);
    if (isNaN(parsed)) {
        throw new Error('Невалидное значение');
    }
    return parsed;
}

function validateCount(value) {
    try {
        let validateValue = parseCount(value);
        if (isNaN(validateValue)) {
            return;
        }
        return validateValue;
    } catch (Error) {
        return Error;
    }
}

// Задача 2

class Triangle {
    constructor(firstSide, secondSide, thirdSide) {
        this.firstSide = firstSide;
        this.secondSide = secondSide;
        this.thirdSide = thirdSide;
        
        if (firstSide + secondSide > thirdSide && 
            firstSide + thirdSide > secondSide &&
            secondSide + thirdSide > firstSide) {
            return;
        } else {
            throw new Error('Треугольник с такими сторонами не существует');
        }
    }

    getPerimeter() {
        let perimeter = this.firstSide + this.secondSide + this.thirdSide;
        return perimeter;
    }

    getArea() {
        let perimeter = this.firstSide + this.secondSide + this.thirdSide;
        let p = perimeter * 0.5;
        let s = Math.sqrt(p * (p - this.firstSide) * (p - this.secondSide) * (p - this.thirdSide));
        let result = +s.toFixed(3);
        return result;
    }
}

function getTriangle(firstSide, secondSide, thirdSide) {
    try {
        let newTriangle = new Triangle(firstSide, secondSide, thirdSide);
        return newTriangle;
    } catch(Error) {
        return {
            getPerimeter() {
                return 'Ошибка! Треугольник не существует';
            },
            getArea() {
                return 'Ошибка! Треугольник не существует';
            }
        }
    }
}

