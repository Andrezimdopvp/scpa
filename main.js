//https://teachablemachine.withgoogle.com/models/ZEYfPcWhE/

function iniciar() {
  navigator.mediaDevices.getUserMedia({ audio: true, video: false });
  classifier = ml5.soundClassifier(
    "https://teachablemachine.withgoogle.com/models/ZEYfPcWhE/model.json",
    { probabilityThreshold: 0.7 },
    modelReady
  );
}

function modelReady() {
  classifier.classify(gotResults);
}

var img = document.getElementById("animalImg");
var dog = 0;
var cat = 0;
var lion = 0;
var cow = 0;

function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("dog").innerHTML =
      "Cachorro detectado  - " + dog + ", ";
      document.getElementById("cat").innerHTML =
      "Gato detectado  - " + cat + ", ";
      document.getElementById("lion").innerHTML =
      "Leão detectado  - " + lion + ", ";
      document.getElementById("cow").innerHTML =
      "Vaca detectado  - " + lion + ", ";
      
    img = document.getElementById("imagem");

    if(results[0].label == "Cachorro") {
      img.src = "cachorro.jpg";
      dog = dog + 1;
      document.getElementById("dog").innerHTML =
      "Cachorro detectado  - " + dog + ", ";
    } else if (results[0].label == "Gato") {
      img.src = "gato.jpg";
      cat = cat + 1;
      document.getElementById("cat").innerHTML =
      "Gato detectado  - " + cat + ", ";
    } else if (results[0].label == "Vaca") {
      img.src = "vaca.jpg";
      cow = cow + 1;
      document.getElementById("cow").innerHTML =
      "Vaca detectado  - " + lion + ", ";
    } else if (results[0].label == "Leão") {
      img.src = "leao.jpg";
      lion = lion + 1;
      document.getElementById("lion").innerHTML =
      "Leão detectado  - " + lion + ", ";
    }
  }
}