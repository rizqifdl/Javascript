class ManajemenProduk {
    constructor() {
        this.produkList = [
            {id: 1, nama: "Laptop", harga: 10000000, stok: 5},
            {id: 2, nama: "Mouse", harga: 150000, stok: 20},
            {id: 3, nama: "Keyboard", harga: 500000, stok: 15},
            {id: 4, nama: "Monitor", harga: 3000000, stok: 8},
            {id: 5, nama: "Headset", harga: 800000, stok: 12}
        ];
    }

    tambahProduk(...data) {
        const {nama, harga, stok} = {
            nama: data[0],
            harga: parseInt(data[1]),
            stok: parseInt(data[2])
        };
        
        if (!nama || harga <= 0 || stok < 0) return console.log(" Data tidak valid");
        
        const idBaru = Math.max(...this.produkList.map(p => p.id)) + 1;
        this.produkList = [...this.produkList, {id: idBaru, nama, harga, stok}];
        console.log(` Ditambahkan: ${nama}`);
    }

    hapusProduk(id) {
        this.produkList = this.produkList.filter(({id: idProduk}) => idProduk !== id);
        console.log(` Dihapus ID: ${id}`);
    }
    
    tampilkanSemuaProduk() {
        console.log("\n DAFTAR PRODUK");
        console.log("ID | Nama".padEnd(20) + "Harga".padEnd(12) + "Stok");
        console.log("-".repeat(45));
        
        this.produkList.forEach(({id, nama, harga, stok}) => {
            console.log(
                `${id}`.padStart(2) + " | " + 
                nama.padEnd(18) + 
                `${harga.toLocaleString()}`.padEnd(10) + 
                stok
            );
        });
    }
}


const sistem = new ManajemenProduk();
console.log("===} MANAJEMEN PRODUK TOKO ONLINE {===\n");
sistem.tampilkanSemuaProduk();
sistem.tambahProduk("Printer", 2000000, 10);
sistem.tambahProduk("Webcam", 500000, 25);
sistem.tampilkanSemuaProduk();
sistem.hapusProduk(2);
sistem.tampilkanSemuaProduk();

