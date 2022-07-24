import axios from "axios";

const TASK_URL = 'http://localhost:8080/items';
export const tasks = () => axios
    .get(TASK_URL)
    .then((response) => response.data);