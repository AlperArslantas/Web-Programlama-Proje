let sikayetler = [
    {
        id: 1,
        musteriAdi: "Ahmet Yılmaz",
        firmaAdi: "TeknoNova",
        kategori: "Elektronik",
        sikayetNedeni: "Hasarlı Ürün",
        aciklama: "Satın aldığım akıllı saat 2 gün sonra çalışmayı durdurdu.",
        tarih: "2023-10-01",
        durum: "Açık",
        cevap: "Henüz cevap verilmedi"
    },
    {
        id: 2,
        musteriAdi: "Ayşe Kaya",
        firmaAdi: "Luma Teknolojisi",
        kategori: "Elektronik",
        sikayetNedeni: "Geç Teslimat",
        aciklama: "LED panel siparişim 3 haftadır gelmedi.",
        tarih: "2023-09-28",
        durum: "Kapalı",
        cevap: "Ürününüz yarın teslim edilecektir."
    },
    {
        id: 3,
        musteriAdi: "Mehmet Demir",
        firmaAdi: "Veridex",
        kategori: "Yazılım",
        sikayetNedeni: "Ürün Kalitesi",
        aciklama: "Veri kurtarma hizmeti başarısız oldu.",
        tarih: "2023-09-25",
        durum: "Açık",
        cevap: "Henüz cevap verilmedi"
    },
    {
        id: 4,
        musteriAdi: "Zeynep Şahin",
        firmaAdi: "Su Güneşi",
        kategori: "Hizmet",
        sikayetNedeni: "Müşteri Hizmetleri",
        aciklama: "Kurulum sonrası teknik destek alamıyorum.",
        tarih: "2023-09-20",
        durum: "Kapalı",
        cevap: "Teknik ekibimiz sizinle iletişime geçecektir."
    },
    {
        id: 5,
        musteriAdi: "Can Öztürk",
        firmaAdi: "Stratosys",
        kategori: "Yazılım",
        sikayetNedeni: "Yanlış Ürün",
        aciklama: "Yazılım lisansı yanlış gönderildi.",
        tarih: "2023-09-15",
        durum: "Açık",
        cevap: "Henüz cevap verilmedi"
    },
    {
        id: 6,
        musteriAdi: "Elif Yıldız",
        firmaAdi: "Optima Çekirdek",
        kategori: "Elektronik",
        sikayetNedeni: "İade Sorunu",
        aciklama: "İade talebim 2 haftadır onaylanmadı.",
        tarih: "2023-09-10",
        durum: "Kapalı",
        cevap: "İade işleminiz tamamlanmıştır."
    },
    {
        id: 7,
        musteriAdi: "Burak Aydın",
        firmaAdi: "NeoSfer",
        kategori: "Elektronik",
        sikayetNedeni: "Hasarlı Ürün",
        aciklama: "VR gözlük hasarlı geldi.",
        tarih: "2023-09-05",
        durum: "Açık",
        cevap: "Henüz cevap verilmedi"
    },
    {
        id: 8,
        musteriAdi: "Selin Arslan",
        firmaAdi: "Hızlı Çalışmalar",
        kategori: "Hizmet",
        sikayetNedeni: "Ürün Kalitesi",
        aciklama: "SEO çalışması yetersiz kaldı.",
        tarih: "2023-09-01",
        durum: "Kapalı",
        cevap: "Ek optimizasyon çalışması yapılacaktır."
    },
    {
        id: 9,
        musteriAdi: "Onur Çelik",
        firmaAdi: "Mira Yazılım",
        kategori: "Yazılım",
        sikayetNedeni: "Ürün Kalitesi",
        aciklama: "Mobil uygulama sürekli çöküyor ve veri kaybına neden oluyor.",
        tarih: "2023-08-28",
        durum: "Açık",
        cevap: "Henüz cevap verilmedi"
    },
    {
        id: 10,
        musteriAdi: "Deniz Korkmaz",
        firmaAdi: "GelecekX",
        kategori: "Yazılım",
        sikayetNedeni: "Müşteri Hizmetleri",
        aciklama: "Chatbot hizmetinde yaşanan sorunlar için destek alamıyorum.",
        tarih: "2023-08-25",
        durum: "Kapalı",
        cevap: "Sorun giderildi, özür dileriz."
    },
    {
        id: 11,
        musteriAdi: "Gizem Yılmaz",
        firmaAdi: "TeknoNova",
        kategori: "Elektronik",
        sikayetNedeni: "İade Sorunu",
        aciklama: "Bluetooth kulaklık arızalı çıktı, iade kabul edilmiyor.",
        tarih: "2023-08-20",
        durum: "Açık",
        cevap: "İncelemeye alındı"
    },
    {
        id: 12,
        musteriAdi: "Emre Kara",
        firmaAdi: "Luma Teknolojisi",
        kategori: "Elektronik",
        sikayetNedeni: "Yanlış Ürün",
        aciklama: "Sipariş ettiğim monitör yerine klavye geldi.",
        tarih: "2023-08-15",
        durum: "Kapalı",
        cevap: "Doğru ürün gönderimi yapıldı"
    },
    {
        id: 13,
        musteriAdi: "Aylin Demir",
        firmaAdi: "Veridex",
        kategori: "Hizmet",
        sikayetNedeni: "Geç Teslimat",
        aciklama: "Veri yedekleme hizmeti 1 haftadır başlatılmadı.",
        tarih: "2023-08-10",
        durum: "Açık",
        cevap: "Henüz cevap verilmedi"
    },
    {
        id: 14,
        musteriAdi: "Kerem Yıldırım",
        firmaAdi: "Su Güneşi",
        kategori: "Hizmet",
        sikayetNedeni: "Ürün Kalitesi",
        aciklama: "Solar paneller belirtilen verimi sağlamıyor.",
        tarih: "2023-08-05",
        durum: "Kapalı",
        cevap: "Teknik ekip inceleme yapacak"
    },
    {
        id: 15,
        musteriAdi: "Ceren Öz",
        firmaAdi: "Stratosys",
        kategori: "Yazılım",
        sikayetNedeni: "Hasarlı Ürün",
        aciklama: "Satın alınan yazılım lisansı aktifleştirilemiyor.",
        tarih: "2023-08-01",
        durum: "Açık",
        cevap: "Henüz cevap verilmedi"
    },
    {
        id: 16,
        musteriAdi: "Berk Aydın",
        firmaAdi: "Optima Çekirdek",
        kategori: "Elektronik",
        sikayetNedeni: "Müşteri Hizmetleri",
        aciklama: "Garanti kapsamındaki işlemci için dönüş yapılmıyor.",
        tarih: "2023-07-28",
        durum: "Kapalı",
        cevap: "Garanti işlemi başlatıldı"
    },
    {
        id: 17,
        musteriAdi: "İrem Yalçın",
        firmaAdi: "NeoSfer",
        kategori: "Elektronik",
        sikayetNedeni: "Ürün Kalitesi",
        aciklama: "AR gözlüğün pil ömrü çok kısa.",
        tarih: "2023-07-25",
        durum: "Açık",
        cevap: "İnceleniyor"
    },
    {
        id: 18,
        musteriAdi: "Mert Şahin",
        firmaAdi: "Hızlı Çalışmalar",
        kategori: "Hizmet",
        sikayetNedeni: "Geç Teslimat",
        aciklama: "Web sitesi tasarımı 2 ay gecikti.",
        tarih: "2023-07-20",
        durum: "Kapalı",
        cevap: "Telafi edildi"
    },
    {
        id: 19,
        musteriAdi: "Sude Arslan",
        firmaAdi: "Mira Yazılım",
        kategori: "Yazılım",
        sikayetNedeni: "Yanlış Ürün",
        aciklama: "Yanlış versiyon yazılım lisansı verildi.",
        tarih: "2023-07-15",
        durum: "Açık",
        cevap: "Henüz cevap verilmedi"
    },
    {
        id: 20,
        musteriAdi: "Arda Yılmaz",
        firmaAdi: "GelecekX",
        kategori: "Yazılım",
        sikayetNedeni: "İade Sorunu",
        aciklama: "Yapay zeka hizmeti için iade talebi reddedildi.",
        tarih: "2023-07-10",
        durum: "Kapalı",
        cevap: "İade talebi onaylandı"
    },
    {
        id: 21,
        musteriAdi: "Yağmur Kaya",
        firmaAdi: "TeknoNova",
        kategori: "Elektronik",
        sikayetNedeni: "Hasarlı Ürün",
        aciklama: "Tablet ekranı çizik geldi.",
        tarih: "2023-07-05",
        durum: "Açık",
        cevap: "Değişim işlemi başlatıldı"
    },
    {
        id: 22,
        musteriAdi: "Ege Demir",
        firmaAdi: "Luma Teknolojisi",
        kategori: "Elektronik",
        sikayetNedeni: "Müşteri Hizmetleri",
        aciklama: "Teknik destek hattına ulaşılamıyor.",
        tarih: "2023-07-01",
        durum: "Kapalı",
        cevap: "Yeni destek hattı kuruldu"
    },
    {
        id: 23,
        musteriAdi: "Defne Yıldız",
        firmaAdi: "Veridex",
        kategori: "Hizmet",
        sikayetNedeni: "Ürün Kalitesi",
        aciklama: "Veri analiz raporu eksik hazırlandı.",
        tarih: "2023-06-28",
        durum: "Açık",
        cevap: "Rapor güncelleniyor"
    }
];

