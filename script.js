const array = [
	{
		question: "1.What is the capital of Rwanda?",	
        a: 'Bujumbura',
		b: 'Kigali',
		c: 'Nairobi',
        d: 'Dodoma',
		correction: 'b',
	},
	{
		question: "2.How many district of Rwanda?",
		a: '30',
		b: '50',
		c: '20',
        d: '80',
		correction: 'a',
	},
    {
		question: "3.How many neighboring countries of Rwanda ?",
		a: '3',
		b: '6 ',
		c: '4',
        d: '5',
		correction: 'c',
	},
    {
		question: "4.What is the name of Rwanda national anthem?",
		a: ' Rwanda yacu',
		b: ' Rwanda nziza ',
		c: 'Rwanda',
        d: 'All above',
		correction: 'b',
	},
    {
		question: "5.How many stanzas of Rwanda national anthem?",
		a: '2',
		b: '3 ',
		c: '5',
        d: '4',
		correction: 'd',
	},
   
];

const test = document.getElementById('test');
const getRadios = document.querySelectorAll('.radio');
const questionList = document.getElementById('question');
const option_a = document.getElementById('option_a');
const option_b = document.getElementById('option_b');
const option_c = document.getElementById('option_c');
const option_d = document.getElementById('option_d');
const submitBtn = document.getElementById('submit');

let i=0
let marks=0


function findTest(){
    selectResults()
   questionList.innerText=array[i].question
   option_a.innerText=array[i].a
   option_b.innerText=array[i].b
   option_c.innerText=array[i].c
   option_d.innerText=array[i].d

}
findTest()

function selectResults(){
    getRadios.forEach(checkRadios =>
        checkRadios.checked=false)
}

function selectedResults(){
    let answer
    getRadios.forEach(checkRadios => {
        if(checkRadios.checked){
            answer=checkRadios.id
        }
    })
    return answer
}

submitBtn.addEventListener('click',()=>{
    const answer=selectedResults()
    if(!answer)return
        if(answer ===array[i].correction){
            marks++
        }
        i++
        if(i < array.length){
            findTest()
        }else{
  test.innerHTML=` <button id='resp' >GET MARKS</button>`
}
resp.addEventListener('click',()=>{
    
    test.innerHTML=` <h2 id='score' >you have:${marks}/${array.length} Marks</h2>
    
    <button onclick="location.reload()">Reload</button>
    `

})
})