import { faker } from "@faker-js/faker";

export const dummyData: Record<string, any>[] = [...Array(30).keys()].map(
  () => ({
    id: faker.string.uuid(),
    name: faker.internet.userName(),
    email: faker.internet.email(),
  })
);
