// const li_all=document.querySelectorAll("li")
// // const li_array=Array.from(li_all);

// li_all.forEach((li)=>{
// console.log(li.innerHTML);
// })

// 1.
// const imgs=document.querySelectorAll("img");

// for(i=0; i<imgs.length; i++) {
//     console.log(imgs[i]);
// }

// 2.
// let imgs=document.querySelectorAll(".gallery img");
// console.log(imgs)
// imgs.forEach((img) => {
//     console.log(img.getAttribute("src"));
// });


// 3
// let imgs=document.querySelectorAll(".gallery img");
// console.log(imgs)
// imgs.forEach((img) => {
//     console.log(img.getAttribute("alt"));
// });

// 4
// let urls =[];

// let imgs=document.querySelectorAll(".gallery img");
// console.log(imgs)
// imgs.forEach((img) => {
//     urls.push(img.getAttribute("src"))

// });
// console.log(urls);

// 5
// let alts =[];

// let imgs=document.querySelectorAll(".gallery img");
// console.log(imgs)
// imgs.forEach((img) => {
//     alts.push(img.getAttribute("alt"))

// });
// console.log(alts);

// 6
// let imgs=document.querySelectorAll(".gallery img");
// console.log(imgs.length)

// 7
// let urls =[];
// let imgs=document.querySelectorAll(".gallery img");
// console.log(imgs)
//  imgs.forEach((img) => {
//         urls.push(img.getAttribute("src"));
    
//     });

//     console.log(urls.slice(0,3));
    
    // 8

//     let urls =[];
// let imgs=document.querySelectorAll(".gallery img");
// console.log(imgs)
//  imgs.forEach((img) => {
//         urls.push(img.getAttribute("src"));
    
//     });
//     console.log(urls);
//     const first=[]
// for(i=0; i<urls.length; i++){

// if(i===3){
//     break;
// }
//     first.push(urls[i]);
//     console.log(urls[i]);
// }

// 9
// let urls =[];

// 
// let imgs=document.querySelectorAll(".gallery img");
// console.log(imgs)
// imgs.forEach((img) => {
//     urls.push(img.getAttribute("src"))

// });
// console.log(urls.slice(3,6));   

// 10
// let urls =[];
// let last=[];

// let imgs=document.querySelectorAll(".gallery img");
// console.log(imgs)
// imgs.forEach((img) => {
//     urls.push(img.getAttribute("src"))

// });

// for(i=0; i<urls.length; i++){
//     if (i<3){
//         continue;
//     }
//     last.push(urls[i])
// }

// console.log(last)

// 12
// let alts =[];

// let imgs=document.querySelectorAll(".gallery img");
// console.log(imgs)
// imgs.forEach((img) => {
//     alts.push(img.getAttribute("alt"))

// });

// const newArray = alts.filter((alt)=>{
//         return alt.match(/cat/i)
// })

// console.log(newArray);

// innerHTML ex
// let alts =[];

// let imgs=document.querySelectorAll(".gallery img");
// console.log(imgs)
// imgs.forEach((img) => {
//     alts.push(img.getAttribute("alt"))

// });
// console.log(alts)
// const listOfPhotos = document.querySelector(".list-of-photos__list");

// for(i=0; i<alts.length; i++){
//     listOfPhotos.innerHTML +="<li>"+alts[i]+"</li>";
// }


