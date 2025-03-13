let arr = [1, 2, 3, 4, 5, 6, 7];
let n = 3;
if (!Array.isArray(arr)) {
    console.log("Dữ liệu không hợp lệ");
} else if (arr.length === 0) {
    console.log("Mảng không chứa phần tử nào");
} else if (typeof n !== "number" || n <= 0) {
    console.log("Giá trị n không hợp lệ");
} else {
    let result = [];
    let numChunks = Math.ceil(arr.length / n);
    
    for (let i = 0; i < numChunks; i++) {
        result.push(arr.filter((_, index) => Math.floor(index / n) === i));
    }

    console.log(result);
}