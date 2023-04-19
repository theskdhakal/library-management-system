import { toast } from "react-toastify";
import { auth, db } from "../../config/firbease-config";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
} from "firebase/firestore";
import { setbook } from "./bookSlice";

export const getAllBooksActions = () => async (dispatch) => {
  try {
    //define search query
    const q = query(collection(db, "books"));

    //run query to get data
    const querySnapshot = await getDocs(q);

    let books = [];
    querySnapshot.forEach((doc) => {
      const id = doc.id;
      const bookData = doc.data();
      console.log(bookData, id);

      books.push({
        ...bookData,
        id,
      });
    });
    dispatch(setbook(books));
  } catch (error) {
    console.log(error);
  }
};

export const addNewBookAction = (bookObj) => async (dispatch) => {
  try {
    const docRef = await addDoc(collection(db, "books"), bookObj);

    if (docRef?.id) {
      toast.success("New book has been added.");
      //now fetch all the book from db and mount to redux
      dispatch(getAllBooksActions());
      return;
    }
    toast.error("Error, unable to add new book");
  } catch (error) {
    toast.error(error.message);
  }
};
