const express = require('express')

const MongoClient = require('mongodb').MongoClient
const assert = require('assert')
const url = 'mongodb://localhost:27017'
const dbname = 'galleryDB'

MongoClient.connect(url, function(err, client){
    assert.equal(null, err)
    console.log("Connected successfully")

    const db = client.db(dbname)

    db.collection('users').insertOne(
        {
            imie: "Tadeusz",
            nazwisko: "Kowalski"
        }, (error, result) => {
            if(error)
                console.log("blad")
            else
                console.log("ok")
        }
    )

    db.collection('users').find({
        imie: "Stanislaw"
    }).toArray((err, res) => {
        console.log(res)
    })

    db.collection('users').updateOne({
        imie: "Tadeusz"
    }, {
        $set: {
            imie: "Tymoteusz"
        }
    })

    db.collection('users').deleteOne({
        imie: "Stanislaw"
    }, (err, res) => {
        if(err)
            console.log("blad")
        else
            console.log(res)
    }
    )

    client.close()
})




//naprawa
// var MongoClient = require('mongodb').MongoClient

// const client = new MongoClient(uri, {useUnifiedTopology: true});

// client.connect().then((client)=>{
//     var db = client.db('db_name')
//     db.collection('collection_name').find().toArray(function (err, result) {
//         if (err) throw err
//         console.log(result);
//     })
// })



// db.collection("Users").insertOne({
//     imie: "Tadeusz",
//     nazwisko: "Kowalski"
// }).then(
//     () => console.log("Dodano"),
//     err => console.log(err.message),
// ).finally(() => client.close())