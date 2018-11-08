var socket = io()

socket.on('connect', function () {
    console.log('Connected to server')

    socket.emit('createMessage', {
        from: 'Mike',
        text: 'Hey! This is text'
    })
})

socket.on('disconnect', function () {
    console.log('Disconnected from server')
})

socket.on('newMessage', function (message) {
    console.log('New Message: ', message)
})
