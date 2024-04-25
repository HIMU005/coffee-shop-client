import { useLoaderData } from "react-router-dom"
import CoffeeCard from "./components/CoffeeCard";
import { useState } from "react";


function App() {
  const loaderData = useLoaderData();
  const [coffees, setCoffees] = useState(loaderData);
  return (
    <>
      <h2>This is our coffee</h2>
      <div className="grid grid-cols-2 gap-10 px-12">
        {
          coffees.map(singleCoffee => <CoffeeCard
            key={singleCoffee._id}
            singleCoffee={singleCoffee}
            coffees={coffees}
            setCoffees={setCoffees}
          ></CoffeeCard>)
        }
      </div>
    </>
  )
}

export default App
