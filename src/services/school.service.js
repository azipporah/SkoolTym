// const schoolSchema = require('../models/schools.model')

// module.exports = class SchoolService{
//     async createSchool(schToCreate){
//         const school = new schoolSchema(schToCreate)
//         return await school.save()
//     }
// }

const routeSchema = new mongoose.Schema(
    {
        location: {
            departureLocation: {
                name: {
                    ref: "Location",
                    type: String,
                    required: true,
                },
                //want to create new object id here,
                subLocation: [String],
                _id: {
                    type: String,
                },
            },
            arrivalLocation: {
                name: {
                    ref: "Location",
                    type: String,
                    required: true,
                },
                //want to create new object id here,
                subLocation: [String],
                _id: {
                    type: String,
                },
            },
        },
        duration: {
            type: Number,
            required: true,
        },
        busId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Bus",
            required: true,
        },
        date: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);
node.jsmongodbmongoose