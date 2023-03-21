import { Component } from '@angular/core';

//javascript와 달리 typescript는 데이터의 형태를 지정해 줄 수 있다
//array(변수) 뒤에 콜론(:)과 함께 지정하고자 하는 자료형을 선언하면 된다 
// const array : Array<String> = ['테스트1', '테스트2', '테스트3']

//앵귤러에서 @Component는 class 파일에 @Component라는 데코레이터가 붙여진 파일을 의미
//데코레이터란, 앵귤러에서 사용되는 예약어(명령어)로 해당 파일이 앵귤러에서 특수한 기능으로 사용되는 파일임을 의미
//컴포넌트는 프로젝트 디렉토리에서 <ng g component 명칭>을 터미널에 입력하면 해당 명칭의 새로운 컴포넌트가 자동 생성된다
@Component({
  //컴포넌트의 3가지 기본 기능

  //selector : 컴포넌트의 고유 명칭
  selector: 'app-root',

  //templateUrl : 본 컴포넌트에서 사용할 html 파일의 위치
  templateUrl: './app.component.html',

  //styleUrls : 본 컴포넌트에서 사용할 css 파일의 위치
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularTest';

  //앵귤러에선 접근 제한자가 private/public/protected로 총 3가지를 제공하며 따로 선언하지 않았을 경우 앵귤러는 protected로 받아들인다
  //앵귤러가 typescript로만 이루어져 있다면 public으로 받아들인다
  // showArray : Array<String>;

  //constructor 함수 추가
  //constructor는 생성자를 의미, 최초 1번만 동작하는 함수이다
  // constructor(){
  //   //console.log('테스트');
  //   //class 외부 array의 변수 값을 showArray에게 참조하게 만듦
  //   this.showArray = array;
  // }

  //클릭 이벤트 연습
  //typescript에선 함수의 반환 값도 형태를 지정해 줄 수 있다. 마찬가지로 : 뒤에 형태를 선언하면 된다
  // public clickAfterPrint () : void{
  //   this._innerFunc();
  //   console.log(array);
  //   console.log(this.title);
  // }

  // private _innerFunc(){
  //   //배열 값을 변환시킴
  //   array.push('data' + array.length);
  // }

  id! : String;
  pwd! : String;
  visible1 : boolean = false;
  visible2 : boolean = false;

  tryLogin() : void{
    console.log(this.id, this.pwd);
  }

}