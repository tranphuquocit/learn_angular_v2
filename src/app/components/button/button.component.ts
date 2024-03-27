import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from "@angular/core";

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})

export class ButtonComponent implements OnChanges, OnInit, OnDestroy {

  @Input() inputValue: any = 0;
  @Output() outputValue = new EventEmitter();
  public inputClass: any = '';
  constructor() {
    // Chạy đầu tiên khi khởi tạo component
  }
  ngOnChanges(changes: SimpleChanges): void {
    // Chạy tiếp theo check xem sự thay đổi của biến sau khi khởi tạo
    if(this.inputValue === '=') {
      this.inputClass = 'style-xanh';
    }
    if(this.inputValue === '+' || this.inputValue === '-' ||
    this.inputValue === 'x' || this.inputValue === '÷') {
      this.inputClass = 'style-den';
    }
  }
  ngOnInit(): void {
    // Chạy tiếp theo
  }

  ngOnDestroy(): void {
    // Chạy cuối cùng
  }

  public sendValue(value: any) {
    this.outputValue.emit(value);
  }
}