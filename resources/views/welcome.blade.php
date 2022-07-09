<form id="frm-validator" action="/validate" method="post">
<input type="textfield" id="qr-text" value="" placeholder="Ingrese el Codigo AQUI" style="font-size:20px"></p>
<p><input type="submit" value="Validar Cupon"></p>
</form>
<div id="qr-result">
<h1 id="outputData" style="display:none"></h1>
<p><img id="qr-found" src=""></p>
<video id="preview"></video>
<script type='text/javascript' src='https://rawgit.com/schmich/instascan-builds/master/instascan.min.js?ver=6.0' id='script-index-scan-js'></script>
<script type='text/javascript' src='/js/qr-reader.js?ver=1.0' id='script-scanner-js'></script>
