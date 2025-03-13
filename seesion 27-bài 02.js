let students = [];
let choice;
do {
    console.log("1. Nhập danh sách sinh viên");
    console.log("2. Hiển thị danh sách sinh viên");
    console.log("3. Tìm sinh viên theo tên");
    console.log("4. Xóa sinh viên khỏi danh sách");
    console.log("5. Thoát");
    choice = Number(prompt("Nhập lựa chọn của bạn:"));
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
            let count = Number(prompt("Nhập số lượng sinh viên:"));
            if (isNaN(count) || count <= 0) {
                console.log("Số lượng không hợp lệ! Hãy nhập số dương.");
                break;
            }
            for (let i = 0; i < count; i++) {
                let name;
                do {
                    name = prompt(`Nhập tên sinh viên thứ ${i + 1}:`).trim();
                    if (!name) {
                        console.log(" Tên sinh viên không hợp lệ! Hãy nhập lại.");
                    }
                } while (!name);
                students.push(name);
            }
            console.log("Danh sách sinh viên đã được cập nhật.");
            break;
        case 2:
            if (students.length === 0) {
                console.log("Danh sách trống.");
            } else {
                console.log("Danh sách sinh viên:");
                students.forEach((student, index) => {
                    console.log(`${index + 1}. ${student}`);
                });
            }
            break;
        case 3:
            if (students.length === 0) {
                console.log("Danh sách trống.");
                break;
            }
            let searchName = prompt("Nhập tên sinh viên cần tìm:").trim().toLowerCase();
            let foundStudents = students.filter(student => student.toLowerCase().includes(searchName));
            if (foundStudents.length > 0) {
                console.log("Sinh viên tìm thấy:");
                foundStudents.forEach(student => console.log(student));
            } else {
                console.log("Không tìm thấy sinh viên trong danh sách.");
            }
            break;
        case 4:
            if (students.length === 0) {
                console.log("Danh sách trống.");
                break;
            }
            let deleteName = prompt("Nhập tên sinh viên cần xóa:").trim().toLowerCase();
            let indexToDelete = students.findIndex(student => student.toLowerCase() === deleteName);
            if (indexToDelete !== -1) {
                students.splice(indexToDelete, 1);
                console.log(`Đã xóa sinh viên "${deleteName}" khỏi danh sách.`);
            } else {
                console.log("Không tìm thấy sinh viên cần xóa.");
            }
            break;
    }
} while (true);
