import React from "react";
import { useState } from "react";
import { certifsD } from "../../utils/certif";

import "./Add.css";

const Add = () => {
    const [diploma, setDiploma] = useState({
        nom_univesrite: "USTHB",
        mat_etudiant: null,
        nom_etudiant: "",
        prenom_etudiant: "",
        date_naissance: "",
        lieu_naissance: "",
        date: "",
        niveau: "",
        domaine: "",
        filiere: "",
        specialite: "",
        departement: "INFORMATIQUE",
    });
    return (
        <div className='add'>
            <div className='container'>
                <h2>Ajouter Un Diplôme</h2>
                <form>
                    <label>Matricule</label>
                    <input
                        type='text'
                        maxLength='12'
                        value={diploma.mat_etudiant}
                        onChange={(e) => {
                            setDiploma({
                                ...diploma,
                                mat_etudiant: e.target.value,
                            });
                        }}
                    />
                    <div className='wrapper'>
                        <div className='box'>
                            <label>Nom</label>
                            <input
                                type='text'
                                value={diploma.nom_etudiant}
                                onChange={(e) => {
                                    setDiploma({
                                        ...diploma,
                                        nom_etudiant:
                                            e.target.value.toUpperCase(),
                                    });
                                }}
                            />
                        </div>
                        <div className='box'>
                            <label>Prénom</label>
                            <input
                                type='text'
                                value={diploma.prenom_etudiant}
                                onChange={(e) => {
                                    setDiploma({
                                        ...diploma,
                                        prenom_etudiant:
                                            e.target.value.toUpperCase(),
                                    });
                                }}
                            />
                        </div>
                    </div>
                    <div className='wrapper'>
                        <div className='box'>
                            <label>Date de Naissance</label>
                            <input
                                type='date'
                                value={diploma.date_naissance}
                                onChange={(e) => {
                                    setDiploma({
                                        ...diploma,
                                        date_naissance: e.target.value,
                                    });
                                }}
                            />
                        </div>
                        <div className='box'>
                            <label>Lieu de Naissance</label>
                            <input
                                type='text'
                                value={diploma.lieu_naissance}
                                onChange={(e) => {
                                    setDiploma({
                                        ...diploma,
                                        lieu_naissance:
                                            e.target.value.toUpperCase(),
                                    });
                                }}
                            />
                        </div>
                    </div>
                    <div className='wrapper'>
                        <div className='box'>
                            {" "}
                            <label>Diplôme</label>
                            <select
                                value={diploma.niveau}
                                onChange={(e) => {
                                    setDiploma({
                                        ...diploma,
                                        niveau: e.target.value,
                                    });
                                }}
                            >
                                <option></option>
                                <option value='LICENCE'>Licence</option>
                                <option value='MASTER'>Master</option>
                                <option value='DOCTORAT'>Doctorat</option>
                            </select>
                        </div>
                        <div className='box'>
                            <label>Date de Délibération</label>
                            <input
                                type='date'
                                value={diploma.date}
                                onChange={(e) => {
                                    setDiploma({
                                        ...diploma,
                                        date: e.target.value,
                                    });
                                }}
                            />
                        </div>
                    </div>
                    <label>Domaine</label>
                    <input
                        type='text'
                        value={diploma.domaine}
                        onChange={(e) => {
                            setDiploma({
                                ...diploma,
                                domaine: e.target.value.toUpperCase(),
                            });
                        }}
                    />
                    <div className='wrapper'>
                        <div className='box'>
                            <label>Filière</label>
                            <input
                                type='text'
                                value={diploma.filiere}
                                onChange={(e) => {
                                    setDiploma({
                                        ...diploma,
                                        filiere: e.target.value.toUpperCase(),
                                    });
                                }}
                            />
                        </div>
                        <div className='box'>
                            <label>Spécialité</label>
                            <input
                                type='text'
                                value={diploma.specialite}
                                onChange={(e) => {
                                    setDiploma({
                                        ...diploma,
                                        specialite:
                                            e.target.value.toUpperCase(),
                                    });
                                }}
                            />
                        </div>
                    </div>

                    <div className='buttons'>
                        <button
                            className='save'
                            onClick={async (e) => {
                                e.preventDefault();

                                await certifsD.methods
                                    .addDiplome(
                                        diploma.nom_univesrite,
                                        diploma.mat_etudiant,
                                        diploma.nom_etudiant,
                                        diploma.prenom_etudiant,
                                        diploma.date_naissance,
                                        diploma.lieu_naissance,
                                        diploma.date,
                                        diploma.niveau,
                                        diploma.domaine,
                                        diploma.filiere,
                                        diploma.specialite,
                                        diploma.departement
                                    )
                                    .send({
                                        from: "0x1c06595F6E29d50eDc6eb6e84b87cf8Ade848B10",
                                        gas: "1000000",
                                    });

                                window.location.reload();
                            }}
                        >
                            Enregistrer
                        </button>
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

export default Add;
