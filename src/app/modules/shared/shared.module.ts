import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {ScrollableTopComponent, ImageSliderComponent, HorizontalGridComponent} from './component';
import {GridItemDirective,GridItemImageDirective,GridItemTitleDirective} from "./directives";


@NgModule({
    declarations: [
        ScrollableTopComponent,
        ImageSliderComponent,
        HorizontalGridComponent,
        GridItemDirective,
        GridItemImageDirective,
        GridItemTitleDirective
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        ScrollableTopComponent,
        ImageSliderComponent,
        HorizontalGridComponent,
        GridItemDirective,
        GridItemImageDirective,
        GridItemTitleDirective
    ]
})
export class SharedModule {
}
