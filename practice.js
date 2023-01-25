const fruits = ['apple', 'pear', 'banana', 'orange', 'mango'];
fruits.push("strawberry");
const fruit_list = document.querySelector(".fruit-list");

console.log(fruit_list);

for(let i=0; i<fruits.length; i++){
 fruit_list.innerHTML+="ABC";
 fruit_list.innerHTML+="<li>"+fruits[i]+"</li>";
// console.log (fruits[i]);
if (fruits[i]==="pear"){
    continue;
}
if (fruits[i]==="orange"){
    console.log("I'm allergic");
    break;
}
}


console.log(fruit_list)

fruit_list.innerHTML='';
fruits.forEach ((value,index)=>{
        fruit_list.innerHTML+="<li>"+index+":"+value+"</li>"
    })

const sentences= fruits.map ((value,index)=>{
    return value +" is super zdravy."
})
console.log (sentences);

const li_elements = fruits.map((fruit, i) =>{
    return "<li>"+fruits+"</li>";
})

document.querySelector('ul').innerHTML=fruits.filter(fruit=> {
    if (fruit==='banana'|| fruit==='orange') {
        return false;
    }else {
        return true;
    }
})
.map(fruit => {
    return '<li>'+fruit+"</li>";
})
.join('');

const list=document.querySelector('li');