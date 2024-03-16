import './IkkinchiMini.css'
import React from 'react'

const IkkinchiMini = ({img, h5, p}) => {
  return (
    <div className=' ikki-bg rounded-3 p-3'>
        <div className='text-center'>
            {img}
        </div>
        <h5 className='text-center fw-bold my-5'>
            {h5}
        </h5>
        <p className='text-center mb-5'>
            {p}
        </p>
    </div>
  )
}

export default IkkinchiMini