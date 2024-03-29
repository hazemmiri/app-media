const User = require("../models/User.model");
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

exports.signup = (req, res) => {
  const data = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    password: bcrypt.hashSync (req.body.password , 10),
    bio: req.body.bio,
    picture: req.body.picture,
    birthdate: req.body.birthdate,
  };

  const _user = new User(data);

  _user
    .save()
    .then((createUser) => {
      res.status(200).json({ message: "User added successfully ..." });
    })
    .catch((err) => {
      res.status(400).json({ message: "Problrm while adding the user ..." });
    });
};












exports.signin = async (req , res) => {

      const { email , password} = req.body;

      const user = await User.findOne({ email : email})

    if (!user){
      return res.status(400).json({message: "Email Invalid ..." })
    }

    bcrypt.compare(password , user.password ).then(

      (isMatch) => {
        if(isMatch == false) { // false
          return res.status(400).json({message: "Wrong password ..." })
        }else{ // true


          //gen token 
          const token = jwt.sign(
            { data : { id : user._id , role : user.role } },
            process.env.CLE,
            {expiresIn : '5h'}
            )

            return res.status(200).json(
              {
                message: "success ..." ,
                token : token,
                user : user
              })






        }
      }


    )


}
