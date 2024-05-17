function twoSum(nums, target) {
  const differences = nums.map(num => target - num);
  let left, right;
  nums.forEach((num, l) => {
      const r = differences.indexOf(num);
      if (r !== -1){
          left = l;
          right = r;
      }
  });
  return [left, right];
};

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]

