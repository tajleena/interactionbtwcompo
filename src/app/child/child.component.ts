import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() receivedParentMessage:string;
  @Output() messageToEmit= new EventEmitter <string>();
  // @Output() messageToSendParent:string;
  constructor() { }

  ngOnInit() {
  }
  SendToChild(){
    this.messageToEmit.emit("Hello Parent. I am Fine");
  }
  // getMessage(message:string){
  //   this.receivedParentMessage=message;
  // }

}