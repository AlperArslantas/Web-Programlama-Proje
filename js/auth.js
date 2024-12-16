// Örnek kullanıcı verileri
const kullanicilar = {
    musteriler: [
        {
            email: "ahmet@example.com",
            sifre: "12345",
            tip: "musteri",
            ad: "Ahmet",
            soyad: "Yılmaz",
            telefon: "0532 123 45 67"
        }
    ],
    firmalar: [
        {
            email: "teknonova@firma.com",
            sifre: "12345",
            tip: "firma",
            ad: "TeknoNova",
            telefon: "0212 555 11 11"
        },
        {
            email: "luma@firma.com",
            sifre: "12345",
            tip: "firma",
            ad: "Luma Teknolojisi",
            telefon: "0216 444 22 22"
        },
        {
            email: "veridex@firma.com",
            sifre: "12345",
            tip: "firma",
            ad: "Veridex",
            telefon: "0312 333 33 33"
        },
        {
            email: "sugunesi@firma.com",
            sifre: "12345",
            tip: "firma",
            ad: "Su Güneşi",
            telefon: "0232 666 44 44"
        },
        {
            email: "stratosys@firma.com",
            sifre: "12345",
            tip: "firma",
            ad: "Stratosys",
            telefon: "0224 777 55 55"
        },
        {
            email: "optima@firma.com",
            sifre: "12345",
            tip: "firma",
            ad: "Optima Çekirdek",
            telefon: "0242 888 66 66"
        },
        {
            email: "neosfer@firma.com",
            sifre: "12345",
            tip: "firma",
            ad: "NeoSfer",
            telefon: "0258 999 77 77"
        },
        {
            email: "hizli@firma.com",
            sifre: "12345",
            tip: "firma",
            ad: "Hızlı Çalışmalar",
            telefon: "0352 111 88 88"
        },
        {
            email: "mira@firma.com",
            sifre: "12345",
            tip: "firma",
            ad: "Mira Yazılım",
            telefon: "0332 222 99 99"
        },
        {
            email: "gelecekx@firma.com",
            sifre: "12345",
            tip: "firma",
            ad: "GelecekX",
            telefon: "0262 444 00 00"
        }
    ]
};

function girisYap() {
    const email = document.getElementById('email').value;
    const sifre = document.getElementById('password').value;
    const tip = document.getElementById('userType').value;

    let kullanici;
    if (tip === 'musteri') {
        kullanici = kullanicilar.musteriler.find(m => m.email === email && m.sifre === sifre);
    } else {
        kullanici = kullanicilar.firmalar.find(f => f.email === email && f.sifre === sifre);
    }

    if (kullanici) {
        localStorage.setItem('aktifKullanici', JSON.stringify(kullanici));
        
        Swal.fire({
            icon: 'success',
            title: 'Giriş Başarılı',
            text: 'Yönlendiriliyorsunuz...',
            timer: 1500,
            showConfirmButton: false
        }).then(() => {
            if (tip === 'musteri') {
                window.location.href = 'pages/musteri-panel.html';
            } else {
                window.location.href = 'pages/firma-panel.html';
            }
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Hata!',
            text: 'E-posta veya şifre hatalı!',
            confirmButtonColor: '#ff4646'
        });
    }
}
