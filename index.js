arooBtn = $(".arooBtn")
arooTxt = $(".arooTxt")

textArr = ["I'm always here for you :D", "Age khaste shodi, I'm a message away :D", "Aroo is a good doctor!!! :D", "Age asabet khorde, I'm a message away :D", "Aroo , Aroo, Aroo, Aroo :D", "Khake alam to sare harchi adame nafahme :D"]

arooBtn.click(function () {
    arooBtn.hide()

    // arooBtn.html(textArr[Math.floor(Math.random()* textArr.length)])
    const timer = setInterval(() => {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16)
        document.body.style.backgroundColor = "#" + randomColor
        const pTag = $("<p>")
        pTag.html("&#128151;")
        $(".main").append(pTag)

    }, 100)
})