const parseCookie = (cookieHeader) => {
    const cookieObj = {};
    if (cookieHeader) {
        const cookies = cookieHeader.split(';');
        cookies.forEach(cookie => {
            const parts = cookie.split('=');
            if (parts.length > 1) {
                const key = parts[0].trim();
                const value = parts[1].trim();
                cookieObj[key] = value;
            }
        });
    }
    console.log(cookieObj)
    console.log(cookieObj.token)
    console.log(cookieObj.refresh_token, 'i')
    return cookieObj
}
export default parseCookie