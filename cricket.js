img="";
objects=[];
status="";
function preload(){
    img=loadImage("cricket.webp");
}
function setup(){
    canvas=createCanvas(960,546);
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
        objects=results;
    }
}
function draw(){
    image(img,0,0,960,546);
    if(status != ""){
        for(var i=0; i<objects.length;i++){
            document.getElementById("status").innerHTML="There are 16 big objects in which CocoSsd has detected 3 objects";
            percent=floor(objects[i].confidence*100);
            fill("gold");
            stroke("red");
            text(objects[i].label+" "+percent+"%",objects[i].x,objects[i].y-15);
            noFill();
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
    }
}
function back(){
    window.location="index.html";
}