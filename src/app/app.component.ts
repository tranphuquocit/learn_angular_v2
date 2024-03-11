import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  titleHeader: string = 'Học Bạn';
  titleHeader1: string = 'another Worthpress site';
  titleHeader2: string = 'Sample Page';
  mainTitle: string = 'HELLO WORLD';
  mainDate: string = 'September 28 2024';
  mainLink1: string = 'Hocbai.vn';
  mainLink2: string = 'Uncategorized';
  mainLink3: string = 'Edit Post';
  mainDescrip: string =
    'Welcom to WordPress! This is your first post edit or delete it then start writing!';
  mainComment: string = 'One Comment';
  footerTitle: string = 'Powered by WordPress and Smartline';
}
