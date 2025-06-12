document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("messageForm");
  const resultContainer = document.getElementById("formResult");

  const slides = document.querySelector('.slides');

  // BannerSlide
  const totalSlides = document.querySelectorAll('.slide').length;
  let currentIndex = 0;

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  
  setInterval(nextSlide, 4000);

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Ambil input value
    const nama = document.getElementById("nama").value.trim();
    const tanggal = document.getElementById("tanggal").value;
    const gender = document.querySelector('input[name="gender"]:checked');
    const pesan = document.getElementById("pesan").value.trim();

    // Ambil elemen error
    const errorNama = document.getElementById("errorNama");
    const errorTanggal = document.getElementById("errorTanggal");
    const errorGender = document.getElementById("errorGender");
    const errorPesan = document.getElementById("errorPesan");

    // Reset error
    errorNama.textContent = "";
    errorTanggal.textContent = "";
    errorGender.textContent = "";
    errorPesan.textContent = "";
    resultContainer.innerHTML = "";

  
    let isValid = true;

    if (nama === "") {
      errorNama.textContent = "Nama wajib diisi.";
      isValid = false;
    }

    if (tanggal === "") {
      errorTanggal.textContent = "Tanggal lahir wajib diisi.";
      isValid = false;
    }

    if (!gender) {
      errorGender.textContent = "Pilih jenis kelamin.";
      isValid = false;
    }

    if (pesan === "") {
      errorPesan.textContent = "Pesan tidak boleh kosong.";
      isValid = false;
    }

    // Tampilkan data jika valid
    if (isValid) {
      resultContainer.innerHTML = `
        <h3>Data Anda:</h3>
        <p><strong>Nama:</strong> ${nama}</p>
        <p><strong>Tanggal Lahir:</strong> ${tanggal}</p>
        <p><strong>Jenis Kelamin:</strong> ${gender.value}</p>
        <p><strong>Pesan:</strong> ${pesan}</p>
      `;
      form.reset(); // Reset form setelah submit
    }
  });
});