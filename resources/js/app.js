require('./bootstrap');
import React from 'react';
import ReactDOM from 'react-dom/client';
const $ = require( "jquery" )( window );


console.log('start app');



function clean_previous_qr(){
    document.getElementById("code_info").style.display = "none";    
    //scanner.start(camera);
}






class Form_QR_Detected_Request extends React.Component {
  constructor(props) {
    super(props);    
    this.state = {      
      port: 0,
      status: 'off',
      scanner : new Instascan.Scanner({ video: document.getElementById('preview') }),
      camera : null 
    };   
        
 

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  save_form(){
    
    console.log("saving ... ");


    fetch("/post-gpio-order")
    .then(res => res.json())
    .then(        
      (result) => {        
        document.getElementById("checkbox_" +_port ).checked = result.status=='on' ? true : false;        
        return true;
      }
    )

    
  
      return false;
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }
  track_action(port,status){}
  returnfalse(){return false;}

  render() {

    let this_states = this.state;
    let _me_this = this;

    Instascan.Camera.getCameras().then(function (cameras) {

      if (cameras.length > 0) {
        let ca_camera = cameras[0];        
        this_states.scanner.start(ca_camera);
      } else {
        console.error('No cameras found.');
      }
      }).catch(function (e) {
        console.error(e);
    });

    

    this_states.scanner.addListener('scan', function (content) {  
  

      content= JSON.parse(content);
  
      _me_this.setState({port: content.port });
      _me_this.setState({status:content.status });
      
      
    
      
    });





    return (      
      <form onSubmit={() => this.returnfalse()}>              
          Port:
          <input
            id="port"
            name="port"
            type="number"
            value={this.state.port}
            onChange={() => this.handleInputChange()}
            />

          Status:
          <input
            id="status"
            name="status"
            type="text"
            value={this.state.status}       
            onChange={() => this.handleInputChange()}
                  />
        <input type="button" value="Process"  onClick={() => this.save_form()} />
      </form>
      
    );
  }
}



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
            <div key={item.id} id={"port_"+item.port}  class='col-md-3 port' port={item.port}  > 
            Port:{item.port}
                <label>
                    <input id={"checkbox_"+item.port}  class='pristine' onChange={() => this.Breaker_click(item.port)}  type='checkbox' name='switch' checked={item.status=='on' ? 'checked':''}/>
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

const frm_section = ReactDOM.createRoot(
  document.getElementById('frm-submit')
);




const _breakerPanel = <BreakerPanel name='breaker_list'/>;
panel.render(_breakerPanel);

const _frmQR_Catch = <Form_QR_Detected_Request  />;
frm_section.render(_frmQR_Catch);
