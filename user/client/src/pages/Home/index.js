import React from "react";
import { useState } from "react";
import axios from "axios";

import "./Home.css";

const Home = () => {
    const [matriculate, setMatriculate] = useState("");
    const [nbrDiplomes, setNbrDiplomes] = useState(0);
    const [myDiplomes, setMyDiplomes] = useState([]);
    const [display, setDisplay] = useState(false);

    const dt = new Date();

    const onSubmit = async () => {
        if (matriculate !== "") {
            const diplomes = await axios.get(`/diploma/${matriculate}`);
            setNbrDiplomes(parseInt(diplomes.data.nbr));
            setMyDiplomes(diplomes.data.diplome);
            setDisplay(true);
        }
    };

    return (
        <div className='home'>
            <form>
                <label>Matricule :</label>
                <input
                    type='text'
                    maxLength='12'
                    placeholder='Matricule'
                    value={matriculate}
                    onKeyPress={(e) => {
                        var theEvent = e || window.event;

                        // Handle paste
                        if (theEvent.type !== "paste") {
                            // Handle key press
                            var key = theEvent.keyCode || theEvent.which;
                            key = String.fromCharCode(key);
                        } else {
                            key = e.clipboardData.getData("text/plain");
                        }
                        var regex = /[0-9]|\./;
                        if (!regex.test(key)) {
                            theEvent.returnValue = false;
                            if (theEvent.preventDefault)
                                theEvent.preventDefault();
                        }
                    }}
                    onChange={(e) => {
                        setMatriculate(e.target.value);
                    }}
                />
                <button
                    onClick={(e) => {
                        e.preventDefault();

                        onSubmit();
                    }}
                >
                    Afficher
                </button>

                {display ? (
                    nbrDiplomes === 0 ? (
                        <div style={{ textAlign: "center", marginTop: "40px" }}>
                            Pas de diplômes.
                        </div>
                    ) : (
                        <div
                            style={{
                                width: "100%",
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-around",
                            }}
                        >
                            {myDiplomes.map((diplome) => {
                                return diplome.mat_etudiant !== "0" ? (
                                    <a
                                        key={diplome.id}
                                        href={`/diploma/?lastName=${
                                            diplome.nom_etudiant
                                        }&firstName=${
                                            diplome.prenom_etudiant
                                        }&diploma=${diplome.niveau}&sector=${
                                            diplome.filiere
                                        }&university=${
                                            diplome.nom_univesrite
                                        }&birthDate=${
                                            diplome.date_naissance
                                        }&birthPlace=${
                                            diplome.lieu_naissance
                                        }&creationDate=${dt.toString()}&domain=${
                                            diplome.domaine
                                        }&specialty=${
                                            diplome.specialite
                                        }&department=${
                                            diplome.departement
                                        }&delibDate=${diplome.date}`}
                                        target='_blank'
                                        rel='noopener noreferrer'
                                        style={{ textAlign: "center" }}
                                    >
                                        {`Diplome de ${diplome.niveau}`}
                                    </a>
                                ) : (
                                    ""
                                );
                            })}
                        </div>
                    )
                ) : (
                    ""
                )}
            </form>
        </div>
    );
};

export default Home;
