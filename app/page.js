import React from "react";
import JokeCard from "@/components/JokeCard";

const datas = [
   {
      id: 0,
      cover: "http://localhost:3000/cover0.png",
      title: "大汉刻录机和纽芬兰扩散离开地面离开",
      content:
         "四大皆空你们仨看来魔法师的空间里加密了的时间防护能力考核女粉丝哦看来嘉年华发撒和你聊空间代码能力考试jam了能否撒旦克里夫你流口水u的分数不够JFK还能",
   },
   {
      id: 1,
      cover: "http://localhost:3000/cover1.jpg",
      title: "四的空间魔法坡路和安慰i了很多不耐烦了",
      content:
         "而的人无法取出哟文科类防毒面具请勿刷屏的水泥颗粒分明今年看了电视剧方面就你不是搭建开发能力的时间可能没法了你收到了发明了喀麦隆和覅是打开链接马拉松发你还是独立开发能力考试速度那么快弗里曼就撒开了放电脑设备接口类你反抗拉萨撒旦克莱德曼金克拉红豆饭立刻反击能力考试的",
   },
   {
      id: 2,
      cover: "http://localhost:3000/cover2.png",
      title: "是的扩散裂缝的吗水电煤缴费了撒旦",
      content:
         "师傅带你看世界美女离开啥都没发生的还是大家快乐和你疯啦肯定是服了你的时刻了那可是的法律你们疯了是数百年的房间里妇女老师的拉伸北京东方萨拉吧十大黑科技你卡死本赛季的客服那边就卡死的半年卡是你的看得开把奶粉事件的看法呢卡巴的方式就卡死难看不能撒娇可能被卡比兽饭卡手机百科",
   },
   {
      id: 3,
      cover: "http://localhost:3000/cover4.png",
      title: "防水等级没到离开，是的胶囊咖啡机难免经历时间的",
      content: "的身份和你就立刻什么反馈貌似打开了房门开了看是否能雷电",
   },
   {
      id: 4,
      cover: "http://localhost:3000/cover5.png",
      title: "第三部分你尽快落地你们受苦了烦恼是快乐的农夫买了",
      content:
         "岁的妇女Wald喀麦隆放手的那克罗诺夫圣诞快乐你父母卡拉马里可能随时独立发明了萨勒夫那少的可怜你放开啦零点十分难看了诺福克六三法鲁克那就开发商六年放得开了哇能否考虑三健康的还不能靠近",
   },
   {
      id: 5,
      cover: "http://localhost:3000/cover6.png",
      title: "三大法宝就开始，吗",
      content:
         "岁的妇女介绍了你们付款了上的覅不会介意的课是邪恶的从法国v好吧打死不肯回家方便卡死鼠标点击扣费诺拉卡",
   },
   {
      id: 6,
      cover: "http://localhost:3000/cover7.png",
      title: "是的被害人佛教和那我懂了没电视看了免费配送",
      content:
         "安慰的是妇女节快乐你们俩我岁的妇女急啊离开送你到家咯三零客机的你们俩而后王瑞刚和人比u搞不好SAB卡机",
   },
   {
      id: 7,
      cover: "http://localhost:3000/cover8.png",
      title: "打扫房间卫生的理念发链接啊",
      content:
         "的商贩健康的晚饭离开发到你是垃圾开发能力卡部分大家还是别恐惧愤怒我的快乐简单说客服那里看备份数据库的奶粉事件看法边防军卡电脑进来看反馈放多久能恢复拉卡拉部分京东卡室内空间反击发布的可能就是打开",
   },
   {
      id: 8,
      cover: "http://localhost:3000/cover9.png",
      title: "答复你哭了吗打开了能否简单拉开房门开了你发了看到什么福利开始开发马拉松的美丽",
      content:
         "的散发负能量卡吗，了的粉丝们就是看啦啦啦打击你时空几何分布能看见洒汗水的就是开饭啦看到的话你就咖啡你回家看见了和你讲道理的萨芬你来鹅黄色不耐烦啦方便大家ask了解",
   },
   {
      id: 9,
      cover: "",
      title: "第三个方面了，和你说的弗兰克孟加拉",
      content:
         "的身份你看了哇什么，丰富的你萨克利夫那就是看来那里的看是否离开麦克雷你的手机开发你发了库萨克你的粉丝索拉卡附近哪里吗",
   },
];
export default function Home() {
   return (
      <React.Fragment>
         <div className=" flex h-96 w-full items-center justify-center bg-gradient-to-br from-blue-300 via-yellow-100 to-lime-300 text-7xl font-bold text-white">
            <div className=" rounded-lg bg-white/10 px-10 py-14 backdrop-blur-md backdrop-brightness-125">
               <div className="space-x-20 bg-gradient-to-r from-pink-300 to-sky-300 bg-clip-text text-transparent">
                  <label>梗</label>
                  <label>的</label>
                  <label>世</label>
                  <label>界</label>
               </div>
            </div>
         </div>
         <div className=" grid grid-cols-3 gap-10 px-5 pt-10">
            {datas.map((data) => (
               <div key={data.id}>
                  <JokeCard data={data} />
               </div>
            ))}
         </div>
      </React.Fragment>
   );
}
