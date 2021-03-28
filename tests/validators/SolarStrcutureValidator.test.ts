import { assertEquals } from "testing/asserts.ts";
import { SolarStructureValidator } from "validators/mod.ts";

Deno.test("SolarStructureValidator", async () => {
  const solarStructureValidator = new SolarStructureValidator();

  const result = await solarStructureValidator.validate({});

  const EXPECTED_NUMBER_OF_ERRORS_PLUS_STATUS = 11;
  assertEquals(result.passes, false);
  assertEquals(
    Object.keys(result).length,
    EXPECTED_NUMBER_OF_ERRORS_PLUS_STATUS
  );
});
