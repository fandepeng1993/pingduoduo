import {
    AfterViewInit,
    Component,
    ElementRef,
    Input,
    OnDestroy,
    OnInit,
    QueryList,
    Renderer2,
    ViewChild,
    ViewChildren
} from '@angular/core';


export interface ImageSlider {
    imgUrl: string;
    link: string;
    caption: string
}

@Component({
    selector: 'app-image-slider',
    templateUrl: './image-slider.component.html',
    styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent implements OnInit,OnDestroy,AfterViewInit {
    @Input() sliders:ImageSlider[];
    // ngFor mgIf
    @Input() sliderHeight = '160px';
    @Input() intervalBySeconds = 2;
    @ViewChild('imageSlider', {static: true}) imgSlider:ElementRef;
    //  可以使用 引用组件类型
    @ViewChildren('img') imgs: QueryList<ElementRef>;
    selectedIndex: number = 0;
    intervalId;

    testfdp = ()=>{
        console.log('FDP')
    };
    constructor(private rd2: Renderer2) {

    }

    ngOnInit() {
        // console.log(this.imgSlider);
        // console.log(this.imgs);
        // this.imgSlider.nativeElement.innerHTML = 'hello'
    }

    ngAfterViewInit(): void {
        // this.imgs.forEach((item)=>item.nativeElement.style.height='100px')
        // this.imgs.forEach((item) => this.rd2.setStyle(item.nativeElement,'height','100px'))
       // console.log(this.imgs,'ppp');
       let i:number= 0;
       this.intervalId = setInterval(()=>{
            this.rd2.setProperty(this.imgSlider.nativeElement,'scrollLeft', (this.getIndex(++this.selectedIndex) * this.imgSlider.nativeElement.scrollWidth) / this.sliders.length )
        },this.intervalBySeconds * 5000)
    }

    getIndex(idx: number): number {
        return idx >= 0 ? idx % this.sliders.length : this.sliders.length - (Math.abs(idx) % this.sliders.length);
    }

    handleScroll(ev){
        // 滑动到第几张图
        const ratio = (ev.target.scrollLeft * this.sliders.length) / ev.target.scrollWidth;
        this.selectedIndex = Math.round(ratio)
    }

    ngOnDestroy():void{
        clearInterval(this.intervalId)
    }

}
