import { Component, OnInit } from '@angular/core';
import { IImage } from 'ng-simple-slideshow';
import { MatDialog } from '@angular/material';
import { DecouverteComponent } from '../decouverte/decouverte.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  flipped = false;
  flipped2 = false;
  flipped3 = false;
  imgSrc = "../../../assets/images/activity.jpg"

  imageUrls: (string | IImage)[] = [
    { url: '../../../assets/images/slider1.jpg', caption: 'Fitness, Aquabike, Musculation, ...', href: '#config' },
    { url: '../../../assets/images/slider2.jpg', caption: 'Inscrivez-vous vite', clickAction: () => alert('custom click function') },
    { url: '../../../assets/images/slider3.jpg', caption: 'Un personnel qualifié à votre service', href: '#' },
  ];
  height: string = '500px';
  minHeight: string;
  arrowSize: string = '30px';
  showArrows: boolean = true;
  disableSwiping: boolean = false;
  autoPlay: boolean = true;
  autoPlayInterval: number = 15000;
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

  constructor(private matdialog: MatDialog) {

  }

  ngOnInit() {
  }

  flipIt() {
    this.flipped = !this.flipped;
  }

  flipIt2(){
    this.flipped2 = !this.flipped2;
  }

  flipIt3(){
    this.flipped3 = !this.flipped3;
  }


  onClick(){
    this.matdialog.open(DecouverteComponent, {disableClose:true})
  }

  test(){
    this.matdialog.open(HomeComponent, {disableClose:true})
  }

}
