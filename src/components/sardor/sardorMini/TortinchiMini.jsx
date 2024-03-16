import './TortinchiMini.css'



const TortinchiMini = ({img, h, p}) => {
  return (
    <div className='d-flex col-5 mt-5 justify-content-center gap-5'>
        <div>
            {img}
        </div>
        <div className='text-left mt-5'>
        <h5 className='fw-bold'>{h}</h5>
        <p>{p}</p>
        </div>
    </div>
  )
}

export default TortinchiMini