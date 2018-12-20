import axios from "axios";

export default {
    // getBurners: ()=> {
    //     console.log("fetching data");
    //     return axios.get("/api/burnRoutes")
    //         .then( res => {
    //             console.log(`this is the response: ${res.data[0].pname}`);  
    //         });
    // },
    getBurners: data => {
        console.log("Get the data");
        return axios.post("/api/burnRoutes", data);
    },

    increment: data => {
        console.log("burnnnnnnnn");
        return axios.put("/api/burnRoutes/burn", data);
    },

    decrement: data => {
        console.log("stank");
        return axios.put("/api/burnRoutes/stank", data);
    }
};