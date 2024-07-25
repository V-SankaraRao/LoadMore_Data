import './App.css';
import {useState,useEffect} from 'react';
const url="https://dummyjson.com/products?limit=20&";
function App() {
  const[products,setProducts]=useState([]);
  const[c,setc]=useState(1);
  const[load,setload]=useState(false);

async function fetchdata(){
  try{
    setload(true);
   const resp=await fetch(`https://dummyjson.com/products?limit=20&skip=${
          c === 0 ? 0 : c * 20
        }`);
   const res=await resp.json();
   setProducts((prev)=>[...prev,...res.products]);
   console.log(products);


  }
  catch(e){
    console.log(e);
  }
}




  useEffect(()=>{
    fetchdata();
    
      },[c]);








  return (
    <><h1>List of Products</h1>
    <div className="App">
      
      {products.map((item)=><img key={item.id}src={item.thumbnail} alt={item.title} className='image'></img>)
}
    </div>
    {c!==4?<button disabled={c===4}onClick={()=>setc(c+1)} className='button'>Load More {c}</button>:<h1>Reached end of Products {c*20}</h1>}
    </>
  );
}

export default App;
