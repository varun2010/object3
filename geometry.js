img="";
status="";
function preload(){
    img=loadImage("Geometrycal things.jpg");
}
function setup(){
    canvas=createCanvas(800,450);
    canvas.center();
    objectDetection=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="Status:Detecting Objects";
}
function modelLoaded(){
    console.log("model loaded");
    status=true;
    objectDetection.detect(img,gotResult);
}
function gotResult(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
    }
}
function draw(){
    image(img,0,0,800,450);
}
function back(){
    window.location="index.html";
}