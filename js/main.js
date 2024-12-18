// Son şikayetleri complaints.js'den alıyoruz
document.addEventListener('DOMContentLoaded', () => {
    const sonSikayetlerDiv = document.getElementById('sonSikayetler');
    
    if (sonSikayetlerDiv) {
        // Son 6 şikayeti göster
        const sonAltiSikayet = sikayetler.slice(0, 6);
        
        let html = '';
        sonAltiSikayet.forEach(sikayet => {
            html += `
                <div class="col-md-4 mb-4">
                    <div class="sikayet-card" style="cursor: pointer;" onclick="sikayetDetayGoster(${sikayet.id})">
                        <div class="sikayet-header">
                            <div class="sikayet-firma">${sikayet.firmaAdi}</div>
                            <div class="sikayet-tarih">${sikayet.tarih}</div>
                        </div>
                        <div class="sikayet-content mt-2">
                            <p class="sikayet-text">${sikayet.aciklama.length > 100 ? 
                                sikayet.aciklama.substring(0, 100) + '...' : 
                                sikayet.aciklama}</p>
                        </div>
                        <div class="sikayet-footer mt-2">
                            <span class="sikayet-durum ${sikayet.durum === 'Açık' ? 'durum-acik' : 'durum-kapali'}">
                                ${sikayet.durum}
                            </span>
                        </div>
                    </div>
                </div>
            `;
        });
        
        sonSikayetlerDiv.innerHTML = html;
    }
});

// Şikayet detaylarını gösteren fonksiyon
function sikayetDetayGoster(sikayetId) {
    const sikayet = sikayetler.find(s => s.id === sikayetId);
    
    if (sikayet) {
        Swal.fire({
            title: `${sikayet.firmaAdi} - Şikayet Detayı`,
            html: `
                <div class="text-start">
                    <p><strong>Müşteri:</strong> ${sikayet.musteriAdi}</p>
                    <p><strong>Kategori:</strong> ${sikayet.kategori}</p>
                    <p><strong>Şikayet Nedeni:</strong> ${sikayet.sikayetNedeni}</p>
                    <p><strong>Tarih:</strong> ${sikayet.tarih}</p>
                    <p><strong>Durum:</strong> <span class="badge ${sikayet.durum === 'Açık' ? 'bg-danger' : 'bg-success'}">${sikayet.durum}</span></p>
                    <hr>
                    <p><strong>Şikayet:</strong></p>
                    <p>${sikayet.aciklama}</p>
                    ${sikayet.cevap && sikayet.cevap !== 'Henüz cevap verilmedi' ? `
                        <hr>
                        <p><strong>Firma Cevabı:</strong></p>
                        <p>${sikayet.cevap}</p>
                    ` : ''}
                </div>
            `,
            width: '600px',
            confirmButtonText: 'Kapat',
            confirmButtonColor: '#3085d6'
        });
    }
}

function cikisYap() {
    Swal.fire({
        title: 'Çıkış yapmak istediğinize emin misiniz?',
        text: "Oturumunuz sonlandırılacak",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Evet, çıkış yap',
        cancelButtonText: 'İptal'
    }).then((result) => {
        if (result.isConfirmed) {
            // Kullanıcı bilgilerini localStorage'dan temizle
            localStorage.removeItem('aktifKullanici');
            
            // Ana sayfaya yönlendir
            const basePath = window.location.pathname.includes('/pages/') ? '../' : '';
            window.location.href = basePath + 'index.html';
            
            Swal.fire(
                'Çıkış Yapıldı!',
                'Başarıyla çıkış yaptınız.',
                'success'
            );
        }
    });
}

// Ana sayfa y��nlendirme fonksiyonu
function anaSayfayaGit() {
    const currentPath = window.location.pathname;
    let basePath = '';
    
    // Eğer pages klasöründeysek
    if (currentPath.includes('/pages/')) {
        basePath = '../';
    }
    
    // Direkt ana sayfaya yönlendir (çıkış yapmadan)
    window.location.href = basePath + 'index.html';
}
