import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

subject = [
  {id:1, bookname:"java"},
  {id:2, bookname:"html"}
]
generatenumber :number
  title = 'test-app';
  getnumber(value:number){
this.generatenumber=value
  }
}
