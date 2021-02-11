function preload(){}

function setup(){
    canvas = createCanvas(1000, 600);
    canvas.position(325, 125);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 190, 80, 650, 500);
    //x-left, y, width, y2, height//

    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(100, 40, 800, 20);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    circle(100, 45, 80, 20);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    circle(900, 45, 80, 20);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    circle(100, 550, 80, 20);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    circle(900, 550, 80, 20);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(100, 550, 800, 20);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    line(100, 570, 100, 50);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    line(100, 570, 100, 50);
    //angle, width, angle, 


}