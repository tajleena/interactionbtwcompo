import { Component, OnInit,Input,Output } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
   receivedParentMessage:string;
   messageToSendParent:string='';

  constructor() { }

  ngOnInit() {
  }
  SendToParent(){
    this.messageToSendParent="Hello Child. How Are You?";
  }
  getMessage(message:string){
    this.receivedParentMessage=message;
  }

}