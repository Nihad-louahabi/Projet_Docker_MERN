import jwt from 'jsonwebtoken';

const verifyToken =(req,res,next)=>{
    const token = req.cookies.accessToken
    if(!token){
        return req.status(401).json({success:false,
            message:"Yo're not authotize"})
    }
    jwt.verify(token,process.env.JWT_SECRET_KEY,(err,user)=>{
        if(err){
            return res.status(401).json({success:false,
                message:"Token is invalid"})
        }
        req.user =user
        next()
    })
}
export const verifyUser =(req,res,next)=>{
    verifyToken(req,res,next,()=>{
        if(req.user.id === req.params.id || req.user.role==='admin'){
            next()
        }else{
           return res.status(401).json({
                success:false,
                message:'you are not authenticated'
            })
        }
    });

};

export const verifyAdmin =(req,res,next)=>{
    verifyToken(req,res,next,()=>{
        if(req.user.id === req.params.id || req.user.role==='admin'){
            next()
        }else{
           return res.status(401).json({
                success:false,
                message:'you are not authorized'
            })
        }
    });

};