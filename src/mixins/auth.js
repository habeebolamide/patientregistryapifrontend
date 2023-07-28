export default {
    data: () => {
        return {};
    },
    methods: {
        dynamic_route(endUrl) {
                return `http://localhost:1000/api/v1${endUrl}`;
                // return `https://patient-registry.onrender.com/api/v1${endUrl}`;
        },
        dynamic_auth_route(endUrl) {
            return "http://localhost:1000/api/v1/patient" + endUrl;
            // return "https://patient-registry.onrender.com/api/v1/patient" + endUrl;
          },
          tokenExpired(error) {
            if (
              error.response.status == 401 &&
              error.response.data.message == "Unauthenticated."
            ) {
              localStorage.removeItem("clientToken");
              localStorage.removeItem("clientDetails");
              location.reload();
            }
          },
         
    },
};
