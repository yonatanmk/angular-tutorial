import { Directive, HostListener, HostBinding, ElementRef } from '@angular/core';

// close dropdown by clicking anywhere
@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open') isOpen: boolean = false;
  // @HostListener('click') toggleOpen(eventData: Event) {
  //   this.isOpen = !this.isOpen;
  // }
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }

  constructor(private elRef: ElementRef) {}
}

//close dropdown by clicking on dropdown
// @Directive({
//   selector: '[appDropdown]'
// })
// export class DropdownDirective {

//   @HostBinding('class.open') isOpen: boolean = false;

//   constructor() { }

//   @HostListener('click') toggleOpen(eventData: Event) {
//     this.isOpen = !this.isOpen;
//   }

// }
