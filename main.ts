{
    // 変数xを数値型で宣言し、5を代入
    let x: number = 5;
    console.log(x); // 変数xの値をコンソールに出力

    // 変数messageを文字列型で宣言し、"hello"を代入
    let message: string = "hello";
    console.log(message); // 変数messageの値をコンソールに出力
    console.log(message.length);
    console.log(message.toFixed(2));//文字列をfixedできないためエラーとなる。

    // 変数isTrueをブール型で宣言し、trueを代入
    let isTrue: boolean = true;
    let isfalse = false;//型推論
    console.log(isTrue); // 変数isTrueの値をコンソールに出力

    // 変数anyValueをany型で宣言し、"hello"を代入
    let anyValue: any = "hello";
    anyValue = 5; // any型なので、数値5を再代入
    console.log(anyValue); // 変数anyValueの値をコンソールに出力

    // 数値型の配列arrayを宣言し、1から5までの数値を代入
    let array: number[] = [1, 2, 3, 4, 5];
    console.log(array); // 配列arrayの内容をコンソールに出力

    //ユニオン型
    let keyword: string | number;
    keyword = "hello";
    console.log(keyword);
    keyword = 5;
    console.log(keyword);


    //型に別名をつける
    type ResultStatus = "pass" | "fail";
    let englishResult: ResultStatus;
    let mathResult: ResultStatus;
    englishResult = "pass";
    mathResult = "fail";
    console.log(englishResult);
    console.log(mathResult);

    //配列の型付け
    const scores: number[] = [1, 2, 3, 4, 5];
    scores[1] = 10;
    scores.push(6);
    scores[2] = "hello";//エラーとなる。

    const values: (string | number)[] = [1, "hello", 3];
    values[1] = "world";
    values[2] = 4;
    values[3] = "typescript";//エラーとなる。

    //オブジェクトの型付け
    const user: { userName: string, score: number } = {
        userName: "john",
        score: 100,
    };
    console.log(user);
    user.userName = 10;//error

    interface User {
        readonly userName: string;
        score: number;
        email?: string;
    }


    console.log(user.userName);
    user.userName = "john";//error

    const user2: User = {
        userName: "john",
        score: 100,
    };

    console.log(user2);//emailはなくても？がついているからエラーにならない


    //関数の型付け
    function double(num: number): number {
        return num * 2;
    }


    function double(num: number): number {
        return "test";//エラー
    }
    double(10);


    function printUserName(userName: string): void {
        console.log(userName);
        return "ok";//エラー
    }
    printUserName("john");

    const allowdouble = (num: number): number => {
        return num * 2;
    }


    const printNum = (num: number): void => {
        console.log(num);
    }

    const printString = (str: string): void => {
        console.log(str);
    }

    const printTwice = <T>(value: T): void => {
        console.log(value);
        console.log(value);
    }

    printTwice<number>(10);
    printTwice<string>("hello");
}

