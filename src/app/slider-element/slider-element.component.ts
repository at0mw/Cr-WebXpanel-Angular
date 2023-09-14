import { Component, ElementRef, ViewChild, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-slider-element',
  templateUrl: './slider-element.component.html',
  styleUrls: ['./slider-element.component.scss']
})
export class SliderElementComponent {
  @ViewChild('sliderInput') sliderInput!: ElementRef;
  @ViewChild('sliderThumb') sliderThumb!: ElementRef;
  @ViewChild('sliderLine') sliderLine!: ElementRef;
  @Input() labelKey: string = '';
  @Input() initialValue: number = 0;

  thumbActive: boolean = false;
  thumbDisappearTimeout: any;

  
  ngAfterViewInit() {
    if (this.sliderInput && this.sliderThumb && this.sliderLine) {
      const sliderInput = this.sliderInput.nativeElement;
      sliderInput.value = this.initialValue;
      this.updateSliderVisuals(false);
    }    
  }

  updateSliderVisuals(showThumb: boolean) {
    //console.log('Slider Value Updated....');
    const sliderInput = this.sliderInput.nativeElement;
    const sliderThumb = this.sliderThumb.nativeElement;
    const sliderLine = this.sliderLine.nativeElement;

    if (sliderInput && sliderThumb && sliderLine) {
      if(showThumb){
        this.showThumbStatus(sliderThumb, sliderInput);
      }

      this.updateVisualsPositioning(sliderInput, sliderThumb, sliderLine);
    }
  }

  showThumbStatus(sliderThumb: any, sliderInput: any) {
    sliderThumb.classList.add('active');
    const thumbText = sliderThumb.querySelector('.thumb-text');

    thumbText.innerHTML = sliderInput.value;
    thumbText.style.opacity = 1;
    // Clear any existing timeout
    if (this.thumbDisappearTimeout) {
      clearTimeout(this.thumbDisappearTimeout);
    }

    this.thumbDisappearTimeout = setTimeout(() => {
      thumbText.style.opacity = 0;
      sliderThumb.classList.remove('active');
      //sliderThumb.style.opacity = '0';
    }, 1500);
  }

  updateVisualsPositioning(sliderInput: any, sliderThumb: any, sliderLine: any) {
    const bulletPosition = sliderInput.value / sliderInput.max;
    const space = sliderInput.offsetWidth;
    sliderThumb.style.left = bulletPosition * space + 'px';
    sliderLine.style.width = sliderInput.value + '%';
  }

  sendSliderValue() {
    console.log('Final Slider Value: ', this.initialValue);
  }
}
