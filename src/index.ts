import './index.scss';
import socketio from 'socket.io-client';
import { RenderSystem } from './scripts/systems/RenderSystem';
import { Game } from './scripts/game/Game';
import { ExampleSystem } from './scripts/systems/ExampleSystem';
import { ExampleEntity } from './scripts/entities/ExampleEntity';

const systems = [ // Add more systems here.
    new ExampleSystem(), 
];

const entities = [ // Add more entities here.
    new ExampleEntity(),
];

document.getElementById('connect').addEventListener('click', () => {

    const address = document.getElementById('address') as HTMLInputElement;

    const io = socketio(address.value)

    document.body.innerHTML = '';

    const renderSystem = new RenderSystem();
    const game = new Game(renderSystem.renderer, io);

    
    game.addSystem(renderSystem);

    for (const system of systems) {
        game.addSystem(system);
    }

    for (const entity of entities) {
        game.addEntity(entity)
    }
    
    game.start();

});

document.getElementById('singleplayer').addEventListener('click', () => {

    const io = socketio('localhost:8000');

    document.body.innerHTML = '';

    const renderSystem = new RenderSystem();
    const game = new Game(renderSystem.renderer, io);

    game.addSystem(renderSystem);

    for (const system of systems) {
        game.addSystem(system);
    }

    for (const entity of entities) {
        game.addEntity(entity)
    }

    
    game.start();

});