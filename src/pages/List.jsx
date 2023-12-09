import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function List() {
  const [expenses, setExpenses] = React.useState([]);

  React.useEffect(() => {
    axios
      .get("http://localhost:3001/")
      .then((result) => setExpenses(result.data))
      .catch((err) => console.log(err));
  }, []);

  function hanldeDelete(id) {
    axios
      .delete("http://localhost:3001/deleteItem/" + id)
      .then(window.location.reload())
      .catch((err) => console.log(err));
  }
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
        <Link to="/create" className="btn btn-success">
          Dodaj +
        </Link>
        <table className="table">
          <thead>
            <th>Wydatki</th>
            <th>Cena</th>
          </thead>
          <tbody>
            {expenses.map((expense) => {
              return (
                <tr>
                  <td>{expense.name.toUpperCase()}</td>
                  <td>${expense.price}</td>
                  <td>
                    <Link
                      to={`/update/${expense._id}`}
                      className="btn btn-success"
                    >
                      Edytuj
                    </Link>
                    <Link
                      className="btn btn-danger"
                      onClick={(e) => hanldeDelete(expense._id)}
                    >
                      Usuń
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
