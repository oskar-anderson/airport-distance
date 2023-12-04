import {computePosition, flip, shift} from '@floating-ui/dom';
import { autoinject, observable } from 'aurelia-framework';


@autoinject
export class Tooltip {

    
    buttonClick(e: Event) {
        const button = e.target as HTMLElement;
        const tooltip = document.querySelector<HTMLElement>('#tooltip');
        
        computePosition(button, tooltip, {
            placement: 'right', 
            middleware: [flip(), shift({padding: 12})],
        }).then(({x, y}) => {
            tooltip.style.left = `${x}px`;
            tooltip.style.top = `${y}px`;
        });
    }
}