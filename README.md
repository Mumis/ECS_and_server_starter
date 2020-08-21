# Three.js ECS starter

Kick of your three.js game with this boilerplate! It has everything you need to start working on your game without worrying about what happens in the backround, while also leaving room for improvements if needed.

**1. Clone Project**
 
    $ git clone https://github.com/Mumis/three.js-ces_and_server_starter.git
    
**2. Install dependencies**

You will need to install dependencies for client and server separately.
In project directory: 

    $ npm install
then, navigate to the server folder:

    $ cd server
    $ npm install
**3. Development**

To start development, navigate to project folder and run:

    $ npm start
    
  then, navigate to server folder:

    $ npm start

Game is now running on `localhost:1234`!

See the examples on how components, entities and systems are structured in their respective folders. New entities and systems are added in index.ts, or dynamically with:

    Game.addEntity(new Entity());
    Game.addSystem(new System());
    
Or removed with: 

    Game.removeEntity(Entity);
    
**4. Upgrade!**

This is a starter, it's meant so you can start developing a game fast without the setting up part. It's not meant to be the most efficient or best in any way. I encourage you to make changes or optimizations that are better or fits your game better :)

## Learning

For learning three.js, head over to the [docs](https://threejs.org/docs/). There's also great examples of what you can do in three.js [here](https://threejs.org/examples).

Maybe you want to make a multiplayer game? Check out socketio's ["get started"](https://socket.io/get-started/chat/) or the [docs](https://socket.io/docs/).

For typescript, check out the [handbook](https://www.typescriptlang.org/docs/).
