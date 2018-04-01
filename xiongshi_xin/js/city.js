var vCity ={
  "": "不限",
    "KLU": "基隆",
    "TPE": "台北(松山/桃園機場)",
    "TAO": "桃園",
    "HCU": "新竹",
    "MLI": "苗栗",
    "TCH": "台中",
    "CHA": "彰化",
    "NTO": "南投",
    "YLI": "雲林",
    "CYI": "嘉義",
    "TNN": "台南",
    "KHH": "高雄",
    "PIN": "屏東",
    "YLN": "宜蘭",
    "HLN": "花蓮",
    "TTT": "台東",
    "KNH": "金門"
}
var vLine ={"_1":"美洲","_2":"大洋洲","_3":"歐洲","_4":"亞非","_5":"大陸港澳","_6":"東北亞","_7":"東南亞","_9":"台灣"};

var vLinewebarea ={
  "_A_1": {
    "_": "不限",
    "_01": "洛杉磯",
    "_05": "夏威夷",
    "_02": "舊金山",
    "_08": "阿拉斯加",
    "_07": "西雅圖",
    "_S8": "北美洲",
    "_N1": "美國"
  },
  "_C_1": {
    "_": "不限",
    "_10": "多倫多",
    "_04": "紐約",
    "_00": "芝加哥",
    "_Z1": "休士頓"
  },
  "_F_1": {
    "_": "不限",
    "_91": "帛琉",
    "_92": "關島",
    "_70": "馬爾地夫"
  },
  "_D_1": {
    "_": "不限",
    "_C1": "阿拉斯加郵輪",
    "_C6": "美墨郵輪"
  },
  "_B_1": {
    "_": "不限",
    "_09": "溫哥華",
    "_10": "多倫多",
    "_00": "芝加哥",
    "_07": "西雅圖",
    "_N2": "加拿大"
  },
  "_E_1": {
    "_": "不限",
    "_S9": "南美洲",
    "_S7": "中美洲"
  },
  "_A_2": {
    "_": "不限",
    "_11": "雪梨",
    "_15": "黃金海岸",
    "_17": "凱恩斯",
    "_1C": "雪梨、墨爾本",
    "_1D": "雪梨、黃金海岸",
    "_1A": "東澳全覽",
    "_16": "柏斯",
    "_18": "艾爾斯岩",
    "_1G": "澳洲"
  },
  "_B_2": {
    "_": "不限",
    "_19": "紐西蘭北島",
    "_20": "紐西蘭南島",
    "_1B": "紐西蘭南北島全覽"
  },
  "_C_2": {
    "_": "不限",
    "_C7": "澳紐、大洋洲郵輪"
  },
  "_E_2": {
    "_": "不限",
    "_1E": "大溪地",
    "_1F": "斐濟",
    "_3J": "新喀里多尼亞"
  },
  "_A_3": {
    "_": "不限",
    "_21": "中西歐多國",
    "_25": "法國",
    "_26": "英國、愛爾蘭",
    "_28": "德國",
    "_35": "瑞士",
    "_34": "荷蘭",
    "_29": "奧地利",
    "_3B": "德國、奧地利",
    "_3C": "英國、法國",
    "_3E": "英荷比法",
    "_2K": "南法普羅旺斯",
    "_2X": "德國、瑞士",
    "_2Y": "荷德比法",
    "_2Z": "荷比法"
  },
  "_B_3": {
    "_": "不限",
    "_22": "東歐多國",
    "_30": "捷克",
    "_31": "俄羅斯",
    "_2B": "保加利亞",
    "_2E": "波蘭",
    "_3B": "德國、奧地利",
    "_2F": "克羅埃西亞",
    "_2R": "奧地利、捷克",
    "_2S": "奧捷斯匈"
  },
  "_C_3": {
    "_": "不限",
    "_27": "義大利",
    "_2C": "葡萄牙",
    "_32": "西班牙",
    "_3A": "法瑞義",
    "_33": "希臘"
  },
  "_D_3": {
    "_": "不限",
    "_23": "北歐多國",
    "_2N": "北歐冰島"
  },
  "_E_3": {
    "_": "不限",
    "_C3": "地中海郵輪",
    "_C4": "北歐郵輪"
  },
  "_A_4": {
    "_": "不限",
    "_41": "埃及",
    "_43": "南非",
    "_M3": "模里西斯",
    "_44": "摩洛哥",
    "_3I": "塞席爾",
    "_39": "肯亞"
  },
  "_B_4": {
    "_": "不限",
    "_86": "印度",
    "_87": "尼泊爾",
    "_90": "不丹",
    "_88": "斯里蘭卡"
  },
  "_C_4": {
    "_": "不限",
    "_42": "土耳其",
    "_40": "杜拜、阿布達比",
    "_38": "伊朗"
  },
  "_D_4": {
    "_": "不限",
    "_3L": "烏茲別克",
    "_37": "中亞五國"
  },
  "_A_5": {
    "_": "不限",
    "_50": "北京、天津",
    "_51": "上海",
    "_52": "江南",
    "_CY": "江西、南昌",
    "_FE": "北京",
    "_53": "福建、武夷山",
    "_54": "山東",
    "_5A": "山西、寧夏",
    "_55": "廣西、桂林、南寧",
    "_ZZ": "哈爾濱",
    "_59": "絲路、甘肅",
    "_65": "西安、河南",
    "_56": "四川、九寨溝",
    "_57": "雲南、昆大麗",
    "_61": "西藏、青海",
    "_58": "貴州、黃果樹",
    "_63": "東北三省",
    "_67": "廣東",
    "_62": "重慶、長江三峽",
    "_64": "安徽、黃山",
    "_68": "湖南、湖北、張家界",
    "_69": "海南島",
    "_60": "內蒙、外蒙",
    "_CX": "南疆、北疆",
    "_B1": "昆明"
  },
  "_B_5": {
    "_": "不限",
    "_48": "香港",
    "_49": "澳門、深圳珠海",
    "_FB": "澳門"
  },
  "_C_5": {
    "_": "不限",
    "_CE": "麗星郵輪"
  },
  "_A_6": {
    "_": "不限",
    "_A1": "東京",
    "_A2": "大阪",
    "_A3": "北陸名古屋",
    "_K3": "二世谷",
    "_K6": "苗場",
    "_A5": "九州",
    "_J0": "福岡",
    "_K7": "野澤",
    "_A6": "東北",
    "_K8": "志賀",
    "_A7": "北海道",
    "_KC": "白馬",
    "_N4": "名古屋自由行",
    "_P1": "輕井澤",
    "_A9": "四國、中國地區",
    "_P2": "草津",
    "_KF": "邱比特",
    "_KG": "ALTS盤梯",
    "_P3": "藏王",
    "_P7": "上越國際",
    "_P4": "田澤湖",
    "_P5": "安比",
    "_KK": "雫石",
    "_99": "日本全覽",
    "_A0": "信州長野、群馬"
  },
  "_B_6": {
    "_": "不限",
    "_A4": "沖繩",
    "_J1": "石垣島"
  },
  "_C_6": {
    "_": "不限",
    "_93": "首爾",
    "_95": "濟州島",
    "_94": "釜山慶州",
    "_J6": "釜山",
    "_CH": "韓國"
  },
  "_D_6": {
    "_": "不限",
    "_C8": "亞洲郵輪",
    "_CE": "麗星郵輪"
  },
  "_A_7": {
    "_": "不限",
    "_71": "曼谷",
    "_7E": "蘇梅島",
    "_72": "普吉島",
    "_73": "清邁",
    "_7A": "華欣",
    "_7B": "芭達雅",
    "_M4": "泰國"
  },
  "_B_7": {
    "_": "不限",
    "_74": "吉隆坡",
    "_75": "檳城",
    "_76": "沙巴",
    "_77": "新加坡",
    "_78": "民丹島",
    "_M5": "馬來西亞",
    "_7D": "古晉",
    "_M1": "珍拉汀灣"
  },
  "_C_7": {
    "_": "不限",
    "_79": "峇里島",
    "_7F": "巴淡島"
  },
  "_E_7": {
    "_": "不限",
    "_81": "菲律賓",
    "_82": "柬埔寨",
    "_83": "越南"
  },
  "_F_7": {
    "_": "不限",
    "_C8": "亞洲郵輪",
    "_CE": "麗星郵輪"
  },
  "_51_9": {
    "_": "不限",
    "_AA": "台北",
    "_AC": "宜蘭",
    "_AZ": "環島"
  },
  "_52_9": {
    "_": "不限",
    "_AD": "桃園",
    "_AE": "新竹",
    "_AF": "苗栗"
  },
  "_53_9": {
    "_": "不限",
    "_AG": "台中",
    "_AH": "彰化",
    "_AI": "南投"
  },
  "_54_9": {
    "_": "不限",
    "_AJ": "雲林",
    "_AK": "嘉義",
    "_AL": "台南"
  },
  "_55_9": {
    "_": "不限",
    "_AM": "高雄",
    "_AN": "屏東"
  },
  "_56_9": {
    "_": "不限",
    "_AO": "花蓮",
    "_AP": "台東",
    "_AZ": "環島"
  },
  "_57_9": {
    "_": "不限",
    "_AR": "綠島",
    "_AS": "澎湖",
    "_AT": "金門",
    "_AU": "馬祖"
  }
};

