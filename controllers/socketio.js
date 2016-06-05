var debug = require('debug')('Nashty: Socket IO');

var sio = function (io) {
    io.on('connection', function (socket) {
        debug(socket.id, socket.headers);
        socket.on('new user', function (data) {
            debug(data);
            socket.join('test');
            socket.broadcast.to('test').emit('user joined', data);
        });
    });
};

module.exports = sio;