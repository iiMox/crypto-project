import React from "react";
import { useState } from "react";
import moment from "moment";
import "moment/locale/fr";

import "./Diploma.css";

import logo from "../../images/usthb-logo.png";

const Diploma = () => {
    moment.locale("fr");
    const urlParams = new URLSearchParams(window.location.search);

    const [diploma, setDiploma] = useState({
        deliberationDate: moment(urlParams.get("delibDate")).format(
            "DD MMMM YYYY"
        ),
        name: urlParams.get("lastName") + " " + urlParams.get("firstName"),
        birthDate: moment(urlParams.get("birthDate")).format("DD MMMM YYYY"),
        birthPlace: urlParams.get("birthPlace"),
        type: urlParams.get("diploma"),
        domain: urlParams.get("domain"),
        sector: urlParams.get("sector"),
        specialty: urlParams.get("specialty"),
        department: urlParams.get("department"),
        creationDate: moment(urlParams.get("creationDate")).format(
            "DD MMMM YYYY"
        ),
    });
    return (
        <div className='diploma'>
            <div className='container'>
                <div className='top'>
                    <div className='image'>
                        <img src={logo} alt='USTHB' />
                    </div>
                    <div className='starts'>
                        <p>République Algérienne Démocratique et Populaire</p>
                        <p>
                            Ministère de l'Enseignement Supérieur et de
                            Recherche Scientifique
                        </p>
                        <p>
                            Université des Science et de la Technologie HOUARI
                            BOUMEDIENE
                        </p>
                        <h1>ATTESTATION DE SUCCÈS</h1>
                    </div>
                    <div className='image'>
                        <img src={logo} alt='USTHB' />
                    </div>
                </div>
                <div className='content'>
                    <div className='intro'>
                        Le Recteur de l'Université des Science et de la
                        Technologie HOUARI BOUMEDIENE <br></br>- Vu le décret
                        exécutif <span>N° 08-265 </span>du{" "}
                        <span>19 août 2008</span> pourtant création du diplôme
                        de licence de master et de doctorat,
                        <br></br>- Vu l’arrêté <span>N° 1061</span> du{" "}
                        <span>13/10/2015</span> portant habilitation de
                        l'université a dispenser la formation de Licence
                        <br></br>- Vu le procès verbal de délibération en date
                        du: <span>{diploma.deliberationDate}</span>
                    </div>
                    <div className='student-info'>
                        <div className='personal-info'>
                            <div className='name'>
                                Attest, que l'étudiant(e):{" "}
                                <span>{diploma.name}</span>
                            </div>
                            <div className='place-of-birth'>
                                Né (e) le : <span>{diploma.birthDate}</span> à :{" "}
                                <span>{diploma.birthPlace}</span>
                            </div>
                        </div>
                        <p>
                            A obtenu le diplôme de : <span>{diploma.type}</span>
                        </p>
                        <p>
                            Domaine : <span>{diploma.domain}</span>
                        </p>
                        <p>
                            Filière : <span>{diploma.sector}</span>
                        </p>
                        <p>
                            Spécialité : <span>{diploma.specialty}</span>
                        </p>
                        <p>
                            Département : <span>{diploma.department}</span>
                        </p>
                    </div>
                    <div className='creation-info'>{`le  ${diploma.creationDate}`}</div>
                    <div className='note'>
                        NB: Il n'est délivré qu'un seul exemplaire de la
                        présente attestation. Il appartient à l'intéressé(e)
                        d'en faire des copies certifiées conformes.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Diploma;
