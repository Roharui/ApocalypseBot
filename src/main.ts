// Importing Client and Intents class from Harmony
import "https://deno.land/x/dotenv/load.ts";
import { Client, Intents } from "@/deps.ts";

const client = new Client();

client.on("ready", () => {
  console.log("Ready!");
});

// Learn more at https://deno.land/manual/examples/module_metadata#concepts
if (import.meta.main) {
  client.connect(Deno.env.get("DISCORD_TOKEN"), Intents.None);
}
