const errorhandler = (err, req, res, next) => {
    console.error(err);
    res.status(err.status || 500).json({ error: err.message || 'Error en el servidor' });
};

module.exports = errorhandler;

