(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/app-cat-ranking-dialog.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app-cat-ranking-dialog.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div mat-dialog-content>\r\n    <h1 style=\"font-family: monospace;\">Voici les chats les plus beaux !</h1>\r\n\r\n    <app-cat-ranking *ngFor=\"let key of getKeys(data.rankingData)\" [catUrl]=\"key\" [value]=\"data.rankingData.get(key)\"\r\n        [maxValue]=\"data.maxValue\">\r\n    </app-cat-ranking>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"first-choice box\">\n    <span class=\"title title-left\">CAT</span>\n    <img *ngIf=\"isDataLoaded\" class=\"first-picture cat\" [src]=\"firstCat.url\" (click)=\"vote(true)\">\n  </div>\n  <div class=\"second-choice box\">\n    <span class=\"title title-right\">MASH</span>\n    <img *ngIf=\"isDataLoaded\" class=\"second-picture cat\" [src]=\"secondCat.url\" (click)=\"vote(false)\">\n  </div>\n  <div class=\"ranking-box\" (click)=\"openDialog()\">\n    <div class=\"ranking-box-content\">\n      <span class=\"ranking-box-main-text\">Voir les plus beaux chats</span>\n      <span class=\"ranking-box-secondary-text\">{{voteCounter}} votes</span>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/cat-ranking/cat-ranking.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cat-ranking/cat-ranking.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bar-container\">\r\n    <img class=\"element\" [src]=\"catUrl\">\r\n    <div class=\"bar\" [style.background-color]=\"randomColor\" [style.width]=\"barWidth\">\r\n        <span>{{this.value}}</span>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media screen and (max-width: 600px) {\r\n    .cat {\r\n        height:30vh !important;\r\n        width:30vh !important;\r\n    }\r\n    .first-picture {\r\n        border:lightgreen solid 5px !important;\r\n    }\r\n    \r\n    .second-picture {\r\n        border: lightcoral solid 5px !important;\r\n    }\r\n    .ranking-box-main-text {\r\n        font-size: 1em !important;\r\n    }\r\n    \r\n    .ranking-box-secondary-text {\r\n        font-size: 0.8em !important;\r\n    }\r\n\r\n    .cat:hover {\r\n        border: pink 5px solid !important;\r\n        cursor: pointer !important;\r\n    }\r\n}\r\n\r\n@media screen and (max-height: 300px) {\r\n    .cat {\r\n        height:30vh !important;\r\n        width:30vh !important;\r\n    }\r\n    .first-picture {\r\n        border:lightgreen solid 5px !important;\r\n    }\r\n    \r\n    .second-picture {\r\n        border: lightcoral solid 5px !important;\r\n    }\r\n    .title {\r\n        font-size: 2.5em !important;\r\n    }\r\n    .cat:hover {\r\n        border: pink 5px solid !important;\r\n        cursor: pointer !important;\r\n    }\r\n}\r\n\r\n@media screen and (max-height: 300px)  and (max-width: 600px){\r\n    .ranking-box-main-text {\r\n        font-size: 0.8em !important;\r\n    }\r\n    \r\n    .ranking-box-secondary-text {\r\n        font-size: 0.6em !important;\r\n    }\r\n}\r\n\r\n.main-content {\r\n    display: flex;\r\n    height: 100vh;\r\n}\r\n\r\n.box {\r\n    display: flex;\r\n    width: 100%;\r\n    height: 100%;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n.first-choice {\r\n    background-color: lightcoral;\r\n    width: 100%;\r\n    position: relative;\r\n}\r\n\r\n.second-choice {\r\n    background-color: lightgreen;\r\n    width: 100%;\r\n    position: relative;\r\n}\r\n\r\n.cat {\r\n    height:40vh;\r\n    width:40vh;\r\n    border-radius: 50%;\r\n    transition: all 0.5s ease;\r\n}\r\n\r\n.first-picture {\r\n    border:lightgreen solid 10px;\r\n}\r\n\r\n.second-picture {\r\n    border: lightcoral solid 10px;\r\n}\r\n\r\n.cat:hover {\r\n    border: pink 12px solid;\r\n    cursor: pointer;\r\n}\r\n\r\n.title {\r\n    position: absolute;\r\n    font-weight: bold;\r\n    font-size: 5em;\r\n    font-family: monospace;\r\n    transition: all 0.5s ease;\r\n}\r\n\r\n.title-left {\r\n    top: 0;\r\n    right: 0;\r\n    color: lightgreen;\r\n    border-top: lightgreen solid 5px;\r\n    border-bottom: lightgreen solid 5px;\r\n    border-left: lightgreen solid 5px;\r\n\r\n}\r\n\r\n.title-right {\r\n    top: 0;\r\n    left: 0;\r\n    color: lightcoral;\r\n    border-top: lightcoral solid 5px;\r\n    border-bottom: lightcoral solid 5px;\r\n    border-right: lightcoral solid 5px;\r\n}\r\n\r\n.ranking-box {\r\n    position: absolute;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    bottom:0;\r\n    width: 100%;\r\n}\r\n\r\n.ranking-box-content {\r\n    border: 2px solid palevioletred;\r\n    background-color: cornflowerblue;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    font-family: monospace;\r\n    color: white;\r\n    font-weight: bold;\r\n    text-transform: uppercase;\r\n    transition: all 0.5s ease;\r\n    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);\r\n    padding-right: 4em;\r\n    padding-left: 4em;\r\n    padding-bottom: 1em;\r\n    padding-top: 1em;\r\n}\r\n\r\n.ranking-box-content:hover {\r\n    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);\r\n    padding-top: 1.2em;\r\n    cursor: pointer;\r\n    padding-right: 4.5em;\r\n    padding-left: 4.5em;\r\n}\r\n\r\n.ranking-box-main-text {\r\n    font-size: 1.5em;\r\n    transition: all 0.5s ease;\r\n}\r\n\r\n.ranking-box-secondary-text {\r\n    font-size: 1em;\r\n    transition: all 0.5s ease;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtRQUNJLHNCQUFzQjtRQUN0QixxQkFBcUI7SUFDekI7SUFDQTtRQUNJLHNDQUFzQztJQUMxQzs7SUFFQTtRQUNJLHVDQUF1QztJQUMzQztJQUNBO1FBQ0kseUJBQXlCO0lBQzdCOztJQUVBO1FBQ0ksMkJBQTJCO0lBQy9COztJQUVBO1FBQ0ksaUNBQWlDO1FBQ2pDLDBCQUEwQjtJQUM5QjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxzQkFBc0I7UUFDdEIscUJBQXFCO0lBQ3pCO0lBQ0E7UUFDSSxzQ0FBc0M7SUFDMUM7O0lBRUE7UUFDSSx1Q0FBdUM7SUFDM0M7SUFDQTtRQUNJLDJCQUEyQjtJQUMvQjtJQUNBO1FBQ0ksaUNBQWlDO1FBQ2pDLDBCQUEwQjtJQUM5QjtBQUNKOztBQUVBO0lBQ0k7UUFDSSwyQkFBMkI7SUFDL0I7O0lBRUE7UUFDSSwyQkFBMkI7SUFDL0I7QUFDSjs7QUFFQTtJQUNJLGFBQWE7SUFDYixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsY0FBYztJQUNkLHNCQUFzQjtJQUN0Qix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxNQUFNO0lBQ04sUUFBUTtJQUNSLGlCQUFpQjtJQUNqQixnQ0FBZ0M7SUFDaEMsbUNBQW1DO0lBQ25DLGlDQUFpQzs7QUFFckM7O0FBRUE7SUFDSSxNQUFNO0lBQ04sT0FBTztJQUNQLGlCQUFpQjtJQUNqQixnQ0FBZ0M7SUFDaEMsbUNBQW1DO0lBQ25DLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsUUFBUTtJQUNSLFdBQVc7QUFDZjs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQixnQ0FBZ0M7SUFDaEMsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixzRUFBc0U7SUFDdEUsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksc0VBQXNFO0lBQ3RFLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLmNhdCB7XHJcbiAgICAgICAgaGVpZ2h0OjMwdmggIWltcG9ydGFudDtcclxuICAgICAgICB3aWR0aDozMHZoICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuZmlyc3QtcGljdHVyZSB7XHJcbiAgICAgICAgYm9yZGVyOmxpZ2h0Z3JlZW4gc29saWQgNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5zZWNvbmQtcGljdHVyZSB7XHJcbiAgICAgICAgYm9yZGVyOiBsaWdodGNvcmFsIHNvbGlkIDVweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnJhbmtpbmctYm94LW1haW4tdGV4dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnJhbmtpbmctYm94LXNlY29uZGFyeS10ZXh0IHtcclxuICAgICAgICBmb250LXNpemU6IDAuOGVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhdDpob3ZlciB7XHJcbiAgICAgICAgYm9yZGVyOiBwaW5rIDVweCBzb2xpZCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogMzAwcHgpIHtcclxuICAgIC5jYXQge1xyXG4gICAgICAgIGhlaWdodDozMHZoICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgd2lkdGg6MzB2aCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmZpcnN0LXBpY3R1cmUge1xyXG4gICAgICAgIGJvcmRlcjpsaWdodGdyZWVuIHNvbGlkIDVweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuc2Vjb25kLXBpY3R1cmUge1xyXG4gICAgICAgIGJvcmRlcjogbGlnaHRjb3JhbCBzb2xpZCA1cHggIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC50aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyLjVlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmNhdDpob3ZlciB7XHJcbiAgICAgICAgYm9yZGVyOiBwaW5rIDVweCBzb2xpZCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogMzAwcHgpICBhbmQgKG1heC13aWR0aDogNjAwcHgpe1xyXG4gICAgLnJhbmtpbmctYm94LW1haW4tdGV4dCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjhlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAucmFua2luZy1ib3gtc2Vjb25kYXJ5LXRleHQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC42ZW0gIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG5cclxuLm1haW4tY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxufVxyXG5cclxuLmJveCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5maXJzdC1jaG9pY2Uge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uc2Vjb25kLWNob2ljZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZWVuO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5jYXQge1xyXG4gICAgaGVpZ2h0OjQwdmg7XHJcbiAgICB3aWR0aDo0MHZoO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxufVxyXG5cclxuLmZpcnN0LXBpY3R1cmUge1xyXG4gICAgYm9yZGVyOmxpZ2h0Z3JlZW4gc29saWQgMTBweDtcclxufVxyXG5cclxuLnNlY29uZC1waWN0dXJlIHtcclxuICAgIGJvcmRlcjogbGlnaHRjb3JhbCBzb2xpZCAxMHB4O1xyXG59XHJcblxyXG4uY2F0OmhvdmVyIHtcclxuICAgIGJvcmRlcjogcGluayAxMnB4IHNvbGlkO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDVlbTtcclxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlO1xyXG59XHJcblxyXG4udGl0bGUtbGVmdCB7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGNvbG9yOiBsaWdodGdyZWVuO1xyXG4gICAgYm9yZGVyLXRvcDogbGlnaHRncmVlbiBzb2xpZCA1cHg7XHJcbiAgICBib3JkZXItYm90dG9tOiBsaWdodGdyZWVuIHNvbGlkIDVweDtcclxuICAgIGJvcmRlci1sZWZ0OiBsaWdodGdyZWVuIHNvbGlkIDVweDtcclxuXHJcbn1cclxuXHJcbi50aXRsZS1yaWdodCB7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgY29sb3I6IGxpZ2h0Y29yYWw7XHJcbiAgICBib3JkZXItdG9wOiBsaWdodGNvcmFsIHNvbGlkIDVweDtcclxuICAgIGJvcmRlci1ib3R0b206IGxpZ2h0Y29yYWwgc29saWQgNXB4O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBsaWdodGNvcmFsIHNvbGlkIDVweDtcclxufVxyXG5cclxuLnJhbmtpbmctYm94IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYm90dG9tOjA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnJhbmtpbmctYm94LWNvbnRlbnQge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgcGFsZXZpb2xldHJlZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XHJcbiAgICBib3gtc2hhZG93OiAwIDE0cHggMjhweCByZ2JhKDAsMCwwLDAuMjUpLCAwIDEwcHggMTBweCByZ2JhKDAsMCwwLDAuMjIpO1xyXG4gICAgcGFkZGluZy1yaWdodDogNGVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0ZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xyXG4gICAgcGFkZGluZy10b3A6IDFlbTtcclxufVxyXG5cclxuLnJhbmtpbmctYm94LWNvbnRlbnQ6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMCAxNHB4IDI4cHggcmdiYSgwLDAsMCwwLjI1KSwgMCAxMHB4IDEwcHggcmdiYSgwLDAsMCwwLjIyKTtcclxuICAgIHBhZGRpbmctdG9wOiAxLjJlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDQuNWVtO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA0LjVlbTtcclxufVxyXG5cclxuLnJhbmtpbmctYm94LW1haW4tdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxufVxyXG5cclxuLnJhbmtpbmctYm94LXNlY29uZGFyeS10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: RANKING_DISPLAY_NB, AppComponent, CatsRankingDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RANKING_DISPLAY_NB", function() { return RANKING_DISPLAY_NB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatsRankingDialog", function() { return CatsRankingDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.service */ "./src/app/app.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var RANKING_DISPLAY_NB = 10;
var AppComponent = /** @class */ (function () {
    function AppComponent(appService, catRankingDialog) {
        this.appService = appService;
        this.catRankingDialog = catRankingDialog;
        this.title = 'cat-mash-app';
        this.voteCounter = 0;
        this.catsPossiblePairs = [];
        this.currentPairIndex = 0;
        this.isDataLoaded = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.loadUserId();
        this.loadVotesTotalNumber();
    };
    AppComponent.prototype.vote = function (isFirstCatChosen) {
        var _this = this;
        var voteRequest = {};
        voteRequest.userId = this.userId;
        voteRequest.catId1 = this.firstCat.id;
        voteRequest.catId2 = this.secondCat.id;
        voteRequest.isFirstCatChosen = isFirstCatChosen;
        this.appService.postVote(voteRequest).subscribe(function (data) {
            var newUserVote = {};
            newUserVote.catId1 = _this.firstCat.id;
            newUserVote.catId2 = _this.secondCat.id;
            newUserVote.isFirstCatChosen = isFirstCatChosen;
            _this.userVotes.push(newUserVote);
            _this.voteCounter++;
            _this.findUnvotedCats();
        });
    };
    AppComponent.prototype.loadUserId = function () {
        var _this = this;
        this.appService.getClientIp().subscribe(function (data) {
            _this.userId = data;
            _this.loadUserVotes();
        });
    };
    AppComponent.prototype.loadVotesTotalNumber = function () {
        var _this = this;
        this.appService.getVotesTotalNumber().subscribe(function (data) {
            _this.voteCounter = data;
        });
    };
    AppComponent.prototype.loadUserVotes = function () {
        var _this = this;
        this.appService.getVotesForUser(this.userId).subscribe(function (data) {
            _this.userVotes = data;
            _this.loadCats();
        });
    };
    AppComponent.prototype.loadCats = function () {
        var _this = this;
        this.appService.getCats().subscribe(function (data) {
            var catPairInit = {};
            catPairInit.cat1 = data.images[0];
            catPairInit.cat2 = data.images[1];
            _this.catsPossiblePairs.push(catPairInit);
            _this.computePossibleCatPairs(data.images);
            // TODO Clear method to delete any existing votes in database with unknown cats
            _this.findUnvotedCats();
            _this.isDataLoaded = true;
        });
    };
    AppComponent.prototype.computePossibleCatPairs = function (cats) {
        var _this = this;
        var _loop_1 = function (cat1) {
            var _loop_2 = function (cat2) {
                if (cat1.id !== cat2.id) {
                    var pairExist_1 = false;
                    this_1.catsPossiblePairs.forEach(function (possiblePair) {
                        pairExist_1 = _this.catPairEquals(possiblePair.cat1.id, possiblePair.cat2.id, cat1.id, cat2.id);
                    });
                    if (!pairExist_1) {
                        var newCatPair = {};
                        newCatPair.cat1 = cat1;
                        newCatPair.cat2 = cat2;
                        this_1.catsPossiblePairs.push(newCatPair);
                    }
                }
            };
            for (var _i = 0, cats_2 = cats; _i < cats_2.length; _i++) {
                var cat2 = cats_2[_i];
                _loop_2(cat2);
            }
        };
        var this_1 = this;
        for (var _i = 0, cats_1 = cats; _i < cats_1.length; _i++) {
            var cat1 = cats_1[_i];
            _loop_1(cat1);
        }
        this.clearAlreadyVotedPairs();
    };
    AppComponent.prototype.clearAlreadyVotedPairs = function () {
        var _this = this;
        var i = this.catsPossiblePairs.length;
        var _loop_3 = function () {
            var pairAlreadyVoted = false;
            this_2.userVotes.forEach(function (vote) {
                // tslint:disable-next-line: max-line-length
                pairAlreadyVoted = _this.catPairEquals(vote.catId1, vote.catId2, _this.catsPossiblePairs[i].cat1.id, _this.catsPossiblePairs[i].cat2.id);
            });
            if (pairAlreadyVoted) {
                this_2.catsPossiblePairs.splice(i, 1);
            }
        };
        var this_2 = this;
        while (i--) {
            _loop_3();
        }
        // shuffle the array
        for (var index = this.catsPossiblePairs.length - 1; index > 0; index--) {
            var newIndex = Math.floor(Math.random() * (index + 1));
            var tmp = this.catsPossiblePairs[index];
            this.catsPossiblePairs[newIndex] = tmp;
        }
    };
    AppComponent.prototype.findUnvotedCats = function () {
        for (var _i = 0, _a = this.userVotes; _i < _a.length; _i++) {
            var vote = _a[_i];
            var currentPair = this.catsPossiblePairs[this.currentPairIndex];
            var currentPairAlreadyVoted = this.catPairEquals(vote.catId1, vote.catId2, currentPair.cat1.id, currentPair.cat2.id);
            if (currentPairAlreadyVoted) {
                this.currentPairIndex++;
                this.findUnvotedCats();
            }
        }
        this.firstCat = this.catsPossiblePairs[this.currentPairIndex].cat1;
        this.secondCat = this.catsPossiblePairs[this.currentPairIndex].cat2;
    };
    AppComponent.prototype.catPairEquals = function (firstCatId1, firstCatId2, secondCatId1, secondCatId2) {
        if (firstCatId1 === secondCatId1 && firstCatId2 === secondCatId2) {
            return true;
        }
        if (firstCatId1 === secondCatId2 && firstCatId2 === secondCatId1) {
            return true;
        }
        return false;
    };
    AppComponent.prototype.openDialog = function () {
        var _this = this;
        var votesHistoric = [];
        this.appService.getAllVotes().subscribe(function (data) {
            votesHistoric = data;
            var existingCats = [];
            _this.appService.getCats().subscribe(function (cats) {
                existingCats = cats.images;
                var rankingData = new Map();
                votesHistoric.forEach(function (vote) {
                    if (vote.isFirstCatChosen) {
                        var mapKey = existingCats.find(function (cat) { return cat.id === vote.catId1; }).url;
                        if (rankingData.get(mapKey) !== undefined) {
                            rankingData.set(mapKey, rankingData.get(mapKey) + 1);
                        }
                        else {
                            rankingData.set(mapKey, 1);
                        }
                    }
                    else {
                        var mapKey = existingCats.find(function (cat) { return cat.id === vote.catId2; }).url;
                        if (rankingData.get(mapKey) !== undefined) {
                            rankingData.set(mapKey, rankingData.get(mapKey) + 1);
                        }
                        else {
                            rankingData.set(mapKey, 1);
                        }
                    }
                });
                var sortStringValues = function (a, b) { return b[1] - a[1]; };
                rankingData = new Map(Array.from(rankingData).sort(sortStringValues));
                rankingData = new Map(Array.from(rankingData).splice(0, RANKING_DISPLAY_NB));
                var maxValue = Array.from(rankingData)[0][1];
                var dialogRef = _this.catRankingDialog.open(CatsRankingDialog, {
                    width: '50vw',
                    position: { bottom: '0' },
                    data: { rankingData: rankingData, maxValue: maxValue }
                });
                dialogRef.afterClosed().subscribe(function (result) {
                });
            });
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            providers: [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]],
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]])
    ], AppComponent);
    return AppComponent;
}());

