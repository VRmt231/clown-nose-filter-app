var noseX = 0;
var noseY = 0;
var leftEyeX = 0;
var leftEyeY = 0;
function preload(){
    clown_nose = loadImage("clown_nose.png");
    left_eyelash = loadImage("left eyelash boi.png")
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO)
    video.size(300,300)
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded)
    poseNet.on('pose',gotPoses)
}

function modelLoaded(){
    console.log("PoseNet is Initialized, don't waste your time before it's shut down")
}

function draw(){
    image(video, 0, 0, 300, 300)
    //fill("green")
    //stroke("black")
    //circle(noseX,noseY,20);
    image(clown_nose,noseX,noseY,30,30)
    image(left_eyelash,leftEyeX,leftEyeY,30,30)
}

function take_snapshot(){
    save('filtered_img.png')
}
function gotPoses(results){
if(results.length > 0){
    noseX = results[0].pose.nose.x -15;
    noseY = results[0].pose.nose.y -15;
    leftEyeX = results[0].pose.leftEye.x -20;
    leftEyeY = results[0].pose.leftEye.y -20;
    console.log(results);
    console.log("nose x = " + results[0].pose.nose.x);
    console.log("nose y = " + results[0].pose.nose.y);
    
}
}
 
