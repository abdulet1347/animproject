import { animate, style, transition, trigger,keyframes, state } from '@angular/animations';
import { Component, MissingTranslationStrategy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
  trigger('slider',[
      transition(':enter',[           //void => *
        style({transform:'translateX(200%)'}),
        animate('800ms ease',style({
          transform:'translateX(0%)'
        }))
      ]),
      transition(':leave',[           // * => void
        
        animate('200ms linear',style({
          transform:'translateX(200%)'
        }))
      ])
    ]),
    trigger('sliderLeft',[
      transition(':leave',[           // * => void
        animate('200ms linear',style({
          transform:'translateX(-200%)'
        }))
      ])
    ]),
    trigger('visible',[
      transition(':enter',[         // void => *
       style({transform:'translateY(100%)',opacity:'0'}),
        animate('3s ease',keyframes([
          style({opacity:"0"}),
          style({opacity:"0"}),
          style({opacity:"0.2",transform:'translateY(0%)'}),
          style({opacity:"0.4"}),
          style({opacity:"0.8"}),
         style({opacity:"1"}),
        ]))
      ])
    ])
  ]
}) 
export class AppComponent {
  title = 'AnimSession';

  loginPage:boolean=false;
  doneImg=false;
  buttonHide=true;
  newanimshow=false;

  loginShow(){
   this.loginPage=!this.loginPage;
   this.buttonHide=false;
  }
  done(){
    this.doneImg=true;
    this.loginPage=false;
    this.newanimshow=true;
  }
}
