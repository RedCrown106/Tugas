let daftarKeluhan = [];

function formatWaktu(waktu) {
  let tanggal = waktu.toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  let jam = waktu.toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit"
  });

  return `${tanggal} - ${jam}`;
}


function kirim() {
  let nama  = document.getElementById("nama").value.trim();
  let kelas = document.getElementById("kelas").value;
  let pesan = document.getElementById("pesan").value.trim();
  let waktu = formatWaktu(new Date());

  if (nama === "" || kelas === "" || pesan === "") {
    alert("Semua kolom harus diisi!");
    return;
  }

  daftarKeluhan.push({
    nama,
    kelas,
    pesan,
    waktu
  });

  tampilkan(nama, kelas, pesan, waktu);

  document.getElementById("nama").value  = "";
  document.getElementById("kelas").value = "";
  document.getElementById("pesan").value = "";

  alert("Keluhan berhasil dikirim!");
}

function tampilkan(nama, kelas, pesan, waktu) {
  document.getElementById("kartuDaftar").style.display = "block";

  let item = document.createElement("div");
  item.className = "item-keluhan";
  item.innerHTML = `
    <strong>👤 ${nama} — ${kelas}</strong>
    <p>${pesan}</p>
    <small>${waktu}</small>
  `;

  let container = document.getElementById("daftarKeluhan");
  container.insertBefore(item, container.firstChild);
}

function gantiMode() {
  document.body.classList.toggle("dark");

      let modaGelap = document.body.classList.contains("dark");
  document.querySelector(".btn-dark").textContent = modaGelap ? "☀️" : "🌙";
}
