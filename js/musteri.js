// Müşteri bilgileri (örnek)
const aktifMusteri = {
    id: 1,
    ad: "Ahmet",
    soyad: "Yılmaz",
    email: "ahmet@example.com"
};

// Müşterinin şikayetlerini tutan dizi
let musteriSikayetleri = [
    {
        id: 1,
        firmaAdi: "TeknoNova",
        aciklama: "Satın aldığım akıllı saat 2 gün sonra çalışmayı durdurdu.",
        tarih: "2023-10-01",
        durum: "Açık",
        firmaCevabi: "Henüz cevap verilmedi"
    },
    {
        id: 2,
        firmaAdi: "Luma Teknolojisi",
        aciklama: "LED panel arızalı çıktı.",
        tarih: "2023-09-28",
        durum: "Kapalı",
        firmaCevabi: "Ürün değişimi yapılacaktır."
    },
    {
        id: 3,
        firmaAdi: "Veridex",
        aciklama: "Veri kurtarma işlemi başarısız oldu.",
        tarih: "2023-09-25",
        durum: "Açık",
        firmaCevabi: "Henüz cevap verilmedi"
    },
    {
        id: 4,
        firmaAdi: "Stratosys",
        aciklama: "Yazılım lisansı aktifleştirilmedi.",
        tarih: "2023-09-20",
        durum: "Kapalı",
        firmaCevabi: "Lisans aktifleştirildi, kontrol edebilirsiniz."
    }
];

let aktifSikayetId = null;
let duzenleModal = null;

// Sayfa yüklendiğinde
document.addEventListener('DOMContentLoaded', () => {
    sikayetleriListele();
    document.getElementById('sikayetForm').addEventListener('submit', yeniSikayetOlustur);
    
    // Modal'ı başlat
    duzenleModal = new bootstrap.Modal(document.getElementById('duzenleModal'));
});

// Şikayetleri listele
function sikayetleriListele() {
    const liste = document.getElementById('musteriSikayetListesi');
    let html = '';
    
    musteriSikayetleri.forEach(sikayet => {
        html += `
            <div class="sikayet-card" id="sikayet-${sikayet.id}">
                <div class="sikayet-header">
                    <div class="sikayet-firma">${sikayet.firmaAdi}</div>
                    <div class="sikayet-kategori badge bg-secondary">${sikayet.kategori || ''}</div>
                    <div class="sikayet-tarih">${sikayet.tarih}</div>
                </div>
                <div class="sikayet-content">
                    <div class="sikayet-neden badge bg-info mb-2">${sikayet.sikayetNedeni || ''}</div>
                    <p class="sikayet-text">${sikayet.aciklama}</p>
                </div>
                <div class="d-flex justify-content-between align-items-center mt-3">
                    <span class="sikayet-durum ${sikayet.durum === 'Açık' ? 'durum-acik' : 'durum-kapali'}">
                        ${sikayet.durum}
                    </span>
                    <div class="firma-cevabi">
                        ${sikayet.firmaCevabi}
                    </div>
                </div>
                <div class="sikayet-actions mt-3">
                    <button class="btn btn-sm btn-primary me-2" onclick="sikayetDuzenle(${sikayet.id})">
                        <i class="fas fa-edit"></i> Düzenle
                    </button>
                    <button class="btn btn-sm btn-danger" onclick="sikayetSil(${sikayet.id})">
                        <i class="fas fa-trash"></i> Sil
                    </button>
                </div>
            </div>
        `;
    });
    
    liste.innerHTML = html;
}

// Şikayet düzenleme fonksiyonu
function sikayetDuzenle(id) {
    const sikayet = musteriSikayetleri.find(s => s.id === id);
    if (!sikayet) return;

    // Modal form alanlarını doldur
    document.getElementById('duzenleSelect').value = sikayet.firmaAdi;
    document.getElementById('duzenleMetni').value = sikayet.aciklama;
    
    // Aktif şikayet ID'sini sakla
    aktifSikayetId = id;
    
    // Modal'ı göster
    const modal = new bootstrap.Modal(document.getElementById('duzenleModal'));
    modal.show();
}

