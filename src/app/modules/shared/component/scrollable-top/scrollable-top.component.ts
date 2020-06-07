import {
  AfterContentInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
export interface TopMenu {
  title: string;
  readonly link?: string;
}

@Component({
  selector: 'app-scrollable-top',
  templateUrl: './scrollable-top.component.html',
  styleUrls: ['./scrollable-top.component.scss']
})
export class ScrollableTopComponent implements OnInit, OnChanges, AfterContentInit {
  @Input() menus: TopMenu[];
  @Input() backgroundColor: string = 'white';
  @Input() activeColor:  string = 'yellow';
  @Input() titleColor: string = 'blue';
  @Input() indicatorColor: string = 'brown';
  @Output() tabSelectd = new EventEmitter();
  selectedIndex = -1;
  constructor() {
    console.log('constructor');
    setTimeout(()=>{console.log('setTimeout')},0)
  }
  handleSelect(event,index:number){
    this.selectedIndex = index;
    this.tabSelectd.emit(this.menus[this.selectedIndex])
  }
  ngOnInit() {
    console.log('ngOnInit')
  }
  ngOnChanges(changes:SimpleChanges) {
  }

/*  ngDoCheck() {
    //组件脏值检测 多次
    console.log('ngDoCheck')
  } */
  ngAfterContentInit(){
    // 组件内容初始化
  }
}
