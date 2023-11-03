{
    /**
     * Enum
      */
     //javaScript 
     const MAX_NUM = 6;
     const MAX_STUDENTS_PER_CLASS = 10;
     const MONDAY = 0;
     const TUESDAY = 1;
     const WEDNESDAY = 2;
     const DAYS_NUM = Object.freeze({"MONDAY":0, "TUESDAY":1, "WEDNESDAY":2});
     const dayOfTODAY = DAYS_NUM.MONDAY;

     //TypeScript
     //enum에 값을 정하지 않으면 차례대로 0 ~ 시작한다
     // 값을 지정할때는 대입을해서 지정 문자열도 가능하다 하지만 문자열로 값을 지정했을 경우에는 다음 값을 하나하나 다 지정해줘야한다..
     enum Days{
        //  offDay = 0,
        // onDay = 'open',
        Monday, //0
        Tuesday, //1
        wednesday, //2
        Thursday, //3
        Friday, //4
        Saturday, //5
        Sunday, //6
     }
     console.log(Days.Monday);
     let  day:Days = Days.Saturday;
     day = Days.Thursday;
     console.log(day);
     
}