import './BirinchiMini.css'


const BirinchiMini = ({img , h4, p}) => {
  return (

         <div className='d-flex flex-wrap col bir-bg justify-content-around p-3 rounded-4 box-shadow'>
             <div>
                {img}
            </div>
            <h4 className='fw-bold text-center my-4'>
                {h4}
            </h4>
            <p className=' text-center mb-5'>
               {p}
            </p>
     </div>
    
  )
}

export default BirinchiMini