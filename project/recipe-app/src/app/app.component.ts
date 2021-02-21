import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipe-app';
selectedItemName:string='';

onSelected(selectedItem: string){
console.log(selectedItem);
this.selectedItemName=selectedItem;
}

}
