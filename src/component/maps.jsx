import React, { useEffect, useState } from "react";

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
export  function Maps(props) {
 
  console.log(props.center[0]);
 
  const containerStyle = {
    position: 'relative',  
    width: '100%',
    height: '100%'
  }

  const[refresh,setRefersh]=useState(true)
  useEffect(()=>{setRefersh(!refresh)
 
  },[props.center])
return<React.Fragment>

 <div className={"rounded-[50px] h-[100%] max-h-full relative "+props.style}>
 {
 !props.isStore?props.center.length&&
//  <Map google={props.google}
//  dummy={refresh} 
// initialCenter={{lat:props?.center[0]?.lat,lng:props?.center[0]?.lng}}
// // initialCenter={cordinate}
// style={containerStyle} zoom={11}>
 


// {

// props.center?.map((data,index)=>{
//           //(data.lat);
//           if(data.lat&&data.lat!=0)
//         return <Marker position={{lat:data.lat,lng:data.lng}} 
//         name={data.title} />
//         })}

// <InfoWindow onClose={"onInfoWindowClose"}>
//     <div className="h-[100%]">
//       <h1>{"Tanishq Stores"}</h1>
//     </div>
// </InfoWindow>
// </Map>:
<></>:
<>
{console.log(props.loclink.replace("https://www.google.com/maps/place/",""))}
<iframe
  
  frameborder="0" style={containerStyle}
  src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDhXC0pZWKq8zdR9D5AXT1nC1gFIkCIx3w&q=${props.center[0].lat+","+props.center[0].lng}`}
  allowfullscreen>
</iframe>
{/* src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDhXC0pZWKq8zdR9D5AXT1nC1gFIkCIx3w&q=${props.center[0].lat+","+props.center[0].lng}`} */}
{/* <iframe width="600" height="450"  loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/search?q=Tanishq&key=AIzaSyDhXC0pZWKq8zdR9D5AXT1nC1gFIkCIx3w"></iframe> */}
</>
}
</div>
</React.Fragment>
}
export default GoogleApiWrapper({
  apiKey: ("AIzaSyDhXC0pZWKq8zdR9D5AXT1nC1gFIkCIx3w")
})(Maps)