var CatsRankingDialog = /** @class */ (function () {
    function CatsRankingDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    CatsRankingDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    CatsRankingDialog.prototype.getKeys = function (map) {
        return Array.from(map.keys());
    };
    CatsRankingDialog = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cat-ranking-dialog',
            template: __webpack_require__(/*! raw-loader!./app-cat-ranking-dialog.html */ "./node_modules/raw-loader/index.js!./src/app/app-cat-ranking-dialog.html"),
        })
        // tslint:disable-next-line: component-class-suffix
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object])
    ], CatsRankingDialog);
    return CatsRankingDialog;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _cat_ranking_cat_ranking_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cat-ranking/cat-ranking.component */ "./src/app/cat-ranking/cat-ranking.component.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _app_component__WEBPACK_IMPORTED_MODULE_7__["CatsRankingDialog"],
                _cat_ranking_cat_ranking_component__WEBPACK_IMPORTED_MODULE_8__["CatRankingComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
            entryComponents: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _app_component__WEBPACK_IMPORTED_MODULE_7__["CatsRankingDialog"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.service.ts":
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var CATS_RESOURCE = '/search/cats';
var CATS_VOTES_RESOURCE = '/cats/votes';
var POST_VOTE = '/vote';
var VOTES_NUMBER_RESOURCE = 'votes/counter';
var CLIENT_IP_RESOURCE = 'https://api6.ipify.org/?format=text';
var AppService = /** @class */ (function () {
    function AppService(http) {
        this.http = http;
    }
    AppService.prototype.getCats = function () {
        return this.http.get(CATS_RESOURCE);
    };
    AppService.prototype.getClientIp = function () {
        // about 'text' as 'text' https://github.com/angular/angular/issues/18586#issuecomment-321333934
        var requestOptions = {
            responseType: 'text'
        };
        return this.http.get(CLIENT_IP_RESOURCE, requestOptions);
    };
    AppService.prototype.getVotesForUser = function (userId) {
        return this.http.get(CATS_VOTES_RESOURCE + '/' + userId);
    };
    AppService.prototype.getAllVotes = function () {
        return this.http.get(CATS_VOTES_RESOURCE);
    };
    AppService.prototype.getVotesTotalNumber = function () {
        return this.http.get(VOTES_NUMBER_RESOURCE);
    };
    AppService.prototype.postVote = function (vote) {
        var requestOptions = {
            responseType: 'text'
        };
        return this.http.post(POST_VOTE, vote, requestOptions);
    };
    AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/cat-ranking/cat-ranking.component.css":
/*!*******************************************************!*\
  !*** ./src/app/cat-ranking/cat-ranking.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bar-container {\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n    display: flex;\r\n}\r\n.bar {\r\n    font-size: 1.5em;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    font-weight: bold;\r\n    font-family: monospace;\r\n    box-shadow: 5px 5px 15px 5px #ffccc9;\r\n    border: solid 1px;\r\n}\r\n.element {\r\n    width: 60px;\r\n    height: 60px;\r\n    padding-right: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2F0LXJhbmtpbmcvY2F0LXJhbmtpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsb0NBQW9DO0lBQ3BDLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jYXQtcmFua2luZy9jYXQtcmFua2luZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhci1jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG4uYmFyIHtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCAxNXB4IDVweCAjZmZjY2M5O1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHg7XHJcbn1cclxuLmVsZW1lbnQge1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/cat-ranking/cat-ranking.component.ts":
/*!******************************************************!*\
  !*** ./src/app/cat-ranking/cat-ranking.component.ts ***!
  \******************************************************/
/*! exports provided: CatRankingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatRankingComponent", function() { return CatRankingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CatRankingComponent = /** @class */ (function () {
    function CatRankingComponent() {
        this.randomColor = 'hsl(' + Math.random() * 360 + ', 100%, 75%)';
        this.barWidth = '0%';
    }
    CatRankingComponent.prototype.ngOnInit = function () {
        var widthValue = (this.value * 100) / this.maxValue;
        this.barWidth = widthValue + '%';
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], CatRankingComponent.prototype, "value", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], CatRankingComponent.prototype, "maxValue", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CatRankingComponent.prototype, "catUrl", void 0);
    CatRankingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cat-ranking',
            template: __webpack_require__(/*! raw-loader!./cat-ranking.component.html */ "./node_modules/raw-loader/index.js!./src/app/cat-ranking/cat-ranking.component.html"),
            styles: [__webpack_require__(/*! ./cat-ranking.component.css */ "./src/app/cat-ranking/cat-ranking.component.css")]
        })
    ], CatRankingComponent);
    return CatRankingComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Workspace\Eclipse\CatMash\cat-mash-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map