import axios from "axios";
import swal from 'sweetalert'
import NProgress from 'nprogress'
let token = localStorage.getItem("auth_token");

const appAxios = axios.create({
  headers: {
    'Content-Type': 'application/json',
    'Authorization': token ? `Bearer ${token.replace(/"/g, '')}` : null
  }
});
// before a request is made start the nprogress
appAxios.interceptors.request.use(config => {
  NProgress.start()
  return config
})

// before a response is returned stop nprogress
appAxios.interceptors.response.use(response => {
  NProgress.done()
  return response
})
const onErrorResponse = async (error) => {
    if (error.response) {
        if (error.response.status === 401) {
          var myItem = localStorage.getItem('unique_id');
          localStorage.clear();
          localStorage.setItem('unique_id',myItem);
            swal({
                title: "Unauthenticated",
                text: "Please Login or Create an Account to perform this action",
                icon: "error",
                // buttons: true,
                dangerMode: true,
              })
              .then((willDelete) => {
                if (willDelete) {
                    window.location = '/'
                } else {
                    window.location = '/'
                }
              });

        }else{
            return error.response;
        }
    }
  
    return error;
  }
  
  const onSuccessResponse = (response) => {
    return response;
  }
  
  appAxios.interceptors.response.use(
    onSuccessResponse,
    onErrorResponse
  )

export default appAxios;
