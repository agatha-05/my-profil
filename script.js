const konten = document.getElementById("konten");
const tombol = document.querySelector("button");

function toggleKonten() {
    if (konten.style.display === "none") {
        konten.style.display = "block";
        tombol.textContent = "Sembunyikan Biodata";
    } else {
        konten.style.display = "none";
        tombol.textContent = "Tampilkan Biodata";
    }
}