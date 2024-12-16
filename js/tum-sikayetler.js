// Örnek şikayet verileri
const musteriSikayetleri = [
    {
        id: 1,
        firmaAdi: "TeknoNova",
        kategori: "Elektronik",
        sikayetNedeni: "Hasarlı Ürün",
        aciklama: "Satın aldığım akıllı saat 2 gün sonra çalışmayı durdurdu.",
        tarih: "2023-10-01",
        durum: "Açık",
        firmaCevabi: "Henüz cevap verilmedi"
    },
    {
        id: 2,
        firmaAdi: "Luma Teknolojisi",
        kategori: "Elektronik",
        sikayetNedeni: "Geç Teslimat",
        aciklama: "LED panel siparişim 3 haftadır gelmedi.",
        tarih: "2023-09-28",
        durum: "Kapalı",
        firmaCevabi: "Ürününüz yarın teslim edilecektir."
    },
    {
        id: 3,
        firmaAdi: "Veridex",
        kategori: "Yazılım",
        sikayetNedeni: "Ürün Kalitesi",
        aciklama: "Veri kurtarma hizmeti başarısız oldu.",
        tarih: "2023-09-25",
        durum: "Açık",
        firmaCevabi: "Henüz cevap verilmedi"
    },
    {
        id: 4,
        firmaAdi: "Su Güneşi",
        kategori: "Hizmet",
        sikayetNedeni: "Müşteri Hizmetleri",
        aciklama: "Kurulum sonrası teknik destek alamıyorum.",
        tarih: "2023-09-20",
        durum: "Kapalı",
        firmaCevabi: "Teknik ekibimiz sizinle iletişime geçecektir."
    },
    {
        id: 5,
        firmaAdi: "Stratosys",
        kategori: "Yazılım",
        sikayetNedeni: "Yanlış Ürün",
        aciklama: "Yazılım lisansı yanlış gönderildi.",
        tarih: "2023-09-15",
        durum: "Açık",
        firmaCevabi: "Henüz cevap verilmedi"
    },
    {
        id: 6,
        firmaAdi: "Optima Çekirdek",
        kategori: "Elektronik",
        sikayetNedeni: "İade Sorunu",
        aciklama: "İade talebim 2 haftadır onaylanmadı.",
        tarih: "2023-09-10",
        durum: "Kapalı",
        firmaCevabi: "İade işleminiz tamamlanmıştır."
    },
    {
        id: 7,
        firmaAdi: "NeoSfer",
        kategori: "Elektronik",
        sikayetNedeni: "Hasarlı Ürün",
        aciklama: "VR gözlük hasarlı geldi.",
        tarih: "2023-09-05",
        durum: "Açık",
        firmaCevabi: "Henüz cevap verilmedi"
    },
    {
        id: 8,
        firmaAdi: "Hızlı Çalışmalar",
        kategori: "Hizmet",
        sikayetNedeni: "Ürün Kalitesi",
        aciklama: "SEO çalışması yetersiz kaldı.",
        tarih: "2023-09-01",
        durum: "Kapalı",
        firmaCevabi: "Ek optimizasyon çalışması yapılacaktır."
    }
];

