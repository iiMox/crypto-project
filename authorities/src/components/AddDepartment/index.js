import React from "react";
import "./AddDepartment.css";

const AddDepartment = () => {
    return (
        <div className='add-department'>
            <div className='container'>
                <h2>Ajouter Un Département</h2>
                <form>
                    <label>Matricule</label>
                    <input type='text' maxLength='12' />
                    <label>Nom</label>
                    <input type='text' maxLength='12' />
                    <label>Prénom</label>
                    <input type='text' maxLength='12' />
                    <label>Diplôme</label>
                    <input type='text' maxLength='12' />
                    <label>Filière</label>
                    <input type='text' maxLength='12' />
                    <div className='buttons'>
                        <button className='save'>Enregistrer</button>
                        <button
                            className='close'
                            onClick={(e) => {
                                e.preventDefault();

                                e.target.parentElement.parentElement.parentElement.parentElement.style.display =
                                    "none";
                            }}
                        >
                            Fermer
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddDepartment;
