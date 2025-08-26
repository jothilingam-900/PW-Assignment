
function intersection(arr1 , arr2){

    let output = [];

    for (let i=0 ; i<=arr1.length-1; i++){

        for(let j=0 ; j<=arr2.length-1 ; j++){
            if(arr1[i]== arr2[j]){
                output.push(arr1[i])
            }


        }
    }

    console.log(output);

}
intersection([2,3,4,7,8,] , [4, 5, 2, 3,7, ]);


