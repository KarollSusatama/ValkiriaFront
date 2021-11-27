import { Button, Grid } from "@material-ui/core";
import React from "react";
import 'assets/scss/style/Style.css'

function Question(){

return <div>
    
<p> ¿TE SIENTES COMPLETA CON TU ESTADO DE SALUD?</p>

<div className="example-label"></div>
  <div className0="example-button-row">
    <div className="example-flex-container">
      <div className="example-button-container">
          
        <button mat-fab color="primary" aria-label="Example icon button with a delete icon">
          <mat-icon>SÍ</mat-icon>
        </button>
      </div>
      <div className="example-button-container">
        <button mat-fab color="accent" aria-label="Example icon button with a bookmark icon">
          <mat-icon>No</mat-icon>
        </button>
      </div>
      
      
    </div>
  </div>
</div>
}

export default Question;