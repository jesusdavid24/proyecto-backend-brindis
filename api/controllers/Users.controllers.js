const UserRepository = require("../persistence/repositories/User.repository");
const userRepository = new UserRepository();

class UserController {

    async findAll(req, res) {
        try {
            let users = await userRepository.findAll();
            res.status(200).json(users);
        } catch (error) {
            console.error(error);
            res.status(500).json(error.message);
        }
    }
    async findById(req, res) {
        debugger
        let idUser = req.params.idUser;
        let user = await userRepository.findById(idUser);

        if (user)
            res.send(user);
        else
            res.status(404).send(`Usuario ${iduser} no encontrado`);
    }
    async create(req, res) {
        try {
            let user = req.body;
            console.log(user)
            if (user._id || user._id === "") {
                delete user._id;
            }
            let userGuardado = await userRepository.create(user);
            res.send(userGuardado);
        } catch (error) {
            console.error(error);
            res.status(500).json(error.message);
        }
    }
    async update(req, res) {
        let user = req.body;
        try {
            let userGuardado = await userRepository.update(user)
            res.status(200).json(userGuardado);
        } catch (error) {
            console.error(error);
            res.status(500).json(error.message);
        }
    }
    async delete(req, res) {
        try {
            let idUser = req.params.idUser;
            await userRepository.delete(idUser);
            res.status(200).json(`Usuario ${idUser} eliminado`);
        } catch (error) {
            console.error(error);
            res.status(500).json(error.message);
        }
    }
    async Login(req, res) {
        try {
            let email = req.body.email;
            let password = req.body.password;
            let user = await userRepository.login(email, password);
            res.status(200).json(user);
        } catch (error) {
            console.error(error);
            res.status(500).json(error.message);
        }
    }
}
module.exports = UserController;