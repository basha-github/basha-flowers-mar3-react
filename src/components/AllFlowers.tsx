import axios from "axios";
import React, { useEffect, useState } from "react";


interface flower{

    name:string,
    category:string,
    price:number,
    imgUrl:string

}



export default function AllFlowers() {
  const [flowersData, setFlowersData] = useState<flower[]>([]);

  useEffect(() => {
    axios.get<flower[]>("http://localhost:8080/flowers/app/get/all").then((res) => {
      setFlowersData(res.data);
    });
  }, []);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Image</th>

            <th scope="col">Name</th>
            <th scope="col">Category</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {flowersData.map((eachFlower) => (
            <tr>
              <th>
                <img src={eachFlower.imgUrl} height="200px" />
              </th>

              <th>{eachFlower.name}</th>
              <th>{eachFlower.category}</th>
              <th>{eachFlower.price}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