// Aktif firma bilgisini al
let aktifFirma = JSON.parse(localStorage.getItem('aktifKullanici'));

// Sayfa yüklendiğinde
document.addEventListener('DOMContentLoaded', () => {
    // Firma adını göster
    document.getElementById('firmaAdi').textContent = `Hoş geldiniz, ${aktifFirma.ad}`;
    
    // Şikayetleri listele
    sikayetleriListele();
});

// Şikayetleri listele
function sikayetleriListele() {
    const liste = document.getElementById('sikayetListesi');
    let html = '';
    
    const firmaSikayetleri = sikayetler.filter(s => s.firmaAdi === aktifFirma.ad);
    
    firmaSikayetleri.forEach(sikayet => {
        html += `
            <div class="sikayet-card">
                <div class="sikayet-header">
                    <div class="sikayet-firma">${sikayet.musteriAdi}</div>
                    <div class="sikayet-tarih">${sikayet.tarih}</div>
                </div>
                <div class="sikayet-content">
                    <p>${sikayet.aciklama}</p>
                    ${sikayet.cevap ? `<p class="mt-2"><strong>Firma Cevabı:</strong> ${sikayet.cevap}</p>` : ''}
                </div>
                <div class="d-flex justify-content-between align-items-center mt-3">
                    <span class="sikayet-durum ${sikayet.durum === 'Açık' ? 'durum-acik' : 'durum-kapali'}">
                        ${sikayet.durum}
                    </span>
                    ${sikayet.durum === 'Açık' ? `
                        <div>
                            <button class="btn btn-sm btn-primary" onclick="cevapVer(${sikayet.id})" data-bs-toggle="modal" data-bs-target="#cevapModal">
                                Cevapla
                            </button>
                            <button class="btn btn-sm btn-danger" onclick="sikayetiKapat(${sikayet.id})">
                                Kapat
                            </button>
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
    });
    
    liste.innerHTML = html;
}

