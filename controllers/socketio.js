var debug = require('debug')('Nashty: Socket IO');
var clients;
var admins;
var sio = function (io) {
    var room = 'hayum';
    clients = {};
    admins = {};
    io.on('connection', function (socket) {
        debug(socket.id);
        var user = {}
        // Role: Client
        socket.on('new client', function (data) {
            if (!clients[room]) clients[room] = [];
            user[socket.id] = {occupied: false};
            debug(JSON.stringify(data, null, 2));
            socket.join(data.site);
            io.in(data.site).emit('client joined', data);
            clients[room].push(user);
            debug('Clients', clients);
        });

        // Role: Admin
        socket.on('join admin', function (data) {
            if (!admins[room]) admins[room] = [];
            var user = {};
            user[socket.id] = {occupied: false};
            socket.join(data.site);
            io.in(data.site).emit('admin joined', data);
            admins[room].push(user);
            debug('Admins', admins);
        });

        //Handle Socket Disconnections
        socket.on('disconnect', function () {
            debug('Disconnecting', socket.id);
            if (findRemove(clients[room], socket.id)) {
                debug('Client left', socket.id);
                io.in(room).emit('client left', socket.id);
                socket.leave(room);
            } else if (findRemove(admins[room], socket.id)) {
                debug('Admin left', socket.id);
                io.in(room).emit('admin left', socket.id);
                socket.leave(room);
            }
            debug('Disconn::Admins', admins);
            debug('Disconn::Clients', clients);
        });
    });
};

var findRemove = function (jsonArray, value) {
    if (jsonArray) {
        jsonArray.forEach(function (obj, idx, arr) {
            if (Object.keys(obj)[0] === value) {
                debug('Object Deleted', obj);
                jsonArray.splice(idx, 1);
                return true;
            }
        });
    }
    return false;
};

module.exports = sio;