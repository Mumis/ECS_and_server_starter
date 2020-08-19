import {
    Object3D,
    Scene,
    WebGLRenderer,
    VSMShadowMap,
} from 'three';
import { Entity } from '../Entities/Entity';    
import { EntityRemoved } from '../Event/EntityRemoved';
import { Game } from '../Game/Game';
import { System } from './System';

export class RenderSystem extends System {
    public readonly renderer: WebGLRenderer;

    private readonly scene: Scene;

    public constructor() {
        super();

        const { innerHeight, innerWidth } = window;

        const scene = new Scene();

        const renderer = new WebGLRenderer();
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = VSMShadowMap;
        renderer.setClearColor(0x5D95A9);
        renderer.setSize(innerWidth, innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        document.body.appendChild(renderer.domElement);

        this.scene = scene;
        this.renderer = renderer;
    }
    
    public appliesTo(entity: Entity): boolean {
        return entity.hasComponent(Object3D);
    }

    public removeEntity(entity: Entity): void {
        const index = this.filteredEntities.indexOf(entity);
        this.filteredEntities.splice(index, 1);
        const object = entity.getComponent(Object3D);
        this.scene.remove(object);
    }

    public update(dt: number, game: Game): void {
        for (const entity of this.filteredEntities) {
            const object = entity.getComponent(Object3D);

            this.scene.add(object);
        }

        this.renderer.render(this.scene, game.camera);
    }
}
