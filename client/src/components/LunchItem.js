import React from 'react'

const LaunchItem = (props) => {
    console.log(props)
  return (
    <div className="card card-body mb-3">
        <div className="row">
            <div className="col-md-9">
            <h4>{props.name}</h4>
            <p>{props.success} {props.date_local}</p>
            </div>
            <div className="col-md-3">
                <button className="btn btn-secondary">Details</button>
            </div>
        </div>
     
    </div>
  )
}

export default LaunchItem
