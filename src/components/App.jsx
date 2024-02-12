import Container from "./Container";
import ErrorMessage from "./ErrorMessage";
import FoodItems from "./FoodItems";

function App() {
   
 
     let foodItems=["banana", "mango", "apple", "milk"];
 
     return(
        <>
        <Container>
             <h1>Foods</h1>
             <ErrorMessage ok={foodItems}/>
             <FoodItems ok={foodItems}/>
        </Container>

            
         <Container>
            <p>i am saq</p></Container>    
         </>
          
            
 
     )
 
 
 }
 export default App;