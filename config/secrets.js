require('dotenv').config();

module.exports = {
    jWebTokenSecret: process.env.JWT_SECRET || "In case you haven't heard, the song I listen to during sprints is Pushing Onwards from the VVVVV soundtrack."
}