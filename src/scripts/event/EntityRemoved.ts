import { Entity } from '../Entities/Entity';

export class EntityRemoved {
    public constructor(
        public readonly entity: Entity
    ) {}
}
