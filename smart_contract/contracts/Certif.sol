// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.13;

contract Certif {
    uint256 public certifCount = 0;

    struct Diplome {
        uint256 id;
        string nom_univesrite;
        uint256 mat_etudiant;
        string nom_etudiant;
        string prenom_etudiant;
        string date_naissance;
        string lieu_naissance;
        string date;
        string niveau;
        string domaine;
        string filiere;
        string specialite;
        string departement;
        string avisUniversite;
        string avisMinistere;
    }

    address public admin_address;
    /* Diplome[] diplomes; */
    mapping(uint256 => Diplome) public diplomes;

    function addDiplome(
        string memory _nom_univesrite,
        uint256 _mat_etudiant,
        string memory _nom_etudiant,
        string memory _prenom_etudiant,
        string memory _date_naissance,
        string memory _lieu_naissance,
        string memory _date,
        string memory _niveau,
        string memory _domaine,
        string memory _filiere,
        string memory _specialite,
        string memory _departement
    ) public {
        certifCount++;
        diplomes[certifCount] = Diplome(
            certifCount,
            _nom_univesrite,
            _mat_etudiant,
            _nom_etudiant,
            _prenom_etudiant,
            _date_naissance,
            _lieu_naissance,
            _date,
            _niveau,
            _domaine,
            _filiere,
            _specialite,
            _departement,
            "en attente",
            "en attente"
        );
    }

    function getDiplome(uint256 mat)
        public
        view
        returns (uint256 nbr, Diplome[] memory diplome)
    {
        uint256 nbr_diplome = 0;
        Diplome[] memory diplomes_etudiant = new Diplome[](3);
        for (uint256 i = 1; i <= certifCount; i++) {
            if (
                diplomes[i].mat_etudiant == mat &&
                keccak256(bytes(diplomes[i].avisMinistere)) ==
                keccak256(bytes("accepte")) &&
                keccak256(bytes(diplomes[i].avisUniversite)) ==
                keccak256(bytes("accepte"))
            ) {
                diplomes_etudiant[nbr_diplome] = diplomes[i];
                nbr_diplome += 1;
            }
        }
        return (nbr_diplome, diplomes_etudiant);
    }

    function updateAvisUniversite(uint256 id, string memory _avis) public {
        diplomes[id].avisUniversite = _avis;
    }

    function updateAvisMinistere(uint256 id, string memory _avis) public {
        diplomes[id].avisMinistere = _avis;
    }

    function deleteDiplome(uint256 id) public {
        delete diplomes[id];
    }
}
