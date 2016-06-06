var socket = io('http://localhost:3000');

socket.emit('join admin', {role: 'admin', site: 'hayum'});

socket.on('admin joined', function (data) {
    console.log('Admin joined', data);
});
