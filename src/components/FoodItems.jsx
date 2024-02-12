import Item from "./Items";
const FoodItems=({ok})=>{
    

    return(  <ul className="list-group">
 
    {ok.map((items)=>( 
        <Item a key={items} foodItem={items}/>
    ))}
   
</ul>);

}

export default FoodItems;