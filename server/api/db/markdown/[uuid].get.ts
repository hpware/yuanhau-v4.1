import { createClient } from "@supabase/supabase-js";
const supabasetoken = process.env.SUPABASE_KEY;
const supabase = createClient(
  "https://rlretgpxqtgzsjuhqjwu.supabase.co",
  `${supabasetoken}`,
);

export default defineEventHandler(async (event) => {
  const uuid = getRouterParam(event, "uuid");
  event.node.res.setHeader("Content-Type", "text/markdown; charset=utf-8");
  if (event.node.req.method === "GET" && uuid !== null) {
    try {
      const { data, error } = await supabase
        .from("md")
        .select("content")
        .eq("uuid", `${uuid}`)
        .single();
      if (error || data === null) {
        return {
          statusCode: 403,
          message: "No Content",
        };
      }
      return `${data.content}`;
    } catch (e) {
      console.log("error", e);
      return `
      # Server error or Content not found
      # 伺服器錯誤 或 檔案不存在`
    }
  } else {
    return `
    # Content not found 
    # 檔案不存在`
  }
});
