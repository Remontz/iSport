const mongoose = require('mongoose')

const EventSchema = new mongoose.Schema({
    // Event Name
    eventName: {
        type: String,
        required: [true, "Event Name is required"],
        minLength: [3, 'Event name must be at least 3 characters']
    },
    //Location Name
    location: {
        streetNumber: {
            type: Number
        },
        streetName: {
            type: String,
            minLength: [3, 'Street name must be at least 3 characters']
        },
        parkName: {
            type: String,
            required: [true, 'Please input the name of the park the event is being held, or the closest landmark'],
            minLength: [3, 'Park/Landmark name must be at least 3 characters']
        },
        city: {
            type: String,
            required: [true, "The event's City is required"],
            minLength: [3, 'The city Name must be at least 3 characters']
        },
        state: {
            type: String,
            required: [true, 'State where event it held is required'],
            enum: {
                values: ['TN', 'MS', 'AR', 'KY']
            },
            message: '{VALUE} is not supported'
        },
    },
    //Max Attendees
    maxAttend: {
        type: Number,
        required: [true, 'maximum number of participants is required'],
        min: [2, "Min amount of attendees is two."]
    },
    // Attendees
    attendees: [{
        type: mongoose.Types.ObjectId,
        ref: "User"
    }],
    //Time of Event
    time: {
        type: Date,
        required: [true, 'Time of event is required']
    },
    // Date
    date: {
        type: Date,
        required: [true, 'Date of event is required']
    },
    // Creator
    creatorId: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: [true, "User must be logged in before creating a lobby"]
    }
}, { timestamp: true })

const Event = mongoose.model('Event', EventSchema)
module.exports = Event