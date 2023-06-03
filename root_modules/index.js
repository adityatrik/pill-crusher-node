const fs = require('fs');
const mqtt = require('mqtt');

const client = mqtt.connect('mqtt://103.146.203.230');
var topicPub = "alert/server/";
var mode = 0;
var sirine = false;
var index = 0;

fs.readFile('config.txt', 'utf8', function (err, data) {
  if (err) throw err;
  const objData = JSON.parse(data);
  topicPub += objData.area;
  mode = objData.mode;
  sirine = objData.sirine;
});

client.on('connect', function () {
  console.log('SERVER TERHUBUNG!!')
  setInterval(function () {
    if (mode == 1) {
      index++;
      client.publish(topicPub, '{"FUNC":"ALARM","DATA":"MD1"}');
      console.log('{"FUNC":"ALARM","DATA":"MD1"}');
      if (sirine == 'ON') {
        client.publish(topicPub, '{"FUNC":"SIRINE","DATA":"ON"}');
        console.log('{"FUNC":"SIRINE","DATA":"ON"}');
      }else
      {
        client.publish(topicPub, '{"FUNC":"SIRINE","DATA":"OFF"}');
        console.log('{"FUNC":"SIRINE","DATA":"OFF"}');
      }
      if (index == 1) {
        console.log('PROCESSING 30%...');
      } else if (index == 2) {
        console.log('PROCESSING 60%...');
      } else if (index == 3) {
        console.log('PROCESSING 80%...');
      } else if (index == 4) {
        console.log('PROCESSING 100%...');
        console.log('ALARM BERHASIL DIAKTIFKAN !!')
        process.exit();
      }
    } else if (mode == 2) {
      index++;
      client.publish(topicPub, '{"FUNC":"ALARM","DATA":"MD2"}');
      console.log('{"FUNC":"ALARM","DATA":"MD2"}');
      if (sirine == 'ON') {
        client.publish(topicPub, '{"FUNC":"SIRINE","DATA":"ON"}');
        console.log('{"FUNC":"SIRINE","DATA":"ON"}');
      }else
      {
        client.publish(topicPub, '{"FUNC":"SIRINE","DATA":"OFF"}');
        console.log('{"FUNC":"SIRINE","DATA":"OFF"}');
      }
      if (index == 1) {
        console.log('PROCESSING 30%...');
      } else if (index == 2) {
        console.log('PROCESSING 60%...');
      } else if (index == 3) {
        console.log('PROCESSING 80%...');
      } else if (index == 4) {
        console.log('PROCESSING 100%...');
        console.log('ALARM BERHASIL DIAKTIFKAN !!')
        process.exit();
      }
    } else if (mode == 0) {
      index++;
      client.publish(topicPub, '{"FUNC":"ALARM","DATA":"CLR"}');
      console.log('{"FUNC":"TRG","DATA":"CLR}');
      client.publish(topicPub, '{"FUNC":"SIRINE","DATA":"OFF"}');
      console.log('{"FUNC":"SIRINE","DATA":"OFF"}');
      if (index == 1) {
        console.log('PROCESSING 30%...');
      } else if (index == 2) {
        console.log('PROCESSING 60%...');
      } else if (index == 3) {
        console.log('PROCESSING 80%...');
      } else if (index == 4) {
        console.log('PROCESSING 100%...');
        console.log('ALARM BERHASIL DIAKTIFKAN !!')
        process.exit();
      }
    }else if (mode == 3) {
      index++;
      client.publish(topicPub, '{"FUNC":"ALARM","DATA":"MD3"}');
      console.log('{"FUNC":"ALARM","DATA":"MD3"}');
      if (sirine == 'ON') {
        client.publish(topicPub, '{"FUNC":"SIRINE","DATA":"ON"}');
        console.log('{"FUNC":"SIRINE","DATA":"ON"}');
      }else
      {
        client.publish(topicPub, '{"FUNC":"SIRINE","DATA":"OFF"}');
        console.log('{"FUNC":"SIRINE","DATA":"OFF"}');
      }
      if (index == 1) {
        console.log('PROCESSING 30%...');
      } else if (index == 2) {
        console.log('PROCESSING 60%...');
      } else if (index == 3) {
        console.log('PROCESSING 80%...');
      } else if (index == 4) {
        console.log('PROCESSING 100%...');
        console.log('ALARM BERHASIL DIAKTIFKAN !!')
        process.exit();
      }
    } else if (mode == 4) {
      index++;
      client.publish(topicPub, '{"FUNC":"ALARM","DATA":"MD4"}');
      console.log('{"FUNC":"ALARM","DATA":"MD4"}');
      if (sirine == 'ON') {
        client.publish(topicPub, '{"FUNC":"SIRINE","DATA":"ON"}');
        console.log('{"FUNC":"SIRINE","DATA":"ON"}');
      }else
      {
        client.publish(topicPub, '{"FUNC":"SIRINE","DATA":"OFF"}');
        console.log('{"FUNC":"SIRINE","DATA":"OFF"}');
      }
      if (index == 1) {
        console.log('PROCESSING 30%...');
      } else if (index == 2) {
        console.log('PROCESSING 60%...');
      } else if (index == 3) {
        console.log('PROCESSING 80%...');
      } else if (index == 4) {
        console.log('PROCESSING 100%...');
        console.log('ALARM BERHASIL DIAKTIFKAN !!')
        process.exit();
      }
    } else if (mode == 5) {
      index++;
      client.publish(topicPub, '{"FUNC":"ALARM","DATA":"MD5"}');
      console.log('{"FUNC":"ALARM","DATA":"MD5"}');
      if (sirine == 'ON') {
        client.publish(topicPub, '{"FUNC":"SIRINE","DATA":"ON"}');
        console.log('{"FUNC":"SIRINE","DATA":"ON"}');
      }else
      {
        client.publish(topicPub, '{"FUNC":"SIRINE","DATA":"OFF"}');
        console.log('{"FUNC":"SIRINE","DATA":"OFF"}');
      }
      if (index == 1) {
        console.log('PROCESSING 30%...');
      } else if (index == 2) {
        console.log('PROCESSING 60%...');
      } else if (index == 3) {
        console.log('PROCESSING 80%...');
      } else if (index == 4) {
        console.log('PROCESSING 100%...');
        console.log('ALARM BERHASIL DIAKTIFKAN !!')
        process.exit();
      }
    } else if (mode == 6) {
      index++;
      client.publish(topicPub, '{"FUNC":"ALARM","DATA":"MD6"}');
      console.log('{"FUNC":"ALARM","DATA":"MD6"}');
      if (sirine == 'ON') {
        client.publish(topicPub, '{"FUNC":"SIRINE","DATA":"ON"}');
        console.log('{"FUNC":"SIRINE","DATA":"ON"}');
      }else
      {
        client.publish(topicPub, '{"FUNC":"SIRINE","DATA":"OFF"}');
        console.log('{"FUNC":"SIRINE","DATA":"OFF"}');
      }
      if (index == 1) {
        console.log('PROCESSING 30%...');
      } else if (index == 2) {
        console.log('PROCESSING 60%...');
      } else if (index == 3) {
        console.log('PROCESSING 80%...');
      } else if (index == 4) {
        console.log('PROCESSING 100%...');
        console.log('ALARM BERHASIL DIAKTIFKAN !!')
        process.exit();
      }
    } 
    else {
      index++;
      client.publish(topicPub, `{"FUNC":"ALARM","DATA":"MD${mode}"}`);
      console.log(`{"FUNC":"ALARM","DATA":"MD${mode}"}`);
      if (sirine == 'ON') {
        client.publish(topicPub, '{"FUNC":"SIRINE","DATA":"ON"}');
        console.log('{"FUNC":"SIRINE","DATA":"ON"}');
      }else
      {
        client.publish(topicPub, '{"FUNC":"SIRINE","DATA":"OFF"}');
        console.log('{"FUNC":"SIRINE","DATA":"OFF"}');
      }
      if (index == 1) {
        console.log('PROCESSING 30%...');
      } else if (index == 2) {
        console.log('PROCESSING 60%...');
      } else if (index == 3) {
        console.log('PROCESSING 80%...');
      } else if (index == 4) {
        console.log('PROCESSING 100%...');
        console.log('ALARM BERHASIL DIAKTIFKAN !!')
        process.exit();
      }
    } 
  }, 1000) // Send message every 1 second
})