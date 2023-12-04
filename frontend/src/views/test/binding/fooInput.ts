import { autoinject, bindable } from 'aurelia-framework';


@autoinject
export class FooInput {
    
    @bindable content!: string;
    @bindable getContent!: (name: string) => string;
    @bindable isGreat: boolean;

    attached(): void {
        console.log(typeof this.content, this.content);
    }
}