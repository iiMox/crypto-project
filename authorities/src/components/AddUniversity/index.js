import React from "react";
import "./AddUniversity.css";

const AddUniversity = () => {
    return (
        <div className='add-university'>
            <div className='container'>
                <h2>Ajouter Université</h2>
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

export default AddUniversity;
