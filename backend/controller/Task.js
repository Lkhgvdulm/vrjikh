const Task = require('../models/Task');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../middleware/myError');

exports.getTask = catchAsync(async(req, res) => {
    const task = await Task.find();
    res.status(200).json ({
        success: true,
        data: task,
    });
});
exports.createTask = catchAsync(async (req, res, next) => {
    try {
        const { name } = req.body;
        const Task_create  = new Task({
            name: name,
        });
        const data = await Task_create.save();
        res.status(200).json({
            success: true,
            data: data,
        });
    } catch (err) {
        next(err);
        console.log(err);
    }
});
exports.editTask = catchAsync(async(req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        const task = await Task.findById(id);
        if(name) {
            task.name = name;
        }
        if(orders) {
            task.orders = orders;
        }
        if(newAvatar) {
            task.avatar = avatar[0].path;
        } else {
            task.avatar = avatarOld;
        }
        const saveTask_images = await Task.save();
        if(saveTask_images) {
            res.json({
                success: true,
            });
        }
    } catch (err) {
        console.log(err);
        res.json({
            success: true,
        });
    }
});
exports.deleteTask = catchAsync(async (req, res, next) => {
    const { id } = req.params;
    const task  = await Task.findByIdAndDelete(id);
    if(!task) {
        return next(new AppError('fails, 400'));
    }
    res.status(200).json ({
        success: true,
        data: task,
    });
});