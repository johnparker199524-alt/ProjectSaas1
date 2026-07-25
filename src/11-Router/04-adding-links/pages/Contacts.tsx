import React from "react";

const Contacts = () => {
  return (
    <React.Fragment>
      <h1 style={{ color: "red", textAlign: "center", fontSize: "larger",marginBottom:'10%' }}>
        Contatti
      </h1>
      <div>
        <form action="https://localhost3000.it" method="post">
          <div>
            <label style={{marginTop:'40%',marginLeft:'35%',marginBottom:'2%'}} htmlFor="">Digita il tuo nome:</label>
            <input style={{marginLeft:'2%'}} type="text" name="" id="" /> <br />
          </div>

          <div>
            <label style={{marginLeft:'35%'}} htmlFor="">Digita il tuo cognome:</label>
            <input  style={{marginLeft:'2%'}} type="text" name="" id="" />
          </div>

          <div>
            <label  style={{marginLeft:'35%'}} htmlFor="">Digita la tua email:</label>
            <input  style={{marginLeft:'2%'}} type="email" name="" id="" />
          </div>

          <div>
            <textarea style={{marginLeft:'35%',marginTop:'5%',marginBottom:'8%'}} name="" id="" cols={35} rows={10}>
              Inserisci il messaggio
            </textarea>
            <input style={{marginRight:'30%',height:40,width:90,padding:'40 px'} } type="submit" value="Invia" />
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Contacts;
