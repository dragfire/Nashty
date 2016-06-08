var socket = io('http://localhost:3000');
var $clientMsg = $('.msg.sent');
var $nashContent = $('.nash-content');
var $adminMsg = $('.msg.received');
var $textMsg = $('#nash-message');
var $sendBtn = $('#nash-sendbtn');

socket.emit('new client', {role: 'client', site: $('#company').val()});

socket.on('client joined', function (data) {
    console.log('Client joined', data);
});

$sendBtn.click(function () {
    console.log('client:new message', {text: $textMsg.val()});
    $nashContent.append('<div class="msg received">' + escape($textMsg.val()) + '</div><div class="clear"></div>');
    socket.emit('client:new message', {text: $textMsg.val()});
});

socket.on('admin:message created', function (data) {
    console.log('admin:message created', data);
    $nashContent.append('<div class="msg sent">' + escape(data.text) + '</div><div class="clear"></div>');
});