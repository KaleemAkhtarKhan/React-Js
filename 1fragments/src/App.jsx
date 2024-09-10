import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
 let fooditems = ["Dal", " Green Vegitable",  "A third item", "ROTI"];

  return (
      <>
        <h1>Healthy food</h1>
        <ul class="list-group">
          
  {/* <li class="list-group-item">Dal</li>
  <li class="list-group-item">Green Vegitable</li>
  <li class="list-group-item">A third item</li>
  <li class="list-group-item"> ROTI </li>
  <li class="list-group-item">fruits</li> */}

  {/* or you can map the item  */}
  {fooditems.map((item) => (
    <li class="list-group-item">{item}</li>
  ))}
</ul>
</>
       
  )

}

export default App
