import User from "../models/User";

class UserController{
    async store(req, res){
        const existingUser = await User.findOne({
            where: { email: req.body.email },
        });

        if(existingUser){
            return res.status(400).json({ error: 'Usuário já cadastrado.' });
        }

        const { id, name, email} = await User.create(req.body);

        return res.json({
            id,
            name,
            email
        });
    }

    async update(req, res){        
        return res.json({ok: true});
    }
}

export default new UserController();