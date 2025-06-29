import { useState } from "react";
import productimg from "/croccantini-whiskas.png";

const size = ["300g", "2kg", "7kg"];
function ProductCard() {
  const [selectSize, setSelectSize] = useState("300g");
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white font-sans">
      <img src={productimg} alt="Croccantini Whiskas" className="w-full" />
      <div className="p-4">
        <h1 className="text-lg font-bold  text-gray-800">Whiskas</h1>
        <p className="text-sm font-medium text-gray-700 leading-4 mt-1">
          Croccantini Junior
        </p>
        <p className="text-xs text-gray-600 mt-2">
          Alimento secco completo per cuccioli al pollo
        </p>
        <hr className="my-3 border-gray-300" />
        <p className="text-sm font-medium text-gray-800 mb-2">Taglia</p>
        <div className="flex gap-2 mb-4">
          {size.map((e) => (
            <button
              key={e}
              className={`border rounded-full px-3 py-1 text-xs ${
                e === selectSize
                  ? "bg-gray-800 text-white"
                  : "border-gray-300 text-gray-700 hover:border-gray-500"
              }`}
              onClick={() => setSelectSize(e)}
            >
              {e}
            </button>
          ))}
        </div>

        <button className="w-full bg-gray-800 text-white text-sm py-2 rounded-lg hover:bg-gray-700 transition">
          Aggiungi al carrello
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
