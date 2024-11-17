import "./App.css";
import Category from "./Category";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

function App() {
  let [fin, setFin] = useState([]);
  let [finPro, setFinPro] = useState([]);
  let [catName, setCatName] = useState('');


  let getCategory = () => {
    axios
      // .get('https://dummyjson.com/products/categories')
      .get("https://dummyjson.com/products/category-list")
      .then((res) => res.data)
      .then((finalRes) => {
        // console.log(finalRes);
        setFin(finalRes);
      });
  };

  let getProducts = () => {
    axios
      // .get("https://dummyjson.com/products")
      .get("https://dummyjson.com/products")
      .then((res) => res.data)
      .then((finalRes) => {
        // console.log(finalRes)
        setFinPro(finalRes.products);
      });
  };

  useEffect(() => {
    getCategory();
  }, []);

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(()=>{
    if(catName!==""){
      // console.log("hello");
      // console.log(finalRes)
      // console.log(catName);
      
      axios.get(`https://dummyjson.com/products/category/${catName}`)
      .then((res) => res.data)
      .then((finalRes) => {
        setFinPro(finalRes.products);
      });
    }
  },[catName]);

  let Pitems = finPro.map((products, i) => {
    return <ProductsItem key={i} pdata={products} />;
  });

  return (
    <>
      <div className="py-[40px]">
        <div className="max-w-[1320px] mx-auto">
          <h1 className="text-center text-[40px] font-bold mb-[30px]">
            Our Products
          </h1>
          <div className="grid grid-cols-[30%_auto] gap-[20px]">
            <div>
              <Category fin={fin} setCatName={setCatName}/>
            </div>
            <div>
              <div className="grid grid-cols-3 gap-5">
                {finPro.length >= 1 ? Pitems : "No Product Found Raghav Sethi"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

function ProductsItem({ pdata }) {
  // console.log(pdata);
  return (
    <div className="shadow-lg text-center pb-2">
      <img src={pdata.thumbnail} alt="" className="w-[100%] h-[220px]" />
      <h4>{pdata.title}</h4>
      <b>{pdata.price}</b>
    </div>
  );
}
