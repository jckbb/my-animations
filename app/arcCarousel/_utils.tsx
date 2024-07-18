import { faker } from "@faker-js/faker";

const dummyList: Record<string, any>[] = [...Array(30).keys()].map(() => ({
  id: faker.string.uuid(),
  name: faker.internet.userName(),
  color: faker.internet.color(),
}));

// Insert start and end for spacing
export const dummyData = [{ id: "start" }, ...dummyList, { id: "end" }];
