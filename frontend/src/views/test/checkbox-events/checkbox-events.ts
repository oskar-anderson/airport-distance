import { autoinject, observable } from 'aurelia-framework';


@autoinject
export class CustomCheckbox {

    private bindedCheckboxInStopPropagationContainer = true;

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

    outerContainerClick(e: Event) {
        console.log("outerContainerClick", e)
        return true;
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

    stopPropagation(e: Event) {
        console.log("stopPropagation")
        e.stopPropagation();
        return true;
    }

    bindedCheckboxInStopPropagationContainerChange(e: Event) {
        console.log("bindedCheckboxInStopPropagationContainer", e);
    }

    stopPropagationMessage(e: Event, element: string) {
        console.log("stopPropagationMessage", element)
        e.stopPropagation();
        return true;   
    }
}