// Alert fonksiyonları
function basariliAlert(mesaj) {
    Swal.fire({
        title: 'Başarılı!',
        text: mesaj,
        icon: 'success',
        confirmButtonColor: '#ff4646',
        confirmButtonText: 'Tamam'
    });
}

function silmeAlert(callback) {
    Swal.fire({
        title: 'Emin misiniz?',
        text: "Bu şikayeti silmek istediğinizden emin misiniz?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#ff4646',
        cancelButtonColor: '#6c757d',
        confirmButtonText: 'Evet, Sil',
        cancelButtonText: 'İptal'
    }).then((result) => {
        if (result.isConfirmed) {
            callback();
        }
    });
}

function hataAlert(mesaj) {
    Swal.fire({
        title: 'Hata!',
        text: mesaj,
        icon: 'error',
        confirmButtonColor: '#ff4646',
        confirmButtonText: 'Tamam'
    });
}

// Şikayet silme fonksiyonunu güncelle
function sikayetSil(id) {
    silmeAlert(() => {
        musteriSikayetleri = musteriSikayetleri.filter(s => s.id !== id);
        sikayetleriListele();
        basariliAlert('Şikayet başarıyla silindi!');
    });
}

// Şikayet güncelleme fonksiyonunu güncelle
function sikayetGuncelle() {
    const firma = document.getElementById('duzenleSelect').value;
    const aciklama = document.getElementById('duzenleMetni').value;
    
    if (!firma || !aciklama.trim()) {
        hataAlert('Lütfen tüm alanları doldurun!');
        return;
    }

    const sikayet = musteriSikayetleri.find(s => s.id === aktifSikayetId);
    if (sikayet) {
        sikayet.firmaAdi = firma;
        sikayet.aciklama = aciklama;
        
        sikayetleriListele();
        duzenleModal.hide();
        basariliAlert('Şikayet başarıyla güncellendi!');
    }
}

// Diğer neden seçildiğinde input göster/gizle
function nedenKontrol() {
    const nedenSelect = document.getElementById('nedenSelect');
    const digerNedenDiv = document.getElementById('digerNedenDiv');
    const digerNeden = document.getElementById('digerNeden');
    
    if (nedenSelect.value === 'diger') {
        digerNedenDiv.style.display = 'block';
        digerNeden.required = true;
    } else {
        digerNedenDiv.style.display = 'none';
        digerNeden.required = false;
    }
}

// Yeni şikayet oluşturma fonksiyonunu güncelle
function yeniSikayetOlustur(event) {
    event.preventDefault();
    
    const firma = document.getElementById('firmaSelect').value;
    const kategori = document.getElementById('kategoriSelect').value;
    const nedenSelect = document.getElementById('nedenSelect');
    const digerNeden = document.getElementById('digerNeden');
    const aciklama = document.getElementById('sikayetMetni').value;
    
    // Şikayet nedeni kontrolü
    let neden = nedenSelect.value;
    if (neden === 'diger') {
        if (!digerNeden.value.trim()) {
            hataAlert('Lütfen şikayet nedeninizi yazın!');
            return;
        }
        neden = digerNeden.value;
    }
    
    if (!firma || !kategori || !neden || !aciklama.trim()) {
        hataAlert('Lütfen tüm alanları doldurun!');
        return;
    }
    
    const yeniSikayet = {
        id: musteriSikayetleri.length + 1,
        firmaAdi: firma,
        kategori: kategori,
        sikayetNedeni: neden,
        aciklama: aciklama,
        tarih: new Date().toISOString().split('T')[0],
        durum: "Açık",
        firmaCevabi: "Henüz cevap verilmedi"
    };
    
    musteriSikayetleri.unshift(yeniSikayet);
    sikayetleriListele();
    document.getElementById('sikayetForm').reset();
    document.getElementById('digerNedenDiv').style.display = 'none';
    basariliAlert('Şikayetiniz başarıyla oluşturuldu!');
}
