var debug = require('debug')('Nashty:SIO');
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
            clients[room].push(user);
            io.in(data.site).emit('client joined', {clients: clients[room]});
            debug('Clients', clients);
        });

        socket.on('client:new message', function (data) {
            debug('client:new message', data);
            io.in(room).emit('client:message created', data);
        });

        socket.on('room:refresh status', function (data) {
            debug('room:refresh status', data);
            socket.emit('room:got refresh status', {admins: admins[data.room], clients: clients[data.room]});
        });

        // Role: Admin
        socket.on('join admin', function (data) {
            if (!admins[room]) admins[room] = [];
            var user = {};
            user[socket.id] = {occupied: false};
            socket.join(data.site);
            admins[room].push(user);
            io.in(data.site).emit('admin joined', {admins: admins[room]});
            debug('Admins', admins);
        });

        socket.on('admin:new message', function (data) {
            debug('admin:new message', data);
            if(data.sid) {
                socket.setBroadcast.to(data.sid).emit('admin:message created', data);
            } else {
                io.in(room).emit('admin:message created', data);
            }
        });
        
        

        //Handle Socket Disconnections
        socket.on('disconnect', function () {
            debug('Disconnecting', socket.id);
            if (findRemove(clients[room], socket.id)) {
                debug('Client left', clients[room]);
                io.in(room).emit('client left', {clients: clients[room]});
                socket.leave(room);
            } else if (findRemove(admins[room], socket.id)) {
                debug('Admin left', admins[room]);
                io.in(room).emit('admin left', {admins: admins[room]});
                socket.leave(room);
            }
            debug('Disconn::Admins', admins);
            debug('Disconn::Clients', clients);
        });
    });
};

var findRemove = function (jsonArray, value) {
    if (jsonArray) {
        for (var i = 0; i < jsonArray.length; i++) {
            if (Object.keys(jsonArray[i])[0] === value) {
                jsonArray.splice(i, 1);
                return true;
            }
        }
        return false;
    } else {
        return false;
    }
};

module.exports = sio;
