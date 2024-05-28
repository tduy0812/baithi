
class QuanLyDienThoai {
    constructor() {
        this.danhSachDienThoai = [];
    }

    themDienThoai(dienThoai) {
        this.danhSachDienThoai.push(dienThoai);
        this.hienThiDanhSach();
    }

    hienThiDanhSach() {
        // sap xep theo ten
        const sortedDanhSach = this.danhSachDienThoai.slice().sort((a, b) => a.ten.localeCompare(b.ten));
        const outputDiv = document.getElementById("output");

        // Xóa nội dung của vùng hiển thị trước khi thêm bảng mới
        outputDiv.innerHTML = "";

        const table = document.createElement("table");
        const headerRow = table.insertRow();
        ["Mã", "Tên", "Hãng", "Giá"].forEach(headerText => {
            const headerCell = document.createElement("th");
            headerCell.textContent = headerText;
            headerRow.appendChild(headerCell);
        });

        sortedDanhSach.forEach(dt => {
            const row = table.insertRow();
            [dt.maDienThoai, dt.ten, dt.hangSanXuat, dt.gia].forEach(text => {
                const cell = row.insertCell();
                cell.textContent = text;
            });
        });

        outputDiv.appendChild(table);
    }
}

function themDienThoai() {
    const maDienThoai = prompt("Nhập mã điện thoại:");
    const ten = prompt("Nhập tên điện thoại:");
    const hangSanXuat = prompt("Nhập hãng sản xuất:");
    const gia = parseInt(prompt("Nhập giá điện thoại:"));

    const dienThoai = new DienThoai(maDienThoai, ten, hangSanXuat, gia);
    quanLyDienThoai.themDienThoai(dienThoai);

}

const quanLyDienThoai = new QuanLyDienThoai();
