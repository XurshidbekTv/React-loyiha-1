import './UchunchiMini.css'

const UchunchiMini = ({bosh, para , pic}) => {
  return (
    <div className='col d-flex ikki-bg box-shadow  rounded-4 p-4 align-items-center justify-content-around'>
        <div className='col-6'>
        <h5 className='fw-bold'>{bosh}</h5>
        <p>{para}</p>
        </div>
        <div>
           {pic}
        </div>
    </div>
  )
}

export default UchunchiMini