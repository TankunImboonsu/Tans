import React, { useState } from 'react'

const Calculate = () => {
  const [originalPrice, setOriginalPrice] = useState(0)
  const [discount, setDiscount] = useState(0)
  const [result, setResult] = useState(0)

  const handleCalculate = () => {
    const discounted = originalPrice - (originalPrice * discount) / 100
    setResult(discounted)
  }

  return (
    <div>
      <h2>คำนวณส่วนลด</h2>
      <div>
        <label>ราคาเดิม: </label>
        <input
          type="number"
          value={originalPrice}
          onChange={e => setOriginalPrice(Number(e.target.value))}
        />
      </div>
      <div>
        <label>ส่วนลด (%): </label>
        <input
          type="number"
          value={discount}
          onChange={e => setDiscount(Number(e.target.value))}
        />
      </div>
      <button onClick={handleCalculate}>คำนวณ</button>
      <div>
        <strong>ราคาหลังหักส่วนลด: {result}</strong>
      </div>
    </div>
  )
}

export default Calculate