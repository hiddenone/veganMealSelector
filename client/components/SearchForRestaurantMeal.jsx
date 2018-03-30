var SearchForRestaurantMeal = (props)=>{
  return (<div>
  <div className="group1">
        <label htmlFor="name">Restaurant</label>
        <input id="name" type="text"  name="name" value={props.currentsearchrestaurant} onChange={props.handleOnChangeSearchRestaurant}/>
</div>
<div className="group2">
        <label htmlFor="email">Meal</label>
        <input id="email" type="text"  name="email" value={props.currentsearchmeal} onChange={props.handleOnChangeSearchMeal}/>
</div>
<button
          className="btn btn-link float-left"
          onClick={props.handleSubmitSearchMeal}>Search</button>
<br className="clearboth" />

  </div>)
}

window.SearchForRestaurantMeal = SearchForRestaurantMeal;
