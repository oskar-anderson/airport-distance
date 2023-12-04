import { autoinject, observable } from 'aurelia-framework';

@autoinject
export class Binding {

    @observable foo = "My foo";


    getContent(name: string) {
        return name + 123;
    }

    fooChanged() {
        console.log("fooChanged", this.foo);
    }

    resetBtn() {
        this.foo = "foo";
    }

}