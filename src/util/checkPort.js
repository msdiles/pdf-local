import * as net from 'net';

const ports = [];
const MIN_PORT = 1024;
const MAX_PORT = 49151;

const generateNewPort = function() {
    const newPort = Math.floor(Math.random() * (MAX_PORT - MIN_PORT + 1)) + MIN_PORT;
    return ports.includes(newPort) ? generateNewPort() : newPort;
};

const checkPortHandler = function(isAvailable,resolve) {
    if (isAvailable) {
        return resolve(ports[ports.length - 1]);
    } else {
        return resolve(checkPort(generateNewPort()));
    }
};

const checkPort = function(port) {
    return new Promise(res => {
        ports.push(port);
        const server = net.createServer(function(socket) {
            socket.write('Echo server\r\n');
            socket.pipe(socket);
        });

        server.listen(port, '127.0.0.1');
        server.on('error', function() {
            return checkPortHandler(false,res);
        });
        server.on('listening', function() {
            server.close();
            return checkPortHandler(true,res);
        });
    });
};

export default checkPort;
