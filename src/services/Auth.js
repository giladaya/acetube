export function getUserDetails() {
    return {
        name: localStorage.getItem('acetube_user'),
    }
}

export function doLogin(user) {
    localStorage.setItem('acetube_user', user);
    window.dispatchEvent( new Event('storage') );
}
export function doLogout() {
    localStorage.removeItem('acetube_user');
    window.dispatchEvent( new Event('storage') );
}

export function isLoggedin() {
    return !!localStorage.getItem('acetube_user');
}