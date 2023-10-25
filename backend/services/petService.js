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

exports.getAllPetById = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const heartData = []
      const Data = data?.map(async (id) => {
        const pet = await Pet.findById(id);
        if (pet) {
          heartData.push(pet)
        }
      })

      const results = await Promise.all(Data);
      const newData = results && results[0] && results[0].id;
      
      if (heartData === null) {
        resolve({
          status: "OK",
          message: "the data is not defined",
        });
      }

      
      resolve({
        status: "OK",
        message: "Success",
        data: heartData
      });
    } catch (e) {
      reject(e);
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

exports.getAllPet = (limit, page, sort, filter) => {
  return new Promise(async (resolve, reject) => {
    try {
        const totalPet = await Pet.count()
        let allPet = []
        if (filter) {
            const label = filter[0];
            const allObjectFilter = await Pet.find({ [label]: { '$regex': filter[1] } }).limit(limit).skip(page * limit).sort({createdAt: -1, updatedAt: -1})
            resolve({
                status: 'OK',
                message: 'Success',
                data: allObjectFilter,
                total: totalPet,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalPet / limit)
            })
        }
        if (sort) {
            const objectSort = {}
            objectSort[sort[1]] = sort[0]
            const allPetSort = await Pet.find().limit(limit).skip(page * limit).sort(objectSort).sort({createdAt: -1, updatedAt: -1})
            resolve({
                status: 'OK',
                message: 'Success',
                data: allPetSort,
                total: totalPet,
                pageCurrent: Number(page + 1),
                totalPage: Math.ceil(totalPet / limit)
            })
        }
        if(!limit) {
            allPet = await Pet.find().sort({createdAt: -1, updatedAt: -1})
        }else {
            allPet = await Pet.find().limit(limit).skip(page * limit).sort({createdAt: -1, updatedAt: -1})
        }
        resolve({
            status: 'OK',
            message: 'Success',
            data: allPet,
            total: totalPet,
            pageCurrent: Number(page + 1),
            totalPage: Math.ceil(totalPet / limit)
        })
    } catch (e) {
        reject(e)
    }
  });
};