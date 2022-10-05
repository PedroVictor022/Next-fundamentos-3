export default function handler(req, res) {
   res.status(200).json({
      name: "Testando API",
      method: req.method,
      params: JSON.stringify(req.query)
   })
}