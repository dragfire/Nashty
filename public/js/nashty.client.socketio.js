var socket = io('http://localhost:3000');
var $clientMsg = $('.msg.sent');
var $nashContent = $('.nash-content');
var $adminMsg = $('.msg.received');
var $textMsg = $('#nash-message');
var $sendBtn = $('#nash-sendbtn');
var $adminSid = $('#admin-sid');
var $msgBoardText = $('.msgboard > #msg');

socket.emit('new client', {role: 'client', site: $('#company').val()});

socket.on('client joined', function (data) {
    console.log('Client joined', data);
});

socket.on('client:assign admin', function (data) {
    console.log("client:assign admin", data);
    $adminSid.val(data.sid);
    socket.emit('client:got admin', data);
});

$sendBtn.click(function () {
    console.log('client:new message', {sid: $adminSid.val(), text: $textMsg.val()});
    
    $nashContent.append('<div class="msg sent">' + $textMsg.val() + '</div><div class="clear"></div>');
    if ($adminSid.val()) {
        $msgBoardText.text('Admin Socket ID: ' + $adminSid.val());
        socket.emit('client:new message', {sid: $adminSid.val(), text: $textMsg.val()});
    } else {
        $msgBoardText.text('Unable to determine Admin Socket ID');
    }
});

socket.on('admin:message created', function (data) {
    console.log('admin:message created', data);
    $nashContent.append('<div class="msg received">' + data.text + '</div><div class="clear"></div>');
});