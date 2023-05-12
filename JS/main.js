let a = 2

function chH() {
    let h = document.getElementsByTagName("h1")[0]
    loop(h)
}

function loop(h) {

    h.textContent = a
    if (!a) {
        a = 1
    }
    a <<= 1
    sleep(3).then(() => loop(h));

}

function sleep(s) {
    return new Promise(resolve => setTimeout(resolve, s * 1000));
}

const btn = document.getElementsByTagName('button')[0];
btn.addEventListener("click", chH)



