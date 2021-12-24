prediction_1 = ""
prediction_2 = ""
Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});
camera = document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });
}
console.log('ml5version', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/sWBOqVn-2/model.json', modelLoaded);

function modelLoaded() {
    console.log('modelLoaded');
}

function speak() {
    var synth = window.speechSysnthesis;
    speak_data_1 = "The first prediction is " + prediction_1;
    speak_data_2 = "And the second prediction is " + prediction_2;
    var utterThis = new SpeechSysnthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}