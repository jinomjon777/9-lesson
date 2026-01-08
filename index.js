/////////////////////homework///////////////////

// 1-masala
// function func(arr,R){
// let Arr=arr[0]+arr[1]
// let result=[arr[0],arr[1]]
// for (let i = 0; i < arr.length; i++) {
//     let sum=arr[i]+arr[i+1]
//     if(Math.abs(sum-R)<Math.abs(Arr-R)){
    //         Arr=sum
    //         result=[arr[i],arr[i+1]]
    //     }
    // }
    // return result
// }
// console.log(func([21,43,11,3,45,4,32,54],35));

// 2-masala
// function birinchiJuftSon(arr){
// let juft=null
// let Arr=[]
// for (let i = 0; i < arr.length; i++) {
    //     if(arr[i]%2===0){
//         juft=arr[i]
//         break
//     } 
// }
// for (let j = 0; j < arr.length; j++) {
    //     if(arr[j]%2===0){
// Arr.push(arr[j]+juft)
//     }else{
    //         Arr.push(arr[j])
//     }
// }
// return Arr
// }
// console.log(birinchiJuftSon([1,4,5,2,33,1,8,22]));

// 3-masala
// function oxirgiToqSon(arr){
// let toq=null
// let Arr=[]
// for (let i = arr.length-1; i>=0; i--) {
    //     if(arr[i]%2===1){
//         toq=arr[i]
//         break
//     }
// }
// for (let j = 0; j < arr.length; j++) {
//     if(arr[j]%2===1){
//         Arr.push(arr[j]+toq)
//     }
// }
// return Arr
// }
// console.log(oxirgiToqSon([2,55,2,21,44,3]));

// 4-masala
// function almashtirish(arr){
    // let min = arr[0]
// let max = arr[0]
// let minIndex = 0
// let maxIndex = 0
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] < min) {
    //     min = arr[i]
//     minIndex = i
//   }
//   if (arr[i] > max) {
//     max = arr[i]
//     maxIndex = i
//   }
// }
// let temp = arr[minIndex]
// arr[minIndex] = arr[maxIndex]
// arr[maxIndex] = temp
// return arr
// }
// console.log(almashtirish([23, 43, 12, 56, 64]))

// 5-masala
// function engKattaVaEngkichikOrasi(arr){
// let max=arr[0]
// let min=arr[0]
// let maxIndex=0
// let minIndex=0
// for (let i = 0; i < arr.length; i++) {
//     if(arr[i]<min){
    //         min=arr[i]
    //         minIndex=i
    //     } 
    //     if(arr[i]>max){
//         max=arr[i]
//         maxIndex=i
//     }
//     let start=Math.min(minIndex,maxIndex)
//     let end=Math.max(minIndex,maxIndex)
//     for (let j = start+1; j < end; j++) {
//         arr[j]=0
//     }
// }
// return arr
// }
// console.log(engKattaVaEngkichikOrasi([2,54,4,11,1,34,11]));

// 6-masala



// 7-masala
// function removeNumber(arr,k) {
// arr.splice(k,1)
// return arr
// }
// console.log(removeNumber([54,23,65,12],1));

// 8-masala
// function removeDublicate(arr) {
    //     let result = [];
    //     for (let i = 0; i < arr.length; i++) {
//         if (i === arr.length - 1 || arr[i] !== arr[i + 1]) {
    //             result.push(arr[i]);
//         } else {
    //             let current = arr[i];
    //             for (; i < arr.length && arr[i] === current; i++) {
//             }
//             i--
//         }
//     }
//     return result;
// }
// console.log(removeDublicate([12, 43, 43, 23, 23, 54, 12, 23]));

// 9-masala
// function threeElements(arr) {
    //     let result=[]
    //     let obj={}
    // for (let i = 0; i < arr.length; i++) {
//     if(obj[arr[i]]){
    //         obj[arr[i]]++
//     }else{
//         obj[arr[i]]=1
//     }
//     if(obj[arr[i]]>=3){
//     result.push(arr[i])
//     }
// }
// return result
// }
// console.log(threeElements([12,12,44,54,44,44,2,22,2,2]));

// 10-masala
// function arrayIndexSum(arr){
// let result=null
// for (let i = 0; i < arr.length; i++) {
    //     if(arr[i]%2==0){
// result+=i
//     } 
// }
// return result
// }
// console.log(arrayIndexSum([2,43,53,23,22,53,88,10]));





///////////////////// amaliyot/////////////////////

// 1-masala
// function printTriangle(arr) {
//     let space = arr.length - 1
//     let result = ""
//     for (let i = 0; i < arr.length; i++) {
//         result += " ".repeat(space) + arr[i].join(" ") + "\n"
//         space--
//     }
//     return result
// }
// console.log(
//     printTriangle([[2],[3,4],[6,5,7],[4,1,8,3]]))

// 2-masala
// function elementTypeof(arr){
// let result=[]
// let Result=[]
// for (let i = 0; i < arr.length; i++) {
//     if(typeof(arr[i])==="number"){
//         result.push(arr[i])
//     }else{
//         Result.push(arr[i])
//     }
// }
// return {result,Result}
// }
// console.log(elementTypeof([1,null,4,false,33,4,2,true]));

// 3-masala
// function elementTypeof(arr){
// let result=[]
// let Result=[]
// let other=[]
// for (let i = 0; i < arr.length; i++) {
//     if(typeof(arr[i])==="number"){
//         result.push(arr[i])
//     }else if(typeof(arr[i])==="boolean"){
//         Result.push(arr[i])
//     }else{
//         other.push(arr[i])
//     }
// }
// return {result,Result,other}
// }
// console.log(elementTypeof([1,null,4,false,33,4,2,true]));

// 4-masala
// function typeofElements(arr){
// let result=[]
// for (let i = 0; i < arr.length; i++) {
//     result.push(typeof(arr[i]))
// }
// return result
// }
// console.log(typeofElements([1,null,4,false,33,44]));