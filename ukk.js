
const inputNama = document.getElementById('nama');
const inputGajiPokok = document.getElementById('gajiPokok');
const inputJamLembur = document.getElementById('jamLembur');
const inputHariAbsen = document.getElementById('hariAbsen');
const btnHitung = document.getElementById('btnHitung');
const hasil = document.getElementById('hasil');

const daftarGaji = [];

function hitungGaji(): void {
    const nama = inputNama.value.trim() || 'Karyawan';
    const gajiPokok = parseFloat(inputGajiPokok.value) || 0;
    const jamLembur = parseFloat(inputJamLembur.value) || 0;
    const hariAbsen = parseFloat(inputHariAbsen.value) || 0;

    const gajiLembur = jamLembur * 25000;
    const potonganAbsen = hariAbsen * 100000;
    const gajiBersih = gajiPokok + gajiLembur - potonganAbsen;

    let grade = '';
    if (hariAbsen === 0) {
        grade = '(Sangat Disiplin)';
    } else if (hariAbsen >= 1 && hariAbsen <= 2) {
        grade = '(Disiplin)';
    } else if (hariAbsen === 3) {
        grade = '(Cukup Disiplin)';
    } else if (hariAbsen >= 4 && hariAbsen <= 5) {
        grade = '(Kurang Disiplin)';
    } else if (hariAbsen >= 6) {
        grade = '(Perlu Pembinaan)';
    } else {
        grade = '(Input absen tidak valid)';
    }

    hasil.textContent = `Hasil (${nama}): Rp ${gajiBersih.toLocaleString('id-ID')} ${grade}`;
}

btnHitung.addEventListener('click', hitungGaji);
