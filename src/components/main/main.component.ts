import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  @Input() item = '';
  @Input() item1 = '';
  @Input() item2 = '';
  @Input() item3 = '';
  @Input() item4 = '';
  @Input() item5 = '';
  @Input() item6 = '';
  listNews = [
    {
      title: 'Recent Post',
      content: [
        {
          description: 'Hello world',
        },
        {
          description: 'Hello WordPress',
        },
      ],
    },
    {
      title: 'Meta',
      content: [
        {
          description: 'Site Admin',
        },
        {
          description: 'Log out',
        },
      ],
    },
    {
      title: 'Archives',
      content: [
        {
          description: 'September',
        },
        {
          description: 'October',
        },
      ],
    },
    {
      title: 'categories',
      content: [
        {
          description: 'Uncategorized',
        },
      ],
    },
  ];
  constructor() {}
}
