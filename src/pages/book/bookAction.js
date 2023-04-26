import {
  QuerySnapshot,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { toast } from "react-toastify";
import { auth, db } from "../../config/firbease-config";
import { setBook, setBurrowHistory } from "./BookSlic";
import { setModalShow } from "../../system/systemSlice";

export const getAllBooksActions = () => async (dispatch) => {
  try {
    //define search query
    const q = query(collection(db, "books"));

    // run query to get data
    let books = [];
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      books.push({
        ...doc.data(),
        id: doc.id,
      });
    });

    console.log(books);

    dispatch(setBook(books));
  } catch (error) {
    console.log(error);
  }
};

export const addNewBookAction = (bookObj) => async (dispatch) => {
  try {
    const docRef = await addDoc(collection(db, "books"), bookObj);
    console.log(docRef);

    if (docRef?.id) {
      toast.success("New book has been added.");
      // now fetch all the book from database and mount to our redux
      dispatch(getAllBooksActions());
      return;
    }
    toast.error("Error, unable to add the book.");
  } catch (error) {
    //log the error
    toast.error(
      "Something went wrong, we could not process your request at the moment, please try again later."
    );
  }
};

export const updateBookAction =
  ({ id, ...rest }) =>
  async (dispatch) => {
    try {
      console.log(id, rest);
      await setDoc(doc(db, "books", id), rest, { merge: true });

      toast.success("New book has been added.");
      dispatch(getAllBooksActions());
      dispatch(setModalShow(false));
    } catch (error) {
      //log the error

      toast.error(
        "Something went wrong, we could not process your request at the moment, please try again later."
      );
    }
  };

export const deleteBookAction = (id) => async (dispatch) => {
  try {
    await deleteDoc(doc(db, "books", id));

    toast.success("New book has been added.");
    dispatch(getAllBooksActions());
    dispatch(setModalShow(false));
  } catch (error) {
    //log the error
    console.log(error);
    toast.error(
      "Something went wrong, we could not process your request at the moment, please try again later."
    );
  }
};

// ======= burrowing section

export const createNewBurrowBookAction = (obj) => async (dispatch) => {
  try {
    const docRef = await addDoc(collection(db, "burrow_history"), obj);
    if (docRef?.id) {
      toast.success("New burrowing item has been added.");

      //update the books {isAvailable: false, availableFrom: Date}
      const updateObj = {
        isAvailable: false,
        availableFrom: obj.returnAt,
        id: obj.bookId,
      };
      // now fetch all the book from database and mount to our redux
      dispatch(updateBookAction(updateObj));
      return;
    }
    toast.error("Error, unable to add the book.");
  } catch (error) {
    console.log(error);

    toast.error(error.message);
  }
};

//pull data from database and add to the redux store for the specific user based on uid
export const getBurrowHistoryAction = (userId) => async (dispatch) => {
  try {
    const q = query(
      collection(db, "burrow_history"),
      where("userId", "==", userId)
    );
    const { docs } = await getDocs(q);

    let burrowHistory = [];
    docs.forEach((item) => {
      burrowHistory.push({ ...item.data(), id: item.id });
    });

    console.log(burrowHistory);

    dispatch(setBurrowHistory(burrowHistory));
  } catch (error) {
    console.log("this error");
  }
};
