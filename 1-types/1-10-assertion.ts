
{
    /**
     * Type Assertion 똥코드 장담하는코드일경우만
     */
    function jsStrFunc(): any {
        return 2
    }
    const result = jsStrFunc();
    console.log((result as string).length);
    console.log((<string>result).length);

    const wrong: any = 5;
    console.log((wrong as Array<number>).push(1)); //이런경우는 하면 안된다.

    function findNumbers(): number[] | undefined {
        return undefined;
    }
    const numbers = findNumbers()!;
    numbers.push(2);
    // ! == 100% 확신한다 무조건 내가 선언하는 값이 맞다라는 의미.
    const button = document.querySelector('class');


}

