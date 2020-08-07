/*
##################################################################
-- Name              : transactions.js
-- Creation Date     :
-- Author            :Mustafa
##################################################################
*/

"use strict";

const { raw } = require("express");

module.exports = (modals) => {
    var fs = require("fs");
    var path = require("path");
    let utils = require("../utilities/utils")();

    return {

        getTransactions : async (transactionId,confidenceLevel,req) => {
            process.env.data = "";
            return new Promise(async (resolve,reject)=>{
                try{

                    let result = "";
                    let rawdata = fs.readFileSync(path.join(__dirname, '..', 'db',  'data.json'));
                
                    if(transactionId != undefined)
                        result =  utils.traverse(JSON.parse(rawdata),transactionId,confidenceLevel, req.data);
                    else resolve(JSON.parse(rawdata))

                    if(result.length == 0)
                        resolve({status:404,msg:"Not found"})
                    else resolve({status:200,results:JSON.parse(result)})


                }catch(e){}
                
            })

        },


    }
};

  
