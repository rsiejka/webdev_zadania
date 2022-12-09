const express = require('express')

const router = express.Router()

const uzytkownicy = [
    {
        imie: "Jan",
        nazwisko: "Kowalski",
        email: "jankowalski@przyklad.pl",
        wiek: 23
    },
    {
        imie: "Mateusz",
        nazwisko: "Kwiatkowski",
        email: "mateuszkwiatkowski@przyklad.pl",
        wiek: 56

    }
]

router.get('/', (req, res) => {
    res.send(uzytkownicy)
})

router.post('/', (req, res) => {
    console.log('odbieram dane')
    res.send('dodany nowy uzytkownik')
})

router.get('/:id', (res, req) => {
    const {id} = req.params
    const uzytkownikPoImieniu = uzytkownicy.find((user) => user.imie === id)
    res.send(uzytkownikPoImieniu)
})

module.exports = router