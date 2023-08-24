module.exports = {
    async chatSocket(req, res) {
        res.json({message: "socket ON"})
        console.log("chegou no chatSocket...")
        
        //     const { messagem } = req.body;
        //     const {Server}= require("../server")
        //     const server = new Server();
        //     const io = server.initializeSocket
        // if (messagem) {
        //   io.emit("message", messagem); 
        //   res.status(200).json({ success: true, message: "Messagem enviada." });
        // } else {
        //   res.status(400).json({ success: false, message: "Falta mensagem." });
        // };
    }};