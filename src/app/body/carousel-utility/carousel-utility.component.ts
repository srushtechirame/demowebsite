import { Component, OnInit } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
// import { ContentDisplayComponent } from '../content-display/content-display.component';

@Component({
  selector: 'app-carousel-utility',
  templateUrl: './carousel-utility.component.html',
  styleUrls: ['./carousel-utility.component.css']
})
export class CarouselUtilityComponent {
  images = ["http://localhost:4200/assets/images/bg11.png",
    "http://localhost:4200/assets/images/bg3.jpg",
    "http://localhost:4200/assets/images/bg9.jpg"];
  // constructor(content :ContentDisplayComponent) {
  //   // content("abc");
  //  }


}
