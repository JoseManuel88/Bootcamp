let pyramid = "";

for (let m = 10; m > 0; m--) {
   for (let n = 0; n < m; n++) {
   
    pyramid += "*";
   }
    pyramid += "\n";
}


console.log(pyramid);

