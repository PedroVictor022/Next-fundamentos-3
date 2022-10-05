export default function handler(req, res) {
   if (req.method === "GET") {
      handleGet(req, res);
   } else {
      res.status(405).send("Arquivo nao enviado");
   }
   function handleGet(req, res) {
      res.status(200).json({
         id: 1,
         name: "Maria",
         email: "maria234@gmail.com"
      })
   }
}


