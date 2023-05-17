function contar() {
    var ini = document.getElementById('iini')
    var fim = document.getElementById('ifim')
    var passo = document.getElementById('ipas')
    var res = document.getElementById('res')

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossivel contar'
    } else {
        res.innerHTML = 'Contando: <br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (p <= 0) {
            alert('Passo invalido! Considerando PASSO 1')
        }
        if (i < f) {
            for(var c = i; c <= f; c += p) {
            res.innerHTML += ` ${c} \u{1F449}`
            }
        }else {
            for(var c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3c1}`
    }
}