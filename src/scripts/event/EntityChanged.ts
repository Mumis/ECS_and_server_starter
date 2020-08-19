import { Entity } from '../Entities/Entity';

export class EntityChanged {
    public constructor(
        public readonly entity: Entity
    ) {}
}
