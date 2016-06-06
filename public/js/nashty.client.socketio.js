var socket = io('http://localhost:3000');
var $clientMsg = $('.msg.sent');
var $adminMsg =$('.msg.received');
var $textMsg = $('#nash-message');
var $sendBtn = $('#nash-sendbtn');

socket.emit('new client', {role: 'client', site: $('#company').val()});

socket.on('client joined', function (data) {
    console.log('Client joined', data);
});