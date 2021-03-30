import { assertEquals } from "testing/asserts.ts";
import { SolarModuleValidator } from "validators/mod.ts";

Deno.test("SolarModuleValidator", async () => {
  const solarModuleValidator = new SolarModuleValidator();

  const result = await solarModuleValidator.validate({});

  const EXPECTED_NUMBER_OF_ERRORS = 16;
  assertEquals(result.passes, false);
  assertEquals(Object.keys(result.errors).length, EXPECTED_NUMBER_OF_ERRORS);
});
