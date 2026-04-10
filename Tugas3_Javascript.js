// Array produkToko dengan data awal
let produkToko = [
    {id: 1, nama: "Laptop", harga: 7000000, stok: 5},
    {id: 2, nama: "Mouse", harga: 200000, stok: 10},
    {id: 3, nama: "Keyboard", harga: 350000, stok: 7}
];

// Fungsi untuk menambahkan produk baru
function tambahProduk(nama, harga, stok) {
    // Generate ID baru (ID terbesar + 1)
    const idBaru = produkToko.length > 0 ? Math.max(...produkToko.map(p => p.id)) + 1 : 1;
    
    const produkBaru = {
        id: idBaru,
        nama: nama,
        harga: harga,
        stok: stok
    };
    
    produkToko.push(produkBaru);
    console.log(` Produk "${nama}" berhasil ditambahkan dengan ID: ${idBaru}`);
}

// Fungsi untuk menghapus produk berdasarkan ID
function hapusProduk(id) {
    const index = produkToko.findIndex(produk => produk.id === id);
    
    if (index !== -1) {
        const namaProduk = produkToko[index].nama;
        produkToko.splice(index, 1);
        console.log(` Produk "${namaProduk}" (ID: ${id}) berhasil dihapus`);
        return true;
    } else {
        console.log(` Produk dengan ID ${id} tidak ditemukan`);
        return false;
    }
}

// Fungsi untuk menampilkan daftar produk
function tampilkanProduk() {
    console.log("\n DAFTAR PRODUK TOKO");
    console.log("=".repeat(60));
    
    if (produkToko.length === 0) {
        console.log("Tidak ada produk tersedia");
        return;
    }
    
    console.log("| ID | Nama Product     | Harga       | Stok |");
    console.log("-".repeat(60));
    
    produkToko.forEach(produk => {
        const hargaFormat = `Rp ${produk.harga.toLocaleString('id-ID')}`;
        const namaPadded = produk.nama.padEnd(17);
        console.log(`| ${produk.id.toString().padStart(2)} | ${namaPadded} | ${hargaFormat.padEnd(11)} | ${produk.stok.toString().padStart(3)} |`);
    });
    
    console.log("=".repeat(60));
    console.log(`Total produk: ${produkToko.length}`);
}

// Fungsi tambahan untuk mencari produk
function cariProduk(id) {
    const produk = produkToko.find(p => p.id === id);
    if (produk) {
        console.log(`\nProduk ditemukan:`);
        console.log(`ID: ${produk.id}`);
        console.log(`Nama: ${produk.nama}`);
        console.log(`Harga: Rp ${produk.harga.toLocaleString('id-ID')}`);
        console.log(`Stok: ${produk.stok}`);
        return produk;
    } else {
        console.log(`X Produk dengan ID ${id} tidak ditemukan`);
        return null;
    }
}

// DEMONSTRASI PENGGUNAAN
console.log("=== SISTEM MANAJEMEN PRODUK TOKO ONLINE ===\n");

// 1. Tampilkan produk awal
tampilkanProduk();

// 2. Tambah produk baru
tambahProduk("Monitor", 2500000, 3);
tambahProduk("Headset", 450000, 15);

// 3. Tampilkan produk setelah penambahan
tampilkanProduk();

// 4. Cari produk
cariProduk(2);

// 5. Hapus produk
hapusProduk(3);

// 6. Tampilkan produk setelah penghapusan
tampilkanProduk();

// 7. Test case: hapus produk yang tidak ada
hapusProduk(999);
