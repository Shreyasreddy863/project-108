Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_ouality:9

});

camera =document.getElementById("camera")

Webcam.attach('#camera');


function take_snapshot()
{
    webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id=" id"captured_image" src="'+data_uri+'"/>';
    });
}
console.log('ml5 version:', ml5.version);
classifier = ml5.imageclassifier('https://teachablemechaine.withgoogle.com/models/v_sl95bzE/model.json',modelloaded);

function modelloaded(){
    console.log('model loaded!');
}

function speak(){
var synth=wnd.speechSynthesis;
speak_data_1 = "the first predition is" +predection_1;
speak_data_2 = "and second predition is" +predection_2;
var utterthis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
utterthis.rate =0.5;
synth.speak(utterthis);
}
function check()
{
    img =document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error,results) {
    if (error) {
        console.error(error);
    }else{
        console.log(results);
        document.getElementById("result_emotion_name").innerHTML=results[0].label;
        document.getElementById("result_emotion_name2").innerHTML=results[0].label;
        predection_1=results[0].label;
        predection_2=results[1].label;
    }
}
