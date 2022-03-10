arr = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];

let i=0;
while (i < arr.length){
  for (let j=0 ; j<arr.length ; j++){
    
    if (arr[j] > arr[i]){
       let x = arr[i];
      arr[i] = arr[j];
      arr[j] = x;
   
    } 
  }
  i++;
}
console.log(arr);