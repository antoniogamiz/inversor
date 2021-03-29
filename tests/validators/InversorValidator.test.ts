import { assertEquals } from "testing/asserts.ts";
import { InversorValidator } from "validators/mod.ts";

Deno.test("InversorValidator", async () => {
  const inversorValidator = new InversorValidator();

  const result = await inversorValidator.validate({});

  const EXPECTED_NUMBER_OF_ERRORS = 10;
  assertEquals(result.passes, false);
  assertEquals(Object.keys(result.errors).length, EXPECTED_NUMBER_OF_ERRORS);
});
