import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

 @Input() item ='';
 @Input() item1 ='';
 @Input() item2 ='';
}
