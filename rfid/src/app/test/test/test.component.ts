import { Component } from '@angular/core';
import { IImage } from 'ng-simple-slideshow';




@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {

  imageUrls: (string | IImage)[] = [
    { url: '../../../assets/images/slider1.jpg', caption: 'des dizaines de sport proposés', href: '#config' },
    { url: '../../../assets/images/slider2.jpg', clickAction: () => alert('custom click function') },
    { url: '../../../assets/images/slider3.jpg', caption: 'Une salle ouverte en permanence', href: '#' },
  ];
  height: string = '500px';
  minHeight: string;
  arrowSize: string = '30px';
  showArrows: boolean = true;
  disableSwiping: boolean = false;
  autoPlay: boolean = true;
  autoPlayInterval: number = 9999;
  stopAutoPlayOnSlide: boolean = true;
  debug: boolean = false;
  backgroundSize: string = 'cover';
  backgroundPosition: string = 'center center';
  backgroundRepeat: string = 'no-repeat';
  showDots: boolean = true;
  dotColor: string = '#FFF';
  showCaptions: boolean = true;
  captionColor: string = '#FFF';
  captionBackground: string = 'rgba(0, 0, 0, .35)';
  lazyLoad: boolean = false;
  hideOnNoSlides: boolean = false;
  width: string = '100%';
  fullscreen: boolean = false;

  ngOnInit() {
    
   
  }
 
}

