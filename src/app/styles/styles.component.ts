import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-styles',
  templateUrl: './styles.component.html',
  styleUrls: ['./styles.component.scss']
})
export class StylesComponent implements OnInit {
  isHalf = false;

  constructor() { }

  ngOnInit(): void {
  }

}
