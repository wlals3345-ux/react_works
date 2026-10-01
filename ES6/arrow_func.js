// 화살표 함수
// 제곱수 계산

/*
let square = function(x){
    return x * x;
}*/
// 코드가 한 줄일 때, 매개변수의 소괄호()생략, {}블럭과 return생략 
let square2 = (x) => x * x;


// console.log(square(3)); 
console.log(square2(3));


// 매개변수가 없는 함수 - 매개변수 없을 때는 소괄호 생략 xx
let message = () => console.log("good luck!");
let message1 = ()=> console.log('good');
message (); //함수호출
message1 (); //함수호출


