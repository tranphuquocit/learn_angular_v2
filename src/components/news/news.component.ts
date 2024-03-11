import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnChanges, OnInit, OnDestroy {

  @Input() title:string = "Angular";
  @Input() content!: any;
  listContent: any = [];
  constructor(){
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['content'].currentValue) {
      this.listContent = changes['content'].currentValue;
    }
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }
}