document.addEventListener("DOMContentLoaded", function() {

    // Mengambil data tamu dari URL
    const params = new URLSearchParams(window.location.search);

    const instansi = params.get("to");
    const kategori = params.get("kategori");

    // Menampilkan data tamu
    const instansiTamu = document.getElementById("instansiTamu");
    const kategoriTamu = document.getElementById("kategoriTamu");

    if (instansiTamu) {
        instansiTamu.textContent = instansi || "Tamu Undangan";
    }

    if (kategoriTamu) {
        kategoriTamu.textContent = kategori || "Undangan Khusus";
    }

    // Tombol Buka Undangan
    const openButton = document.querySelector(".open-invitation");

    if (openButton) {
        openButton.addEventListener("click", function(event) {
            event.preventDefault();

            document.body.classList.add("invitation-open");

            document.body.style.overflow = "auto";

            const acara = document.getElementById("acara");

            if (acara) {
                acara.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    }

    // Formulir RSVP
    const rsvpForm = document.getElementById("rsvpForm");

    if (rsvpForm) {
        rsvpForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const namaPengisi = document.getElementById("rsvpNama").value;
            const status = document.getElementById("rsvpStatus").value;

            alert(
                "Terima kasih, " + namaPengisi +
                "! Konfirmasi kehadiran Anda: " + status +
                ".\n\nIni masih berupa prototype dan belum tersimpan ke database."
            );

            rsvpForm.reset();
        });
    }

});