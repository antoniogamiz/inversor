import { assertEquals } from "testing/asserts.ts";
import { EnergyMeterValidator } from "validators/mod.ts";

Deno.test("EnergyMeterValidator", async () => {
  const energyMeterValidator = new EnergyMeterValidator();

  const result = await energyMeterValidator.validate({});

  const EXPECTED_NUMBER_OF_ERRORS_PLUS_STATUS = 8;
  assertEquals(result.passes, false);
  assertEquals(
    Object.keys(result).length,
    EXPECTED_NUMBER_OF_ERRORS_PLUS_STATUS
  );
});
