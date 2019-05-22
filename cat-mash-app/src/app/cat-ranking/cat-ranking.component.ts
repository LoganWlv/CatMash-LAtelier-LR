import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-cat-ranking',
    templateUrl: './cat-ranking.component.html',
    styleUrls: ['./cat-ranking.component.css']
})
export class CatRankingComponent implements OnInit {
    @Input() value: number;
    @Input() maxValue: number;
    @Input() catUrl: string;
    randomColor: string = 'hsl(' + Math.random() * 360 + ', 100%, 75%)';
    barWidth = '0%';

    ngOnInit() {
        const widthValue = (this.value * 100) / this.maxValue;
        this.barWidth = widthValue + '%';
    }
}