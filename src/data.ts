import { MenuItem } from "./types";

export const BAR_INFO = {
  name: "ANNA",
  tagline: "BAR & COZY SPACE",
  description: "大阪府松原市の高見の里に佇む、大人のための隠れ家バー。厳選されたウイスキー、季節を表現した一杯のカクテル、そして心がほどける温かいフード。日常の喧騒から少し離れて、上質なひとときをお過ごしください。お一人様でも、大切な方とでも、いつでも心地よくお迎えいたします。",
  address: "大阪府松原市高見の里４－５－３１ー３０３",
  access: "近鉄南大阪線「高見ノ里駅」から徒歩約5分",
  hours: "19:00 - 02:00",
  closed: "毎週水曜日 (Wednesday)",
  phone: "072-XXX-XXXX", // Placeholder for actual contact
  galleryImages: [
    {
      id: "interior",
      url: "/src/assets/images/anna_bar_interior_1783993778499.jpg",
      title: "落ち着きのあるカウンター席",
      desc: "温かみのあるスポットライトとシックな黒いボトル棚が調和する、極上の空間です。"
    },
    {
      id: "cocktail",
      url: "/src/assets/images/anna_cocktail_1783993791698.jpg",
      title: "こだわりのオリジナルカクテル",
      desc: "お好みやその日の気分に合わせて、バーテンダーが一杯ずつ丁寧にお作りします。"
    },
    {
      id: "ajillo",
      url: "/src/assets/images/anna_ajillo_1783993803086.jpg",
      title: "本日のガーリックオイル煮",
      desc: "アツアツのオイルに素材の旨味が溶け込んだ、お酒が進む特製アヒージョです。"
    }
  ]
};

export const CURATED_MENU: MenuItem[] = [
  {
    id: "yamazaki-hakushu",
    name: "Yamazaki / Hakushu Single Malt Whiskey",
    japaneseName: "シングルモルト 山崎 / 白州",
    category: "drink",
    price: 1000,
    description: "世界に誇る日本のシングルモルト。華やかで上品な甘みと、深い余韻をロックやハイボールで。",
    subText: "ロック / 水割り / ソーダ"
  },
  {
    id: "special-cocktail",
    name: "Chef's Special Cocktail",
    japaneseName: "おまかせカクテル",
    category: "drink",
    price: 700,
    description: "お客様のお好みのフレーバーや気分、ベースに合わせて即興で仕立てる、あなただけの一杯。",
    subText: "価格：¥700 〜 ¥1,200 (テイストにより調整)",
    image: "/src/assets/images/anna_cocktail_1783993791698.jpg"
  },
  {
    id: "sapporo-classic",
    name: "Sapporo Classic Beer",
    japaneseName: "サッポロクラシック",
    category: "drink",
    price: 700,
    description: "麦芽100%の深いコクと、爽やかなのどごし。お酒好きから愛される、贅沢な一杯です。",
    subText: "瓶ビール"
  },
  {
    id: "ajillo",
    name: "Today's Garlic Oil Ajillo",
    japaneseName: "本日のガーリックオイル煮",
    category: "food",
    price: 500,
    description: "ぷりぷりのエビや旬の食材を香ばしいガーリックオイルで。バケット付き(追加 ¥100)でどうぞ。",
    subText: "価格：¥500 〜 (仕入れ状況により変動)",
    image: "/src/assets/images/anna_ajillo_1783993803086.jpg"
  },
  {
    id: "sausages",
    name: "3-Sausage Assortment",
    japaneseName: "3種ソーセージ盛り合わせ",
    category: "food",
    price: 600,
    description: "パリッとジューシーに焼き上げた異なる味わいのソーセージ3種。ビールやハイボールに最適です。"
  },
  {
    id: "gateau-chocolat",
    name: "Aoi's Gateau Chocolat",
    japaneseName: "葵ちゃんのガトーショコラ",
    category: "food",
    price: 450,
    description: "しっとり濃厚でビターなチョコレート風味。甘すぎず、ウイスキーやブランデーとも相性抜群。"
  }
];
