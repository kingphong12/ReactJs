import React, { useState} from 'react'
import PropTypes from 'prop-types';

const Counter = ({increment, color }) => {
  const [count, setCount] = useState(0)
  return (
    <>
      <button style={{ backgroundColor: color}} onClick={ () => setCount(count + increment)}>INCREMENT</button>

      <p>count: {count}</p>
    </>

  )
}

// kiem tra bien thuoc loai nao
Counter.propTypes = {
  increment: PropTypes.number.isRequired,
  color: PropTypes.string
};

// dat gia tri mac dinh cho bien duoc truyen xuong
Counter.defaultProps = {
  color: "yellow"
}
export default Counter
