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
    res.json({success: true});
});

// 属性分组--修改
router.post('/group/update/:id', function (req, res) {
    res.json({success: true});
});

// 属性分组--删除
router.get('/group/delete/:id', function (req, res) {
    res.json({success: true});
});

// 属性--根据分组查询
router.get('/list/:group', function (req, res) {
    res.json({success: true});
});

// 属性--新增
router.post('/add', function (req, res) {
    res.json({success: true});
});

// 属性--详细查询
router.get('/view/:id', function (req, res) {
    res.json({success: true});
});

// 属性--修改
router.get('/update/:id', function (req, res) {
    res.json({success: true});
});

// 属性--删除
router.get('/delete/:id', function (req, res) {
    res.json({success: true});
});

module.exports = router;