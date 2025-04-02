import { createClient } from "@supabase/supabase-js";
const supabasetoken = process.env.SUPABASE_KEY;
const supabase = createClient(
  "https://rlretgpxqtgzsjuhqjwu.supabase.co",
  `${supabasetoken}`,
);
export default defineEventHandler(async (event) => {
  setHeader(event, "Content-Type", "appication/json");
  try {
    const { data, error } = await supabase
      .from("hackclubimages")
      .select("*");
     console.log(data);
    return {
      data: data,
    };
  } catch (e) {
    console.log(e);
    return {
      data: "Server Side Error.",
    };
  }
});
