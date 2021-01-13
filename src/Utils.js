
export const getDataUser = () =>{
    let userData = JSON.parse(localStorage.getItem("user"));
    return userData;
}