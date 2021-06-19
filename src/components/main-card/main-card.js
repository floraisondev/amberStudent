import React from "react"

const card = props => (
    <div className="current-user">
    <img src= {props.picture }/>
          <h2>{props.title}{" "}
          {props.first}{" "}
          {props.last}{" "}
          </h2>     
<h5>{props.number}{", "}
{props.streetname}{", "}
{props.state}{" ,"}
{props.country}{", "}
{props.postcode}{" ,"}
</h5>
<h5>
    {props.offset}{"-"}
    {props.description}
</h5>
   <p>{props.gender} </p>
     </div>
)

export default card;