// js for sidebar dropdown
function uiShowHide() {
  var b = document.getElementById("uiDrpdwn");
  if(b.style.display === "block"){
    document.getElementById("arrRght").style = "transform: rotate(0deg)";
  }
  else {
    document.getElementById("arrRght").style = "transform: rotate(90deg)";
  }
}

$(document).ready(function(){
  $("#drpwndLi").click(function(){
    $("#uiDrpdwn").slideToggle("slow");
  });
});

//  toggle sidebar
function toggleHide() {
  var a = document.getElementById("sideMnu");
  if(a.style.width === "210px") {
    document.getElementById("sideMnu").style = "width: 0px;";
    document.getElementById("appcontnt").style = "margin-left: 0px;";
  }
  else {
    document.getElementById("sideMnu").style = "width: 210px;";
    document.getElementById("appcontnt").style = "margin-left: 0px;";
  }
}

// camera js
var video = document.getElementById('video');

// Get access to the camera!
if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    // Not adding `{ audio: true }` since we only want video now
    navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
        //video.src = window.URL.createObjectURL(stream);
        video.srcObject = stream;
        video.play();
    });
}

// emotion chart start
  Chart.defaults.global.defaultFontColor = '#fff';
  new Chart(document.getElementById("emotion-chart"), {
    type: 'bar',
    data: {
    labels: ["anger", "sad", "fear", "happy", "surprise", "disgust"],
    datasets: [
      {
        label: "Emotions",
        backgroundColor: ["#6EC38D", "#6EC38D","#6EC38D","#6EC38D", "#6EC38D", "#6EC38D"],
        data: [20,50,10,50,20]
      }
    ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: ''
      }
    }
  });
  // emotion chart end
  // line chart start
  new Chart(document.getElementById("line-chart"), {
    type: 'line',
    data: {
      labels: [2,4,5,6,10,12,14,16,18,20],
      datasets: [{ 
          data: [5,14,28,34,39,41,46,57,60,90],
          label: "one",
          borderColor: "#6EC38D",
          fill: false
        }, { 
          data: [5,22,36,39,42,47,49,68,80,95],
          label: "another",
          borderColor: "#6EC38D",
          fill: false
        }
      ]
    },
    options: {
      title: {
        display: false
      }
    }
  });
  // line chart end
  // gender chart start
  new Chart(document.getElementById("gender-chart"), {
    type: 'bar',
    data: {
    labels: ["MALE", "FEMALE", "OTHERS"],
    datasets: [
      {
        label: "Emotions",
        backgroundColor: ["#6EC38D", "#6EC38D","#6EC38D"],
        data: [20,50,4]
      }
    ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: ''
      }
    }
  });
  // gender chart end
  // age chart start
  new Chart(document.getElementById("age-chart"), {
    type: 'bar',
    data: {
    labels: ["0-15", "15-25", "25-35", "35-45", "45-55"],
    datasets: [
      {
        label: "Emotions",
        backgroundColor: ["#6EC38D", "#6EC38D","#6EC38D","#6EC38D", "#6EC38D"],
        data: [15,30,10,25,35]
      }
    ]
    },
    options: {
      legend: { display: false },
      title: {
        display: true,
        text: ''
      }
    }
  });
  // age chart end