import {Component, ViewChild} from '@angular/core';
import {TopMenu} from "./modules/shared/component/scrollable-top";
import {ImageSlider, ImageSliderComponent} from "./modules/shared/component/image-slider";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    // @ViewChild('imageSlider',{static : true}) imgSlider: ElementRef;
    // @ViewChild('imageSlider',{static : true}) imgSlider: ImageSliderComponent;
    @ViewChild(ImageSliderComponent, {static: true}) imgSlider: ImageSliderComponent;
    title = 'pingduoduo';
    username: string = 'root';
    topMenus: TopMenu[] = [
        {
            title: '热门',
            link: ''
        },
        {
            title: '男装',
            link: ''
        },
        {
            title: '百货',
            link: ''
        },
        {
            title: '运动',
            link: ''
        },
        {
            title: '手机',
            link: ''
        },
        {
            title: '家纺',
            link: ''
        },
        {
            title: '食品',
            link: ''
        },
        {
            title: '电器',
            link: ''
        },
        {
            title: '鞋包',
            link: ''
        },
        {
            title: '汽车',
            link: ''
        },
        {
            title: '水果',
            link: ''
        },
        {
            title: '电脑',
            link: ''
        },
        {
            title: '内衣',
            link: ''
        },
        {
            title: '家装',
            link: ''
        },
        {
            title: '母婴',
            link: ''
        },
        {
            title: '美妆',
            link: ''
        },
        {
            title: '家具',
            link: ''
        }
    ];
    imageSliders: ImageSlider[] = [
        {
            imgUrl:
                'http://t00img.yangkeduo.com/goods/2019-10-09/c505079f98cba2bed0bb1f451076834c.png?imageMogr2/format/webp/quality/50',
            link: '',
            caption: ''
        },
        {
            imgUrl:
                'http://t00img.yangkeduo.com/goods/images/2019-10-09/cc67ba6d-3227-438d-b5fb-c0d748d0c987.jpg?imageMogr2/format/webp/quality/50',
            link: '',
            caption: ''
        },
        {
            imgUrl:
                'http://t16img.yangkeduo.com/pdd_oms/2019-10-09/08e6edc232a41113231d8fdbbe2ff9fb.jpg?imageMogr2/format/webp/quality/50',
            link: '',
            caption: ''
        },
        {
            imgUrl:
                'http://t16img.yangkeduo.com/pdd_oms/2019-10-09/20a847774549d9f50c20a892fe3332b3.png?imageMogr2/format/webp/quality/50',
            link: '',
            caption: ''
        },
        {
            imgUrl:
                'http://t00img.yangkeduo.com/goods/images/2019-10-09/0a84376e-354c-4cc9-8afd-607b70a2f905.jpg?imageMogr2/format/webp/quality/50',
            link: '',
            caption: ''
        },
        {
            imgUrl:
                'http://t16img.yangkeduo.com/phone_adx/d4539b5c27b7d5da5c158d3c08671615.jpg?imageMogr2/format/webp/quality/50',
            link: '',
            caption: ''
        },
        {
            imgUrl:
                'http://t16img.yangkeduo.com/phone_adx/339dbc2554f608366d2767f5ee6acde9.jpg?imageMogr2/format/webp/quality/50',
            link: '',
            caption: ''
        },
        {
            imgUrl:
                'http://t00img.yangkeduo.com/goods/2019-10-09/8cc9dc7f0075b04df8a1b3d294c98f08.jpeg?imageMogr2/format/webp/quality/50',
            link: '',
            caption: ''
        },
        {
            imgUrl:
                'http://t00img.yangkeduo.com/goods/2019-10-09/7e3d8b216bdd9d2a403a4c87619e1da2.jpeg?imageMogr2/format/webp/quality/50',
            link: '',
            caption: ''
        },
    ];

    menuSelect(topMenu: TopMenu) {
        console.log(topMenu)
    }

    ngAfterViewInit() {
        console.log(this.imgSlider, 'fandepeng')
    }
}
