function students(score){

    switch (score){
        case (score >=90 && score<=100) :
        console.log("grade A")
        break
        case (score>=80 && score<=89) :
        console.log("grade B")
        break
        case (score>=50 && score<=79) :
        console.log("grade C")
        break
        case (score>=35 && score<=49) :
        console.log("grade D")
        break
        default :
        console.log("fail")

    }

}
students(40)