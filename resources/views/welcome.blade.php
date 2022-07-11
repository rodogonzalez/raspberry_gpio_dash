

<div class='container'>
    <div class='row'>
        
        <div class='col-md-4'>
            <form id="frm-validator" action="{{route('enter-order');}}" method="post">
                @csrf
                <input type="textfield" id="qr-text" value="" placeholder="Ingrese el Codigo AQUI" style="font-size:20px"></p>
                <p><input type="submit" value="Process"></p>
            </form>
            <span id='code_info'>
                <div id="qr-result"></div>
                <div id="outputData" ></div>
                <p><img id="qr-found" src=""></p>

            </span>

            
        </div>
        <div class='col-md-8'>
            <video id="preview"></video>
        </div>        
    </div>
    <div id='panel' class='row'>
        
    
    </div>


</div>

<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous">
<!-- Optional theme -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap-theme.min.css" integrity="sha384-6pzBo3FDv/PJ8r2KRkGHifhEocL+1X2rVCTTkUfGk7/0pbek5mMa1upzvWbrUbOZ" crossorigin="anonymous">
<link rel="stylesheet" href="/css/app.css" >
<script type='text/javascript' src='https://rawgit.com/schmich/instascan-builds/master/instascan.min.js?ver=6.0' id='script-index-scan-js'></script>
<script type='text/javascript' src='/js/app.js?ver={{date("h:i")}}' id='script-scanner-js'></script>




