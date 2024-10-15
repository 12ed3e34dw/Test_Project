document.getElementById('to-register').addEventListener('click', function() {
    document.getElementById('auth-container').classList.add('hidden');
    document.getElementById('register-container').classList.remove('hidden');
});

document.getElementById('to-login').addEventListener('click', function() {
    document.getElementById('register-container').classList.add('hidden');
    document.getElementById('auth-container').classList.remove('hidden');
});
