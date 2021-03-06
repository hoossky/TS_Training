import hello,{goodbye,birthday,add} from "./hello";
import jsTypes, {tsTypes,symbolType,tupleType} from "./jsTypes";
import operator, {destructure, spread} from "./operator";
import loop from "./loop";
let menu: number = 5
let name, profile: string = ""
switch (menu) {
    case 0:
        name = "홍길동"
        const helloMsg = hello(name)
        const byeMsg = goodbye(name)
        console.log(helloMsg)
        console.log(byeMsg)
        break
    case 1:
        name = "김유신"
        let year: number = 2002
        profile = JSON.stringify(birthday(name, year))
        console.log(profile)
        break
    case 2:
        let num1: number = 10
        let num2: number = 30
        let addResult: number = add(num1,num2)
        console.log(`덧셈 결과 : ${addResult}`)
        break
    case 3: //자바스크립트 타입 출력
        //jsTypes()
        //tsTypes()
        //symbolType()
        //tupleType()
        break
    case 4:
        //operator()
        destructure()
        spread()
        break
    case 5:
        loop()
        break
    default:
        console.log("존재하지 않는 케이스입니다.")
        break
}