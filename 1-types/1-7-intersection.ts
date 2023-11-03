
{
    /**
 * Intersection Types:&
 *  union은 or 같은 성격이라면 intersection은 end 같은 성격이다
 */

type Student = {
    name: string;
    score:number;
};
type Worker = {
    empolyeeId: number;
    work: () => void;
};

function interWork(person:Student & Worker){
    console.log(person.name, person.score, person.empolyeeId, person.work());
    
}
interWork({
    name:'jun',
    score:1,
    empolyeeId:123,
    work:()=>{}
});
}