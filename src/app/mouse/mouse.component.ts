import { Component, HostListener  } from '@angular/core';

@Component({
  selector: 'app-mouse',
  templateUrl: './mouse.component.html',
  styleUrls: ['./mouse.component.css']
})
export class MouseComponent {
  // xPos: number = -100; // Initialize off-screen
  // yPos: number = -100; // Initialize off-screen

  // @HostListener('document:mousemove', ['$event'])
  // onMouseMove(event: MouseEvent) {
  //   this.xPos = event.clientX;
  //   this.yPos = event.clientY;
  // }

  circleStyles: { [key: string]: string } = {};

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.circleStyles = {
      top: `${event.clientY}px`,
      left: `${event.clientX}px`
    };
  }


}
