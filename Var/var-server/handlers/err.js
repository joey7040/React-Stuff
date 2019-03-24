function errorHandler(error, request, response, next){
    return response.status(error.status || 500).json({
        error:{
            message: error.message || "Opa, thats not going as planed.."
        }
    })
}

module.exports = errorHandler;