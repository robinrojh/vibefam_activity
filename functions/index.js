const functions = require("firebase-functions")

const express = require("express")
const cors = require("cors")

const admin = require("firebase-admin")
admin.initializeApp()
db = admin.firestore()
const app = express()

app.use(cors({ origin: true }))

app.post('/', async (req, res) => {
    const className = req.body
    await db.collection("classes").add({
        className: className
    })
    res.status(201).send()
})

exports.classNameSubmit = functions.https.onRequest(app)
exports.incrementCount = functions.firestore
    .document("classes/{className}")
    .onCreate(async (change, context) => {
        await db.collection("metadata").doc("classes").update({
            count: admin.firestore.FieldValue.increment(1)
        })
    })