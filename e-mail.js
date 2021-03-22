function verificaemail(){
    var email = document.querySelector('#email').value;
    var pos = email.indexOf("@");
    var posarroba = email.indexOf("@.");
    var posponto = email.indexOf(".");
    //Verifica-se o arroba é o primeiro caractere do e-mail, o que implicaria num erro.
    if (pos==0) {
        alert("E-mail Inválido");
        return false;
    }

    //Verifica-se o arroba está ausente, o que implicaria num erro.
    if (pos==-1) {
    alert("E-mail Inválido");
    return false;
    }

    //Verifica-se o arroba é o último caractere do e-mail, o que implicaria num erro.
    if (pos==email.length-1) {
        alert("E-mail Inválido");
        return false;
    }
        
    //Verifica-se o arroba está com ponto, o que implicaria num erro.
    if (posarroba!==-1) {
        alert("E-mail Inválido");
        return false;
    }

    //Verifica-se o ponto é o último caractere do e-mail, o que implicaria num erro.
        if (posponto==email.length-1) {
        alert("E-mail Inválido");
        return false;
    }

    alert("Enviado com Sucesso");
    return true; 
}
