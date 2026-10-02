    // map () - 배열의 각 요소에 대해 새로운 배열로 반환
    
    const arr = [1, 2, 3];

    // const newArr = arr.map(() => {return x * 2});
    const newArr = arr.map(x =>  x * 2 );
    console.log(newArr);

    

    // 객체가 요소인 배열
    const users = [
        {name: "Jerry", age: 30},
        {name: "Linda", age: 21},
        {name: "Tom", age: 39},
    ];


    // 
    console.log(users[0].name);
    console.log(users[2].name);
    console.log(users[1].age);

    // 배열에서 이름만 출력
    const names = users.map((user) => user.name);
    console.log(names);

    // filter() : 배열의 각 요소 중 조건이 참인 요소만 모아 
    //            새로운 배열을 반환하는 함수
    const nums = [1,2,3,4,5];
    
    // 배열에서 짝수만 출력 (num % 2 == 0)
    const evens = nums.filter((num) => num % 2 == 0);
    console.log(evens);
    
    // 나이가 30세 이상인 회원 출력(age >=30)
    const adults = users.filter((user) => user.age >= 30);
    console.log(adults);
    
    const adultNames  = users.filter((user) => user.age >= 30 )
                        .map((user) => user.name)

    console.log(adultNames);

    // foreach
    const userNames = []; // 빈 배열
    users.forEach(user => {
        userNames.push(user.name); // userNames가 모두가 반환됨
    });

    console.log(userNames);
    

