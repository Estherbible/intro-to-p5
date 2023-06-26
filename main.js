C = ""
function preload() {

}
function setup() {
    canvas = createCanvas(500, 500)
    // canvas.center()
    canvas.position(400, 300)
    video = createCapture(VIDEO)
    video.hide()
}

function draw() {
    background("blue")
    image(video, 100, 100, 300, 300)
    tint(C)


fill("pink")
stroke("black")
    circle(100,100,50)
    circle(400,100,50)
    circle(100,400,50)
    circle(400,400,50)
    fill("yellow")
    rect(50,50,80,20)
    rect(130,400,20,80)
    rect(200,450,80,20)
    rect(300,400,190,10)
    rect(400,200,80,20)
    rect(430,10,80,80)
    rect(70,10,80,80)
    rect(430,10,80,80)
}

function apply_filter() {
    C = document.getElementById("color").value
}

function take_snapshot() {
    save("esther.png")
}
