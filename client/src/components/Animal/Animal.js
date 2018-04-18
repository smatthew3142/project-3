import React from 'react';
import { ListItem } from '../List';
import { Collapsible, CollapsibleItem, Button } from "react-materialize";
import "./Animal.css";



export const Animal = props => (

  <Collapsible> className="grey lighten-3">

  <CollapsibleItem header={props.commonName} className="list-group" style={{margin: '25px 0'}}>

    <ListItem  className="list-group-item">
      <div style={{display: 'inline-block'}}>
        
      </div>
      <div className="btn-group" role="group" style={{float: 'right'}}>
        <Button waves='light' type="button" className="btn grey" style={{marginLeft: '3%'}} onClick={props.onClick}>{props.type}</Button>
      </div>
    </ListItem>
  </CollapsibleItem>
  </Collapsible>
)