var vLinetravel={
  "_1": {
    "_": "不限",
    "_A_1": "美國",
    "_C_1": "美東",
    "_F_1": "太平洋小島",
    "_D_1": "美洲遊輪",
    "_B_1": "加拿大",
    "_E_1": "中南美洲"
  },
  "_2": {
    "_": "不限",
    "_A_2": "澳洲",
    "_B_2": "紐西蘭",
    "_C_2": "紐澳",
    "_E_2": "大洋洲島國"
  },
  "_3": {
    "_": "不限",
    "_A_3": "中西歐",
    "_B_3": "東歐",
    "_C_3": "南歐",
    "_D_3": "北歐",
    "_E_3": "歐洲遊輪"
  },
  "_4": {
    "_": "不限",
    "_A_4": "非洲",
    "_B_4": "南亞",
    "_C_4": "中東",
    "_D_4": "中亞"
  },
  "_5": {
    "_": "不限",
    "_A_5": "大陸",
    "_B_5": "港澳珠圳",
    "_C_5": "大陸港澳郵輪"
  },
  "_6": {
    "_": "不限",
    "_A_6": "日本",
    "_B_6": "沖繩",
    "_C_6": "韓國",
    "_D_6": "東北亞遊輪"
  },
  "_7": {
    "_": "不限",
    "_A_7": "泰國",
    "_B_7": "馬新",
    "_C_7": "印尼",
    "_E_7": "菲高棉越南",
    "_F_7": "東南亞遊輪"
  },
  "_9": {
    "_": "不限",
    "_51_9": "北基宜",
    "_52_9": "桃竹苗",
    "_53_9": "中彰投",
    "_54_9": "雲嘉南",
    "_55_9": "高屏",
    "_56_9": "花東",
    "_57_9": "澎金馬蘭綠離島"
  }
};
