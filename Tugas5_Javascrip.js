let produkList = [
  {id: 1, nama: "Laptop", harga: 12000000},
  {id: 2, nama: "Smartphone", harga: 5000000},
  {id: 3, nama: "Mouse", harga: 150000},
  {id: 4, nama: "Keyboard", harga: 300000},
  {id: 5, nama: "Monitor", harga: 2500000}
];
document.getElementById("btnTambah").addEventListener("click", function() {
  tambahProduk(6, "Headset", 1300000);
});

document.getElementById("btnHapus").addEventListener("click", function() {
  hapusProduk(3);
});

document.getElementById("btnTampil").addEventListener("click", tampilkanProduk);

function tambahProduk(id, nama, harga) {
  produkList = [...produkList, {id, nama, harga}];
}
function hapusProduk(id) {
  produkList = produkList.filter(produk => produk.id !== id);
}
function tampilkanProduk() {
  produkList.forEach(({id, nama, harga}) => {
    console.log(`${id}. ${nama} - Rp${harga}`);
  });
}