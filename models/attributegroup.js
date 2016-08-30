'use strict';
module.exports = function (sequelize, DataTypes) {
    var AttributeGroup = sequelize.define('AttributeGroup', {
        name: DataTypes.STRING,
        enable: DataTypes.BOOLEAN
    }, {
        classMethods: {
            associate: function (models) {
                AttributeGroup.hasMany(models.Attribute);
            }
        }
    });
    return AttributeGroup;
};