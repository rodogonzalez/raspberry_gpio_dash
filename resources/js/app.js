require('./bootstrap');
console.log('start app');

let scanner = new Instascan.Scanner({ video: document.getElementById('preview') });
function clean_previous_qr(){

    document.getElementById("code_info").style.display = "none";    

}

scanner.addListener('scan', function (content) {
  document.getElementById('outputData').innerHTML=content;
  //document.getElementById("preview").style.display = "none";    
  document.getElementById("qr-found").src = "https://chart.googleapis.com/chart?chs=250x250&cht=qr&UTF-8&chl=" + content;Â    
  document.getElementById("qr-text").value = content;
  document.getElementById("code_info").style.display = "block";    


  setTimeout(clean_previous_qr, 5*1000);

});

Instascan.Camera.getCameras().then(function (cameras) {
if (cameras.length > 0) {
  scanner.start(cameras[0]);
} else {
  console.error('No cameras found.');
}
}).catch(function (e) {
  formatconsole.error(e);
});