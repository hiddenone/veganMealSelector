var AddRestaurantMeal = (props)=>{
  return (<div>
  <div className="group1">
        <label htmlFor="name">Restaurant</label>
        <input id="name" type="text"  name="name"/>
</div>
<div className="group2">
        <label htmlFor="email">Meal</label>
        <input id="email" type="text"  name="email"/>
</div>
<button
          className="btn btn-link float-left"
          onClick={props.handleSubmit}>Add</button>
<br className="clearboth" />

  </div>)
}

window.AddRestaurantMeal = AddRestaurantMeal;


