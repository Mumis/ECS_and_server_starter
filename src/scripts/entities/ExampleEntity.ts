import { BoxGeometry, Mesh, MeshBasicMaterial} from 'three';
import { Entity } from './Entity';
import { ExampleComponent } from '../components/ExampleComponent'

export class ExampleEntity extends Entity {
    public constructor() {
        super();

        // Creating an object with three.js.

        const width = 0.8;
        const height = 1.9;
        const depth = 0.8;

        const geometry = new BoxGeometry(width, height, depth);
        const material = new MeshBasicMaterial({color: 0xff00ff});

        const mesh = new Mesh(geometry, material); // Mesh extends object3D, which is needed if it's gonna be added to the scene.

        mesh.position.set(0, 0, -10);

        this.addComponents( // Add components to adjust which systems applies to this entity.
            mesh,
            new ExampleComponent(0.01)
        );
    }
}
