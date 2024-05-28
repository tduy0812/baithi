class DienThoai {
    constructor(maDienThoai, ten, hangSanXuat, gia) {
        this._maDienThoai = maDienThoai;
        this._ten = ten;
        this._hangSanXuat = hangSanXuat;
        this._gia = gia;
    }

    get maDienThoai() {
        return this._maDienThoai;
    }

    set maDienThoai(newMaDienThoai) {
        this._maDienThoai = newMaDienThoai;
    }

    get ten() {
        return this._ten;
    }

    set ten(newTen) {
        this._ten = newTen;
    }

    get hangSanXuat() {
        return this._hangSanXuat;
    }

    set hangSanXuat(newHangSanXuat) {
        this._hangSanXuat = newHangSanXuat;
    }

    get gia() {
        return this._gia;
    }

    set gia(newGia) {
        this._gia = newGia;
    }

    toString() {
        return `Mã điện thoại: ${this._maDienThoai}, Tên: ${this._ten}, Hãng sản xuất: ${this._hangSanXuat}, Giá: ${this._gia}`;
    }
}
