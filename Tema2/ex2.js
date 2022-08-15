x = [1, "K", 3, "B", "W", "K", "Q", ["E", "C", 2, "A","A", "D"],["A","C", "B"], ["C", "C", 4, "A", "C"]];

for (let asc = 65; asc <= 90; asc++){
  let count = 0;
  let cr = String.fromCharCode(asc);
  for (let i = 0; i < x.length; i++) {
    var inner1 = x[i].length;
    for (let j = 0; j < inner1; j++) {
      if (String.fromCharCode(asc) == x[i][j]){
        count++;
      } 
    }
  }
  if (count != 0){
    console.log (cr + " = " + count);
  }
}
