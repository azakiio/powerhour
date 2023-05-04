import { redirect } from "@remix-run/node";

export const loader = async () => {
  throw redirect("/page/0", 302);
};
