import { assertThrowsAsync } from "testing/asserts.ts";
import { EnergyMeterDataAccess } from "repositories/mod.ts";

Deno.test("Validates before saving", async () => {
  await assertThrowsAsync(async () => {
    const repository = new EnergyMeterDataAccess();
    await repository.create({
      brand: "f",
      model: "f",
      description: "d",
      provider: "",
      discount: 1,
      pvp: 1,
      price: 1,
    });
  });
});
