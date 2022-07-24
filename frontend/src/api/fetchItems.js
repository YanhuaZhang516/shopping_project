import axios from "axios";

const ITEMS_URL = 'http://localhost:8080/items';
export const fetchItems = () => axios
    .get(ITEMS_URL)
    .then((response) => response.data);