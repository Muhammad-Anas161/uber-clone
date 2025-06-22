const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const captainSchema = new mongoose.Schema({
    fullname: {
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  }
},
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: [/.+\@.+\..+/, 'Please fill a valid email address']
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    socketID: {
        type: String,
    },
    status:{
        type: String,
        enum: ['active', 'inactive', 'busy'],
        default: 'inactive'
    },
    vehicle: {
        color: {
            type: String,
            required: true
        },
        plate: {
            type: String,
            required: true,
            unique: true
        },
        capacity: {
            type: Number,
            required: true,
            min: [1, 'Capacity must be at least 1']
        },
        vehicleType: {
            type: String,
            enum: ['car', 'bike', 'van', 'truck', 'auto'],
            required: true
        }
    },
    location: {
        latitude: {
            type: Number,
        }, 
        longitude: {
            type: Number,
        }
    }
});

captainSchema.methods.generateAuthToken = async function() {
    const token = jwt.sign(
        { _id: this._id },
        process.env.JWT_SECRET,
        { expiresIn: '24h' }
    );
    return token;
}

captainSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
}

captainSchema.statics.hashPassword = async function(password) {
    return await bcrypt.hash(password, 10);
}
const captainModel = mongoose.model('Captain', captainSchema);
module.exports = captainModel;
