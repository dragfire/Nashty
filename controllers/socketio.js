var debug = require('debug')('Nashty: Socket IO');

var sio = function (io) {
    io.on('connection', function (socket) {
        debug(socket.id);
        //debug(socket.adapter.rooms);

        // Role: Client
        socket.on('new user', function (data) {
            debug(JSON.stringify(data, null,2));
            socket.join(data.site);
            io.in(data.site).emit('user joined', data);
        });

        socket.on('join admin', function (data) {
            socket.join(data.site);
            io.in(data.site).emit('admin joined', data);
        });
    });
};

module.exports = sio;