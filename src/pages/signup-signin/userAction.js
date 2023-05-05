import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
} from "firebase/firestore";
import { toast } from "react-toastify";
import { auth, db } from "../../config/firbease-config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { setClients, setUser } from "./userSlic";

export const getUserAction = (uid) => async (dispatch) => {
  try {
    // get user by id from firebase

    const docSnap = await getDoc(doc(db, "users", uid));

    //dispatch user to the reduxt

    if (docSnap.exists()) {
      const user = { ...docSnap.data(), uid };
      dispatch(setUser(user));
    }
  } catch (error) {
    toast.error(error.messge);
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
      pending: "Please wait...",
    });

    const { user } = await pendingUser;
    if (user.uid) {
      dispatch(getUserAction(user.uid));
    }
  } catch (error) {
    toast.error(error.message);
  }
};

//get all user from the firebase store
export const getAllUserAction = () => async (dispatch) => {
  try {
    //define search query

    const q = query(collection(db, "users"));

    console.log(db);

    //run query to get data
    let allUsers = [];

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      allUsers.push({
        ...doc.data(),
        id: doc.id,
      });
    });

    console.log(allUsers);

    dispatch(setClients(allUsers));
  } catch (error) {
    console.log("error in getting all users", error);
  }
};
