import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // Khai bao bien 
  public phepTinh: string = '';
  public inputValueFromButton: string = '';
  constructor() {}

  /**
   * @author Zin
   * @param $event: Giá trị này nhận khi nhấn nút trên máy tính
   *  xử lý khi thây nhấn nút = thì gọi function btnBang
   */
  public clickButton($event: any) {
    if($event === '=') {
      this.btnBang(this.inputValueFromButton);
      return;
    }
    this.inputValueFromButton += `${$event}`;
  }

  /**
   * @author Zin
   * @param toanTu nhận giá trị ở function clickButton 
   * rồi dùng eval tính toán
   */
  private btnBang(toanTu: any) {
    let toanTuMoi = toanTu.replace('÷', '/');
    toanTuMoi = toanTu.replace('x', '*');
    let kq = eval(toanTuMoi);
    this.phepTinh =  `${this.inputValueFromButton} =`;
    this.inputValueFromButton = kq;
  }
}
