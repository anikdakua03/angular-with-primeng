import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit, Type } from '@angular/core';
import { MyTableComponent } from '@components/showcase/my-table/my-table.component';
import { TabsModule } from 'primeng/tabs';

@Component({
  selector: 'app-my-tab-group',
  imports: [TabsModule, NgIf, NgFor],
  templateUrl: './my-tab-group.component.html',
  styleUrl: './my-tab-group.component.scss'
})
export class MyTabGroupComponent implements OnInit {
  tabs: { title: string; value: number; content: Type<any> | string }[] = [];
  currIndex: number = 2;

  ngOnInit() {
    this.tabs = [
      {
        title: 'Tab 1',
        value: 0,
        content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.Dolorem quaerat earum fugit suscipit debitis, iste provident veritatis sed autem natus quos dolore minus? Dolore, unde!`
      },
      {
        title: 'Tab 2',
        value: 1,
        content: MyTableComponent
      },
      {
        title: 'Tab 3',
        value: 2,
        content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum aspernatur dignissimos sapiente! Odio maiores a dignissimos voluptate soluta? Omnis eius possimus temporibus quibusdam sit fugit nihil neque, quia earum sequi soluta repudiandae obcaecati consequatur, exercitationem laudantium maxime, dolorem sunt laboriosam cumque modi voluptates facilis iusto! Qui nemo voluptatibus magni ad?`
      },
    ];
  }
  addTab() {
    this.currIndex++;
    this.tabs.push(
      {
        title: `Tab ${this.currIndex + 1}`,
        value: this.currIndex + 1,
        content: MyTableComponent
      },
    );
  }

  removeThisTab(event: any, value: number) {
    console.log("WHat I got ? ", event);
    console.log("WHat I got in value? ", value);
    this.tabs = this.tabs.filter(tab => tab.value !== value);  // Remove the tab based on value
  }

  trackByValue(index: number, tab: { value: number }) {
    return tab.value;  // Track by value to improve performance
  }

}
