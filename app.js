const numbers = [
    19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30,
  ];
  let prime=true;
  for(let i=0;i<numbers.length;i++){
    for(let j=0;j<numbers[i];j++){
        if(numbers[i]%j==0){
            prime=false;
        }
    }
    if(prime){
        console.log(numbers[i])
    }

  }