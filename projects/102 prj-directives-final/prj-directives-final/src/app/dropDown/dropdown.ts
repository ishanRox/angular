import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropdownNew]'
})
export class DropDown {

    possibleColors = [
        'darksalmon', 'hotpink', 'lightskyblue', 'goldenrod', 'peachpuff',
        'mediumspringgreen', 'cornflowerblue', 'blanchedalmond', 'lightslategrey'
    ]; F

    //bind to the class of directives host
    @HostBinding('class.open') isOpenOn = false;
    @HostBinding('style.background') color: string = 'transparent';

    //listen to the host of directive
    @HostListener('click') toggle() {
        this.isOpenOn = !this.isOpenOn;
        this.color = this.possibleColors[Math.floor(this.possibleColors.length * Math.random())];
    }
}