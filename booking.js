
// button


const container = document.getElementById('cardContainer');

  function scrollLeft() {
    container.scrollBy({ left: -250, behavior: 'smooth' });
  }
  function scrollRight() {
    container.scrollBy({ left: 250, behavior: 'smooth' });
  }



document.getElementById('bookingForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const nama = document.getElementById('nama').value.trim();
  const tanggal = document.getElementById('tanggal').value.trim();
  const layanan = document.getElementById('layanan').value;
  const waktu = document.getElementById('waktu').value.trim();
  const kontak = document.getElementById('kontak').value.trim();

 
  if (!nama || !tanggal || !layanan || !waktu || !kontak) {
    alert('Mohon lengkapi semua data!');
    return;
  }


  document.getElementById('confirmation').classList.remove('d-none');


  this.reset();
});

