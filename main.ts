{
    // 変数xを数値型で宣言し、5を代入
    let x: number = 5;
    console.log(x); // 変数xの値をコンソールに出力

    // 変数messageを文字列型で宣言し、"hello"を代入
    let message: string = "hello";
    console.log(message); // 変数messageの値をコンソールに出力
    console.log(message.length); // 文字列の長さを出力
    console.log(message.toFixed(2)); // 文字列に対してtoFixedを使用するとエラー

    // 変数isTrueをブール型で宣言し、trueを代入
    let isTrue: boolean = true;
    let isfalse = false; // 型推論によりboolean型と判断
    console.log(isTrue); // 変数isTrueの値をコンソールに出力

    // 変数anyValueをany型で宣言し、"hello"を代入
    let anyValue: any = "hello";
    anyValue = 5; // any型なので、数値5を再代入
    console.log(anyValue); // 変数anyValueの値をコンソールに出力

    // 数値型の配列arrayを宣言し、1から5までの数値を代入
    let array: number[] = [1, 2, 3, 4, 5];
    console.log(array); // 配列arrayの内容をコンソールに出力

    // ユニオン型の使用例
    let keyword: string | number;
    keyword = "hello";
    console.log(keyword); // 文字列を出力
    keyword = 5;
    console.log(keyword); // 数値を出力

    // 型に別名をつける例
    type ResultStatus = "pass" | "fail";
    let englishResult: ResultStatus;
    let mathResult: ResultStatus;
    englishResult = "pass"; // 合格
    mathResult = "fail"; // 不合格
    console.log(englishResult);
    console.log(mathResult);

    // 配列の型付け
    const scores: number[] = [1, 2, 3, 4, 5];
    scores[1] = 10; // 配列の2番目の要素を10に変更
    scores.push(6); // 配列に6を追加
    scores[2] = "hello"; // 数値型の配列に文字列を代入しようとするとエラー

    const values: (string | number)[] = [1, "hello", 3];
    values[1] = "world"; // 文字列を代入
    values[2] = 4; // 数値を代入
    values[3] = "typescript"; // 配列の範囲外に代入しようとするとエラー

    // オブジェクトの型付け
    const user: { userName: string, score: number } = {
        userName: "john",
        score: 100,
    };
    console.log(user);
    user.userName = 10; // 文字列型のプロパティに数値を代入しようとするとエラー

    interface User {
        readonly userName: string; // 読み取り専用プロパティ
        score: number;
        email?: string; // オプショナルプロパティ
    }

    console.log(user.userName);
    user.userName = "john"; // 読み取り専用プロパティに代入しようとするとエラー

    const user2: User = {
        userName: "john",
        score: 100,
    };

    console.log(user2); // emailはオプショナルなのでなくてもエラーにならない

    // 関数の型付け
    function double(num: number): number {
        return num * 2; // 数値を2倍にして返す
    }

    function double(num: number): number {
        return "test"; // 数値を返すべきところで文字列を返すとエラー
    }
    double(10);

    function printUserName(userName: string): void {
        console.log(userName); // ユーザー名を出力
        return "ok"; // void型の関数で値を返そうとするとエラー
    }
    printUserName("john");

    const allowdouble = (num: number): number => {
        return num * 2; // 数値を2倍にして返す
    }

    const printNum = (num: number): void => {
        console.log(num); // 数値を出力
    }

    const printString = (str: string): void => {
        console.log(str); // 文字列を出力
    }

    const printTwice = <T>(value: T): void => {
        console.log(value); // 値を出力
        console.log(value); // 同じ値をもう一度出力
    }

    printTwice<number>(10); // 数値を2回出力
    printTwice<string>("hello"); // 文字列を2回出力
}

