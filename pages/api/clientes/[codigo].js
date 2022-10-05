export default function handler(req, res) {
   const codigo = req.query.codigo;
   res.status(200).json({
      id: `${codigo}`,
      nome: `Pedro Victor ${codigo}`,
      email: `pedrovi2390@icloud.com ${codigo}`
   })
}