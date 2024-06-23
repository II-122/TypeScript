// 멤버 변수 == 속성 == 프로퍼티
// 멤버 함수 == 메소드

// 클래스
class Employee {   // 일반적인 직원 정보
    // private 프로퍼티 이름 앞에 '_'를 붙이는 관습이 있음
    constructor(
        // 객체 선언과 동시에 프로퍼티로 사용
        private _empName : string,
        private _age : number,
        private _empJob : string
        ) {
    }

    // get / set
    get empAge() {
        return this._age;
    }

    set empAge(n : number) {
        this._age = n;
    }

    printEmp = () : void => {
        console.log(this._empName + '의 나이는 ' + this._age + '이고, 직업은 ' + this._empJob +'입니다.');
    }
}

let employee1 = new Employee('Programmers', 25, 'programmer');
employee1.empAge = 26;
employee1.printEmp();

