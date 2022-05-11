import React from "react";
import { useEffect, useState } from "react";

import { certifsD } from "../../utils/certif";

import Add from "../../components/Add";
import Row from "../../components/Row";
import HomeBtn from "../../components/HomeBtn";

import "./Department.css";

const Department = () => {
    const [diplomas, setDiplomas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadBlockchainData();
    }, [loading]);

    const loadBlockchainData = async () => {
        const diplomesCount = await certifsD.methods.certifCount().call();
        for (let i = 1; i <= diplomesCount; i++) {
            const diploma = await certifsD.methods.diplomes(i).call();
            if (
                diplomas.find((diplome) => diplome.id === diploma.id) ===
                    undefined &&
                parseInt(diploma.id) !== 0
            ) {
                console.log(diploma);
                const newDiplomas = diplomas;
                newDiplomas.push(diploma);
                setDiplomas(newDiplomas);
            }
        }
        setLoading(false);
    };

    return (
        <div className='department'>
            <Add />
            <HomeBtn />
            <h1>Tableau des diplômes</h1>
            <table>
                <thead>
                    <tr>
                        <td>Matricule</td>
                        <td>Nom</td>
                        <td>Prénom</td>
                        <td>Diplôme</td>
                        <td>Filière</td>
                        <td>État</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {diplomas.length === 0 ? (
                        <div style={{ textAlign: "center", marginTop: "40px" }}>
                            Pas de diplômes
                        </div>
                    ) : (
                        diplomas.map((diploma) => {
                            return (
                                <Row
                                    key={diploma.id}
                                    id={diploma.id}
                                    matriculate={diploma.mat_etudiant}
                                    lastName={diploma.nom_etudiant}
                                    firstName={diploma.prenom_etudiant}
                                    diploma={diploma.niveau}
                                    sector={diploma.filiere}
                                    state={
                                        diploma.avisUniversite ===
                                            "en attente" &&
                                        diploma.avisMinistere === "en attente"
                                            ? "En attente"
                                            : diploma.avisUniversite ===
                                                  "accepte" &&
                                              diploma.avisMinistere ===
                                                  "accepte"
                                            ? "Accepté"
                                            : diploma.avisUniversite ===
                                                  "refuse" ||
                                              diploma.avisMinistere === "refuse"
                                            ? "Refusé"
                                            : "En attente"
                                    }
                                    university={diploma.nom_univesrite}
                                    birthDate={diploma.date_naissance}
                                    birthPlace={diploma.lieu_naissance}
                                    creationDate={diploma.date_creation}
                                    domain={diploma.domaine}
                                    specialty={diploma.specialite}
                                    department={diploma.departement}
                                    delibDate={diploma.date}
                                />
                            );
                        })
                    )}
                </tbody>
            </table>
            <button
                onClick={(e) => {
                    e.preventDefault();

                    document.querySelector(".add").style.display = "flex";
                }}
            >
                Ajouter
            </button>
        </div>
    );
};

export default Department;
