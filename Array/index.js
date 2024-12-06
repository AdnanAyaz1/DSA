// Swap alternatives

const swapAlternatives = (arr) => {
  console.log(`Orignal Array ${arr}  lenght:${parseInt(arr.length / 2)}`);
  for (let i = 0; i < parseInt(arr.length / 2) * 2; i += 2) {
    let j = i + 1;
    if (arr[i] != arr[j]) {
      let tem_var = arr[i];
      arr[i] = arr[j];
      arr[j] = tem_var;
    }
  }
  console.log(`Swapped Array ${arr}`);
};

const arr = [1, 2, 3, 4, 5, 6, 7];
swapAlternatives(arr);
