let arr = 2941;
if (typeof arr !== "number" || !Number.isInteger(arr) || arr < 0) {
    console.log("Dữ liệu không hợp lệ");
} else {
    console.log(parseInt(arr.toString().split('').sort((a, b) => b - a).join(''), 10));
}