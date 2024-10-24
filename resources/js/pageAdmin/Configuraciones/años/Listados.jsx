import React,{useEffect,useState} from 'react'
import Sidebar from '../../Sidebar'
import Loading from '../../../components/Loading'
import Config from '../../../Config'
import { Icon } from '@iconify-icon/react';
import { Link } from 'react-router-dom';

const Listados = () => {
    const [Load, setLoad] = useState(true)
    const [Listados, setListados] = useState([])

    const getAll = async () => {

       const config = await Config.getAllYears();
       setListados(config.data.years)
       setLoad(false)
    }
    useEffect(() => {
      

      getAll();
    }, [])

    const deleteYear = async (id) => {
        setLoad(true)
        const config = await Config.deleteYears(id)
        setListados(config.data.years)
        setLoad(false)
    }
    

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
              <table className='table'>
                    <thead>
                      <tr>
                      <th>n°</th>
                      <th>Años</th>
                      <th>Numero Años</th>
                      <th>Accion</th>
                      </tr>
                    </thead>
                    <tbody>
                     {
                        !Listados ? null : Listados.map((data,index) => (
                            <tr key={data.id}>
                            <td>{index}</td>
                            <td>{data.año}</td>
                            <td>{data.num_year}</td>
                            <td>
                            <a href='#'  onClick={ e => deleteYear(data.id)}><Icon Icon='material-symbols:delete' style={{color: '#071a78'}} /></a>
                                
                            </td>
                            </tr>
                        ))
                     } 
                    </tbody>
                </table>
              </div>
            </div>

        </div>

      </div>
      </div>}
    </>
  )
}

export default Listados