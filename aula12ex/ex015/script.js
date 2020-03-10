function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById("txtano")
    var res = window.document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!!!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'homem_crianca_formatado.png')
            }else if(idade >= 10 && idade <21){
                //Jovem
                img.setAttribute('src', 'homem_jovem_formatado.png')
            }else if(idade < 65){
                //Adulto
                img.setAttribute('src', 'homem_adulto_formatado.png')
            }else{
                //Idoso
                img.setAttribute('src', 'homem_idoso_formatado.png')
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'mulher_crianca_formatado.png')
            }else if(idade >= 10 && idade <21){
                //Jovem
                img.setAttribute('src', 'mulher_jovem_formatado.png')
            }else if(idade < 65){
                //Adulto
                img.setAttribute('src', 'mulher_adulto_formatado.png')
            }else{
                //Idoso
                img.setAttribute('src', 'mulher_idosa_formatado.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}