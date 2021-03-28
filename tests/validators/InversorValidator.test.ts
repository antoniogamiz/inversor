import { assertEquals } from "testing/asserts.ts";
import { InversorValidator } from "validators/mod.ts";

Deno.test("EnergyMeterValidator", async () => {
  const inversorValidator = new InversorValidator();

  const result = await inversorValidator.validate({});

  const EXPECTED_NUMBER_OF_ERRORS_PLUS_STATUS = 11;
  assertEquals(result.passes, false);
  assertEquals(
    Object.keys(result).length,
    EXPECTED_NUMBER_OF_ERRORS_PLUS_STATUS
  );
});
