import React,{useEffect,useState} from 'react'
import Sidebar from '../../Sidebar'
import Loading from '../../../components/Loading'

const Listados = () => {
    const [Load, setLoad] = useState(true)


    useEffect(() => {
      

      setLoad(false)
    }, [])
    

    return (
    <>
        {Load ? <Loading /> : null}    

    {<div className="container">
      <div className="row justify-content-center mt-5 mb-5">
        <Sidebar></Sidebar>
        <div className="col-sm-9 mt-3 mb-3">
            <div className="card">
              <div className="card-header"><h2>Listados</h2></div>
              <div className="card-body">
            
              </div>
            </div>

        </div>

      </div>
      </div>}
    </>
  )
}

export default Listados