import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './child.component.html',
  styleUrls: [ './app.component.css' ]
})
export class ChildComponent implements OnInit  {
  receivedParentMessage:string;

  messageToEmit:string;
  
}
