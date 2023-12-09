import React from "react";
import {useNavigate} from "react-router-dom";
import axios from 'axios';

export default function AddToList() {

    const [name, setName] = React.useState()
    const [price, setPrice] = React.useState()
    const navigate = useNavigate()

    function handleSubmit(event){
        event.preventDefault()
        axios.post("http://localhost:3001/addToList", {name, price})
        .then(result => {
            console.log(result)
            navigate('/')
        })
        .catch(err => console.log(err))
    }



    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={handleSubmit}>
                    <h2>Podaj wydatek</h2>
                    <div className="mb-2">
                        <label htmlFor="">Nazwa</label>
                        <input type="text" placeholder="Np. mleko" className="form-control" onChange={(e)=> setName(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Cena</label>
                        <input type="number" className="form-control" onChange={(e) => setPrice(e.target.value)}/>
                    </div>
                    <button className="btn btn-success">Dodaj</button>
                </form>
            </div>
        </div>
    )
}