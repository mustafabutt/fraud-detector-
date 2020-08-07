/*
##################################################################
-- Name              :utils.js
-- Creation Date     :
-- Author            :Mustafa
##################################################################
*/

"use strict";

module.exports =  () => {

    const C = require("../constants/constants");
    let flat = require("flat");
   
 
    function traverse (data,id,confidence){
        
        if (isArray(data)) {

         traverseArray(data,id,confidence)
        
        } else if ((typeof data === C.OBJECT) && (data !== null)) {
        
             traverseObject(data,id,confidence)
            if(data.id == id && data.connectionInfo.confidence == confidence){
                process.env.data = JSON.stringify(flat(data));
            }
        
        } 
            
        return process.env[C.DATA]
    }
    function traverseArray(arr,id,confidence) {
        
        arr.forEach(function (x) {
           traverse(x,id,confidence)
        })
    }
    
    function traverseObject(obj,id,confidence) {
       
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                traverse(obj[key],id,confidence)
            }
        }
    }
    
    function isArray(o) {
     
        return Object.prototype.toString.call(o) === C.STRING_OBJECT
    }

    return {

        traverse : traverse

    }
}