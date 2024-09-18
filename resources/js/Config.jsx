import axios from "axios";

const base_api_url = 'http://sistema.test/api/v1';

export default {
    //AUTH
    getRegister:(data) => axios.post(`${base_api_url}/auth/register`,data),
    getLogin:(data) => axios.post(`${base_api_url}/auth/login`,data),
    getLogout:() => axios.post(`${base_api_url}/auth/logout`),

    //get Estudiantes
    getEstudianteAll:(data) => axios.get(`${base_api_url}/admin/estudiantes`,data),
    getEstudianteById:(id) => axios.get(`${base_api_url}/admin/estudiantes/${id}`),
    getEstudianteUpdate:(data,id) => axios.post(`${base_api_url}/admin/estudiantes/${id}`,data),

}