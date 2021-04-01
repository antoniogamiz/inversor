import { assertEquals } from "testing/asserts.ts";
import { InverterValidator } from "validators/mod.ts";

Deno.test("InverterValidator", async () => {
  const inverterValidator = new InverterValidator();

  const result = await inverterValidator.validate({});

  const EXPECTED_NUMBER_OF_ERRORS = 11;
  assertEquals(result.passes, false);
  assertEquals(Object.keys(result.errors).length, EXPECTED_NUMBER_OF_ERRORS);
});
