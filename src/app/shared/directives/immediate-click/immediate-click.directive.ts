import { Directive, ElementRef, OnInit } from '@angular/core';

import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';

@Directive({
// tslint:disable-next-line: directive-selector
    selector: '[immediateClick]',
})
export class ImmediateClickDirective implements OnInit{


  constructor(
    private element: ElementRef<any>,
    private platFormDetector: PlatformDetectorService,){}

    ngOnInit(): void {
      this.platFormDetector.isPlatformBrowser
        && this.element.nativeElement.click();
    }



}
