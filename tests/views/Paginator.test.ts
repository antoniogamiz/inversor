import { assertEquals } from "testing/asserts.ts";
import { Paginator } from "views/Paginator.ts";

Deno.test("First page should not have prev link", () => {
  const options = { offset: 0, limit: 25 };
  const paginator = new Paginator<unknown>(options, 100, "", []);

  const newPaginationOptions = paginator._calculatePrevOffsetAndLimit();

  assertEquals(newPaginationOptions, null);
});

Deno.test("Second page should have prev link", () => {
  const options = { offset: 25, limit: 25 };
  const paginator = new Paginator<unknown>(options, 100, "", []);

  const newPaginationOptions = paginator._calculatePrevOffsetAndLimit();

  assertEquals(newPaginationOptions, { offset: 0, limit: 25 });
});

Deno.test(
  "Beginning page with offset less than limit should not have prev link",
  () => {
    const options = { offset: 20, limit: 25 };
    const paginator = new Paginator<unknown>(options, 100, "", []);

    const newPaginationOptions = paginator._calculatePrevOffsetAndLimit();

    assertEquals(newPaginationOptions, null);
  }
);

Deno.test("First page should have next link", () => {
  const options = { offset: 0, limit: 25 };
  const paginator = new Paginator<unknown>(options, 100, "", []);

  const newPaginationOptions = paginator._calculateNextOffsetAndLimit();

  assertEquals(newPaginationOptions, { offset: 25, limit: 25 });
});

Deno.test("Last page should not have next link", () => {
  const options = { offset: 75, limit: 25 };
  const paginator = new Paginator<unknown>(options, 100, "", []);

  const newPaginationOptions = paginator._calculateNextOffsetAndLimit();

  assertEquals(newPaginationOptions, null);
});

Deno.test(
  "Last page should not have next link (total < offset + limit)",
  () => {
    const options = { offset: 77, limit: 25 };
    const paginator = new Paginator<unknown>(options, 100, "", []);

    const newPaginationOptions = paginator._calculateNextOffsetAndLimit();

    assertEquals(newPaginationOptions, null);
  }
);
