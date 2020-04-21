const UserSchema = require("../schemas/User.schema");

class UserRepository{
    async findAll(){
        let users=await UserSchema.find();
        return users;
    }

    async findById(idUser){
        let user = await UserSchema.findOne({_id: idUser});
        return user;
	}

	async login(email, password){
		let user = await UserSchema.findOne({Email:email});
		if(user.Password == password)
			return user;
		else
			return null;
    }

    async create(user){
        user = new UserSchema(user);
        let userGuardado = await user.save();
        return userGuardado;
    }

    async delete (idUser){
        let user= await this.findById(idUser);
        if(idUser){
            await user.remove();
        }else{
            throw Error(`El usuario ${idUser} no existe`);
        }
    }

    async update(userEdited){
        let user = await this.findById(userEdited._id);
        if(user){
			user.Email = userEdited.Email;
			user.Password = userEdited.Password;
            return await user.save();
        }else{
            throw Error(`El usuario ${idUser} no existe`);
        }
    }
}

module.exports = UserRepository;