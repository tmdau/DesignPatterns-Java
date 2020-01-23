interface Subject {
    attach(observer: Observer): void;
    detach(observer: Observer): void;
    notify(): void;
}

class ConcreteSubject implements Subject {
    public state: number;

    private observers: Observer[] = [];

    public attach(observer: Observer): void {
        console.log('Subject: Attached an observer.');
        this.observers.push(observer);
    }

    public detach(observer: Observer): void {
        const observerIndex = this.observers.indexOf(observer);
        this.observers.splice(observerIndex, 1);
        console.log('Subject: Detached an observer.');
    }

    public notify(): void {
        console.log('Subject: Notifying observers...');
        for (const observer of this.observers) {
            observer.update(this);
        }
    }

    public someBusinessLogic(): void {
        console.log('\nSubject: I\'m doing something important.');
        this.state = Math.floor(Math.random() * (10 + 1));

        console.log(`Subject: My state has just changed to: ${this.state}`);
        this.notify();
    }
}

interface Observer {
    // Получить обновление от субъекта.
    update(subject: Subject): void;
}

class ConcreteObserverA implements Observer {
    public update(subject: Subject): void {
        if (subject.state < 3) {
            console.log('ConcreteObserverA: Reacted to the event.');
        }
    }
}

class ConcreteObserverB implements Observer {
    public update(subject: Subject): void {
        if (subject.state === 0 || subject.state >= 2) {
            console.log('ConcreteObserverB: Reacted to the event.');
        }
    }
}

/**
 * Клиентский код.
 */

const subject = new ConcreteSubject();

const observer1 = new ConcreteObserverA();
subject.attach(observer1);

const observer2 = new ConcreteObserverB();
subject.attach(observer2);

subject.someBusinessLogic();
subject.someBusinessLogic();

subject.detach(observer2);

subject.someBusinessLogic();


/* Output.txt

Subject: Attached an observer.
Subject: Attached an observer.

Subject: I'm doing something important.
Subject: My state has just changed to: 6
Subject: Notifying observers...
ConcreteObserverB: Reacted to the event.

Subject: I'm doing something important.
Subject: My state has just changed to: 1
Subject: Notifying observers...
ConcreteObserverA: Reacted to the event.

Subject: Detached an observer.

Subject: I'm doing something important.
Subject: My state has just changed to: 5
Subject: Notifying observers...

*/
