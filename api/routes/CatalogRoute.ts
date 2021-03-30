import { Router, Context } from "oak/mod.ts";
import { EnergyMeterDataAccess } from "repositories/mod.ts";
import { Values } from "repositories/mod.ts";

export const InversorView = new Router();

InversorView.post("/inversor", async (context: Context) => {
  const dataAccess = new EnergyMeterDataAccess();
  await dataAccess.create((context.request.body as unknown) as Values);
  context.response.status = 201;
});

const getInversor = async ({
  params,
  response,
}: {
  params: { id: string };
  response: any;
}) => {
  const dataAccess = new EnergyMeterDataAccess();
  response.body = await dataAccess.get(parseInt(params.id));
  console.log(response.body);
  response.status = 200;
};

InversorView.get("/inversor/:id", getInversor);
