import React from "react";
import { certifsD } from "../../utils/certif";

import "./Row.css";

const Row = ({
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
    delibDate,
}) => {
    return (
        <tr>
            <td>{matriculate}</td>
            <td>{lastName}</td>
            <td>{firstName}</td>
            <td>{diploma}</td>
            <td>{sector}</td>
            <td>{state}</td>
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
                    className='delete'
                    onClick={async (e) => {
                        e.preventDefault();

                        if (
                            window.confirm("Vous voulez supprimer ce diplôme ?")
                        ) {
                            await certifsD.methods.deleteDiplome(id).send({
                                from: "0xAF94094d56FCfE5b8ceF59A1d99d6Fae8169bEC9",
                                gas: "1000000",
                            });

                            window.location.reload();
                        }
                    }}
                >
                    Supprimer
                </button>
            </td>
        </tr>
    );
};

export default Row;
