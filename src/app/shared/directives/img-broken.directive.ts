import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]',
})
export class ImgBrokenDirective {
  @HostListener('error') handleError(): void {
    const elNativo = this.elHost.nativeElement;
    console.log('Esta imagen revento', this.elHost);
    elNativo.src = '../../../assets/images/img-broken.png';
  }
  constructor(private elHost: ElementRef) {}
}
