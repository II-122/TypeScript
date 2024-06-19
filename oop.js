// 멤버 변수 == 속성 == 프로퍼티
// 멤버 함수 == 메소드
// 클래스
var Employee = /** @class */ (function () {
    // private 프로퍼티 이름 앞에 '_'를 붙이는 관습이 있음
    function Employee(
    // 객체 선언과 동시에 프로퍼티로 사용
    _empName, _age, _empJob) {
        var _this = this;
        this._empName = _empName;
        this._age = _age;
        this._empJob = _empJob;
        this.printEmp = function () {
            console.log(_this._empName + '의 나이는 ' + _this._age + '이고, 직업은 ' + _this._empJob + '입니다.');
        };
    }
    Object.defineProperty(Employee.prototype, "empAge", {
        // get / set
        get: function () {
            return this._age;
        },
        set: function (n) {
            this._age = n;
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
var employee1 = new Employee('Programmers', 25, 'programmer');
employee1.empAge = 26;
employee1.printEmp();
