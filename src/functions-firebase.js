import fb from "./init-firebase.js";
import "firebase/auth";
//crea la orden en firebase

export const createOrder = async(order) => {
    return fb.createNumberOrder().then((ordId)=>{
        order.number = ordId; 
        return fb.database.collection("orderCollection").doc().set(order);
    });
}

export const getOrders = async() =>{
    return await fb.database.collection("orderCollection").get();
}

export const getUser= async(uid) =>{
    return await fb.database.collection("users").doc(uid).get();
}

export const udpOrderStatus = async(orderid,status) =>{
    return await fb.database.collection("orderCollection").doc(orderid).update({status: status});
}

export const logInByPassword = async(credentials) => {
    return await fb.auth.signInWithEmailAndPassword(credentials.email, credentials.password);
}

