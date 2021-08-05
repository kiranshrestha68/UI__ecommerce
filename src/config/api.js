import axios from "axios";

export const loadproductlistingApi =  (option) => {
    return axios.get("https://fakestoreapi.com/products",option)
}