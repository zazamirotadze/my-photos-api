const express = require('express')
const router = express.Router()
const client = require("../client")

router.get("/data", async (req, res) => {
    const collectionNames = await client.db("photos-api").listCollections().toArray()
    const collections = await Promise.all(collectionNames.map(async ({ name }) => {
        const collection = await client.db("photos-api").collection(name);
        const documents = await collection.find({}).toArray();
        return {
          documents
        };
      }));
    const flattenedCollections = collections.map(({ documents }) => documents[0]).flat();
    res.send(flattenedCollections);
})

module.exports = router