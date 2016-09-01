var express = require('express');
var router = express.Router();
var models = require('../models');

// 属性分组--集合查询
router.get('/group/list', function (req, res) {
    models.AttributeGroup.findAll().then(function (groups) {
        res.json({output: groups, success: true, message: ''});
    }).catch(function (error) {
        res.json({success: false, message: error.message});
    });
});

// 属性分组--新增
router.post('/group/add', function (req, res) {
    models.AttributeGroup.create({
        name: req.body.name,
        enable: req.body.enable
    }).then(function (group) {
        res.json({output: group, success: true, message: '新建分组成功！'});
    }).catch(function (error) {
        res.json({success: false, message: error.message});
    });
});

// 属性分组--信息查看
router.get('/group/view/:id', function (req, res) {
    models.AttributeGroup.findById(req.params.id).then(function(group) {
		res.json({output: group, success: true});
	}).catch(function(error) {
		res.json({success: false, message: error.message});
	});
});

// 属性分组--修改
router.post('/group/update/:id', function (req, res) {
    models.AttributeGroup.update(req.body, {
		where: {
			id: req.params.id
		}
	}).then(function() {
		res.json({success: true});
	}).catch(function(error) {
		res.json({success: false, message: error.message});
	});
});

// 属性分组--删除
router.get('/group/delete/:id', function (req, res, next) {
    models.AttributeGroup.destroy({
		where: {
			id: req.params.id
		}
	}).then(function() {
		res.json({success: true});
	}).catch(function(error) {
		next(error);
	});
});

// 属性--根据分组查询
router.get('/list/:group', function (req, res, next) {
    models.Attribute.findAll({
		where: {
			aa: req.params.group
		}
	}).then(function(list) {
		res.json({output: list, success: true});
	}).catch(function(error) {
		next(error);
	});
});

// 属性--新增
router.post('/add', function (req, res, next) {
    models.Attribute.create(req.body).then(function(data) {
		res.json({output: data, success: true});
	}).catch(function(error) {
		next(error);
	});
});

// 属性--详细查询
router.get('/view/:id', function (req, res, next) {
    models.Attribute.findById(req.params.id).then(function(data) {
		res.json({output: data, success: true});
	}).catch(function(error) {
		next(error);
	});
});

// 属性--修改
router.get('/update/:id', function (req, res, next) {
    models.Attribute.update(req.body, {
		where: {
			id: req.params.id
		}
	}).then(function() {
		res.json({success: true});
	}).catch(function(error) {
		next(error);
	});
});

// 属性--删除
router.get('/delete/:id', function (req, res, next) {
    models.Attribute.destroy({
		where: {
			id: req.params.id
		}
	}).then(function() {
		res.json({success: true});
	}).catch(function(error) {
		next(error);
	});
});

module.exports = router;