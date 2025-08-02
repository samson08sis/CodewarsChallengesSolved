let arr = [false,1,0,1,2,0,1,3,"a"];

function moveZeros(arr) {
    let moved = [], count = 0;
  for(let i = 0; i < arr.length; i++) {
    if(typeof(arr[i]) === typeof(0) && arr[i] === 0) {
        count++;
    } else {
        moved.push(arr[i]);
    }
  }
  for(let i = 0; i < count; i++) {
      moved.push(0);
  }
  console.log(moved);
  return moved;
}

moveZeros(arr);