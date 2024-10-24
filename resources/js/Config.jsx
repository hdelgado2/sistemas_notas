import axios from "axios";

const base_api_url = 'http://127.0.0.1:8000/api/v1';

export default {
    //AUTH
    getRegister:(data) => axios.post(`${base_api_url}/auth/register`,data),
    getLogin:(data) => axios.post(`${base_api_url}/auth/login`,data),
    getLogout:() => axios.post(`${base_api_url}/auth/logout`),

    //get Estudiantes
    getEstudianteAll:(data) => axios.get(`${base_api_url}/admin/estudiantes`,data),
    getEstudianteById:(id) => axios.get(`${base_api_url}/admin/estudiantes/${id}`),
    getEstudianteUpdate:(data,id) => axios.post(`${base_api_url}/admin/estudiantes/${id}`,data),

    //Empresa
    EmpresaRegister:(data) => axios.post(`${base_api_url}/admin/empresa`,data),
    getEmpresaAll:(data) => axios.get(`${base_api_url}/admin/empresa`),


    //Configuraciones
    getAllYears:(data) => axios.get(`${base_api_url}/admin/Configuraciones/years`,data),
    deleteYears:(id) => axios.delete(`${base_api_url}/admin/Configuraciones/years/${id}`)

}