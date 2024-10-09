import React, { useMemo, useState } from "react";

export default function App() {
  const [amount, setAmount] = useState("");
  const [history, setHistory] = useState([]);
  const handleChangeValue = (e) => {
    setAmount(e.target.value);
  };
  const handleTransfer = (e) => {
    e.preventDefault();
    setHistory([...history, amount]);
    setAmount("");
  };
  const total = useMemo(() => {
    return history.reduce((total, history) => total + +history, 0);
  }, [history]);
  return (
    <div>
      <form onSubmit={handleTransfer}>
        <input
          value={amount}
          type="number"
          name=""
          placeholder="Số tiền cần chuyển..."
          onChange={handleChangeValue}
          required
        />
        <button>Chuyển</button>
        {history.map((history, index) => (
          <h4 key={index}>
            Lần {index + 1}: {history}
          </h4>
        ))}
        <h2>Tổng tiền: {total}</h2>
      </form>
    </div>
  );
}

//Xây dựng Higher Order Component
/*
tạo ra 1 hàm bọc 1 component và trả về chính component đó
*/
