import React from "react";
import { useEffect, useState } from "react";

import { certifsM } from "../../utils/certif";

import ReviewRow from "../../components/ReviewRow";
import HomeBtn from "../../components/HomeBtn";
import AddUniversity from "../../components/AddUniversity";

import "./Ministry.css";

const Ministry = () => {
    const [diplomas, setDiplomas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (loading) {
            loadBlockchainData();
        }
    }, [loading]);

    const loadBlockchainData = async () => {
        const diplomesCount = await certifsM.methods.certifCount().call();
        for (let i = 1; i <= diplomesCount; i++) {
            const diploma = await certifsM.methods.diplomes(i).call();
            if (
                diplomas.find((diplome) => diplome.id === diploma.id) ===
                    undefined &&
                diploma.avisMinistere === "en attente" &&
                parseInt(diploma.id) !== 0
            ) {
                const newDiplomas = diplomas;
                newDiplomas.push(diploma);
                setDiplomas(newDiplomas);
            }
        }
        setLoading(false);
    };

    return (
        <div className='ministry'>
            <HomeBtn />
            <AddUniversity />
            <h1>Liste Des Diplômes</h1>
            <table>
                <thead>
                    <tr>
                        <td>Matricule</td>
                        <td>Nom</td>
                        <td>Prénom</td>
                        <td>Université</td>
                        <td>Diplôme</td>
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
                                <ReviewRow
                                    key={diploma.id}
                                    id={diploma.id}
                                    matriculate={diploma.mat_etudiant}
                                    lastName={diploma.nom_etudiant}
                                    firstName={diploma.prenom_etudiant}
                                    diploma={diploma.niveau}
                                    sector={diploma.filiere}
                                    university={diploma.nom_univesrite}
                                    birthDate={diploma.date_naissance}
                                    birthPlace={diploma.lieu_naissance}
                                    creationDate={diploma.date_creation}
                                    domain={diploma.domaine}
                                    specialty={diploma.specialite}
                                    department={diploma.departement}
                                    delibDate={diploma.date}
                                    actor='Ministry'
                                />
                            );
                        })
                    )}
                </tbody>
            </table>
            {/* <button
                onClick={(e) => {
                    e.preventDefault();

                    document.querySelector(".add-university").style.display =
                        "flex";
                }}
            >
                Ajouter Université
            </button> */}
        </div>
    );
};

export default Ministry;
