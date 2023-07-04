exports.createPostValidator=(req,res,next)=>{
    // the req.check method takes two parameters;THE ITEM BEING CHECKED AND THE ERROR MESSSAGE TO BE DISPLAYED ,  It may also take another checker, to check for length or if the field is empty or not

    // title error checker
    req.check('title',"Write a title").notEmpty()
    req.check('title', "Title must be between 4 and 150 chrts").isLength({
        min:4,
        max:150
    })
    // body error checker
    req.check('body',"Write a body").notEmpty()
    req.check('body', "Body must be between 4 and 2000 chrts").isLength({
        min:4,
        max:2000
    })
    //check ifor errors
     const errors=req.validationErrors()
    if(errors){
      const firstError=errors.map((error)=>error.msg)[0]
      return res.status(404).json({error:firstError})
    }

    next();

}