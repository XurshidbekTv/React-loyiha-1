import './Uchunchi.css'
import UchunchiMini from './uchunchi/UchunchiMini'



const Uchunchi = ({uchun}) => {
  return (
    <div>
        <div className='my-5 d-flex justify-content-around py-5'>
            <h2>Наше <span className='fw-bold'>предложение</span> актуально <span className='fw-bold'>для:</span></h2>
        </div>
        <div className='col d-flex gap-5'>
        {uchun.map((item)=>(<UchunchiMini bosh={item.hh} para={item.pp} pic={item.imgs}/>))}
        </div>
    </div>
  )
}

export default Uchunchi