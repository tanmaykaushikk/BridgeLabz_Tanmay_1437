class shape{
    getArea(){
        return 0;
    }
}

class circle extends shape{
    constructor(radius){
        super();
        this.radius = radius;    
    }

    getArea(){
        return Math.PI * this.radius ** 2;
    }
}

class Rectangle extends shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    getArea(){
        return this.height * this.width;
    }
}

const shapes = [new circle(5),new Rectangle(5,5)];

shapes.forEach((shape) =>{
    console.log(shape.getArea());
})