let aktifSikayetId = null;

// Cevap verme modalını aç
function cevapVer(sikayetId) {
    aktifSikayetId = sikayetId;
    const sikayet = sikayetler.find(s => s.id === sikayetId);
    document.getElementById('cevapMetni').value = sikayet.cevap;
}

// Cevabı kaydet
function cevapKaydet() {
    const cevapMetni = document.getElementById('cevapMetni').value;
    const sikayet = sikayetler.find(s => s.id === aktifSikayetId);
    
    if (sikayet && cevapMetni.trim() !== '') {
        sikayet.cevap = cevapMetni;
        sikayet.durum = 'Kapalı'; // Cevap verildiğinde durumu kapalı yap
        sikayetleriListele();
        
        // Modal'ı kapat
        const modal = bootstrap.Modal.getInstance(document.getElementById('cevapModal'));
        modal.hide();

        // Başarılı mesajı göster
        alert('Cevabınız kaydedildi ve şikayet kapatıldı.');
    } else {
        alert('Lütfen bir cevap yazın!');
    }
}

// Şikayeti kapat
function sikayetiKapat(sikayetId) {
    const sikayet = sikayetler.find(s => s.id === sikayetId);
    if (sikayet) {
        sikayet.durum = 'Kapalı';
        sikayetleriListele();
    }
}

// Şikayet arama
function sikayetAra(aramaMetni) {
    const liste = document.getElementById('sikayetListesi');
    let html = '';
    
    const filtreliSikayetler = sikayetler.filter(sikayet => 
        sikayet.firmaAdi === aktifFirma.ad && (
            sikayet.aciklama.toLowerCase().includes(aramaMetni.toLowerCase()) ||
            sikayet.musteriAdi.toLowerCase().includes(aramaMetni.toLowerCase())
        )
    );
    
    filtreliSikayetler.forEach(sikayet => {
        html += `
            <div class="sikayet-card">
                <div class="sikayet-header">
                    <div class="sikayet-firma">${sikayet.musteriAdi}</div>
                    <div class="sikayet-tarih">${sikayet.tarih}</div>
                </div>
                <div class="sikayet-content">
                    <p>${sikayet.aciklama}</p>
                    ${sikayet.cevap ? `<p class="mt-2"><strong>Firma Cevabı:</strong> ${sikayet.cevap}</p>` : ''}
                </div>
                <div class="d-flex justify-content-between align-items-center mt-3">
                    <span class="sikayet-durum ${sikayet.durum === 'Açık' ? 'durum-acik' : 'durum-kapali'}">
                        ${sikayet.durum}
                    </span>
                    ${sikayet.durum === 'Açık' ? `
                        <div>
                            <button class="btn btn-sm btn-primary" onclick="cevapVer(${sikayet.id})" data-bs-toggle="modal" data-bs-target="#cevapModal">
                                Cevapla
                            </button>
                            <button class="btn btn-sm btn-danger" onclick="sikayetiKapat(${sikayet.id})">
                                Kapat
                            </button>
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
    });
    
    liste.innerHTML = html;
}
