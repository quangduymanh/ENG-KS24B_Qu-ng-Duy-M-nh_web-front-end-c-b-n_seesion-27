let arr = [1, 2, 3, 5];
if (!Array.isArray(arr) || arr.some(num => typeof num !== "number")) {
    console.log("dữ liệu không hợp lệ");
} else {
    let missing = arr.filter((num, index) => arr[index + 1] !== num + 1).map(num => num + 1);
    console.log(missing.length > 0 ? missing[0] : "Không có số bị thiếu");
}