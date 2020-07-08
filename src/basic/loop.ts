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
    let count: number =0
    let sum = 0
    /*for(let i=1; i<101; i++){
        sum = sum+i
    }*/
    while (count<100){
        count++
        sum = sum+count
    }
    console.log(`1부터 100까지 합: ${sum}`)
}
function doWhileLoop() {
    console.log(`------ 1. do-while-loop ------`)
    let count: number = 0
    let sum: number = 0
    do{
        count++
        sum = sum+count
        // 직접 처리
    }while (count != 100)
    console.log(`1부터 100까지 합: ${sum}`)
}
function forLoop() {
    console.log(`------ 2. for-loop ------`)
}
function forInArrayLoop() {
    console.log(`------ 3. for-In-Array-loop ------`)
}
function forInObjectLoop() {
    console.log(`------ 4. for-In-Object-loop ------`)
}
function forOfArrayLoop() {
    console.log(`------ 5. for-Of-Array-loop ------`)
}
function forOfMapLoop() {
    console.log(`------ 6. for-Of-Map-loop ------`)
}
function forOfSetLoop() {
    console.log(`------ 7. for-Of-Set-loop ------`)
}
function forOfStringLoop() {
    console.log(`------ 8. for-Of-String-loop ------`)
}
function symbolIterator() {
    console.log(`------ 9. symbol-Iterator ------`)
}
