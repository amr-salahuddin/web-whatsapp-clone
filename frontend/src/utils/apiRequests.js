

const env = import.meta.env
const api_url = `${env.VITE_BACKEND_URL}/${env.VITE_API_VERSION}`


const apiRequest = async (url, method, body,params,token) => {



    let data;

    if(body ==null)
        body={}
    try {
        const response = await fetch(`http://${api_url}/${url}`, {
            method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: (method=='GET'?null:JSON.stringify(body)),
            
        });

        data = await response.json();
            console.log(data)

        if (!response.ok) {

            return {
                success: false,
                message: data.message,
            }
        }


        return { success: true, data: data.data }


    }
    catch (err) {
        console.log(data)
        return { success: false,data }
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

export const getAllChatsAPI = async (token) => {

    const response = await apiRequest('chat/', 'GET',null, null,token);

    return response
}

export const addMessageAPI = async (data,token) => {
    const {text,chatId} = data;
    const response = await apiRequest('chat/message', 'POST', {text,chatId},null,token);
    return response
}

export const seeChatAPI = async (data,token) => {
    const {chatId} = data;
    const response = await apiRequest(`chat/see/${chatId}`, 'PATCH', {},null,token);
    return response
}