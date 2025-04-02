import { createClient } from "@supabase/supabase-js";
const supabasetoken = process.env.SUPABASE_KEY;
const supabase = createClient(
  "https://rlretgpxqtgzsjuhqjwu.supabase.co",
  `${supabasetoken}`,
);
export default defineEventHandler(async (event) => {
  setHeader(event, "Content-Type", "text/text");
  try {
    const { data, error } = await supabase
      .from("info")
      .select("*")
      .eq("type", "announce")
      .maybeSingle();
    if (error) {
      throw new Error(error.message);
    }
    return data.data;
  } catch (e) {
    console.log(e);
    return {
      data: "Server Side Error.",
    };
  }
});
