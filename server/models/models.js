const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.INTEGER},
    rolde: {type: DataTypes.STRING, defaultValue: 'user'}
});

const Tracked = sequelize.define('tracked', {
   id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
});

const TrackedAchivment = sequelize.define('tracked_achivment', {
   id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
});

const Achivment = sequelize.define('achivment', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
    get: {type: DataTypes.STRING, allowNull: false},
    category: {type: DataTypes.STRING, allowNull: false},
    reward: {type: DataTypes.STRING, allowNull: false},
    rating: {type: DataTypes.INTEGER, defaultValue: 0},
});

const Rating = sequelize.define('rating', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.INTEGER, allowNull: false}
});

User.hasOne(Tracked);
Tracked.belongsTo(User);

User.hasMany(Rating);
Rating.belongsTo(User);

Tracked.hasMany(TrackedAchivment);
TrackedAchivment.belongsTo(Tracked);

TrackedAchivment.hasOne(Achivment);
Achivment.belongsTo(TrackedAchivment);

Achivment.hasMany(Rating);
Rating.belongsTo(Achivment);