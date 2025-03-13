let choice;
do {
    console.log("1.tính diện tích hình tròn");
    console.log("2.tính chu vi hình tròn");
    console.log("3.tính diện tích hình chữ nhật");
    console.log("4.tính chu vi hình chữ nhật");
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
    switch (choice){
        case 1:
            let radius = +prompt("Nhập bán kính:");
            if (isNaN(radius) || radius <= 0) {
                console.log("Dữ liệu không hợp lệ!");
            } else {
                let area = Math.PI * Math.pow(radius, 2);
                console.log("Diện tích hình tròn:", area.toFixed(2));
            }
            break;
            case 2:
                radius = +prompt("Nhập bán kính:");
                if (isNaN(radius) || radius <= 0) {
                    console.log("Dữ liệu không hợp lệ!");
                } else {
                    let circumference = 2 * Math.PI * radius;
                    console.log("Chu vi hình tròn:", circumference.toFixed(2));
                }
                break;
            case 3:
                let length = +prompt("Nhập chiều dài:");
                let width = +prompt("Nhập chiều rộng:");
                if (isNaN(length) || length <= 0 || isNaN(width) || width <= 0) {
                    console.log("Dữ liệu không hợp lệ!");
                } else {
                    let area = length * width;
                    console.log("Diện tích hình chữ nhật:", area.toFixed(2));
                }
                break;
            case 4:
                length = +prompt("Nhập chiều dài:");
                width = +prompt("Nhập chiều rộng:");
                if (isNaN(length) || length <= 0 || isNaN(width) || width <= 0) {
                    console.log("Dữ liệu không hợp lệ!");
                } else {
                    let perimeter = 2 * (length + width);
                    console.log("Chu vi hình chữ nhật:", perimeter.toFixed(2));
                }
                break;
        }
}while(true);