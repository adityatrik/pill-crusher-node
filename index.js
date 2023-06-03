const http = require('https');
const mqtt = require('mqtt');

const mqttBrokerUrl = 'mqtt://103.146.203.230'; // Ganti dengan URL broker MQTT yang sesuai
const mqttTopic = '/mcv/bl/device/1'; // Ganti dengan topik MQTT yang sesuai
const url = 'https://script.google.com/macros/s/AKfycbxPi57J9Y9U8DARIg5ZkdP6jSyRWCcXmty6D1zRNrTWdvE9kqrfS9phLGsW0_5uAVXs/exec'; // Ganti dengan URL yang sesuai

// Membuat koneksi MQTT ke broker
const mqttClient = mqtt.connect(mqttBrokerUrl);

// Mengatur aksi yang akan dilakukan saat koneksi MQTT berhasil
mqttClient.on('connect', () => {
  console.log('Connected to MQTT broker');

  // Menghubungkan ke topik MQTT yang diinginkan
  mqttClient.subscribe(mqttTopic, (err) => {
    if (err) {
      console.error('Failed to subscribe to MQTT topic:', err);
    } else {
      console.log('Subscribed to MQTT topic:', mqttTopic);
    }
  });
});

// Mengatur aksi yang akan dilakukan saat pesan MQTT diterima
mqttClient.on('message', (topic, message) => {
  console.log('Received M QTT message:', message.toString());

  // Membuat permintaan HTTP GET menggunakan data pesan MQTT
  var msg = message.toString();
  var httpGet = url+'?'+msg;

  const req = http.request(httpGet, (res) => {
    let data = '';

    // Mengumpulkan data yang diterima dalam bentuk chunk
    res.on('data', (chunk) => {
      data += chunk;
    });

    // Menampilkan data yang diterima setelah permintaan selesai
    res.on('end', () => {
      console.log('HTTP Response:', data);
    });
  });

  req.on('error', (err) => {
    console.error('HTTP Request Error:', err);
  });

  // Mengirimkan pesan MQTT sebagai payload dalam permintaan HTTP
  req.write(message.toString());

  // Mengakhiri permintaan HTTP
  req.end();
});

