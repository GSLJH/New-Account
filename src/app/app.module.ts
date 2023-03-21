import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Angulartest3Component } from './angulartest3/angulartest3.component';
import { AngularTest2Component } from './angular-test2/angular-test2.component';
import { Angulartest4Component } from './angulartest4/angulartest4.component';


//@NgModule : 앵귤러에서의 모듈임을 의미
@NgModule({
  //declarations : 선언
  //모든 컴포넌트는 모듈에 선언되어야 한다.
  declarations: [
    AppComponent, AngularTest2Component, Angulartest3Component, Angulartest4Component
  ],
  //FormsModule : 데이터를 input형식 태그에 묶어줄 때 사용
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  //bootstrap: []
  //가장 먼저 실행될 컴포넌트
  bootstrap: [AppComponent]
})
export class AppModule { }
