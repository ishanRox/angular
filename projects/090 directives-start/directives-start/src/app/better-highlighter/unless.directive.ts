import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  //this is just a property with a setter
  //remember to set the same name becase when angular convert * to normal code it choose this name
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      //show if not true 
      //get the location to embed the template and embed the template
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }

  //Remember our original one is covered by ng-template
  //TemplateRef to get the template (get the template of element where directive locate  ) simply this is what to show?
  //ViewContainerRef is a continer which mark the place to include above template (simply where to include this template ?)
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
