import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const { data } = await axios.get((url),{

        headers: {
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
            'X-RapidAPI-Key': '39e328db32msh0c04dc1d210e90dp1756b1jsnac60507d20ee'
           }
    });

    return data;
}