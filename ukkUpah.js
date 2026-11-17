
const barang = [];

const daftarBarang = document.getElementById("daftarBarang");
const hasil = document.getElementById("hasil");

function hitungTotal(harga, jumlah) {
    return harga * jumlah;
}

document.getElementById("btnHitung").addEventListener("click", function () {
    let nama = document.getElementById("nama").value;
    let jamPekerja = Number(document.getElementById("jamPekerja").value);
    let upahJam = Number(document.getElementById("upahPerJam").value);

    if (nama.trim() === "" || jamPekerja <= 0 || upahJam <= 0) {
        alert("Mohon isi semua data dengan benar!");
        return;
    }

    let total = hitungTotal(upahJam, jamPekerja);

    barang.push({
        nama: nama,
        jamPekerja: jamPekerja,
        upahJam: upahJam,
        total: total
    });

    tampilkanBarang();

    hasil.textContent = "Total Upah: Rp " + hitungTotalSemua().toLocaleString("id-ID");

    resetInput();
});

document.getElementById("reset").addEventListener("click", function () {
    barang.length = 0;

    document.getElementById("nama").value = "";
    document.getElementById("jamPekerja").value = "";
    document.getElementById("upahPerJam").value = "";

    daftarBarang.replaceChildren();
    hasil.textContent = "Hasil:";
});

//ini function reset input //
function resetInput() {
    document.getElementById("nama").value = "";
    document.getElementById("jamPekerja").value = "";
    document.getElementById("upahPerJam").value = "";
}


function hitungTotalSemua() {
    let totalSemua = 0;

    for (let i = 0; i < barang.length; i++) {
        totalSemua += barang[i].total;
    }

    return totalSemua;
}

function tampilkanBarang() {
    daftarBarang.replaceChildren();

    barang.forEach(function (item) {
        const barisBarang = document.createElement("li");
        const detailBarang = document.createElement("ul");

        const detail = [
            "Nama: " + item.nama,
            "Jam Pekerja: " + item.jamPekerja,
            "Upah per Jam: Rp " + item.upahJam.toLocaleString("id-ID"),
            "Total: Rp " + item.total.toLocaleString("id-ID")
        ];

        detail.forEach(function (teks) {
            const barisDetail = document.createElement("li");

            barisDetail.textContent = teks;

            detailBarang.appendChild(barisDetail);
        });

        barisBarang.appendChild(detailBarang);
        daftarBarang.appendChild(barisBarang);
    });
}
