import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';

declare var $: any;

@Directive({
  selector: '[appExample]', // Köşeli parantez ile kullanılıyorsa burada oluşturulan directive attribute olarak kullanılır
  // selector: '.appExample.' // Eğer nokta ile kullanıyorsa bu sınıf olarak kullanılacağı anlamına gelmektir.
  // İsimlendirme hiç bir şekilde directive içerisinde yaptığınız işlemleri etkilemez
})
export class ExampleDirective implements OnInit {
  nativeElementItem?: ElementRef;
  @Input() color?: string;

  constructor(private element: ElementRef) {
    this.nativeElementItem = element;
  }

  ngOnInit(): void {
    this.nativeElementItem!.nativeElement.style.backgroundColor = this.color ?? "red";

    $(this.nativeElementItem!.nativeElement).fadeOut(2000).fadeIn(1000);
  }

  @HostListener("click")
  onClick(){
    alert("HTML Nesnesi Click Edildi")
  }

  @HostBinding("style.color")
  writingColor:string = "white";

}
