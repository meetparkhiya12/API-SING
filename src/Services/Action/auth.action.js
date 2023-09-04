import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../MyFireBase/myfirebase";
import { useDispatch } from "react-redux";

const auth = getAuth(app);

const dispatch = useDispatch()

const Sinupsuc = () => {
    return{
        type : "SIGNUP_SUC"
    }
}


export const singUpasync = (data) => {
    return dispatch => {
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
               console.log(user);
               dispatch(Sinupsuc());
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    };

}