document.getElementById('btn-submit').addEventListener('click', function(){
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if(email === 'emon@gmail.com' && password === '12345')
    {
        window.location.href = 'bank.html';
    }
    else{
        alert('invalid user');
    }
    
})
