class coffeeMachine{
    start(){
        console.log("starting machine");
        this.#heatWater();
        this.#brewCoffee();
        console.log("coffee is ready");
    }

    #heatWater(){
        console.log("heating water");
    }

    #brewCoffee(){
        console.log("brewing coffee");
    }
}


const machine = new coffeeMachine();
machine.start();