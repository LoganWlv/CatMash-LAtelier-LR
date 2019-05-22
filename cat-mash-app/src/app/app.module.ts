import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { MatDialogModule } from '@angular/material';
import { AppComponent, CatsRankingDialog } from './app.component';
import { CatRankingComponent } from './cat-ranking/cat-ranking.component';

@NgModule({
  declarations: [
    AppComponent,
    CatsRankingDialog,
    CatRankingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    AppComponent,
    CatsRankingDialog
  ]
})
export class AppModule { }
