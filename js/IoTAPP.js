const firebaseConfig = {
  apiKey: "AIzaSyDDP042IpeYQoYnRTzrVWJfL8dNDyTAMNQ",
  authDomain: "esp32iot-7efe3.firebaseapp.com",
  databaseURL: "https://esp32iot-7efe3-default-rtdb.firebaseio.com",
  projectId: "esp32iot-7efe3",
  storageBucket: "esp32iot-7efe3.appspot.com",
  messagingSenderId: "625023662600",
  appId: "1:625023662600:web:22505ab754fc68e3d4afbd"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var IoTApp = document.getElementById('IoTApp')
var dbRef = firebase.database()


var Altitud = 0;
var Temp = 0;
var Presion = 0;


// Lectura de la altitud
let dbAltitud = dbRef.ref("ESP32IoTApp/Altitud/");
dbAltitud.on('value', function(snapshot) {
  console.log("El valor de la Altitud es", snapshot.val());
  Altitud = snapshot.val();
  document.getElementById("AltId").innerHTML = Altitud;
});

// Lectura de la presion
let dbPresion = dbRef.ref("ESP32IoTApp/Presion/");
dbPresion.on('value', function(snapshot) {
  console.log("El valor de la Presion es", snapshot.val());
  Presion = snapshot.val();
  document.getElementById("PresionId").innerHTML = Presion;
});

// Lectura de la temperatura
let dbTemp = dbRef.ref("ESP32IoTApp/Temp/");
dbTemp.on('value', function(snapshot) {
  console.log("El valor de la Temperatura es", snapshot.val());
  Temp = snapshot.val();
  document.getElementById("TemperaturaId").innerHTML = Temp;
});






