module.exports = async (req, res, next) => {
  try {
    
    // Check if request body is empty 
    if(!Object.keys(req.body).length) throw "empty request";

    else next();

  } catch (error) {

    res.status(401).json({
        status:"error",
        error,
    });

  }
  
};