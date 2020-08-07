/*
##################################################################
-- Name              : transactions.js
-- Description       :
-- Creation Date     :
-- Author            : Mustafa
-- Reviewer          :
##################################################################
*/

"use strict";

module.exports = (app,libs) => {
    var app = require("express");
    var router = app.Router();
    let C = require("../constants/constants");
    let transactions = libs.transactions;

    // transactions data end point 
    router.get(C.GET, async (req, res) => {
        try{
            let results = await transactions.getTransactions(req.query.transactionId,req.query.confidenceLevel,req)
            res.json(results)
        }catch(err){
            console.log(err)
        }

    });

    return router;
};