let choice;
let arr = [];

do {
    console.log("\nMENU:");
    console.log("1. Nhập danh sách số nguyên");
    console.log("2. Tính trung bình các số");
    console.log("3. Tìm số chẵn lớn nhất");
    console.log("4. Tìm số lẻ nhỏ nhất");
    console.log("5. Thoát");

    choice = +prompt("Nhập lựa chọn của bạn:");

    if (![1, 2, 3, 4, 5].includes(choice)) {
        console.log("Lựa chọn không hợp lệ. Vui lòng chọn lại.");
        continue;
    }

    if (choice === 5) {
        console.log("Thoát chương trình.");
        break;
    }

    switch (choice) {
        case 1:
            arr = prompt("Nhập danh sách số nguyên:")
            .split(",").map(n => +n.trim()).filter(Number.isInteger);
            console.log(arr.length ? arr : "Danh sách không hợp lệ!");
            break;

        case 2:
            if (arr.length === 0) {
                console.log("Danh sách rỗng! Hãy nhập số trước.");
            } else {
                let sum = arr.reduce((acc, num) => acc + num, 0);
                let avg = sum / arr.length;
                console.log(`Trung bình cộng các số: ${avg.toFixed(2)}`);
            }
            break;

        case 3:
            let evenNumbers = arr.filter(num => num % 2 === 0);
            if (evenNumbers.length === 0) {
                console.log("Không có số chẵn trong danh sách!");
            } else {
                let maxEven = Math.max(...evenNumbers);
                console.log(`Số chẵn lớn nhất: ${maxEven}`);
            }
            break;

        case 4:
            let oddNumbers = arr.filter(num => num % 2 !== 0);
            if (oddNumbers.length === 0) {
                console.log("Không có số lẻ trong danh sách!");
            } else {
                let minOdd = Math.min(...oddNumbers);
                console.log(`Số lẻ nhỏ nhất: ${minOdd}`);
            }
            break;
    }
} while (true);