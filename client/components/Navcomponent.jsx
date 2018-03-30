var Navcomponent = (props)=>{
  return (<div  className="navlabel">
  <div className="nav1" onClick={props.handleClick}>
        <label htmlFor="viewnav">View</label>
</div>
<div className="nav2" onClick={props.handleClick}>
        <label htmlFor="addrestaurant">Add Restaurant</label>
</div>
<div className="clearboth"></div>
  </div>)
}

window.Navcomponent = Navcomponent;


