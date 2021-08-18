const fs = require('fs');

exports.saveForecastApi = async(req , res , next) => {
   try {
    console.log(req.body);
    const arr = req.body;
    const text = arr.map(JSON.stringify).reduce((prev, next) => `${prev}\n${next}`);
    fs.writeFileSync("api.txt", text, 'utf-8');
    


   } catch (error) {
       console.log(error);
   }

}