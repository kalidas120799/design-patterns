/* The Observer Pattern is a behavioral design pattern that defines a dependency between objects so that when one object 
(the subject) changes state, all its dependents (observers) are notified and updated automatically */

class SMSNotification {
    from = ""
    #to = "+919000000000"

    constructor(from) {
        this.from = from;
    }

    send(msg) {
        console.log(msg, this.#to, this.from)
        console.log(`SMS Notification send successfully`)
    }
}

class EmailNotification {
    from = ""
    #to = "send@gmail.com"

    constructor(from) {
        this.from = from;
    }

    send(msg) {
        console.log(msg, this.#to, this.from)
        console.log(`Email Notification send successfully`)
    }
}

class PushNotification {
    #publishers = []

    addPublisher(publisher) {
        this.#publishers.push(publisher);
    }

    removePublisher(publisher) {
        this.#publishers = this.#publishers.filter((e) => e != publisher);
    }

    sendNotification(msg) {
        this.#publishers.forEach((publisher) => {
            publisher.send(msg);
        })
    }
}

const pushNotification = new PushNotification();
const sms = new SMSNotification("+9191111111111");
const email = new EmailNotification("receiver@gmail.com")
pushNotification.addPublisher(sms);
pushNotification.addPublisher(email);

// pushNotification.removePublisher(email);

pushNotification.sendNotification("haiii test")
