// Giriş başarısız olduğunda
Swal.fire({
    title: 'Hata!',
    text: 'Kullanıcı adı veya şifre hatalı',
    icon: 'error',
    confirmButtonText: 'Tamam'
});

// Giriş başarılı olduğunda
Swal.fire({
    title: 'Başarılı!',
    text: 'Giriş başarılı, yönlendiriliyorsunuz...',
    icon: 'success',
    showConfirmButton: false,
    timer: 1500
});  