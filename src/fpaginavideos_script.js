function exibirVideosWpp() {
    fetch("https://api-tiaw.vercel.app/videoswpp")
        .then(res => res.json())
        .then(data => {
            let str = ''
            for (let i = 0; i < data.length; i++) {
                let videoswpp = data[i]
                str += `<div class="video1">
                <iframe width="340" height="190" src="${videoswpp.link}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <p class="titulo1">${videoswpp.titulo}</p>
            </div>`
            }
            document.getElementById('exibirVideos').innerHTML = str
        })
}