function solution(people, limit) {
    let i = 0;
    
    people.sort((a, b)=>a-b);
    
    for(let j=people.length-1; i < j; j--) {
        if( people[i] + people[j] <= limit ) i++;
    }    
    return people.length-i;
}