let choice;
do{
    console.log("1.cộng hai số");
    console.log("2.trừ hai số ");
    console.log("3.nhân hai số");
    console.log("4.chia hai số");
    console.log("5.thoát");
    choice = +prompt("Nhập lựa chọn của bạn:");
    if (![1, 2, 3, 4, 5].includes(choice)) {
        console.log("Lựa chọn không hợp lệ. Vui lòng chọn lại.");
        continue;
    }
    if (choice===5){
        console.log("thoát chương trình");
        break;
    }
    let num1 = +prompt("mời nhập vào số thứ nhất");
    let num2= +prompt("mời nhập vào số thứ 2");
    switch(choice){
        case 1:
            console.log(`Kết quả: ${num1} + ${num2} = ${num1 + num2}`);
            break;
        case 2:
            console.log(`Kết quả: ${num1} - ${num2} = ${num1 - num2}`);
            break;
        case 3:
            console.log(`Kết quả: ${num1} × ${num2} = ${num1 * num2}`);
            break;
        case 4:
            if (num2 === 0) {
                console.log("Không thể chia cho 0.");
            } else {
                console.log(`Kết quả: ${num1} ÷ ${num2} = ${num1 / num2}`);
            }
            break;
    }
} while (true);