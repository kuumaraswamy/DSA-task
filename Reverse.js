  const reverseArr = (input) => {
    let start = 0, end = input.length - 1;
    while (start < end) {
      [input[start], input[end]] = [input[end], input[start]];
      start++;
      end--;
    }
    return input;
  };
  console.log(reverseArr(["h","e","l","l","o"]))


//Another Method

const reverseArray = (input) => {
    return input.toString().split('').reverse().join('');
  };
  let s = ["h","e","l","l","o"]
  console.log(reverseArray(s));