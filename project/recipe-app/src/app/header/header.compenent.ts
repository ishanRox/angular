import { Component, EventEmitter, Output } from '@angular/core';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',

})
export class HeaderComponent {
    @Output() selectedItem = new EventEmitter<string>();
   
    getSelectedItem(selectedItem:HTMLInputElement) {
        console.log(selectedItem.textContent);
        
        this.selectedItem.emit(selectedItem.textContent);
    }
}
