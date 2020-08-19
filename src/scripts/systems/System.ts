import { Entity } from '../Entities/Entity';
import { Game } from '../Game/Game';

export class System {
    protected readonly filteredEntities: Entity[] = []

    public addEntity(entity: Entity) {
        this.filteredEntities.push(entity);
    }

    public removeEntity(entity: Entity) {
        const index = this.filteredEntities.indexOf(entity);
        this.filteredEntities.splice(index, 1);
    }

    public appliesTo(entity: Entity): boolean {
        return false;
    }

    public initialize(game: Game): void {
        // Intentionally left empty
    }

    public update(dt: number, game: Game): void {
        throw new Error('Not implemented');
    }
}
