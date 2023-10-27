// alias 엘리어스
{
    /**
     * Type Aliases 새로운타입, 타입을 내가 직접 정의한다.
     */
    type Text = string;
    const name:Text = 'jun';
    const address = "Korea"
    type num = number;
    type Student = {
        name: string,
        age: number
    };
    const student: Student = {
        name:'jun',
        age:28
     }
/**
 * string Literal Types
 */
// string 문자열 지정을 하면 그 문자열만 반드시 사용해야한다
     type Name = 'name';
     let junNamme:Name;
     junNamme = 'name';
     //
     type Json = 'json';
     let json:Json = 'json';
}