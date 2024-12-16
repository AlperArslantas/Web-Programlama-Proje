// Son şikayetleri complaints.js'den alıyoruz
document.addEventListener('DOMContentLoaded', () => {
    const sonSikayetlerDiv = document.getElementById('sonSikayetler');
    
    // Son 6 şikayeti göster
    const sonAltiSikayet = sikayetler.slice(0, 6);
    
    let html = '';
    sonAltiSikayet.forEach(sikayet => {
        html += `
            <div class="col-md-4 mb-4">
                <div class="sikayet-card">
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
});
