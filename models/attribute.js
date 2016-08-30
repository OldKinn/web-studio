'use strict';
module.exports = function (sequelize, DataTypes) {
    var Attribute = sequelize.define('Attribute', {
        name: DataTypes.STRING,
        value: DataTypes.STRING,
        type: DataTypes.STRING,
        remark: DataTypes.STRING
    }, {
        classMethods: {
            associate: function (models) {
                Attribute.belongsTo(models.AttributeGroup);
            }
        }
    });
    return Attribute;
};