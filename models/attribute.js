'use strict';
module.exports = function (sequelize, DataTypes) {
    var Attribute = sequelize.define('Attribute', {
        code: DataTypes.STRING,
        name: DataTypes.STRING,
        dataType: DataTypes.STRING,
        value: DataTypes.STRING,
        category: DataTypes.STRING,
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