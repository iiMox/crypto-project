const express = require("express");
const router = express.Router();

const Web3 = require("web3");
const { contractABI, contractAddress } = require("../utils/constants");

router.get("/:matricule", async (req, res) => {
    const web3 = new Web3(
        new Web3.providers.HttpProvider("http://127.0.0.1:8545")
    );
    const certifs = new web3.eth.Contract(contractABI, contractAddress);
    const diplomes = await certifs.methods
        .getDiplome(req.params.matricule)
        .call();
    let results = { nbr: diplomes.nbr, diplome: [] };
    diplomes.diplome.forEach((diplome) => {
        results.diplome.push({
            id: diplome.id,
            nom_univesrite: diplome.nom_univesrite,
            mat_etudiant: diplome.mat_etudiant,
            nom_etudiant: diplome.nom_etudiant,
            prenom_etudiant: diplome.prenom_etudiant,
            date_naissance: diplome.date_naissance,
            lieu_naissance: diplome.lieu_naissance,
            date: diplome.date,
            niveau: diplome.niveau,
            domaine: diplome.domaine,
            filiere: diplome.filiere,
            specialite: diplome.specialite,
            departement: diplome.departement,
            avisUniversite: diplome.avisUniversite,
            avisMinistere: diplome.avisMinistere,
        });
    });
    res.send(results);
});

module.exports = router;
