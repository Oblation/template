import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.scss']
})
export class InterpolationComponent implements OnInit {

  name = 'World'

  printGreeting(): string {
    return 'Hello,' + this.name
  }
  constructor() { }

  ngOnInit(): void {
  }

}
