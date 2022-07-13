require('./bootstrap');
import React from 'react';
import ReactDOM from 'react-dom/client';
/*
class Form_QR_Detected_Request extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      port: 0,
      status: 'off'
    };



    this.handleInputChange = this.handleInputChange.bind(this);
  }

  save_form(port_number, port_status) {

    console.log("saving ... " + port_status);

    fetch("/post-gpio-order?port=" + port_number + "&status=" + port_status, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',

      },
      method: "GET"
    })
      .then(res => res.json())
      .then(
        (result) => {
          this.track_action(this.state.status, this.state.port);
          document.getElementById("checkbox_" + port_number).checked = port_status == 'on' ? true : false;
          // window.location.reload(false);

          return false; // it returns false to avoid refresh page;
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
  track_action(port, status) {
    console.log(port, status);

  }
  returnfalse() { return false; }

  render() {






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
        <input type="button" value="Process" onClick={() => this.save_form(this.state.port, this.state.status)} />
      </form>

    );
  }
}

*/

class BreakerPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      scanner: new Instascan.Scanner({ video: document.getElementById('preview'), refractoryPeriod: 1000 }),
      camera: null,
      last_qr_port: 0,
      last_qr_found: ''
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

  Breaker_click(port) {
    let this_states = this.state;
    document.getElementById("checkbox_" + port).disabled = true;
    document.getElementById("port_item_" + port).style.opacity = 0.25;
    //this_states.scanner.stop(this_states.camera);
    fetch("/set-port-status?port=" + port)
      .then(res => res.json())
      .then(
        (result) => {
          document.getElementById("checkbox_" + port).checked = result.status == 'on' ? true : false;
          document.getElementById("checkbox_" + port).disabled = false;
          document.getElementById("port_item_" + port).style.opacity = 1;
          return true;
        }
      )

  }
  reset_last_port_scanned() {
    this.state.last_qr_port = 0;
    console.log("reset timer");
  }
  render() {
    const { error, isLoaded, items } = this.state;
    let this_states = this.state;
    let _me_this = this;

    Instascan.Camera.getCameras().then(function (cameras) {

      if (cameras.length > 0) {
        let ca_camera = cameras[0];
        this_states.scanner.start(ca_camera);
        this_states.camera = ca_camera;
      } else {
        console.error('No cameras found.');
      }
    }).catch(function (e) {
      console.error(e);
    });


    this.state.scanner.addListener('scan', function (content) {


      document.getElementById("audio_controler").play();
      document.getElementById("outputData").value = content;

      content = JSON.parse(content);

      if (content.port == undefined) return;
      console.log('detected -> ' + content.port);




      //if (this_states.last_qr_port==content.port) return ;


      if (document.getElementById("checkbox_" + content.port).disabled) return;

      //this_states.scanner.stop(this_states.camera);
      document.getElementById("checkbox_" + content.port).disabled = true;
      //this_states.scanner.start(this_states.camera);
      _me_this.Breaker_click(content.port);

      //setTimeout(_me_this.reset_last_port_scanned, 15000);

      //_me_this.state.scanner.removeEventListener("scan",this);

    });





    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>

          {items.map(item => (
            <div key={item.id} id={"port_" + item.port} class='col-md-3 port' port={item.port}  >
              Port:{item.port}
              <label id={"port_item_" + item.port}>
                <input id={"checkbox_" + item.port} class='pristine' onChange={() => this.Breaker_click(item.port)} type='checkbox' name='switch' checked={item.status == 'on' ? 'checked' : ''} />
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




const _breakerPanel = <BreakerPanel name='breaker_list' />;
panel.render(_breakerPanel);

//const _frmQR_Catch = <Form_QR_Detected_Request  />;
//frm_section.render(_frmQR_Catch);