// Mevcut şikayetlere eklenecek yeni şikayetler
const yeniSikayetler = [
    {
        id: 9,
        firmaAdi: "Mira Yazılım",
        kategori: "Yazılım",
        sikayetNedeni: "Ürün Kalitesi",
        aciklama: "Mobil uygulama sürekli çöküyor ve veri kaybına neden oluyor.",
        tarih: "2023-08-28",
        durum: "Açık",
        firmaCevabi: "Henüz cevap verilmedi"
    },
    {
        id: 10,
        firmaAdi: "GelecekX",
        kategori: "Yazılım",
        sikayetNedeni: "Müşteri Hizmetleri",
        aciklama: "Chatbot hizmetinde yaşanan sorunlar için destek alamıyorum.",
        tarih: "2023-08-25",
        durum: "Kapalı",
        firmaCevabi: "Sorun giderildi, özür dileriz."
    },
    {
        id: 11,
        firmaAdi: "TeknoNova",
        kategori: "Elektronik",
        sikayetNedeni: "İade Sorunu",
        aciklama: "Bluetooth kulaklık arızalı çıktı, iade kabul edilmiyor.",
        tarih: "2023-08-20",
        durum: "Açık",
        firmaCevabi: "İncelemeye alındı"
    },
    {
        id: 12,
        firmaAdi: "Luma Teknolojisi",
        kategori: "Elektronik",
        sikayetNedeni: "Yanlış Ürün",
        aciklama: "Sipariş ettiğim monitör yerine klavye geldi.",
        tarih: "2023-08-15",
        durum: "Kapalı",
        firmaCevabi: "Doğru ürün gönderimi yapıldı"
    },
    {
        id: 13,
        firmaAdi: "Veridex",
        kategori: "Hizmet",
        sikayetNedeni: "Geç Teslimat",
        aciklama: "Veri yedekleme hizmeti 1 haftadır başlatılmadı.",
        tarih: "2023-08-10",
        durum: "Açık",
        firmaCevabi: "Henüz cevap verilmedi"
    },
    {
        id: 14,
        firmaAdi: "Su Güneşi",
        kategori: "Hizmet",
        sikayetNedeni: "Ürün Kalitesi",
        aciklama: "Solar paneller belirtilen verimi sağlamıyor.",
        tarih: "2023-08-05",
        durum: "Kapalı",
        firmaCevabi: "Teknik ekip inceleme yapacak"
    },
    {
        id: 15,
        firmaAdi: "Stratosys",
        kategori: "Yazılım",
        sikayetNedeni: "Hasarlı Ürün",
        aciklama: "Satın alınan yazılım lisansı aktifleştirilemiyor.",
        tarih: "2023-08-01",
        durum: "Açık",
        firmaCevabi: "Henüz cevap verilmedi"
    },
    {
        id: 16,
        firmaAdi: "Optima Çekirdek",
        kategori: "Elektronik",
        sikayetNedeni: "Müşteri Hizmetleri",
        aciklama: "Garanti kapsamındaki işlemci için dönüş yapılmıyor.",
        tarih: "2023-07-28",
        durum: "Kapalı",
        firmaCevabi: "Garanti işlemi başlatıldı"
    },
    {
        id: 17,
        firmaAdi: "NeoSfer",
        kategori: "Elektronik",
        sikayetNedeni: "Ürün Kalitesi",
        aciklama: "AR gözlüğün pil ömrü çok kısa.",
        tarih: "2023-07-25",
        durum: "Açık",
        firmaCevabi: "İnceleniyor"
    },
    {
        id: 18,
        firmaAdi: "Hızlı Çalışmalar",
        kategori: "Hizmet",
        sikayetNedeni: "Geç Teslimat",
        aciklama: "Web sitesi tasarımı 2 ay gecikti.",
        tarih: "2023-07-20",
        durum: "Kapalı",
        firmaCevabi: "Telafi edildi"
    },
    {
        id: 19,
        firmaAdi: "Mira Yazılım",
        kategori: "Yazılım",
        sikayetNedeni: "Yanlış Ürün",
        aciklama: "Yanlış versiyon yazılım lisansı verildi.",
        tarih: "2023-07-15",
        durum: "Açık",
        firmaCevabi: "Henüz cevap verilmedi"
    },
    {
        id: 20,
        firmaAdi: "GelecekX",
        kategori: "Yazılım",
        sikayetNedeni: "İade Sorunu",
        aciklama: "Yapay zeka hizmeti için iade talebi reddedildi.",
        tarih: "2023-07-10",
        durum: "Kapalı",
        firmaCevabi: "İade talebi onaylandı"
    },
    {
        id: 21,
        firmaAdi: "TeknoNova",
        kategori: "Elektronik",
        sikayetNedeni: "Hasarlı Ürün",
        aciklama: "Tablet ekranı çizik geldi.",
        tarih: "2023-07-05",
        durum: "Açık",
        firmaCevabi: "Değişim işlemi başlatıldı"
    },
    {
        id: 22,
        firmaAdi: "Luma Teknolojisi",
        kategori: "Elektronik",
        sikayetNedeni: "Müşteri Hizmetleri",
        aciklama: "Teknik destek hattına ulaşılamıyor.",
        tarih: "2023-07-01",
        durum: "Kapalı",
        firmaCevabi: "Yeni destek hattı kuruldu"
    },
    {
        id: 23,
        firmaAdi: "Veridex",
        kategori: "Hizmet",
        sikayetNedeni: "Ürün Kalitesi",
        aciklama: "Veri analiz raporu eksik hazırlandı.",
        tarih: "2023-06-28",
        durum: "Açık",
        firmaCevabi: "Rapor güncelleniyor"
    }
];

// Mevcut şikayetlere yeni şikayetleri ekle
musteriSikayetleri.push(...yeniSikayetler);

document.addEventListener('DOMContentLoaded', () => {
    tumSikayetleriListele();
    
    // Filtreleme olaylarını dinle
    document.getElementById('kategoriFilter').addEventListener('change', filtrele);
    document.getElementById('firmaFilter').addEventListener('change', filtrele);
    document.getElementById('durumFilter').addEventListener('change', filtrele);
    document.getElementById('nedenFilter').addEventListener('change', filtrele);
    document.getElementById('aramaInput').addEventListener('keyup', filtrele);
});

function tumSikayetleriListele(filtreliSikayetler = null) {
    const sikayetler = filtreliSikayetler || musteriSikayetleri;
    const liste = document.getElementById('tumSikayetlerListesi');
    let html = '';
    
    sikayetler.forEach(sikayet => {
        html += `
            <div class="sikayet-card mb-3">
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
            </div>
        `;
    });
    
    liste.innerHTML = html || '<p class="text-center">Hiç şikayet bulunamadı.</p>';
}

function filtrele() {
    const kategori = document.getElementById('kategoriFilter').value;
    const firma = document.getElementById('firmaFilter').value;
    const durum = document.getElementById('durumFilter').value;
    const neden = document.getElementById('nedenFilter').value;
    const arama = document.getElementById('aramaInput').value.toLowerCase();
    
    let filtreliSikayetler = musteriSikayetleri.filter(sikayet => {
        return (!kategori || sikayet.kategori === kategori) &&
               (!firma || sikayet.firmaAdi === firma) &&
               (!durum || sikayet.durum === durum) &&
               (!neden || sikayet.sikayetNedeni === neden) &&
               (!arama || 
                sikayet.aciklama.toLowerCase().includes(arama) ||
                sikayet.firmaAdi.toLowerCase().includes(arama) ||
                sikayet.sikayetNedeni.toLowerCase().includes(arama));
    });
    
    tumSikayetleriListele(filtreliSikayetler);
}
