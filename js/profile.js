document.addEventListener('DOMContentLoaded', () => {
    // Aktif kullanıcıyı al
    const aktifKullanici = JSON.parse(localStorage.getItem('aktifKullanici'));
    console.log("Aktif Kullanıcı:", aktifKullanici); // Debug için
    
    if (!aktifKullanici) {
        window.location.href = '../index.html';
        return;
    }

    // Şifre değiştirme alanını başlangıçta gizle ve inputları temizle
    const sifreAlani = document.getElementById('sifreAlani');
    sifreAlani.style.display = 'none';
    document.getElementById('yeniSifre').value = '';
    document.getElementById('sifreTekrar').value = '';

    // Şifre değiştirme butonu işlevselliği
    const sifreDegistirBtn = document.getElementById('sifreDegistirBtn');
    sifreDegistirBtn.addEventListener('click', () => {
        if (sifreAlani.style.display === 'none') {
            sifreAlani.style.display = 'block';
            sifreDegistirBtn.innerHTML = '<i class="fas fa-times me-2"></i>İptal';
            // İptal edildiğinde inputları temizle
            document.getElementById('yeniSifre').value = '';
            document.getElementById('sifreTekrar').value = '';
        } else {
            sifreAlani.style.display = 'none';
            sifreDegistirBtn.innerHTML = '<i class="fas fa-key me-2"></i>Şifreyi Yenile';
        }
    });

    // Kullanıcı tipine göre alanları ayarla
    const musteriAlanlari = document.getElementById('musteriAlanlari');
    const firmaAlani = document.getElementById('firmaAlani');
    const profilResmi = document.getElementById('profilResmi');
    const profilBaslik = document.getElementById('profilBaslik');

    if (aktifKullanici.tip === 'firma') {
        // Firma profili ayarları
        profilResmi.src = '../images/Company Icon.jpg';
        profilBaslik.textContent = 'Firma Profili';
        musteriAlanlari.style.display = 'none';
        firmaAlani.style.display = 'block';
        
        // Firma bilgilerini doldur
        document.getElementById('firmaAdi').value = aktifKullanici.ad || '';
        document.getElementById('telefon').value = aktifKullanici.telefon || '';
    } else {
        // Müşteri profili ayarları
        profilResmi.src = '../images/Customer Icon.jpg';
        profilBaslik.textContent = 'Müşteri Profili';
        musteriAlanlari.style.display = 'block';
        firmaAlani.style.display = 'none';
        
        // Müşteri bilgilerini doldur
        document.getElementById('ad').value = aktifKullanici.ad || '';
        document.getElementById('soyad').value = aktifKullanici.soyad || '';
        document.getElementById('telefon').value = aktifKullanici.telefon || '';
    }

    // Ortak bilgileri doldur
    document.getElementById('email').value = aktifKullanici.email || '';

    // Form gönderildiğinde
    document.getElementById('profilForm').addEventListener('submit', (e) => {
        e.preventDefault();
        
        const yeniSifre = document.getElementById('yeniSifre').value;
        const sifreTekrar = document.getElementById('sifreTekrar').value;
        
        if (yeniSifre && yeniSifre !== sifreTekrar) {
            Swal.fire({
                title: 'Hata!',
                text: 'Şifreler eşleşmiyor!',
                icon: 'error',
                confirmButtonColor: '#ff4646'
            });
            return;
        }
        
        // Kullanıcı bilgilerini güncelle
        if (aktifKullanici.tip === 'firma') {
            aktifKullanici.ad = document.getElementById('firmaAdi').value;
        } else {
            aktifKullanici.ad = document.getElementById('ad').value;
            aktifKullanici.soyad = document.getElementById('soyad').value;
        }

        aktifKullanici.email = document.getElementById('email').value;
        aktifKullanici.telefon = document.getElementById('telefon').value;
        
        if (yeniSifre) {
            aktifKullanici.sifre = yeniSifre;
        }
        
        // Güncellenmiş bilgileri localStorage'a kaydet
        localStorage.setItem('aktifKullanici', JSON.stringify(aktifKullanici));
        
        Swal.fire({
            title: 'Başarılı!',
            text: 'Profil bilgileriniz güncellendi.',
            icon: 'success',
            confirmButtonColor: '#ff4646'
        });

        // Şifre alanlarını temizle ve gizle
        document.getElementById('yeniSifre').value = '';
        document.getElementById('sifreTekrar').value = '';
        sifreAlani.style.display = 'none';
        sifreDegistirBtn.innerHTML = '<i class="fas fa-key me-2"></i>Şifreyi Yenile';
    });
});

// Çıkış fonksiyonu
function cikisYap() {
    localStorage.removeItem('kullaniciTipi');
    localStorage.removeItem('kullaniciEmail');
    window.location.href = '../index.html';
}
