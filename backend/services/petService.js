const Pet = require("../models/Pet");

exports.getAllType = () => {
    return new Promise(async (resolve, reject) => {
      try {
          
          const allPets = await Pet.distinct('type')
          resolve({
              status: 'OK',
              message: 'Success',
              data: allPets
          })
      } catch (e) {
          reject(e)
      }
    });
};

exports.getDetailPet = (id) => {
    return new Promise(async (resolve, reject) => {
      try {
        const pet = await Pet.findById(id);
        if (pet === null) {
          resolve({
            status: "OK",
            message: "the user is not defined",
          });
        }
  
        
        resolve({
          status: "OK",
          message: "Success",
          data: pet
        });
      } catch (e) {
        reject(e);
      }
    });
  };