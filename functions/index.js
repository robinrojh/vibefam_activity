const functions = require("firebase-functions")

const express = require("express")
const cors = require("cors")

const admin = require("firebase-admin")
admin.initializeApp()
db = admin.firestore()
const app = express()

app.use(cors({ origin: true }))

/* 
    Post method to post to classes collection and to update the metadata collection document.
    Atomically updates both collections. 
*/
app.post('/', async (req, res) => {
    const className = req.body

    const batch = await db.batch()
    // Since batch write can only use set, update, and delete,
    // I made classRef to be a doc with unique ID, then set it with req.body.
    const classRef = db.collection("classes").doc()
    const metadataRef = db.collection("metadata").doc("classes")
    try {
        await batch.set(classRef, className)
        await batch.update(metadataRef, {
            count: admin.firestore.FieldValue.increment(1)
        })
    } catch (error) {
        console.error("batch write failed")
        res.status(400).send()
        return;
    }
    await batch.commit()
    res.status(201).send()
})

exports.classNameSubmit = functions.https.onRequest(app)