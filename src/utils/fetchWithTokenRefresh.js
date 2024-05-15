const fetchWithTokenRefresh = async (url, options = {}) => {
    let response = await fetch(url, { ...options, credentials: "include" });

    if (response.status === 401) {
        const refreshResponse = await refreshAccessToken();

        if (!refreshResponse.ok) {
            if (refreshResponse.status === 403) {
                throw new Error("Refresh token invalid or expired. Redirecting to login.");
            } else {
                throw new Error("Refresh token invalid or expired. Redirecting to login.");
            }
        }

        response = await fetch(url, { ...options, credentials: "include" });
    }

    return response;
}

async function refreshAccessToken() {
    return await fetch("https://backend.buffbrowser.com/auth/refresh", {
        method: "POST",
        credentials: "include",
    });
}

export default fetchWithTokenRefresh;
