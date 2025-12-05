import { Injectable } from '@nestjs/common';

@Injectable()
export class PropertyService {
  getProperties(property: { id: number; name: string }[]) {
    return property;
  }

  getProperty(property: { id: number; name: string }[], id: number) {
    return property.find((pro) => pro.id === id);
  }

  createProperty(
    property: { id: number; name: string }[],
    Body: { name: string },
  ) {
    const newProperty = {
      id: property.length + 1,
      name: Body.name,
    };
    property.push(newProperty);
    return newProperty;
  }
}
