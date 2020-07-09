import {symbol} from "prop-types";

export default function loop() {
    whileLoop() // 0
    doWhileLoop() // 1
    forLoop() // 2
    forInArrayLoop // 3
    forInObjectLoop // 4
    forOfArrayLoop() // 5
    forOfMapLoop() // 6
    forOfSetLoop() // 7
    forOfStringLoop() // 8
    symbolIterator() //9
}

function whileLoop() {
    console.log(`------ 0. while-loop ------`)
    let count: number = 0
    let sum: number = 0
    while (count<100){
        count++
        sum+=count
    }
    console.log(`1부터 100까지 합: ${sum}`)
}
function doWhileLoop() {
    console.log(`------ 1. do-while-loop ------`)
    let count: number = 0
    let sum: number = 0
    do{
        count++
        sum+=count
        // 직접 처리
    }while (count != 100)
    console.log(`1부터 100까지 합: ${sum}`)
}
function forLoop() {
    console.log(`------ 2. for-loop ------`)
    let sum: number = 0
    for(let i=1; i<101; i++){
        sum+=i
    }
    console.log(`1부터 100까지 합: ${sum}`)
}
function forInArrayLoop() {
    console.log(`------ 3. for-In-Array-loop ------`)
    let arr = ["a","b","c","d"]
    for(let i in arr){
        console.log(i, arr[i])
    }
}

function forInObjectLoop() {
    console.log(`------ 4. for-In-Object-loop ------`)
    let fruits = {"a":"apple","b":"banana","c":"cherry"}
    for(let i in fruits){
        console.log(i,fruits[i])
    }

}
function forOfArrayLoop() {
    console.log(`------ 5. for-Of-Array-loop ------`)
    for(const i of [1,2,3]){
        console.log(i)
    }
}
function forOfMapLoop() {
    console.log(`------ 6. for-Of-Map-loop ------`)
    let map = new Map([["a",1],["b",2]])
    map.set("a",3)
    for(let i of map)
        console.log(map)
}
function forOfSetLoop() {
    console.log(`------ 7. for-Of-Set-loop ------`)
    let set = new Set(["a","b","c","d","a","b","c"])
    for(let i of set){
        console.log(i)
    }
}
function forOfStringLoop() {
    console.log(`------ 8. for-Of-String-loop ------`)
    for(let i of "hello"){
        console.log(i)
    }
}
function symbolIterator() {
    console.log(`------ 9. symbol-Iterator ------`)
    let arr = [1,2]
    let obj = arr[Symbol.iterator]()
    console.log(`1. ${typeof obj}`)
    console.log(`2. ${obj.next()}`)
    console.log(`3. ${obj.next()}`)
    console.log(`4. ${obj.next()}`)
}
