/* The Strategy pattern is a behavioral design pattern that enables you to define a group (or family) of closely-related algorithms (known as strategies). 
The strategy pattern allows you to swap strategies in and out for each other as needed at runtime. */

class Flipkart {
    cost = 100;
    shippingCost(amount) {
        return amount * this.cost;
    }
}

class Amazon {
    cost = 250;
    shippingCost(amount) {
        return amount * this.cost;
    }
}

class Meesho {
    cost = 30;
    shippingCost(amount) {
        return amount * this.cost;
    }
}

class Shipping {
    shippingCompany = ''

    constructor(company) {
        this.shippingCompany = company ? company : null;
    }

    calculate(amount) {
        return this.shippingCompany ? this.shippingCompany.shippingCost(amount) : 0;
    }
}

const flipkartShipping = new Shipping(new Flipkart);
console.log(flipkartShipping.calculate(10))