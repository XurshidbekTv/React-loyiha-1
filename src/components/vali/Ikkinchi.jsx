import IkkinchiMini from "./Ikkinchi/IkkinchiMini";


const Ikkinchi = ({ikki}) => {
  return (
    <div>
        <div className="row d-flex text-center my-5">
            <h2 className="mt-5">Для вас это абсолютно <span className="fw-bold">бесплатно!</span></h2>
        </div>
        <div className="col d-flex gap-4">
           {ikki.map((item)=>( <IkkinchiMini img={item.img} h5={item.h5} p={item.p}/>))}
        </div>
    </div>
  )
}

export default Ikkinchi