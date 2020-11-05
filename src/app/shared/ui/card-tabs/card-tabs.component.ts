import {AfterContentInit, Component, ContentChildren, Input, OnInit, QueryList} from '@angular/core';
import {CardTabComponent} from "../card-tab/card-tab.component";

@Component({
  selector: 'app-card-tabs',
  templateUrl: './card-tabs.component.html',
  styleUrls: ['./card-tabs.component.scss']
})
export class CardTabsComponent implements OnInit, AfterContentInit {
  @ContentChildren(CardTabComponent) tabs: QueryList<CardTabComponent>;
  @Input('className') className: string;

  ngOnInit(): void {

  }

  // contentChildren are set
  ngAfterContentInit() {
    setTimeout(() => {
      // get all active tabs
      let activeTabs = this.tabs.filter((tab) => tab.active);

      // if there is no active tab set, activate the first
      if (activeTabs.length === 0) {
        this.selectTab(this.tabs.first);
      }
    });

  }


  selectTab(tab: CardTabComponent) {
    // deactivate all tabs
    this.tabs.toArray().forEach(tab => tab.active = false);

    // activate the tab the user has clicked on.
    tab.active = true;
  }
}
