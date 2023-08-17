// It  has only one instance and provides a global point of access to that instance.

class Singleton {
    static instance;
    data = [];

    static getInstance() {
        if (!Singleton.instance) Singleton.instance = new Singleton();
        return Singleton.instance;
    }

    addData(data) {
        this.data.push(data);
    }

    getData(data) {
        return this.data;
    }
}

const singleton1=Singleton.getInstance().addData("Dhanush");
const singleton2=Singleton.getInstance().addData("Ajith");

console.log(Singleton.getInstance().getData())

console.log(singleton1 === singleton2)