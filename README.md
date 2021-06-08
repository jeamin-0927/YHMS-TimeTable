# [YHMS 타임테이블](https://chicken-moo.com/yhms)

 용호중학교 학생들의 원격 수업 편의를 위하여 제작된 웹 프로그램입니다!

 시간표 확인, 시종, 팀즈 방 연결을 지원해줍니다.

 [여기](https://chicken-moo.com/img/projects/yhtt.pdf)에서 제작 과정 살펴보기




 > 용호중학교 3학년에서 테스트 사용 중이며 **곧 전교 도입될 예정**입니다.


 > [**Beta 버전**](https://chicken-moo.com/yhms/beta)이 *개발 중* 입니다! [여기](https://www.notion.so/6d9362d9f0ae4d2387bcfa2bc7e0e833?v=8fbedecb5a9d46c1b3b1ee8848cfce87)에서 개발 일지를 확인하세요!



## 목차

> 1.  [YHMS 타임테이블](#YHMS 타임테이블)
> 2. [제작 정보](#제작 정보)
> 3. [소스코드 사용 조건](#모든 소스코드는 사용 가능합니다.)
> 4. [사용 모습 및 방법](#YHMS 타임테이블 모습 및 사용방법)
> 5. [도입 시 수정 사항](#치킨무 타임테이블 도입 시 바꾸어야될 코드)



 ## 제작 정보

 > - 사용툴 : VS code
 > - 참여도 : 100%
 > - 소요기간 : 1달





## 모든 소스코드는 사용 가능합니다.

소스코드 사용 시 주석으로 아래 출처를 남겨주세요.

> 출처 : chicken-moo.com/yhms





## YHMS 타임테이블 모습 및 사용방법

> 1. 학년/반을 선택하여 각반으로 이동을 합니다.
> 2. 시간표, 급식, 큰단위 설정탭이 있고 해당하는 항목을 클릭하여 확인 가능합니다.
> 3. 학번이름 생일 자가진단 비밀번호를 입력하면 원클릭 자가진단이 가능합니다.



![1](https://chicken-moo.com/files/img/readme/yhtt/1.jpg)

![2](https://chicken-moo.com/files/img/readme/yhtt/2.jpg)

![3](https://chicken-moo.com/files/img/readme/yhtt/3.jpg)

![4](https://chicken-moo.com/files/img/readme/yhtt/4.jpg)

![5](https://chicken-moo.com/files/img/readme/yhtt/5.jpg)

![6](https://chicken-moo.com/files/img/readme/yhtt/6.jpg)



## 치킨무 타임테이블 도입 시 바꾸어야될 코드

`data.js`에서 바꾸어야 할 사항

1. 시간표

   `function data()` 의 값을 설정해 주세요.

2. 시종

   `var setTime` 변수를 원하는 시종 시간으로 바꾸어 주세요.

3. 자가진단

   `function jagajindan()`의 `var link`의 `org`, `area`, `key` 피라미터를 바꾸어 주세요.

   자가진단 api 링크 설정은 [윈섭 api](https://api.winsub.kr/)를 참고해 주세요.

