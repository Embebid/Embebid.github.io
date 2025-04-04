/* const firebaseConfig = {
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

var IoTApp = document.getElementById('IoTApp');
var dbRef = firebase.database();

var Altitud = 0;
var Temp = 0;
var Presion = 0;

// Lectura de la altitud
let dbAltitud = dbRef.ref("ESP32IoTApp/Altitud/");
dbAltitud.on('value', function(snapshot) {
  let altitudValue = snapshot.val();
  if (altitudValue != null) {
    Altitud = parseFloat(altitudValue).toFixed(2);  // Limitar a 2 decimales
    document.getElementById("AltId").innerHTML = Altitud + " m";
  } else {
    console.log("No se recibió ningún valor para la altitud");
  }
});

// Lectura de la presión
let dbPresion = dbRef.ref("ESP32IoTApp/Presion/");
dbPresion.on('value', function(snapshot) {
  let presionValue = snapshot.val();
  if (presionValue != null) {
    Presion = parseFloat(presionValue).toFixed(2);  // Limitar a 2 decimales
    document.getElementById("PresionId").innerHTML = Presion + " mmHg";
  } else {
    console.log("No se recibió ningún valor para la presión");
  }
});

// Lectura de la temperatura
let dbTemp = dbRef.ref("ESP32IoTApp/Temp/");
dbTemp.on('value', function(snapshot) {
  let tempValue = snapshot.val();
  if (tempValue != null) {
    Temp = parseFloat(tempValue).toFixed(2);  // Limitar a 2 decimales
    document.getElementById("TemperaturaId").innerHTML = Temp + " °C";
  } else {
    console.log("No se recibió ningún valor para la temperatura");
  }
});
*/

//js para control de modo de luces 
// Configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDDP042IpeYQoYnRTzrVWJfL8dNDyTAMNQ",
    authDomain: "esp32iot-7efe3.firebaseapp.com",
    databaseURL: "https://esp32iot-7efe3-default-rtdb.firebaseio.com",
    projectId: "esp32iot-7efe3",
    storageBucket: "esp32iot-7efe3.appspot.com",
    messagingSenderId: "625023662600",
    appId: "1:625023662600:web:22505ab754fc68e3d4afbd"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);

// Función para enviar el valor a Firebase
function sendToFirebase() {
    const modeValue = document.getElementById('fbmodeValue').value;

    // Validación para asegurarse de que el valor está entre 1 y 5
    if (modeValue >= 1 && modeValue <= 5) {
        firebase.database().ref("ESP32IoTApp/fbmode").set(Number(modeValue))
            .then(() => {
                alert(`Modo ${modeValue} ha sido enviado exitosamente.`);
            })
            .catch((error) => {
                console.error("Error al enviar a Firebase: ", error);
            });
    } else {
        alert("Por favor, introduce un valor entre 1 y 5.");
    }
}

