import BirinchiMini from "./Birinchi/BirinchiMini";


const Birinchi = ({data}) => {
  return (
    <div>
    <div className='row d-flex justify-content-around mt-5'>
  <h2 className='col-7 text-center'>
  <span className='fw-bold'>Получи скидку 50%</span> на первый месяц аренды <span className='fw-bold'>или бесплатный переезд!</span>
  </h2>
</div>
<div className="row my-5 d-flex justify-content-around btn-light">
  <button className='text-light bg-primary rounded-pill py-2 col-2'>Как это работает</button>
</div>
  <div className='d-flex gap-4'>
  {data.map(item=>(<BirinchiMini img={item.img} h4={item.h4} p={item.p}/>))}
  </div>
</div>
  )
}

export default Birinchi