import { assertEquals } from "testing/asserts.ts";
import { LoadRegulatorValidator } from "validators/mod.ts";

Deno.test("LoadRegulatorValidator", async () => {
  const loadRegulatorValidator = new LoadRegulatorValidator();

  const result = await loadRegulatorValidator.validate({});

  const EXPECTED_NUMBER_OF_ERRORS = 14;
  assertEquals(result.passes, false);
  assertEquals(Object.keys(result.errors).length, EXPECTED_NUMBER_OF_ERRORS);
});
