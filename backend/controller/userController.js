import User from '../models/models.js'



//create new tour 
export const createTour = async (req, res) => {
    const newTour = new User(req.body);

    try {

        const savedTour = await newTour.save()
        res.status(200).json({ success: true, message: "succesfully created", data: savedTour })
        console.log(savedTour)
    } catch (err) {

        res.status(500).json({ success: false, message: "unable to save in database" });

    };
};


export const getTour = async (req, res) => {

    try {

        const savedTour = await User.find()
        res.status(200).json({ success: true, message: "succesfullyfound", data: savedTour })
        console.log(savedTour)
    } catch (err) {

        res.status(500).json({ success: false, message: "unable to found in database" });

    };
}