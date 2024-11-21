function roteiro(){
    let pontos=document.getElementById("pontos");
    let maisTexto=document.getElementById("mais");
    let btnRoteiro=document.getElementById("btnRoteiro");

    if (pontos.style.display === "none") {
            pontos.style.display="inline";
            maisTexto.style.display="none";
            btnRoteiro.innerHTML="Roteiro";
    } else {
        pontos.style.display="none";
        maisTexto.style.display="inline";
        btnRoteiro.innerHTML="Roteiro Menos";
    }
}