import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'profile-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  public isDay : boolean = true
  constructor() { }

  ngOnInit() {

  }

}
