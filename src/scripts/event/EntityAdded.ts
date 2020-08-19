import { Entity } from '../Entities/Entity';

export class EntityAdded {
    public constructor(
        public readonly entity: Entity
    ) {}
}
