import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My first application';
  autor = 'Rogers Paredes';
  age = 24 ;
  count = 0;
  imgSource = './../favicon.ico';
}
