
<meta name="csrf-token" content="{{ csrf_token() }}">
<div class='container'>    
    <div class='row'>        
        
        <div class='col-md-8'>
            <div id='panel'></div>
        </div>        
        <div class='col-md-4'>
            <video id="preview"></video>            
            <div id="outputData" ></div>
            <span id='code_info' >
                <span id="frm-submit"></span>
                <div id="qr-result"></div>
                
                <img id="qr-found" src="">
                <audio id='audio_controler' controls style='display:none;'>
                
                    <source src="/audio/beep.mp3" type="audio/mpeg">
                    Your browser does not support the audio element.
                </audio>
            </span>            
        </div>        
    </div>
</div>

<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous">
<!-- Optional theme -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.4.1/dist/css/bootstrap-theme.min.css" integrity="sha384-6pzBo3FDv/PJ8r2KRkGHifhEocL+1X2rVCTTkUfGk7/0pbek5mMa1upzvWbrUbOZ" crossorigin="anonymous">
<link rel="stylesheet" href="/css/app.css" >
<script type='text/javascript' src='https://rawgit.com/schmich/instascan-builds/master/instascan.min.js?ver=6.0' id='script-index-scan-js'></script>
<script type='text/javascript' src='/js/app.js?ver={{date("h:i")}}' id='script-scanner-js'></script>
 



