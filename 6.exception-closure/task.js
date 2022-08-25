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
        return validateValue;
    } catch (error) {
        return error;
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
        }
        throw new Error('Треугольник с такими сторонами не существует');
    }

    getPerimeter() {
        return this.firstSide + this.secondSide + this.thirdSide;
    }

    getArea() {
        let p = this.getPerimeter() * 0.5;
        let s = Math.sqrt(p * (p - this.firstSide) * (p - this.secondSide) * (p - this.thirdSide));
        return +s.toFixed(3);
    }
}

function getTriangle(firstSide, secondSide, thirdSide) {
    try {
        return new Triangle(firstSide, secondSide, thirdSide);
    } catch {
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

