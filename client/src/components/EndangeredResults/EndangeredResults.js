import React from "react";
import { ListItem } from "../List";


const EndangeredResults = ({ _id,link,scientificName,commonName,status}) => (
       <ListItem>
          <a href={link} target="_blank">{commonName}</a><br/>
          {scientificName}<br/>
        
          {status}<br/>
      </ListItem>

  )
  
export default EndangeredResults;