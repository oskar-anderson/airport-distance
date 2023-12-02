import { autoinject } from 'aurelia-framework';


@autoinject
export class CustomCheckbox {

    attached(): void {
    
    }

    returnTrue(e: Event) {
        console.log("returnTrue", e)
        return true;
    }

    returnNothing(e: Event) {
        console.log("returnNothing", e)
    }

    containeredCheckboxClick1(e: Event) {
        console.log("containeredCheckboxClick1", e)
    }

    containeredCheckboxClick2(e: Event) {
        console.log("containeredCheckboxClick2", e)
    }

    eventHandlerNotReturningTrue(e: Event) {
        console.log("eventHandlerNotReturningTrue", e)
    }

    greetFromContainer() {
        console.log("Container greets you!")
    }

    greetFromChild() {
        console.log("Child greets you!");
    }
}