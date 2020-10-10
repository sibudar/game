import { Component, OnInit } from '@angular/core';
import consoletodiv  from '@lmkhwana/consoletodiv';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    consoletodiv('logger');
  }

}
