require('./bootstrap');
import React from 'react';
import ReactDOM from 'react-dom/client';


console.log('start app');


let scanner = new Instascan.Scanner({ video: document.getElementById('preview') , continuous : true});
let camera ;
function clean_previous_qr(){
    document.getElementById("code_info").style.display = "none";    
    scanner.start(camera);
}

scanner.addListener('scan', function (content) {  
  document.getElementById('outputData').innerHTML=content;
  //document.getElementById("preview").style.display = "none";    
  document.getElementById("qr-found").src = "https://chart.googleapis.com/chart?chs=250x250&cht=qr&UTF-8&chl=" + content;    
  document.getElementById("qr-text").value = content;
  document.getElementById("code_info").style.display = "block";      
  scanner.stop(camera);
  setTimeout(clean_previous_qr, 5*1000);
});

Instascan.Camera.getCameras().then(function (cameras) {
  if (cameras.length > 0) {
    camera=cameras[0];
    scanner.start(camera);
  } else {
    console.error('No cameras found.');
  }
  }).catch(function (e) {
    console.error(e);
});




class BreakerPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("/port-status")
      .then(res => res.json())
      .then(        
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        // Nota: es importante manejar errores aquí y no en 
        // un bloque catch() para que no interceptemos errores
        // de errores reales en los componentes.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  Breaker_click(_port){
    
    fetch("/set-port-status?port="+_port)
    .then(res => res.json())
    .then(        
      (result) => {        
        document.getElementById("checkbox_" +_port ).checked = result.status=='on' ? true : false;        
        return true;
      }
    )

  }

  render() {
    const { error, isLoaded, items } = this.state;
    
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {      
      return (
        <div>
          
          {items.map(item => (
            <div key={item.id} id={"port_"+item.port} class='col-md-3 port' port={item.port}  > 
            Port:{item.port}
                <label>
                    <input id={"checkbox_"+item.port} class='pristine' onChange={() => this.Breaker_click(item.port)}  type='checkbox' name='switch' checked={item.status=='on' ? 'checked':''}/>
                </label>
            </div>
          ))}
        </div>
      );
    }
  }
}



export default BreakerPanel;

const panel = ReactDOM.createRoot(
  document.getElementById('panel')
);

const _breakerPanel = <BreakerPanel name='breaker_list'/>;
panel.render(_breakerPanel);