let array =[
	{
		name: 'Nicolas',
		lastName: 'Molina',
		age: 28
	},
	{
		name: 'Valentina',
		lastName: 'Molina',
		age: 19
	},
];


function solution(array) {
    let arr = [];
  array.forEach(e => {if(e.name) arr.push(e.name)} );
  return arr
}; 


console.log(solution(array))