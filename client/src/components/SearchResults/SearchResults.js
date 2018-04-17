import React from "react";
import "./Search.css";
import { ListItem } from "../List";


const SearchResults = ({ _id,link,scientificName,commonName,status,handleDonate,buttonText}) => (
       <ListItem>
          <a href={link} target="_blank">{scientificName}</a>
          <button className="btn btnsm" onClick={() => handleDonate(_id)}>{buttonText}</button><br/>
          {commonName}<br/>
          {status}<br/>
      </ListItem>

  )
  
export default SearchResults;