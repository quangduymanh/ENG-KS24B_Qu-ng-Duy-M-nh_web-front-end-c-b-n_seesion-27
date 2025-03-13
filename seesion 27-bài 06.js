let arr = [2, 4, 6, 8];
if (!Array.isArray(arr) || arr.some(num => typeof num !== "number")) {
    console.log("dữ liệu không hợp lệ");
} else if (arr.length < 2) {
    console.log(true);
} else {
    let diff = arr[1] - arr[0];
    let invalidNums = arr.slice(1).filter((num, index) => num - arr[index] !== diff);
    
    console.log(invalidNums.length === 0);
}