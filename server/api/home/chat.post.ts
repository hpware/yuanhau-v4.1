import Groq from "groq-sdk"
import { Mistral } from "@mistralai/mistralai";

interface body{
  content: string,
  accesstoken: string,
}

// MISTRAL
/*
const agentID = process.env.NUXT_MISTRAL_MODEL_ID ?? "";

const mistral = new Mistral({
  apiKey: process.env["MISTRAL_API_KEY"] ?? "",
});


export default defineEventHandler(async (event) => {
    console.log(agentID);
    const body = await readBody(event);
    const content = await body.content || "";
      const result = await mistral.agents.complete({
        messages: [
          {
            content: `User: ${content}, if the content is empty, respond, there might be an issue with the API.`,
            role: "user",
          },
        ],
        agentId: agentID,
      });
      const answer = await result?.choices
      return {
        result: answer,
      } 
})
*/
// GROQ
const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export default defineEventHandler(async (event) => {
    const body: body = await readBody(event);
    const content = body.content || ""; // Simplified this - no need for await
    
    try {
        // Handle empty content case
        if (!content.trim()) {
            return {
                result: "Please provide a message to chat with me about Howard Wu.",
                body: body
            };
        }
        
        const chatCompletion = await groq.chat.completions.create({
            "messages": [
                {
                    "role": "system",
                    "content": `Talk to the user about who is 吳元皓 aka Howard Wu aka Yuan-Hau Wu, 
Data 1:  嗨! 我是一個五專生，我對攝影與前端(與後端)方面有興趣。習慣並熟悉使用 VueJS, Git & Debian(Ubuntu)Developer
Data 2:
關於我嗨~ 我是吳元皓，我現在是一個五專生。我的成績沒有怎樣，但我的強項為英文我認為英文 不等於 Coding，但一定有好處的分數排名: 英文 > 社會 > 自然 > 數學 > 國文你可以連絡我的方式有：Email: hw@yuanhau.comDiscord: @hwtw網站： yuanhau.com 或 舊版的網站Signal: yuanhau.01經歷Web小時候是我就喜歡用電腦，但我當時一點程式都不會寫。我2020年時剛開始想要並使用自己的Wordpress的部落格 hwweb.i234.me ，但Synology 不讓我把Wordpress放在 Website Root裡面，所以我決定要改預設的檔案來讓使用者到部落格。最近我在Github上發現在我的舊帳號上有一個備份 Git Repo 舊 lander當時的我沒有放入 "a" 的標籤，所以不是HyperLink，我當時也沒想太多就繼續使用著。但我在這一年內增加了許多VueJS, CSS 與 Typescript 的知識，讓我在下一年更有信心可以在學 ReactJS 和 SvelteJS。Python我也在國中一年級時開始學習Python，這個也是我想學的語言，但我教學影片只看但10％的地方就放棄了。黑歷史: 舊py程式我也之後大多數都忘記了，連 if else每次都要查一下，因為我比較習慣用 JavaScript 的方式 if {} else if {} else {}。IT我在2019年時，發現2018年買的NAS可以放虛擬機器，剛開始只是跑 Windows7 而已，但一段時間後我發現Linux，我也開始學一點Debain Cli(Ubuntu)來安裝服務。主要學習的是 Nginx， Nginx 是一個比較 Flexible 的 Web Server，最近也開始學一點 PHP 主要為簡單的 外掛也終於學會如何安裝 PHP 與 Nginx，但我還是不會用 Composer。我也對 Windows Server IIS 也有一點經驗，主要的原因是我在 Windows Server 2022 IIS 10.0 上讓我的爛網站跑起來，但最後還是跑回 Vercel 了。找 BugZeroday (HITCON)這個平台為一個 Threads 上有人建議我舉報 Bug 的平台。檢定通GEPT 初級 (2021)中級聽讀 (2022)TOEIC Listening & Writing Score: 745 (2023)我想學的程式語言Vue Python mySQL Svelte React TypescriptLinux

Data 3: 
Hi, I'm a Taiwanese student currently studying Computer stuff. Like Ubuntu & Coding Swift & Javascript

Data 4:
Hi. I'm Howard(吳元皓), currently a Taiwanese first grade high school student (which is second grade in the US for some reason). I'm kinda a software developer, I mostly work on Javascript projects, or as most people call it "Web Projects", I mostly work on websites, like my peronal website that has four (.1) verisons. However I recently want to move out of cloud resoures like Github, and stuff that I (I mean my parents) bought and paid for. I also use docker way too much (or Debian), it is kinda my thing as I used the software since around 2019, and relying on stack overflow for English answers, instead of Chinese ones, and I think this is what brought me here, me wanting to be a software developer. To building awesome software for people everywhere, however I'm still currently learning on a few languages, like Expo, Typescript, and some basic C, thats kinda it. Also I can't get stripe for some reason, so I'm using Paypal instead, if you want to donate to me, feel free to, here is the link: https://yhw.tw/paypal . Also if you are in the hack club slack, feel free to @ me, my user account is @howard, I will maybe reply when I'm free, the plaforms below is where I interact the most, mostly uses Instagram to watch a bunch of shit posts, and I waste too much time doing so, also this readme is wasting so much time, I spent at least 10 mins writing this stupid profile readme.You can learn more about me here: https://yuanhau.com/ Here are some plaforms where you can try to contact me, I will maybe respond within a week: Email: hw@yuanhau.com Discord: @hwtw Signal: yuanhau.01 Instagram: yhw_tw

使用中文，並不準用簡體字
If the user uses English, use English to respond, if the user uses chinese use 繁體中文 to answer.`
                },
                {
                    "role": "user",
                    "content": content
                }
            ],
            "model": "llama-3.3-70b-versatile",
            "temperature": 0.46,
            "max_completion_tokens": 1024,
            "top_p": 1,
            "stream": false,
            "stop": null
        });
        
        return {
            result: chatCompletion.choices[0].message.content,
            body: body
        };
    } catch (e) {
        console.error("Error in chat API:", e);
        return {
            result: "Sorry, there was an error processing your request. Please try again later.",
            body: body,
            error: e.message
        };
    }
})