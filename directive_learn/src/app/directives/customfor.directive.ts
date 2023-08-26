import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomfor]',
})
export class CustomforDirective {
  constructor(
    private templateRef?: TemplateRef<any>,
    private viewContainerRef?: ViewContainerRef
  ) {}

  // @Input() set appCustomfor(value: number) {
  //   for (let index = 0; index < value; index++) {
  //     this.viewContainerRef?.createEmbeddedView(this.templateRef!, {
  //       index: index,
  //     });
  //   }
  // }
    @Input() set appCustomfor(value: string[]) {
    for (let index = 0; index < value.length; index++) {
      this.viewContainerRef?.createEmbeddedView(this.templateRef!, {
        name: value[index],
      });
    }
  }
}
