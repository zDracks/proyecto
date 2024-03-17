import { Colors } from "discord.js";

const settings = {
  TOKEN: process.env.TOKEN || "MTIxODc1MzIyNjc3MDIxOTA4OA.GsYl2-.2jQBMfQFfGxJCjtK8EkF7VnK9zm_8cQoZYN9RM",
  PREFIX: "n!",
  Owners: ["OwnersId", "OwnersId"],
  Slash: {
    Global: true,
    GuildID: process.env.GuildID || "Guild_Id",
  },
  embed: {
    color: Colors.Blurple,
    wrongColor: Colors.Red,
  },
  emoji: {
    success: "✅",
    error: "❌",
  },
};

export default settings;
