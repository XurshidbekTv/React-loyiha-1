import "./Tortinchi.css"
import TortinchiMini from "./sardorMini/TortinchiMini"

const Tortinchi = ({tort}) => {
  return (
    <div>
        <div className="d-flex my-5 justify-content-around">
            <h2 className="my-5"><span className="fw-bold">Бонусом</span> по вашему желанию <span className="fw-bold">мы:</span></h2>
        </div>
        <div className="d-flex justify-content-between flex-wrap gap-5">
        {tort.map((item)=>(
         <TortinchiMini img={item.img} h={item.h} p={item.p}/>
        ))}
        </div>
      
    </div>
  )
}

export default Tortinchi