const errorLogger = (err, req, res, next) => {
    //Se puede enviar el error a un archivo de texto
    console.log(err.message)
    next(err)
}

module.exports = errorLogger