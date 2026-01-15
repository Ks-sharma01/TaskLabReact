export const fetchWithAuth = async(url, options = {}) =>{
    let token = localStorage.getItem("token");

    let res = await fetch(url, {
        ...options,
        headers: {
            ...options.headers,
            Authorization: `Bearer ${token}`,
        },
    })

    if(res.status === 401){
        const refreshToken = localStorage.getItem("refreshToken");

        const refreshRes = await fetch("",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",

            },
            body: JSON.stringify({refreshToken}),
        
        });

        const data = await refreshRes.json();

        localStorage.setItem("token", data.accessToken)
        localStorage.setItem("refreshToken", data.refreshToken)

        return fetchWithAuth(url, options)
    }

    return res;
}

