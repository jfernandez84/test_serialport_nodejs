const socket = io();

socket.on('coordenadas', function (data) {
    console.log(data);
    let coord = document.getElementById('coordenadas');
    coord.innerHTML = `${data}`;
});