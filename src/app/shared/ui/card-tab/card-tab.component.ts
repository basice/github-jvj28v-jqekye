import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-tab',
  templateUrl: './card-tab.component.html',
  styleUrls: ['./card-tab.component.scss']
})
export class CardTabComponent implements OnInit {
  @Input('tabTitle') title: string;
  @Input() active: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }
}
