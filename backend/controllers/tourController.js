import Tour from '../models/Tour.js'

//createTour
export const createTour = async (req,res)=>{

    const newTour = new Tour(req.body)
    try{
        const savedTour = await newTour.save()

        res.status(200).json({success:true, message:'Successfuly created',
        data:savedTour})

    }catch (err){
        res.status(500).json({success:false, message:'Failed to create . Try again'})

    }
};
//update Tour
export const updateTour = async(req,res)=>{
    const id = req.params.id
    try{
        const updatedTour = await Tour.findByIdAndUpdate(id,{
            $set: req.body
        },{new:true})

        res.status(200).json({success:true,
             message:'Successfuly updated',
            data: updatedTour})
    }catch (err){
        res.status(500).json({success:false,
            message:'Failed to updated',
           })

    }
};

//delete Tour
export const deleteTour = async(req,res)=>{
    const id = req.params.id
    try{
        const deletedTour = await Tour.findByIdAndDelete(id)

        res.status(200).json({success:true,
             message:'Successfuly deleted',
            data: deletedTour})
    }catch (err){
        res.status(500).json({success:false,
            message:'Failed to deletes',
           })

};
}

//git Tour
export const gitSingleTour = async(req,res)=>{
    const id = req.params.id
    try{
        const tour = await Tour.findById(id).populate('reviews')

        res.status(200).json({success:true,
             message:'Successfull ',
            data: tour})
    }catch (err){
        res.status(404).json({success:false,
            message:'NOT FOUND',
           })

};
};

//get all Tour
export const gitAllTour = async(req,res)=>{

    const page = parseInt(req.query.page);
    try{
        const tours = await Tour.find({}).populate('reviews')
        .skip(page * 8).limit(8);

        res.status(200).json({success:true,
            count:tours.length,
             message:'Successfull ',
            data: tours})

    }catch (err){
        res.status(404).json({success:false,
            message:'NOT FOUND',
           })

    }
};

//get  Tour search
export const getTourBySearch = async(req,res)=>{

    const city = new RegExp(req.query.city, 'i')
    const distance = parseInt(req.query.distance)
    const maxGroupSize = parseInt(req.query.maxGroupSize)
    try{
        const tours = await Tour.find({
            city,
            distance:{$gte:distance},
            maxGroupSize:{$gte:maxGroupSize}  }).populate('reviews');

        res.status(200).json({success:true,
             message:'Successfull ',
            data: tours})

    }catch (err){
        res.status(404).json({success:false,
            message:'NOT FOUND',
           })

    }
};

//get featured Tour
export const gitFeaturedTour = async(req,res)=>{

    try{
        const tours = await Tour.find({featured:true}).populate('reviews').limit(8);

        res.status(200).json({success:true,
             message:'Successfull ',
            data: tours})

    }catch (err){
        res.status(404).json({success:false,
            message:'NOT FOUND',
           })

    }
};
// get tour counts
export const getTourCount = async(req,res)=>{
    try{
        const tourCount = await Tour.estimatedDocumentCount();

        res.status(200).json({success:true,
             message:'Successfull ',
            data: tourCount})

    }catch (err){
        res.status(500).json({success:false,
            message:'failed to fetch',
           })

    }

}

