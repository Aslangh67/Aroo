arooBtn = $(".arooBtn")
arooTxt = $(".arooTxt")

textArr = ["I'm always here for you :D", "Age khaste shodi, I'm a message away :D", "Aroo is a good doctor!!! :D","Age asabet khorde, I'm a message away :D", "Aroo , Aroo, Aroo, Aroo :D", "Khake alam to sare harchi adame nafahme :D"]

arooBtn.click(function(){
    arooBtn.html(textArr[Math.floor(Math.random()* textArr.length)])
})