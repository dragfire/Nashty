var socket = io('http://localhost:3000');
var $clientMsg = $('.msg.sent');
var $adminMsg =$('.msg.received');
var $textMsg = $('#nash-message');
var $sendBtn = $('#nash-sendbtn');

socket.emit('new user', {role: 'client', site: $('#company').val()});

socket.on('user joined', function (data) {
    console.log('user joined', data);
});