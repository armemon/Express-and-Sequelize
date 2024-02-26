module.exports = ( Sequelize, DataTypes) =>{
    const User = Sequelize.define("User", {
        firstName:{
            type: DataTypes.STRING,
            allowedNull: false,
            validate:{
                notEmpty:true
            }
        },
        age:{
            type: DataTypes.INTEGER,
            allowedNull: false,
            validate:{
                notEmpty:true
            }
        } 
    })
    return User

}