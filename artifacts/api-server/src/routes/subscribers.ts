import { Router, type IRouter } from "express";
import { db } from "@workspace/db";
import { subscribersTable, insertSubscriberSchema } from "@workspace/db";

const router: IRouter = Router();

router.post("/subscribers", async (req, res) => {
  const parsed = insertSubscriberSchema.safeParse(req.body);

  if (!parsed.success) {
    res.status(400).json({ message: "Invalid email address" });
    return;
  }

  try {
    await db.insert(subscribersTable).values({ email: parsed.data.email });
    res.status(201).json({ message: "Subscribed successfully" });
  } catch (error: any) {
    if (error?.code === "23505") {
      res.status(409).json({ message: "Email already subscribed" });
      return;
    }
    throw error;
  }
});

export default router;
