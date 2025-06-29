import { useState } from "react";

const size = ["300g", "2kg", "7kg"];
function ProductCard() {
  const [selectSize, setSelectSize] = useState("300g");
  return (
    <div>
      <img src="" alt="Croccantini Whiskas" />
      <div>
        <h3>Whiskas</h3>
        <p>Croccantini Junior</p>
        <p>Alimento secco completo per cuccioli al pollo</p>
        <hr />
        <p>Taglia</p>
        <div>
          {size.map((e) => (
            <button key={size}>{size}</button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
