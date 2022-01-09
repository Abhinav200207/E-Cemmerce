module.exports = (asyncfun) => (req,res,next) => {
    Promise.resolve(asyncfun(req,res,next)).catch(next)
}