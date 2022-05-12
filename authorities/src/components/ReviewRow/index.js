import React from "react";

import { certifsM, certifsU } from "../../utils/certif";

import "./ReviewRow.css";

const ReviewRow = ({
    id,
    matriculate,
    lastName,
    firstName,
    diploma,
    sector,
    state,
    university,
    birthDate,
    birthPlace,
    creationDate,
    domain,
    specialty,
    department,
    actor,
    delibDate,
}) => {
    return (
        <tr>
            <td>{matriculate}</td>
            <td>{lastName}</td>
            <td>{firstName}</td>
            <td>{diploma}</td>
            <td>{sector}</td>
            <td className='actions'>
                <button
                    className='display'
                    onClick={(e) => {
                        e.preventDefault();

                        window.open(
                            `/diploma/?lastName=${lastName}&firstName=${firstName}&diploma=${diploma}&sector=${sector}&university=${university}&birthDate=${birthDate}&birthPlace=${birthPlace}&creationDate=${new Date().toString()}&domain=${domain}&specialty=${specialty}&department=${department}&delibDate=${delibDate}`,
                            "_blank"
                        );
                    }}
                >
                    Afficher
                </button>
                <button
                    className='accept'
                    onClick={async (e) => {
                        e.preventDefault();

                        if (
                            window.confirm("Vous voulez accepter ce diplôme ?")
                        ) {
                            if (actor === "University") {
                                await certifsU.methods
                                    .updateAvisUniversite(id, "accepte")
                                    .send({
                                        from: "0xF74956F0B646B3f92eD7D4895e6fAE6a78697622",
                                        gas: "1000000",
                                    });
                            } else {
                                await certifsM.methods
                                    .updateAvisMinistere(id, "accepte")
                                    .send({
                                        from: "0xAcbC4F2e0ddBcFA4449955E8CfCad363FbB3c068",
                                        gas: "1000000",
                                    });
                            }

                            window.location.reload();
                        }
                    }}
                >
                    Accepter
                </button>
                <button
                    className='refuse'
                    onClick={async (e) => {
                        e.preventDefault();

                        if (
                            window.confirm("Vous voulez refuser ce diplôme ?")
                        ) {
                            if (actor === "University") {
                                await certifsU.methods
                                    .updateAvisUniversite(id, "refuse")
                                    .send({
                                        from: "0xF74956F0B646B3f92eD7D4895e6fAE6a78697622",
                                        gas: "1000000",
                                    });
                            } else {
                                await certifsM.methods
                                    .updateAvisMinistere(id, "refuse")
                                    .send({
                                        from: "0xAcbC4F2e0ddBcFA4449955E8CfCad363FbB3c068",
                                        gas: "1000000",
                                    });
                            }

                            window.location.reload();
                        }
                    }}
                >
                    Refuser
                </button>
            </td>
        </tr>
    );
};

export default ReviewRow;
