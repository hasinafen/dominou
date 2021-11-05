
const ObjectCours = () => {

    const cadena1 = {
        couleur: 'gris',
        taille: "big",
        dateFabrication: {
            production: '10/01/2020',
            vente: '2/03/2020',

        }
    }

    const cadena2 = {
        couleur: 'jaune',
        taille: "small",
        dateFabrication: {
            production: '10/01/2021',
            vente: '2/03/2021'
        }
    }

    const getColor = (cadena) => {
        console.log(cadena)
        console.log(`La couleur du cadena est: ${cadena.couleur}`)
        console.log(`La date de production est: ${cadena.dateFabrication.production}`)
    }

    // getColor(cadena1)

    return (
        <div></div>
    )
}

export default ObjectCours
