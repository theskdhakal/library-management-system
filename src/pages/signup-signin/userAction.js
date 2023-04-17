import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { auth, db } from "../../config/firbease-config";
import { setUser } from "./userSlice";
import { doc, getDoc } from "firebase/firestore";

export const getUserAction = (uid) => async (dispatch) => {
  try {
    //get user id from firebase
    const userRef = doc(db, "users", uid);

    const docSnap = await getDoc(userRef);

    //dispatch user to the redux

    if (docSnap.exists()) {
      const user = { ...docSnap.data(), uid };
      dispatch(setUser(user));
    }
  } catch (error) {
    toast.error(error.message);
  }
};
//create new user
export const loginUser = (data) => async (dispatch) => {
  try {
    const pendingUser = signInWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );

    toast.promise(pendingUser, {
      pending: "please wait...",
    });

    const { user } = await pendingUser;

    if (user.uid) {
      dispatch(getUserAction(user.uid));
    }
  } catch (error) {
    toast.error(error.message);
  }
};
