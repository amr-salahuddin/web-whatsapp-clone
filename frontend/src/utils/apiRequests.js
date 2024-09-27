

const env = import.meta.env
const api_url = `${env.VITE_BACKEND_URL}/${env.VITE_API_VERSION}`


const apiRequest = async (url, method, body,token) => {


    try {
        const response = await fetch(`http://${api_url}/${url}`, {
            method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(body)
        });

        const data = await response.json();

        if (!response.ok) {

            return {
                success: false,
                message: data.message,
            }
        }


        return { success: true, data: data.data }


    }
    catch (err) {
        console.log(err)
        return { success: false }
    }

}
export const registerAPI = async (data) => {
    const { name, email, password } = data;

    const response = await apiRequest('auth/register', 'POST', { name, email, password });
    return response

}

export const loginAPI = async (data) => {

    const { email, password } = data;
    
    const response = await apiRequest('auth/login', 'POST', { email, password });
    return response
}

export const updateUserAPI = async (data,token) => {
    const {name,about} = data;
    const response = await apiRequest('user/', 'PATCH', {name,about},token);
    return response
}