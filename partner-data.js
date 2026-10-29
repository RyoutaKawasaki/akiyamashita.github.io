/*
  1km PARTNER MAP 更新用ファイル

  更新方法：
  1. 担当が決まったkmへ掲載名を入力します。
     名前だけの場合：1: "山田 太郎",
     リンク付きの場合：1: { name: "山田 太郎", url: "https://example.com/" },
  2. updatedを更新日へ変更します。
  3. このファイルを上書きアップロードします。

  空欄（""）の区間は「募集中」と表示されます。

  PARTNER ISLAND 更新方法：
  1. sponsorIslands内の該当コースへ掲載名とリンクを追加します。
     例：challenge: [{ name: "株式会社サンプル", url: "https://example.com/" }],
  2. 複数名の場合は { name: "...", url: "..." } をカンマ区切りで追加します。
  3. 空の配列（[]）は「募集中」と表示されます。
*/
window.PARTNER_MAP_DATA = {
  updated: "2026.10.29",
  sponsorIslands: {
    challenge: [], // 30,000円 CHALLENGE PARTNER
    official: [
      { name: "米光マサヒコ", url: "https://www.instagram.com/yonemasa/" },
      { name: "藤本英矩", url: "https://the-knot.jp/" }
    ],  // 50,000円 OFFICIAL PARTNER
    main: [
      { name: "佐藤幸憲", url: "https://www.instagram.com/yukinosatori0730/" },
      { name: "佐藤杏奈", url: "https://www.instagram.com/moanna_0106?psln=MWhlZ29ubWNmbGJ3dA==" }
    ]       // 100,000円 MAIN PARTNER（限定1〜2社）
  },
  partners: {
    1: { name: "山下アキ\n株式会社さぁ行こう\nInstagram", url: "https://www.instagram.com/aki.yamashita_saaicou?xtok=d3diN21sNWh6bDV6&utm_source=qr" },
    2: { name: "山下アキ\n株式会社さぁ行こう\nアッ氣学", url: "https://youtu.be/yf1KnHLrPdk?si=2rSc2-aensWpWh89" },
    3: { name: "山下アキ\n株式会社さぁ行こう\n経営の次の一手を読む", url: "https://www.aki-yamashita.com/" },
    4: "",
    5: { name: "株式会社Moa", url: "https://moa16.co.jp/recruit/" },
    6: "",
    7: "桑島 正道\n株式会社トータルアセットパートナー",
    8: "",
    9: "",
    10: "",
    11: "松家 徹\n自動車整備",
    12: { name: "小古瀬紘子", url: "https://www.instagram.com/hiiiroo2033?exln=MTE3a3Qzem9hNHlk" },
    13: "",
    14: "",
    15: "",
    16: "",
    17: "",
    18: "",
    19: { name: "広瀬 空\n株式会社GIFT", url: "https://gift-gk.co.jp/" },
    20: "",
    21: "",
    22: "",
    23: "",
    24: "",
    25: "",
    26: { name: "ＫＡＩ　滝本早月\nＫＡＩ", url: "https://www.instagram.com/kai_createshop?exln=N29raHRxOHFpcms3&utm_source=qr" },
    27: { name: "八木真理子\nデザインで応援する人", url: "https://www.instagram.com/laughstyle_y/" },
    28: "",
    29: "",
    30: "",
    31: { name: "滝本　海\nお魚イラストレーター\nＵＭＩ", url: "https://www.instagram.com/umi_loves_drawing" },
    32: "",
    33: "",
    34: "",
    35: "",
    36: "",
    37: { name: "赤石理人\n株式会社ケアイノベート", url: "https://care-innovate.jp/recruit" },
    38: { name: "宮嵜 健\n株式会社makeact", url: "https://www.instagram.com/shake_1220?psln=aDZpNng2Mzc4N3Mx" },
    39: { name: "藤本英矩\n株式会社THE KNOT", url: "https://the-knot.jp/" },
    40: { name: "米光マサヒコ\nイラストレーター", url: "https://www.instagram.com/yonemasa/" },
    41: { name: "佐藤杏奈", url: "https://www.instagram.com/moanna_0106?psln=MWhlZ29ubWNmbGJ3dA==" },
    42: { name: "佐藤幸憲", url: "https://www.instagram.com/yukinosatori0730/" }
  }
};
