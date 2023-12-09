import React from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function UpdateItem() {
  const [name, setName] = React.useState();
  const [price, setPrice] = React.useState();

  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    axios
      .get("http://localhost:3001/getExpense/" + id)
      .then((result) => {
        console.log(result);
        setName(result.data.name);
        setPrice(result.data.price);
      })
      .catch((err) => console.log(err));
  }, []);

  function updateItem(event) {
    event.preventDefault()
    axios.put("http://localhost:3001/updateExpense/" + id , {name, price})
    .then(result => {
        console.log(result)
        navigate('/')
    })
    .catch(err => console.log(err))
  }

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <form onSubmit={updateItem}>
          <h2>Edytuj wydatek</h2>
          <div className="mb-2">
            <label htmlFor="">Nowa nazwa</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="">Nowa cena</label>
            <input
              type="number"
              className="form-control"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <button className="btn btn-success">Zapisz</button>
        </form>
      </div>
    </div>
  );
}
