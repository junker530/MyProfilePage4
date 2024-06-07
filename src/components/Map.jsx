import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  ZoomableGroup
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [224.0, -34.5, 0],
        center: [-0, -0],
        scale: 27000
      }}
      style={{width:"100%",height:"100%"}}
    >
      <Geographies
        geography="https://junker530.github.io/MyProfilePage/img/jpn_admbnda_adm1_2019.topojson"
        fill="#1D0542"
        stroke="#FFFFFF"
        strokeWidth={0.8}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[135.75, 34.7]}
        dx={-50}
        dy={-40}
        connectorProps={{
          stroke: 'white',
          strokeWidth: 2,
          strokeLinecap: "inherit"
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="white">
          {"NAIST"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
