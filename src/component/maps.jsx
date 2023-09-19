import React from "react";
import GoogleMapReact from 'google-map-react';
export default function Maps(props) {
  //(props);
    const AnyReactComponent = ({ text }) => <div>{text}</div>;
//(props.center);
   
      const defaultProps = {
       
        zoom: 11
      };
      const renderMarkers = (map, maps) => {
        let marker=[];
        //("maps");
        props.center.map((data,index)=>{
          //(data.lat);
          marker[index] = new maps.Marker({
            position: { lat: data.lat, lng: data.lng },
            map,
            title: data.name
            });
        })
       
       
        return marker;
       };
      return (
        // Important! Always set the container height explicitly
        <div style={{ maxHeight:props.remaxh?props.remaxh:'100%',height: props.maxh?props.maxh:'100%', width: '100%',borderRadius:"40px" }} className="rounded-[50px]">
          
          <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyDhXC0pZWKq8zdR9D5AXT1nC1gFIkCIx3w" }}
            defaultCenter={props.center[0]}
            defaultZoom={defaultProps.zoom}
            center={props.center[0]}
            onGoogleApiLoaded={({ map, maps }) =>  renderMarkers(map, maps)}
          >
            <AnyReactComponent
              lat={59.955413}
              lng={30.337844}
              text="My Marker"
            />
           
          </GoogleMapReact>
        </div>
      );
}