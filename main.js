/**
 * iterate in two nested loop to accesses and perform operation 
 * first loop will access first array element 
 * second loop wil access second array element
 * take their substraction value and if any value is less than equal to 2 break the inside loop
 * if all vaules are greater than two for first element operation then maintain a counter from zero and increase it by one. 
 * return the counter as the  final output.
 */

 



 let arr1 = [-3,-3,4,-1,-10]; let arr2 =  [7,10]; let d =  12;
 var findTheDistanceValue = function(arr1, arr2, d) {
    let counter=0;

let distance=0;


    for(let i=0;i<arr1.length;i++){
        for(let j=0;j<arr2.length;j++){
if(Math.abs(arr1[i]-arr2[j])<=d){
break;
}
else {
    counter++
}

        }
        if(counter==arr2.length){
            distance++
        }
        counter=0;
    }
    return distance;
};

console.log(findTheDistanceValue(arr1,arr2,d));



// var findTheDistanceValue = function(arr1, arr2, d) {
//     let distance = 0;
//  let len1 = arr1.length;
//  let len2 = arr2.length;
//  for (let i = 0; i < len1; i++) {
//    let boolean = false;
//    for (let j = 0; j < len2; j++) {
//      let condition = Math.abs(arr1[i] - arr2[j]);
//      if (condition <= d) {
//        boolean = false;
//        break;
//      } else boolean = true;
//    }
//    if (boolean) {
//      distance++;
//    }
//  }

//  return distance;
// };