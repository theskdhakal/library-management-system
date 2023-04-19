import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";

export const BookTable = () => {
  // const dispatch = useDispatch();
  const { book } = useSelector((state) => state.books);

  // useEffect(() => {
  //   !book.length && dispatch(getAllBooksActions());
  // }, [dispatch]);
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Thumbnail</th>
          <th>info</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {book.map((item) => (
          <tr>
            <td>
              <img src={item.url} alt="" />
            </td>
            <td>
              <h3>{item.title}</h3>
              <p>
                {" "}
                {item.name}-{item.year}
              </p>
              <p>{item?.summary}</p>
            </td>

            <td></td>
          </tr>
        ))}
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </Table>
  );
};
