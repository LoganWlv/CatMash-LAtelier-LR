import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-cat-ranking',
    templateUrl: './cat-ranking.component.html',
    styleUrls: ['./cat-ranking.component.css']
})
export class CatRankingComponent implements OnInit {
    @Input() value: string;
    @Input() catUrl: string;
    randomColor: string = 'hsl(' + Math.random() * 360 + ', 100%, 75%)';

    ngOnInit() {
        console.log("new row: " + this.value + " - " + this.catUrl);
    }
}