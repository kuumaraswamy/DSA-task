const checkDuplicates = (nums) => {
    const duplicates = new Set();
    for (let num of nums) {
      if (duplicates.has(num)) return true;
      duplicates.add(num);
    }
    return false;
  };
  console.log(checkDuplicates([1,2,3,1]))
  console.log(checkDuplicates([1,2,3]))