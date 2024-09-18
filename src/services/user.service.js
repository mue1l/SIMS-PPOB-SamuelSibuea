import axios from "axios";

export const getUsers = () => {
    axios
    .get("https://take-home-test-api.nutech-integrasi.com/profile")
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });

};
    
