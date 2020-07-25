exports.add = (req, res) => {
  console.log(`requisicao: ${req}`)
  const first = Number(req.query.first)
  const second = Number(req.query.second)
  const sum = first + second
  return res.status(200).json(sum)
}
exports.sub = (req, res) => {

}
exports.mul = (req, res) => {

}
exports.div = (req, res) => {

}
