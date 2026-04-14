class Pelanggan {
    constructor(nama, nomorTelepon, kendaraandisewa) {
        this.nama = nama;
        this.nomorTelepon = nomorTelepon;
        this.kendaraanDisewa = kendaraandisewa;
    }

    sewaKendaraan(kendaraan) {
        this.kendaraanDisewa = kendaraan;
        console.log(`Tercatat: ${this.nama} sedang menyewa ${kendaraan.nama}`);
    }
}

class Kendaraan {
    constructor(nama) {
        this.nama = nama;
    }
}

class SistemManajemen {
    constructor() {
        this.pelangganList = [];
    }

    tambahPelanggan(nama, nomorTelepon) {
        const pelanggan = new Pelanggan(nama, nomorTelepon);
        this.pelangganList.push(pelanggan);
    }

    tampilkanPelangganMenyewa() {
        console.log("=======> DAFTAR PELANGGAN MENYEWA <=======:");
        this.pelangganList.forEach((pelanggan, index) => {
            if (pelanggan.kendaraanDisewa) {
                console.log(`${index + 1}. ${pelanggan.nama} - ${pelanggan.nomorTelepon} - ${pelanggan.kendaraanDisewa.nama}`);
            }
        });
    }
}
console.log("---} Sistem Pelayanan Jasa Sewa Mobil {---")

const sistem = new SistemManajemen();
sistem.tambahPelanggan("Budi", "0812345678");
sistem.tambahPelanggan("Ani", "0812345679");

const mobil1 = new Kendaraan("Toyota Avanza");
const mobil2 = new Kendaraan("Honda City");

sistem.pelangganList[0].sewaKendaraan(mobil1);
sistem.pelangganList[1].sewaKendaraan(mobil2);

sistem.tampilkanPelangganMenyewa();