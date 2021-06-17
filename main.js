 function setup() {
  video = createCapture(VIDEO);
  video.size(550, 500);

  canvas = createCanvas(550, 550);
  canvas.position(560,150);

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initialized!');
}
noseX=0;
noseY=0;
function draw(){
 background('#96A97');
fill('#2aaa97');
stroke('#2aaa97');
}

function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("noseX =" +noseX +"noseY="+ noseY);
  }
}
