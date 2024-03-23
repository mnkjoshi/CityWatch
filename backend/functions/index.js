/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const functions = require("firebase-functions");
const logger = require("firebase-functions/logger");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/report/", (req, res) => {

})
app.put("/report/", (req, res) => {
    console.log(req.body);
})

exports.app = functions.https.onRequest(app);

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
