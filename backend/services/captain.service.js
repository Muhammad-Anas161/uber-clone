const captainModel = require('../models/captain.model');

module.exports.createCaptain = async ({
    firstName,
    lastName,
    email,
    password,
    color,
    plate,
    capacity,
    vehicleType,
})=> {
    if(!firstName || !lastName || !email || !password || !color || !plate || !capacity || !vehicleType) {
        throw new Error('All fields are required');
    }
    const captain = new captainModel({
        fullname: {
            firstname: firstName,
            lastname: lastName
        },
        email,
        password,
        vehicle: {
            color,
            plate,
            capacity,
            vehicleType
        }
    });
    return await captain.save();  // ✅ Save to DB
}