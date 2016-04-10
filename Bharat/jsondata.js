
var json = [
{
  id :"1",
  name :" Bhrahma",
  data :{
    gender :"male",
    father :"0",
    groups :"Bhagvan",
  },
  "adjacencies" : [
    {
      "nodeTo":"393",
      "data" :{
          "nodeToName":'Son of bhrama',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["1", "393"],
      },
    },]
},
{
  id :"393",
  name :" Son of bhrama",
  data :{
    gender :"male",
    father :"1",
  },
  "adjacencies" : [
    {
      "nodeTo":"2",
      "data" :{
          "nodeToName":'Atri',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["393", "2"],
      },
    },
    {
      "nodeTo":"3",
      "data" :{
          "nodeToName":'Pulatsya',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["393", "3"],
      },
    },
    {
      "nodeTo":"4",
      "data" :{
          "nodeToName":'Kratu',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["393", "4"],
      },
    },
    {
      "nodeTo":"5",
      "data" :{
          "nodeToName":'pulah',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["393", "5"],
      },
    },
    {
      "nodeTo":"6",
      "data" :{
          "nodeToName":'angira',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["393", "6"],
      },
    },
    {
      "nodeTo":"7",
      "data" :{
          "nodeToName":'marichi',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["393", "7"],
      },
    },
    {
      "nodeTo":"8",
      "data" :{
          "nodeToName":'daksh',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["393", "8"],
      },
    },
    {
      "nodeTo":"10",
      "data" :{
          "nodeToName":'dharm',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["393", "10"],
      },
    },
    {
      "nodeTo":"11",
      "data" :{
          "nodeToName":'bhrugu',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["393", "11"],
      },
    },
    {
      "nodeTo":"13",
      "data" :{
          "nodeToName":'Dhata',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["393", "13"],
      },
    },
    {
      "nodeTo":"14",
      "data" :{
          "nodeToName":'Vidhat',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["393", "14"],
      },
    },
    {
      "nodeTo":"15",
      "data" :{
          "nodeToName":'Lakshmi',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["393", "15"],
      },
    },
    {
      "nodeTo":"23",
      "data" :{
          "nodeToName":'Sthanu',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["393", "23"],
      },
    },
    {
      "nodeTo":"370",
      "data" :{
          "nodeToName":'Vasishtha',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["393", "370"],
      },
    },
    {
      "nodeTo":"380",
      "data" :{
          "nodeToName":'Narad',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["393", "380"],
      },
    },
    {
      "nodeTo":"382",
      "data" :{
          "nodeToName":'Kardama',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["393", "382"],
      },
    },]
},
{
  id :"2",
  name :" Atri",
  data :{
    gender :"male",
    father :"393",
    groups :"Rushi,6 ManasPutra of Bhrahma",
  },
  "adjacencies" : [
    {
      "nodeTo":"9",
      "data" :{
          "nodeToName":'Soma',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["2", "9"],
      },
    },
    {
      "nodeTo":"357",
      "data" :{
          "nodeToName":'Durvasa',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["2", "357"],
      },
    },
    {
      "nodeTo":"275",
      "data" :{
          "nodeToName":'Dattatrey',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["2", "275"],
      },
    },]
},
{
  id :"9",
  name :" Soma",
  data :{
    gender :"male",
    father :"2",
  },
  "adjacencies" : []
},
{
  id :"357",
  name :" Durvasa",
  data :{
    gender :"male",
    father :"2",
    groups :"Maharshi,Muni",
  },
  "adjacencies" : []
},
{
  id :"275",
  name :" Dattatrey",
  data :{
    gender :"male",
    father :"2",
    groups :"Avatar",
  },
  "adjacencies" : []
},
{
  id :"3",
  name :" Pulatsya",
  data :{
    gender :"male",
    father :"393",
    groups :"6 ManasPutra of Bhrahma",
  },
  "adjacencies" : [
    {
      "nodeTo":"379",
      "data" :{
          "nodeToName":'Agatsya',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["3", "379"],
      },
    },
    {
      "nodeTo":"385",
      "data" :{
          "nodeToName":'Visravas',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["3", "385"],
      },
    },]
},
{
  id :"379",
  name :" Agatsya",
  data :{
    gender :"male",
    father :"3",
    groups :"Rushi,Saptarshi",
  },
  "adjacencies" : [
    {
      "nodeTo":"384",
      "data" :{
            "nodeToName":'Lopamudra',
          "$color":"#4DB6AC",
          "relation":"wife",
          "$type":"arrow",
          "$dim":10,
          "$direction":["379", "384"],
      },
    },]
},
{
  id :"385",
  name :" Visravas",
  data :{
    gender :"male",
    father :"3",
  },
  "adjacencies" : [
    {
      "nodeTo":"386",
      "data" :{
          "nodeToName":'Vibhishan',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["385", "386"],
      },
    },
    {
      "nodeTo":"387",
      "data" :{
          "nodeToName":'kuber',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["385", "387"],
      },
    },
    {
      "nodeTo":"388",
      "data" :{
          "nodeToName":'Ravan',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["385", "388"],
      },
    },
    {
      "nodeTo":"389",
      "data" :{
          "nodeToName":'Kumnhakarna',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["385", "389"],
      },
    },
    {
      "nodeTo":"390",
      "data" :{
          "nodeToName":'Surpankha',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["385", "390"],
      },
    },
    {
      "nodeTo":"391",
      "data" :{
            "nodeToName":'iLavida',
          "$color":"#4DB6AC",
          "relation":"wife",
          "$type":"arrow",
          "$dim":10,
          "$direction":["385", "391"],
      },
    },
    {
      "nodeTo":"392",
      "data" :{
            "nodeToName":'Kaikeshi',
          "$color":"#4DB6AC",
          "relation":"wife",
          "$type":"arrow",
          "$dim":10,
          "$direction":["385", "392"],
      },
    },]
},
{
  id :"386",
  name :" Vibhishan",
  data :{
    gender :"male",
    father :"385",
    mother :"392",
  },
  "adjacencies" : []
},
{
  id :"387",
  name :" kuber",
  data :{
    gender :"male",
    father :"385",
    mother :"391",
  },
  "adjacencies" : []
},
{
  id :"388",
  name :" Ravan",
  data :{
    gender :"male",
    father :"385",
    mother :"392",
  },
  "adjacencies" : []
},
{
  id :"389",
  name :" Kumnhakarna",
  data :{
    gender :"male",
    father :"385",
    mother :"392",
  },
  "adjacencies" : []
},
{
  id :"390",
  name :" Surpankha",
  data :{
    gender :"female",
    father :"385",
    mother :"392",
  },
  "adjacencies" : []
},
{
  id :"4",
  name :" Kratu",
  data :{
    gender :"male",
    father :"393",
    groups :"6 ManasPutra of Bhrahma",
  },
  "adjacencies" : [
    {
      "nodeTo":"16",
      "data" :{
          "nodeToName":'Balkhilya',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["4", "16"],
      },
    },]
},
{
  id :"16",
  name :" Balkhilya",
  data :{
    gender :"male",
    father :"4",
    groups :"Rushi",
  },
  "adjacencies" : []
},
{
  id :"5",
  name :" pulah",
  data :{
    gender :"male",
    father :"393",
    groups :"Rushi,6 ManasPutra of Bhrahma",
  },
  "adjacencies" : [
    {
      "nodeTo":"519",
      "data" :{
          "nodeToName":'Desendent of Pulah',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["5", "519"],
      },
    },]
},
{
  id :"519",
  name :" Desendent of Pulah",
  data :{
    gender :"male",
    father :"5",
  },
  "adjacencies" : [
    {
      "nodeTo":"516",
      "data" :{
          "nodeToName":'Jambuvan',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["519", "516"],
      },
    },]
},
{
  id :"516",
  name :" Jambuvan",
  data :{
    gender :"male",
    father :"519",
    title :"King of Bears, Riksharaj",
    groups :"King",
  },
  "adjacencies" : [
    {
      "nodeTo":"518",
      "data" :{
          "nodeToName":'Desendent of Ruksharaj',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["516", "518"],
      },
    },]
},
{
  id :"518",
  name :" Desendent of Ruksharaj",
  data :{
    gender :"male",
    father :"516",
    groups :"King",
  },
  "adjacencies" : [
    {
      "nodeTo":"514",
      "data" :{
          "nodeToName":'Jambavati',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["518", "514"],
      },
    },
    {
      "nodeTo":"520",
      "data" :{
          "nodeToName":'Sughariv',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["518", "520"],
      },
    },
    {
      "nodeTo":"521",
      "data" :{
          "nodeToName":'Vali',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["518", "521"],
      },
    },]
},
{
  id :"514",
  name :" Jambavati",
  data :{
    gender :"female",
    father :"518",
  },
  "adjacencies" : [
    {
      "nodeTo":"515",
      "data" :{
          "nodeToName":'Samba',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["514", "515"],
      },
    },
    {
      "nodeTo":"362",
      "data" :{
            "nodeToName":'Krushna',
          "$color":"#B2DFDB",
          "relation":"husband",
          "$type":"arrow",
          "$dim":10,
          "$direction":["514", "362"],
      },
    },]
},
{
  id :"515",
  name :" Samba",
  data :{
    gender :"male",
    father :"362",
    mother :"514",
  },
  "adjacencies" : []
},
{
  id :"520",
  name :" Sughariv",
  data :{
    gender :"male",
    father :"518",
    title :"Who Helped Ram",
  },
  "adjacencies" : []
},
{
  id :"521",
  name :" Vali",
  data :{
    gender :"male",
    father :"518",
  },
  "adjacencies" : [
    {
      "nodeTo":"522",
      "data" :{
          "nodeToName":'Angad',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["521", "522"],
      },
    },]
},
{
  id :"522",
  name :" Angad",
  data :{
    gender :"male",
    father :"521",
  },
  "adjacencies" : []
},
{
  id :"6",
  name :" angira",
  data :{
    gender :"male",
    father :"393",
    groups :"Rushi,6 ManasPutra of Bhrahma",
  },
  "adjacencies" : [
    {
      "nodeTo":"321",
      "data" :{
          "nodeToName":'Sister of bruhaspati',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["6", "321"],
      },
    },
    {
      "nodeTo":"17",
      "data" :{
          "nodeToName":'Bruhaspati',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["6", "17"],
      },
    },
    {
      "nodeTo":"18",
      "data" :{
          "nodeToName":'Utathya',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["6", "18"],
      },
    },
    {
      "nodeTo":"19",
      "data" :{
          "nodeToName":'Samavarta',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["6", "19"],
      },
    },
    {
      "nodeTo":"394",
      "data" :{
          "nodeToName":'Ghora',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["6", "394"],
      },
    },]
},
{
  id :"321",
  name :" Sister of bruhaspati",
  data :{
    gender :"female",
    father :"6",
    title :"Bhrahmvadini",
    groups :"Women scholar",
  },
  "adjacencies" : [
    {
      "nodeTo":"322",
      "data" :{
          "nodeToName":'Vishvakarma',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["321", "322"],
      },
    },
    {
      "nodeTo":"283",
      "data" :{
            "nodeToName":'Prabhas',
          "$color":"#B2DFDB",
          "relation":"husband",
          "$type":"arrow",
          "$dim":10,
          "$direction":["321", "283"],
      },
    },]
},
{
  id :"322",
  name :" Vishvakarma",
  data :{
    gender :"male",
    father :"283",
    mother :"321",
    title :"Shilpa kar",
  },
  "adjacencies" : []
},
{
  id :"17",
  name :" Bruhaspati",
  data :{
    gender :"male",
    father :"6",
    title :"Dev Guru",
    groups :"Rushi,Devarshi",
  },
  "adjacencies" : [
    {
      "nodeTo":"297",
      "data" :{
          "nodeToName":'Kach',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["17", "297"],
      },
    },]
},
{
  id :"297",
  name :" Kach",
  data :{
    gender :"male",
    father :"17",
    title :"Knower of Snajivani",
  },
  "adjacencies" : [
    {
      "nodeTo":"292",
      "data" :{
            "nodeToName":'shukracharya',
          "$color":"#FF9800",
          "relation":"guru",
          "$type":"arrow",
          "$dim":10,
          "$direction":["297", "292"],
      },
    },]
},
{
  id :"18",
  name :" Utathya",
  data :{
    gender :"male",
    father :"6",
  },
  "adjacencies" : []
},
{
  id :"19",
  name :" Samavarta",
  data :{
    gender :"male",
    father :"6",
  },
  "adjacencies" : []
},
{
  id :"394",
  name :" Ghora",
  data :{
    gender :"male",
    father :"6",
    title :"Decendant of angira",
  },
  "adjacencies" : [
    {
      "nodeTo":"368",
      "data" :{
          "nodeToName":'Kanva',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["394", "368"],
      },
    },]
},
{
  id :"368",
  name :" Kanva",
  data :{
    gender :"male",
    father :"394",
    groups :"Maharshi,kashyap Gotra",
  },
  "adjacencies" : [
    {
      "nodeTo":"369",
      "data" :{
          "nodeToName":'Aashram of Kanva',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["368", "369"],
      },
    },
    {
      "nodeTo":"35",
      "data" :{
          "nodeToName":'shakuntala',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["368", "35"],
      },
    },
    {
      "nodeTo":"369",
      "data" :{
            "nodeToName":'Aashram of Kanva',
          "$color":"#9E9E9E",
          "relation":"work",
          "$type":"arrow",
          "$dim":10,
          "$direction":["368", "369"],
      },
    },]
},
{
  id :"369",
  name :" Aashram of Kanva",
  data :{
    gender :"work",
    father :"368",
    description :"http://www.sacred-texts.com/hin/m01/m01071.htm  http://www.maharshikanvaashram.com/",
  },
  "adjacencies" : []
},
{
  id :"35",
  name :" shakuntala",
  data :{
    gender :"female",
    father :"461,368",
    mother :"485",
    title :"Brought up by Kanva rushi",
  },
  "adjacencies" : [
    {
      "nodeTo":"200",
      "data" :{
          "nodeToName":'bharat',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["35", "200"],
      },
    },
    {
      "nodeTo":"199",
      "data" :{
            "nodeToName":'dushyant',
          "$color":"#B2DFDB",
          "relation":"husband",
          "$type":"arrow",
          "$dim":10,
          "$direction":["35", "199"],
      },
    },]
},
{
  id :"200",
  name :" bharat",
  data :{
    gender :"male",
    father :"199",
    mother :"35",
    title :"Name of Bharat",
    groups :"bharat",
  },
  "adjacencies" : [
    {
      "nodeTo":"201",
      "data" :{
          "nodeToName":'bhumanyu',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["200", "201"],
      },
    },]
},
{
  id :"201",
  name :" bhumanyu",
  data :{
    gender :"male",
    father :"200",
  },
  "adjacencies" : [
    {
      "nodeTo":"202",
      "data" :{
          "nodeToName":'suhotra',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["201", "202"],
      },
    },]
},
{
  id :"202",
  name :" suhotra",
  data :{
    gender :"male",
    father :"201",
  },
  "adjacencies" : [
    {
      "nodeTo":"203",
      "data" :{
          "nodeToName":'hasti',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["202", "203"],
      },
    },]
},
{
  id :"203",
  name :" hasti",
  data :{
    gender :"male",
    father :"202",
    title :"Re-Built Hastinapur",
  },
  "adjacencies" : [
    {
      "nodeTo":"204",
      "data" :{
          "nodeToName":'vinkunthan',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["203", "204"],
      },
    },]
},
{
  id :"204",
  name :" vinkunthan",
  data :{
    gender :"male",
    father :"203",
  },
  "adjacencies" : [
    {
      "nodeTo":"205",
      "data" :{
          "nodeToName":'aajamidh',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["204", "205"],
      },
    },]
},
{
  id :"205",
  name :" aajamidh",
  data :{
    gender :"male",
    father :"204",
  },
  "adjacencies" : [
    {
      "nodeTo":"206",
      "data" :{
          "nodeToName":'samvaran',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["205", "206"],
      },
    },]
},
{
  id :"206",
  name :" samvaran",
  data :{
    gender :"male",
    father :"205",
  },
  "adjacencies" : [
    {
      "nodeTo":"207",
      "data" :{
          "nodeToName":'kuru',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["206", "207"],
      },
    },]
},
{
  id :"207",
  name :" kuru",
  data :{
    gender :"male",
    father :"206",
    title :"Built Kurukshetra",
  },
  "adjacencies" : [
    {
      "nodeTo":"208",
      "data" :{
          "nodeToName":'vidurath',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["207", "208"],
      },
    },]
},
{
  id :"208",
  name :" vidurath",
  data :{
    gender :"male",
    father :"207",
  },
  "adjacencies" : [
    {
      "nodeTo":"209",
      "data" :{
          "nodeToName":'aanashva',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["208", "209"],
      },
    },]
},
{
  id :"209",
  name :" aanashva",
  data :{
    gender :"male",
    father :"208",
  },
  "adjacencies" : [
    {
      "nodeTo":"210",
      "data" :{
          "nodeToName":'parikshit',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["209", "210"],
      },
    },]
},
{
  id :"210",
  name :" parikshit",
  data :{
    gender :"male",
    father :"209",
  },
  "adjacencies" : [
    {
      "nodeTo":"211",
      "data" :{
          "nodeToName":'bhimsen',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["210", "211"],
      },
    },]
},
{
  id :"211",
  name :" bhimsen",
  data :{
    gender :"male",
    father :"210",
  },
  "adjacencies" : [
    {
      "nodeTo":"212",
      "data" :{
          "nodeToName":'pratishrava',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["211", "212"],
      },
    },]
},
{
  id :"212",
  name :" pratishrava",
  data :{
    gender :"male",
    father :"211",
  },
  "adjacencies" : [
    {
      "nodeTo":"213",
      "data" :{
          "nodeToName":'pratip',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["212", "213"],
      },
    },]
},
{
  id :"213",
  name :" pratip",
  data :{
    gender :"male",
    father :"212",
  },
  "adjacencies" : [
    {
      "nodeTo":"214",
      "data" :{
          "nodeToName":'devapi',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["213", "214"],
      },
    },
    {
      "nodeTo":"215",
      "data" :{
          "nodeToName":'shantanu',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["213", "215"],
      },
    },
    {
      "nodeTo":"216",
      "data" :{
          "nodeToName":'bahlik',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["213", "216"],
      },
    },]
},
{
  id :"214",
  name :" devapi",
  data :{
    gender :"female",
    father :"213",
  },
  "adjacencies" : []
},
{
  id :"215",
  name :" shantanu",
  data :{
    gender :"male",
    father :"213",
  },
  "adjacencies" : [
    {
      "nodeTo":"218",
      "data" :{
          "nodeToName":'Vichitravirya',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["215", "218"],
      },
    },
    {
      "nodeTo":"220",
      "data" :{
          "nodeToName":'bhishma',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["215", "220"],
      },
    },
    {
      "nodeTo":"221",
      "data" :{
          "nodeToName":'Chitrangad',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["215", "221"],
      },
    },
    {
      "nodeTo":"217",
      "data" :{
            "nodeToName":'satyavati',
          "$color":"#4DB6AC",
          "relation":"wife",
          "$type":"arrow",
          "$dim":10,
          "$direction":["215", "217"],
      },
    },
    {
      "nodeTo":"219",
      "data" :{
            "nodeToName":'Ganga',
          "$color":"#4DB6AC",
          "relation":"wife",
          "$type":"arrow",
          "$dim":10,
          "$direction":["215", "219"],
      },
    },]
},
{
  id :"218",
  name :" Vichitravirya",
  data :{
    gender :"male",
    father :"215",
    mother :"217",
  },
  "adjacencies" : [
    {
      "nodeTo":"224",
      "data" :{
            "nodeToName":'Ambika',
          "$color":"#4DB6AC",
          "relation":"wife",
          "$type":"arrow",
          "$dim":10,
          "$direction":["218", "224"],
      },
    },
    {
      "nodeTo":"225",
      "data" :{
            "nodeToName":'Ambalika',
          "$color":"#4DB6AC",
          "relation":"wife",
          "$type":"arrow",
          "$dim":10,
          "$direction":["218", "225"],
      },
    },]
},
{
  id :"220",
  name :" bhishma",
  data :{
    gender :"male",
    father :"215",
    mother :"219",
  },
  "adjacencies" : []
},
{
  id :"221",
  name :" Chitrangad",
  data :{
    gender :"male",
    father :"215",
    mother :"217",
  },
  "adjacencies" : []
},
{
  id :"216",
  name :" bahlik",
  data :{
    gender :"male",
    father :"213",
  },
  "adjacencies" : []
},
{
  id :"7",
  name :" marichi",
  data :{
    gender :"male",
    father :"393",
    groups :"Rushi,6 ManasPutra of Bhrahma",
  },
  "adjacencies" : [
    {
      "nodeTo":"20",
      "data" :{
          "nodeToName":'kashyap',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["7", "20"],
      },
    },]
},
{
  id :"20",
  name :" kashyap",
  data :{
    gender :"male",
    father :"7",
    groups :"Rushi",
  },
  "adjacencies" : [
    {
      "nodeTo":"142",
      "data" :{
          "nodeToName":'Urukarma or Vishnu or Vaman',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["20", "142"],
      },
    },]
},
{
  id :"142",
  name :" Urukarma or Vishnu or Vaman",
  data :{
    gender :"male",
    father :"20",
    mother :"50",
    groups :"12 Aaditya,Avatar",
  },
  "adjacencies" : []
},
{
  id :"8",
  name :" daksh",
  data :{
    gender :"male",
    father :"393",
    title :"Prajapati",
    groups :"King",
  },
  "adjacencies" : [
    {
      "nodeTo":"307",
      "data" :{
          "nodeToName":'Kirti',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["8", "307"],
      },
    },
    {
      "nodeTo":"308",
      "data" :{
          "nodeToName":'Lakshmi',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["8", "308"],
      },
    },
    {
      "nodeTo":"309",
      "data" :{
          "nodeToName":'Dhruti',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["8", "309"],
      },
    },
    {
      "nodeTo":"310",
      "data" :{
          "nodeToName":'Medha',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["8", "310"],
      },
    },
    {
      "nodeTo":"311",
      "data" :{
          "nodeToName":'Pushti',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["8", "311"],
      },
    },
    {
      "nodeTo":"312",
      "data" :{
          "nodeToName":'Shraddha',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["8", "312"],
      },
    },
    {
      "nodeTo":"313",
      "data" :{
          "nodeToName":'Kriya',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["8", "313"],
      },
    },
    {
      "nodeTo":"314",
      "data" :{
          "nodeToName":'Buddhi',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["8", "314"],
      },
    },
    {
      "nodeTo":"315",
      "data" :{
          "nodeToName":'Lajja',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["8", "315"],
      },
    },
    {
      "nodeTo":"316",
      "data" :{
          "nodeToName":'Mati',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["8", "316"],
      },
    },
    {
      "nodeTo":"21",
      "data" :{
          "nodeToName":'Prachetas Daksh',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["8", "21"],
      },
    },
    {
      "nodeTo":"37",
      "data" :{
          "nodeToName":'vinata',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["8", "37"],
      },
    },
    {
      "nodeTo":"38",
      "data" :{
          "nodeToName":'kadru',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["8", "38"],
      },
    },
    {
      "nodeTo":"39",
      "data" :{
          "nodeToName":'kala',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["8", "39"],
      },
    },
    {
      "nodeTo":"40",
      "data" :{
          "nodeToName":'danayu',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["8", "40"],
      },
    },
    {
      "nodeTo":"41",
      "data" :{
          "nodeToName":'diti',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["8", "41"],
      },
    },
    {
      "nodeTo":"42",
      "data" :{
          "nodeToName":'vishva',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["8", "42"],
      },
    },
    {
      "nodeTo":"43",
      "data" :{
          "nodeToName":'kapila',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["8", "43"],
      },
    },
    {
      "nodeTo":"44",
      "data" :{
          "nodeToName":'sinhika',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["8", "44"],
      },
    },
    {
      "nodeTo":"45",
      "data" :{
          "nodeToName":'pradha',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["8", "45"],
      },
    },
    {
      "nodeTo":"46",
      "data" :{
          "nodeToName":'muni',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["8", "46"],
      },
    },
    {
      "nodeTo":"47",
      "data" :{
          "nodeToName":'krodha',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["8", "47"],
      },
    },
    {
      "nodeTo":"48",
      "data" :{
          "nodeToName":'danu',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["8", "48"],
      },
    },
    {
      "nodeTo":"49",
      "data" :{
          "nodeToName":'tamra',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["8", "49"],
      },
    },
    {
      "nodeTo":"50",
      "data" :{
          "nodeToName":'aditi',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["8", "50"],
      },
    },]
},
{
  id :"307",
  name :" Kirti",
  data :{
    gender :"female",
    father :"8",
  },
  "adjacencies" : [
    {
      "nodeTo":"10",
      "data" :{
            "nodeToName":'dharm',
          "$color":"#B2DFDB",
          "relation":"husband",
          "$type":"arrow",
          "$dim":10,
          "$direction":["307", "10"],
      },
    },]
},
{
  id :"308",
  name :" Lakshmi",
  data :{
    gender :"female",
    father :"8",
  },
  "adjacencies" : [
    {
      "nodeTo":"10",
      "data" :{
            "nodeToName":'dharm',
          "$color":"#B2DFDB",
          "relation":"husband",
          "$type":"arrow",
          "$dim":10,
          "$direction":["308", "10"],
      },
    },]
},
{
  id :"309",
  name :" Dhruti",
  data :{
    gender :"female",
    father :"8",
  },
  "adjacencies" : [
    {
      "nodeTo":"10",
      "data" :{
            "nodeToName":'dharm',
          "$color":"#B2DFDB",
          "relation":"husband",
          "$type":"arrow",
          "$dim":10,
          "$direction":["309", "10"],
      },
    },]
},
{
  id :"310",
  name :" Medha",
  data :{
    gender :"female",
    father :"8",
  },
  "adjacencies" : [
    {
      "nodeTo":"10",
      "data" :{
            "nodeToName":'dharm',
          "$color":"#B2DFDB",
          "relation":"husband",
          "$type":"arrow",
          "$dim":10,
          "$direction":["310", "10"],
      },
    },]
},
{
  id :"311",
  name :" Pushti",
  data :{
    gender :"female",
    father :"8",
  },
  "adjacencies" : [
    {
      "nodeTo":"10",
      "data" :{
            "nodeToName":'dharm',
          "$color":"#B2DFDB",
          "relation":"husband",
          "$type":"arrow",
          "$dim":10,
          "$direction":["311", "10"],
      },
    },]
},
{
  id :"312",
  name :" Shraddha",
  data :{
    gender :"female",
    father :"8",
  },
  "adjacencies" : [
    {
      "nodeTo":"10",
      "data" :{
            "nodeToName":'dharm',
          "$color":"#B2DFDB",
          "relation":"husband",
          "$type":"arrow",
          "$dim":10,
          "$direction":["312", "10"],
      },
    },]
},
{
  id :"313",
  name :" Kriya",
  data :{
    gender :"female",
    father :"8",
  },
  "adjacencies" : [
    {
      "nodeTo":"10",
      "data" :{
            "nodeToName":'dharm',
          "$color":"#B2DFDB",
          "relation":"husband",
          "$type":"arrow",
          "$dim":10,
          "$direction":["313", "10"],
      },
    },]
},
{
  id :"314",
  name :" Buddhi",
  data :{
    gender :"female",
    father :"8",
  },
  "adjacencies" : [
    {
      "nodeTo":"10",
      "data" :{
            "nodeToName":'dharm',
          "$color":"#B2DFDB",
          "relation":"husband",
          "$type":"arrow",
          "$dim":10,
          "$direction":["314", "10"],
      },
    },]
},
{
  id :"315",
  name :" Lajja",
  data :{
    gender :"female",
    father :"8",
  },
  "adjacencies" : [
    {
      "nodeTo":"10",
      "data" :{
            "nodeToName":'dharm',
          "$color":"#B2DFDB",
          "relation":"husband",
          "$type":"arrow",
          "$dim":10,
          "$direction":["315", "10"],
      },
    },]
},
{
  id :"316",
  name :" Mati",
  data :{
    gender :"female",
    father :"8",
  },
  "adjacencies" : [
    {
      "nodeTo":"10",
      "data" :{
            "nodeToName":'dharm',
          "$color":"#B2DFDB",
          "relation":"husband",
          "$type":"arrow",
          "$dim":10,
          "$direction":["316", "10"],
      },
    },]
},
{
  id :"21",
  name :" Prachetas Daksh",
  data :{
    gender :"male",
    father :"8",
  },
  "adjacencies" : []
},
{
  id :"37",
  name :" vinata",
  data :{
    gender :"female",
    father :"8",
  },
  "adjacencies" : [
    {
      "nodeTo":"51",
      "data" :{
          "nodeToName":'garud',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["37", "51"],
      },
    },
    {
      "nodeTo":"52",
      "data" :{
          "nodeToName":'arun',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["37", "52"],
      },
    },]
},
{
  id :"51",
  name :" garud",
  data :{
    gender :"male",
    father :"0",
    mother :"37",
  },
  "adjacencies" : []
},
{
  id :"52",
  name :" arun",
  data :{
    gender :"male",
    father :"0",
    mother :"37",
    title :"Who does Arunoday",
  },
  "adjacencies" : [
    {
      "nodeTo":"53",
      "data" :{
          "nodeToName":'sampati',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["52", "53"],
      },
    },
    {
      "nodeTo":"54",
      "data" :{
          "nodeToName":'jatayu',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["52", "54"],
      },
    },]
},
{
  id :"53",
  name :" sampati",
  data :{
    gender :"male",
    father :"52",
    mother :"135",
  },
  "adjacencies" : []
},
{
  id :"54",
  name :" jatayu",
  data :{
    gender :"male",
    father :"52",
    mother :"135",
  },
  "adjacencies" : []
},
{
  id :"38",
  name :" kadru",
  data :{
    gender :"female",
    father :"8",
  },
  "adjacencies" : [
    {
      "nodeTo":"55",
      "data" :{
          "nodeToName":'sheshnag',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["38", "55"],
      },
    },
    {
      "nodeTo":"56",
      "data" :{
          "nodeToName":'vasuki',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["38", "56"],
      },
    },
    {
      "nodeTo":"57",
      "data" :{
          "nodeToName":'takshak',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["38", "57"],
      },
    },
    {
      "nodeTo":"58",
      "data" :{
          "nodeToName":'jartkaru',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["38", "58"],
      },
    },
    {
      "nodeTo":"60",
      "data" :{
          "nodeToName":'anant',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["38", "60"],
      },
    },
    {
      "nodeTo":"61",
      "data" :{
          "nodeToName":'bhujangarm',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["38", "61"],
      },
    },
    {
      "nodeTo":"62",
      "data" :{
          "nodeToName":'kurm',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["38", "62"],
      },
    },
    {
      "nodeTo":"63",
      "data" :{
          "nodeToName":'kulik',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["38", "63"],
      },
    },]
},
{
  id :"55",
  name :" sheshnag",
  data :{
    gender :"male",
    father :"38",
    groups :"Sarp of kadru",
  },
  "adjacencies" : []
},
{
  id :"56",
  name :" vasuki",
  data :{
    gender :"male",
    father :"38",
    groups :"Sarp of kadru",
  },
  "adjacencies" : []
},
{
  id :"57",
  name :" takshak",
  data :{
    gender :"male",
    father :"38",
    groups :"Sarp of kadru",
  },
  "adjacencies" : []
},
{
  id :"58",
  name :" jartkaru",
  data :{
    gender :"female",
    father :"38",
    title :"NagKanya",
    groups :"Sarp of kadru",
  },
  "adjacencies" : [
    {
      "nodeTo":"59",
      "data" :{
          "nodeToName":'aastik',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["58", "59"],
      },
    },]
},
{
  id :"59",
  name :" aastik",
  data :{
    gender :"male",
    father :"58",
  },
  "adjacencies" : []
},
{
  id :"60",
  name :" anant",
  data :{
    gender :"male",
    father :"38",
    groups :"Sarp of kadru",
  },
  "adjacencies" : []
},
{
  id :"61",
  name :" bhujangarm",
  data :{
    gender :"male",
    father :"38",
    groups :"Sarp of kadru",
  },
  "adjacencies" : []
},
{
  id :"62",
  name :" kurm",
  data :{
    gender :"male",
    father :"38",
    groups :"Sarp of kadru",
  },
  "adjacencies" : []
},
{
  id :"63",
  name :" kulik",
  data :{
    gender :"male",
    father :"38",
    groups :"Sarp of kadru",
  },
  "adjacencies" : []
},
{
  id :"39",
  name :" kala",
  data :{
    gender :"female",
    father :"8",
  },
  "adjacencies" : [
    {
      "nodeTo":"64",
      "data" :{
          "nodeToName":'vinashan',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["39", "64"],
      },
    },
    {
      "nodeTo":"65",
      "data" :{
          "nodeToName":'krodh',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["39", "65"],
      },
    },
    {
      "nodeTo":"66",
      "data" :{
          "nodeToName":'krodhhanta',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["39", "66"],
      },
    },
    {
      "nodeTo":"67",
      "data" :{
          "nodeToName":'krodhshatru',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["39", "67"],
      },
    },
    {
      "nodeTo":"68",
      "data" :{
          "nodeToName":'kalkey',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["39", "68"],
      },
    },
    {
      "nodeTo":"69",
      "data" :{
          "nodeToName":'kalnemi',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["39", "69"],
      },
    },]
},
{
  id :"64",
  name :" vinashan",
  data :{
    gender :"male",
    father :"39",
    groups :"Rakshas",
  },
  "adjacencies" : []
},
{
  id :"65",
  name :" krodh",
  data :{
    gender :"male",
    father :"39",
    groups :"Rakshas",
  },
  "adjacencies" : []
},
{
  id :"66",
  name :" krodhhanta",
  data :{
    gender :"male",
    father :"39",
    groups :"Rakshas",
  },
  "adjacencies" : []
},
{
  id :"67",
  name :" krodhshatru",
  data :{
    gender :"male",
    father :"39",
    groups :"Rakshas",
  },
  "adjacencies" : []
},
{
  id :"68",
  name :" kalkey",
  data :{
    gender :"male",
    father :"39",
    groups :"Rakshas",
  },
  "adjacencies" : []
},
{
  id :"69",
  name :" kalnemi",
  data :{
    gender :"male",
    father :"39",
    groups :"Rakshas",
  },
  "adjacencies" : []
},
{
  id :"40",
  name :" danayu",
  data :{
    gender :"female",
    father :"8",
  },
  "adjacencies" : [
    {
      "nodeTo":"71",
      "data" :{
          "nodeToName":'vikshar',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["40", "71"],
      },
    },
    {
      "nodeTo":"72",
      "data" :{
          "nodeToName":'bal',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["40", "72"],
      },
    },
    {
      "nodeTo":"73",
      "data" :{
          "nodeToName":'vir',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["40", "73"],
      },
    },
    {
      "nodeTo":"74",
      "data" :{
          "nodeToName":'Vrutrasur',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["40", "74"],
      },
    },]
},
{
  id :"71",
  name :" vikshar",
  data :{
    gender :"male",
    father :"40",
    groups :"Asur",
  },
  "adjacencies" : []
},
{
  id :"72",
  name :" bal",
  data :{
    gender :"male",
    father :"40",
    groups :"Asur",
  },
  "adjacencies" : []
},
{
  id :"73",
  name :" vir",
  data :{
    gender :"male",
    father :"40",
    groups :"Asur",
  },
  "adjacencies" : []
},
{
  id :"74",
  name :" Vrutrasur",
  data :{
    gender :"male",
    father :"40",
    groups :"Asur",
  },
  "adjacencies" : []
},
{
  id :"41",
  name :" diti",
  data :{
    gender :"female",
    father :"8",
  },
  "adjacencies" : [
    {
      "nodeTo":"75",
      "data" :{
          "nodeToName":'Hiranya Kashyapu',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["41", "75"],
      },
    },]
},
{
  id :"75",
  name :" Hiranya Kashyapu",
  data :{
    gender :"male",
    father :"41",
    groups :"Rakshas,King",
  },
  "adjacencies" : [
    {
      "nodeTo":"76",
      "data" :{
          "nodeToName":'Prahalad',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["75", "76"],
      },
    },
    {
      "nodeTo":"82",
      "data" :{
          "nodeToName":'sumhalad',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["75", "82"],
      },
    },
    {
      "nodeTo":"83",
      "data" :{
          "nodeToName":'anuhalad',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["75", "83"],
      },
    },
    {
      "nodeTo":"84",
      "data" :{
          "nodeToName":'shibi of Hiranya Kashyapu',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["75", "84"],
      },
    },
    {
      "nodeTo":"85",
      "data" :{
          "nodeToName":'bashkal',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["75", "85"],
      },
    },]
},
{
  id :"76",
  name :" Prahalad",
  data :{
    gender :"male",
    father :"75",
    groups :"King,Bhakta",
  },
  "adjacencies" : [
    {
      "nodeTo":"77",
      "data" :{
          "nodeToName":'Virochan',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["76", "77"],
      },
    },
    {
      "nodeTo":"80",
      "data" :{
          "nodeToName":'kumbha',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["76", "80"],
      },
    },
    {
      "nodeTo":"81",
      "data" :{
          "nodeToName":'nikumbha',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["76", "81"],
      },
    },]
},
{
  id :"77",
  name :" Virochan",
  data :{
    gender :"male",
    father :"76",
  },
  "adjacencies" : [
    {
      "nodeTo":"78",
      "data" :{
          "nodeToName":'Bali',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["77", "78"],
      },
    },]
},
{
  id :"78",
  name :" Bali",
  data :{
    gender :"male",
    father :"77",
    groups :"King",
  },
  "adjacencies" : [
    {
      "nodeTo":"79",
      "data" :{
          "nodeToName":'Banasur',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["78", "79"],
      },
    },]
},
{
  id :"79",
  name :" Banasur",
  data :{
    gender :"male",
    father :"78",
  },
  "adjacencies" : []
},
{
  id :"80",
  name :" kumbha",
  data :{
    gender :"male",
    father :"76",
  },
  "adjacencies" : []
},
{
  id :"81",
  name :" nikumbha",
  data :{
    gender :"male",
    father :"76",
  },
  "adjacencies" : []
},
{
  id :"82",
  name :" sumhalad",
  data :{
    gender :"male",
    father :"75",
  },
  "adjacencies" : []
},
{
  id :"83",
  name :" anuhalad",
  data :{
    gender :"male",
    father :"75",
  },
  "adjacencies" : []
},
{
  id :"84",
  name :" shibi of Hiranya Kashyapu",
  data :{
    gender :"male",
    father :"75",
  },
  "adjacencies" : []
},
{
  id :"85",
  name :" bashkal",
  data :{
    gender :"male",
    father :"75",
  },
  "adjacencies" : []
},
{
  id :"42",
  name :" vishva",
  data :{
    gender :"female",
    father :"8",
  },
  "adjacencies" : []
},
{
  id :"43",
  name :" kapila",
  data :{
    gender :"female",
    father :"8",
  },
  "adjacencies" : []
},
{
  id :"44",
  name :" sinhika",
  data :{
    gender :"female",
    father :"8",
  },
  "adjacencies" : [
    {
      "nodeTo":"91",
      "data" :{
          "nodeToName":'rahu',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["44", "91"],
      },
    },]
},
{
  id :"91",
  name :" rahu",
  data :{
    gender :"male",
    mother :"44",
  },
  "adjacencies" : []
},
{
  id :"45",
  name :" pradha",
  data :{
    gender :"female",
    father :"8",
  },
  "adjacencies" : [
    {
      "nodeTo":"100",
      "data" :{
          "nodeToName":'Tillotama',
          "$color":"#E91E63",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["45", "100"],
      },
    },
    {
      "nodeTo":"101",
      "data" :{
          "nodeToName":'Aruna',
          "$color":"#E91E63",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["45", "101"],
      },
    },
    {
      "nodeTo":"102",
      "data" :{
          "nodeToName":'Rakshita',
          "$color":"#E91E63",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["45", "102"],
      },
    },
    {
      "nodeTo":"103",
      "data" :{
          "nodeToName":'Rambha',
          "$color":"#E91E63",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["45", "103"],
      },
    },
    {
      "nodeTo":"104",
      "data" :{
          "nodeToName":'Manorama',
          "$color":"#E91E63",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["45", "104"],
      },
    },
    {
      "nodeTo":"105",
      "data" :{
          "nodeToName":'Keshini',
          "$color":"#E91E63",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["45", "105"],
      },
    },
    {
      "nodeTo":"106",
      "data" :{
          "nodeToName":'Subahu',
          "$color":"#E91E63",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["45", "106"],
      },
    },
    {
      "nodeTo":"107",
      "data" :{
          "nodeToName":'Suraja',
          "$color":"#E91E63",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["45", "107"],
      },
    },
    {
      "nodeTo":"108",
      "data" :{
          "nodeToName":'Supriya',
          "$color":"#E91E63",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["45", "108"],
      },
    },
    {
      "nodeTo":"109",
      "data" :{
          "nodeToName":'Atibahu',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["45", "109"],
      },
    },
    {
      "nodeTo":"110",
      "data" :{
          "nodeToName":'Haha',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["45", "110"],
      },
    },
    {
      "nodeTo":"111",
      "data" :{
          "nodeToName":'HuHu',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["45", "111"],
      },
    },
    {
      "nodeTo":"112",
      "data" :{
          "nodeToName":'Tumburu',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["45", "112"],
      },
    },
    {
      "nodeTo":"92",
      "data" :{
          "nodeToName":'anavadhya',
          "$color":"#E91E63",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["45", "92"],
      },
    },
    {
      "nodeTo":"93",
      "data" :{
          "nodeToName":'manuvansha',
          "$color":"#E91E63",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["45", "93"],
      },
    },
    {
      "nodeTo":"94",
      "data" :{
          "nodeToName":'siddha',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["45", "94"],
      },
    },
    {
      "nodeTo":"95",
      "data" :{
          "nodeToName":'purna',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["45", "95"],
      },
    },
    {
      "nodeTo":"96",
      "data" :{
          "nodeToName":'barhi',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["45", "96"],
      },
    },
    {
      "nodeTo":"97",
      "data" :{
          "nodeToName":'Alambusha',
          "$color":"#E91E63",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["45", "97"],
      },
    },
    {
      "nodeTo":"98",
      "data" :{
          "nodeToName":'Mishrakeshi',
          "$color":"#E91E63",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["45", "98"],
      },
    },
    {
      "nodeTo":"99",
      "data" :{
          "nodeToName":'VidhutParna',
          "$color":"#E91E63",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["45", "99"],
      },
    },]
},
{
  id :"100",
  name :" Tillotama",
  data :{
    gender :"female",
    mother :"45",
    groups :"Apsara",
  },
  "adjacencies" : []
},
{
  id :"101",
  name :" Aruna",
  data :{
    gender :"female",
    mother :"45",
    groups :"Apsara",
  },
  "adjacencies" : []
},
{
  id :"102",
  name :" Rakshita",
  data :{
    gender :"female",
    mother :"45",
    groups :"Apsara",
  },
  "adjacencies" : []
},
{
  id :"103",
  name :" Rambha",
  data :{
    gender :"female",
    mother :"45",
    groups :"Apsara",
  },
  "adjacencies" : []
},
{
  id :"104",
  name :" Manorama",
  data :{
    gender :"female",
    mother :"45",
    groups :"Apsara",
  },
  "adjacencies" : []
},
{
  id :"105",
  name :" Keshini",
  data :{
    gender :"female",
    mother :"45",
    groups :"Apsara",
  },
  "adjacencies" : []
},
{
  id :"106",
  name :" Subahu",
  data :{
    gender :"female",
    mother :"45",
    groups :"Apsara",
  },
  "adjacencies" : []
},
{
  id :"107",
  name :" Suraja",
  data :{
    gender :"female",
    mother :"45",
    groups :"Apsara",
  },
  "adjacencies" : []
},
{
  id :"108",
  name :" Supriya",
  data :{
    gender :"female",
    mother :"45",
    groups :"Apsara",
  },
  "adjacencies" : []
},
{
  id :"109",
  name :" Atibahu",
  data :{
    gender :"male",
    mother :"45",
    groups :"Gandharv",
  },
  "adjacencies" : []
},
{
  id :"110",
  name :" Haha",
  data :{
    gender :"male",
    mother :"45",
    groups :"Gandharv",
  },
  "adjacencies" : []
},
{
  id :"111",
  name :" HuHu",
  data :{
    gender :"male",
    mother :"45",
    groups :"Gandharv",
  },
  "adjacencies" : []
},
{
  id :"112",
  name :" Tumburu",
  data :{
    gender :"male",
    mother :"45",
    groups :"Gandharv",
  },
  "adjacencies" : []
},
{
  id :"92",
  name :" anavadhya",
  data :{
    gender :"female",
    mother :"45",
  },
  "adjacencies" : []
},
{
  id :"93",
  name :" manuvansha",
  data :{
    gender :"female",
    mother :"45",
  },
  "adjacencies" : []
},
{
  id :"94",
  name :" siddha",
  data :{
    gender :"male",
    mother :"45",
    groups :"DevGandharv",
  },
  "adjacencies" : []
},
{
  id :"95",
  name :" purna",
  data :{
    gender :"male",
    mother :"45",
    groups :"DevGandharv",
  },
  "adjacencies" : []
},
{
  id :"96",
  name :" barhi",
  data :{
    gender :"male",
    mother :"45",
    groups :"DevGandharv",
  },
  "adjacencies" : []
},
{
  id :"97",
  name :" Alambusha",
  data :{
    gender :"female",
    mother :"45",
    groups :"Apsara",
  },
  "adjacencies" : [
    {
      "nodeTo":"391",
      "data" :{
          "nodeToName":'iLavida',
          "$color":"#E91E63",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["97", "391"],
      },
    },]
},
{
  id :"391",
  name :" iLavida",
  data :{
    gender :"female",
    mother :"97",
  },
  "adjacencies" : [
    {
      "nodeTo":"387",
      "data" :{
          "nodeToName":'kuber',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["391", "387"],
      },
    },
    {
      "nodeTo":"385",
      "data" :{
            "nodeToName":'Visravas',
          "$color":"#B2DFDB",
          "relation":"husband",
          "$type":"arrow",
          "$dim":10,
          "$direction":["391", "385"],
      },
    },]
},
{
  id :"98",
  name :" Mishrakeshi",
  data :{
    gender :"female",
    mother :"45",
    groups :"Apsara",
  },
  "adjacencies" : []
},
{
  id :"99",
  name :" VidhutParna",
  data :{
    gender :"female",
    mother :"45",
    groups :"Apsara",
  },
  "adjacencies" : []
},
{
  id :"46",
  name :" muni",
  data :{
    gender :"female",
    father :"8",
  },
  "adjacencies" : []
},
{
  id :"47",
  name :" krodha",
  data :{
    gender :"female",
    father :"8",
  },
  "adjacencies" : [
    {
      "nodeTo":"113",
      "data" :{
          "nodeToName":'Suchandra',
          "$color":"#E91E63",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["47", "113"],
      },
    },
    {
      "nodeTo":"114",
      "data" :{
          "nodeToName":'Chandrahanta',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["47", "114"],
      },
    },
    {
      "nodeTo":"115",
      "data" :{
          "nodeToName":'Chandrapramardan',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["47", "115"],
      },
    },
    {
      "nodeTo":"116",
      "data" :{
          "nodeToName":'mrugi',
          "$color":"#E91E63",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["47", "116"],
      },
    },
    {
      "nodeTo":"117",
      "data" :{
          "nodeToName":'mrugmanda',
          "$color":"#E91E63",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["47", "117"],
      },
    },
    {
      "nodeTo":"118",
      "data" :{
          "nodeToName":'hari',
          "$color":"#E91E63",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["47", "118"],
      },
    },
    {
      "nodeTo":"119",
      "data" :{
          "nodeToName":'bhadramna',
          "$color":"#E91E63",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["47", "119"],
      },
    },
    {
      "nodeTo":"120",
      "data" :{
          "nodeToName":'matangi',
          "$color":"#E91E63",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["47", "120"],
      },
    },
    {
      "nodeTo":"121",
      "data" :{
          "nodeToName":'sharduli',
          "$color":"#E91E63",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["47", "121"],
      },
    },
    {
      "nodeTo":"122",
      "data" :{
          "nodeToName":'shveta',
          "$color":"#E91E63",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["47", "122"],
      },
    },
    {
      "nodeTo":"123",
      "data" :{
          "nodeToName":'surabhi',
          "$color":"#E91E63",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["47", "123"],
      },
    },
    {
      "nodeTo":"124",
      "data" :{
          "nodeToName":'Surasa',
          "$color":"#E91E63",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["47", "124"],
      },
    },]
},
{
  id :"113",
  name :" Suchandra",
  data :{
    gender :"female",
    mother :"47",
  },
  "adjacencies" : []
},
{
  id :"114",
  name :" Chandrahanta",
  data :{
    gender :"male",
    mother :"47",
  },
  "adjacencies" : []
},
{
  id :"115",
  name :" Chandrapramardan",
  data :{
    gender :"male",
    mother :"47",
  },
  "adjacencies" : []
},
{
  id :"116",
  name :" mrugi",
  data :{
    gender :"female",
    mother :"47",
  },
  "adjacencies" : []
},
{
  id :"117",
  name :" mrugmanda",
  data :{
    gender :"female",
    mother :"47",
  },
  "adjacencies" : []
},
{
  id :"118",
  name :" hari",
  data :{
    gender :"female",
    mother :"47",
  },
  "adjacencies" : []
},
{
  id :"119",
  name :" bhadramna",
  data :{
    gender :"female",
    mother :"47",
  },
  "adjacencies" : [
    {
      "nodeTo":"125",
      "data" :{
          "nodeToName":'Airavat',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["119", "125"],
      },
    },]
},
{
  id :"125",
  name :" Airavat",
  data :{
    gender :"male",
    mother :"119",
    title :"The Elephant",
  },
  "adjacencies" : []
},
{
  id :"120",
  name :" matangi",
  data :{
    gender :"female",
    mother :"47",
  },
  "adjacencies" : []
},
{
  id :"121",
  name :" sharduli",
  data :{
    gender :"female",
    mother :"47",
  },
  "adjacencies" : []
},
{
  id :"122",
  name :" shveta",
  data :{
    gender :"female",
    mother :"47",
  },
  "adjacencies" : [
    {
      "nodeTo":"126",
      "data" :{
          "nodeToName":'Shvet diggaj',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["122", "126"],
      },
    },]
},
{
  id :"126",
  name :" Shvet diggaj",
  data :{
    gender :"male",
    mother :"122",
  },
  "adjacencies" : []
},
{
  id :"123",
  name :" surabhi",
  data :{
    gender :"female",
    mother :"47",
  },
  "adjacencies" : [
    {
      "nodeTo":"127",
      "data" :{
          "nodeToName":'Rohini',
          "$color":"#E91E63",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["123", "127"],
      },
    },
    {
      "nodeTo":"128",
      "data" :{
          "nodeToName":'Gandharvi',
          "$color":"#E91E63",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["123", "128"],
      },
    },
    {
      "nodeTo":"129",
      "data" :{
          "nodeToName":'Vimala',
          "$color":"#E91E63",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["123", "129"],
      },
    },
    {
      "nodeTo":"130",
      "data" :{
          "nodeToName":'Anala',
          "$color":"#E91E63",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["123", "130"],
      },
    },]
},
{
  id :"127",
  name :" Rohini",
  data :{
    gender :"female",
    mother :"123",
  },
  "adjacencies" : []
},
{
  id :"128",
  name :" Gandharvi",
  data :{
    gender :"female",
    mother :"123",
  },
  "adjacencies" : []
},
{
  id :"129",
  name :" Vimala",
  data :{
    gender :"female",
    mother :"123",
  },
  "adjacencies" : []
},
{
  id :"130",
  name :" Anala",
  data :{
    gender :"female",
    mother :"123",
  },
  "adjacencies" : []
},
{
  id :"124",
  name :" Surasa",
  data :{
    gender :"female",
    mother :"47",
  },
  "adjacencies" : []
},
{
  id :"48",
  name :" danu",
  data :{
    gender :"female",
    father :"8",
  },
  "adjacencies" : [
    {
      "nodeTo":"131",
      "data" :{
          "nodeToName":'Viprachitti',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["48", "131"],
      },
    },]
},
{
  id :"131",
  name :" Viprachitti",
  data :{
    gender :"male",
    mother :"48",
  },
  "adjacencies" : []
},
{
  id :"49",
  name :" tamra",
  data :{
    gender :"female",
    father :"8",
  },
  "adjacencies" : [
    {
      "nodeTo":"133",
      "data" :{
          "nodeToName":'kaki',
          "$color":"#E91E63",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["49", "133"],
      },
    },
    {
      "nodeTo":"135",
      "data" :{
          "nodeToName":'shyeni',
          "$color":"#E91E63",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["49", "135"],
      },
    },
    {
      "nodeTo":"136",
      "data" :{
          "nodeToName":'bhasi',
          "$color":"#E91E63",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["49", "136"],
      },
    },
    {
      "nodeTo":"137",
      "data" :{
          "nodeToName":'Dhrutrashtri',
          "$color":"#E91E63",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["49", "137"],
      },
    },
    {
      "nodeTo":"138",
      "data" :{
          "nodeToName":'Shuki',
          "$color":"#E91E63",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["49", "138"],
      },
    },]
},
{
  id :"133",
  name :" kaki",
  data :{
    gender :"female",
    mother :"49",
  },
  "adjacencies" : [
    {
      "nodeTo":"134",
      "data" :{
          "nodeToName":'uluk',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["133", "134"],
      },
    },]
},
{
  id :"134",
  name :" uluk",
  data :{
    gender :"male",
    mother :"133",
  },
  "adjacencies" : []
},
{
  id :"135",
  name :" shyeni",
  data :{
    gender :"female",
    mother :"49",
  },
  "adjacencies" : [
    {
      "nodeTo":"53",
      "data" :{
          "nodeToName":'sampati',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["135", "53"],
      },
    },
    {
      "nodeTo":"54",
      "data" :{
          "nodeToName":'jatayu',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["135", "54"],
      },
    },]
},
{
  id :"136",
  name :" bhasi",
  data :{
    gender :"female",
    mother :"49",
  },
  "adjacencies" : []
},
{
  id :"137",
  name :" Dhrutrashtri",
  data :{
    gender :"female",
    mother :"49",
  },
  "adjacencies" : [
    {
      "nodeTo":"139",
      "data" :{
          "nodeToName":'Hams kalhams',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["137", "139"],
      },
    },
    {
      "nodeTo":"140",
      "data" :{
          "nodeToName":'chakravat',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["137", "140"],
      },
    },]
},
{
  id :"139",
  name :" Hams kalhams",
  data :{
    gender :"male",
    mother :"137",
  },
  "adjacencies" : []
},
{
  id :"140",
  name :" chakravat",
  data :{
    gender :"male",
    mother :"137",
  },
  "adjacencies" : []
},
{
  id :"138",
  name :" Shuki",
  data :{
    gender :"female",
    mother :"49",
  },
  "adjacencies" : []
},
{
  id :"50",
  name :" aditi",
  data :{
    gender :"female",
    father :"8",
    groups :"Wife of Kashyap",
  },
  "adjacencies" : [
    {
      "nodeTo":"141",
      "data" :{
          "nodeToName":'dhata',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["50", "141"],
      },
    },
    {
      "nodeTo":"142",
      "data" :{
          "nodeToName":'Urukarma or Vishnu or Vaman',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["50", "142"],
      },
    },
    {
      "nodeTo":"143",
      "data" :{
          "nodeToName":'Mitra',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["50", "143"],
      },
    },
    {
      "nodeTo":"144",
      "data" :{
          "nodeToName":'Aryama',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["50", "144"],
      },
    },
    {
      "nodeTo":"145",
      "data" :{
          "nodeToName":'Shakra Indra',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["50", "145"],
      },
    },
    {
      "nodeTo":"146",
      "data" :{
          "nodeToName":'Varun',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["50", "146"],
      },
    },
    {
      "nodeTo":"147",
      "data" :{
          "nodeToName":'Ansha',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["50", "147"],
      },
    },
    {
      "nodeTo":"148",
      "data" :{
          "nodeToName":'Bhag',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["50", "148"],
      },
    },
    {
      "nodeTo":"149",
      "data" :{
          "nodeToName":'Vivasvan',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["50", "149"],
      },
    },
    {
      "nodeTo":"150",
      "data" :{
          "nodeToName":'pusha',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["50", "150"],
      },
    },
    {
      "nodeTo":"151",
      "data" :{
          "nodeToName":'Savita',
          "$color":"#E91E63",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["50", "151"],
      },
    },
    {
      "nodeTo":"152",
      "data" :{
          "nodeToName":'Tvashta',
          "$color":"#E91E63",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["50", "152"],
      },
    },
    {
      "nodeTo":"20",
      "data" :{
            "nodeToName":'kashyap',
          "$color":"#B2DFDB",
          "relation":"husband",
          "$type":"arrow",
          "$dim":10,
          "$direction":["50", "20"],
      },
    },]
},
{
  id :"141",
  name :" dhata",
  data :{
    gender :"male",
    mother :"50",
    groups :"Indra",
  },
  "adjacencies" : []
},
{
  id :"143",
  name :" Mitra",
  data :{
    gender :"male",
    mother :"50",
    groups :"12 Aaditya",
  },
  "adjacencies" : []
},
{
  id :"144",
  name :" Aryama",
  data :{
    gender :"male",
    mother :"50",
    groups :"12 Aaditya",
  },
  "adjacencies" : []
},
{
  id :"145",
  name :" Shakra Indra",
  data :{
    gender :"male",
    mother :"50",
    groups :"12 Aaditya",
  },
  "adjacencies" : []
},
{
  id :"146",
  name :" Varun",
  data :{
    gender :"male",
    mother :"50",
    groups :"12 Aaditya",
  },
  "adjacencies" : []
},
{
  id :"147",
  name :" Ansha",
  data :{
    gender :"male",
    mother :"50",
    groups :"12 Aaditya",
  },
  "adjacencies" : []
},
{
  id :"148",
  name :" Bhag",
  data :{
    gender :"male",
    mother :"50",
    groups :"12 Aaditya",
  },
  "adjacencies" : []
},
{
  id :"149",
  name :" Vivasvan",
  data :{
    gender :"male",
    mother :"50",
    groups :"12 Aaditya",
  },
  "adjacencies" : [
    {
      "nodeTo":"153",
      "data" :{
          "nodeToName":'Manu',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["149", "153"],
      },
    },
    {
      "nodeTo":"154",
      "data" :{
          "nodeToName":'Yamraj',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["149", "154"],
      },
    },]
},
{
  id :"153",
  name :" Manu",
  data :{
    gender :"male",
    father :"149",
    groups :"Rushi,Saptarshi",
  },
  "adjacencies" : [
    {
      "nodeTo":"324",
      "data" :{
          "nodeToName":'Aarushi',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["153", "324"],
      },
    },
    {
      "nodeTo":"155",
      "data" :{
          "nodeToName":'Ven',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["153", "155"],
      },
    },
    {
      "nodeTo":"156",
      "data" :{
          "nodeToName":'Dhushnu',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["153", "156"],
      },
    },
    {
      "nodeTo":"157",
      "data" :{
          "nodeToName":'Narishyant',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["153", "157"],
      },
    },
    {
      "nodeTo":"158",
      "data" :{
          "nodeToName":'Nabhag',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["153", "158"],
      },
    },
    {
      "nodeTo":"159",
      "data" :{
          "nodeToName":'Ishvaku',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["153", "159"],
      },
    },
    {
      "nodeTo":"160",
      "data" :{
          "nodeToName":'Karush',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["153", "160"],
      },
    },
    {
      "nodeTo":"161",
      "data" :{
          "nodeToName":'Sharyati',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["153", "161"],
      },
    },
    {
      "nodeTo":"162",
      "data" :{
          "nodeToName":'ila',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["153", "162"],
      },
    },
    {
      "nodeTo":"163",
      "data" :{
          "nodeToName":'Prushadh',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["153", "163"],
      },
    },
    {
      "nodeTo":"164",
      "data" :{
          "nodeToName":'Nabhagrishtha',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["153", "164"],
      },
    },]
},
{
  id :"324",
  name :" Aarushi",
  data :{
    gender :"female",
    father :"153",
  },
  "adjacencies" : [
    {
      "nodeTo":"12",
      "data" :{
          "nodeToName":'Aurva',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["324", "12"],
      },
    },
    {
      "nodeTo":"293",
      "data" :{
            "nodeToName":'Chyavan',
          "$color":"#B2DFDB",
          "relation":"husband",
          "$type":"arrow",
          "$dim":10,
          "$direction":["324", "293"],
      },
    },]
},
{
  id :"12",
  name :" Aurva",
  data :{
    gender :"male",
    father :"293",
    mother :"324",
    groups :"Rushi",
  },
  "adjacencies" : [
    {
      "nodeTo":"298",
      "data" :{
          "nodeToName":'Ruchik',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["12", "298"],
      },
    },]
},
{
  id :"298",
  name :" Ruchik",
  data :{
    gender :"male",
    father :"12",
    groups :"Rushi",
  },
  "adjacencies" : [
    {
      "nodeTo":"302",
      "data" :{
          "nodeToName":'Jamadagni',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["298", "302"],
      },
    },
    {
      "nodeTo":"484",
      "data" :{
            "nodeToName":'Satyavati of Gadhi',
          "$color":"#4DB6AC",
          "relation":"wife",
          "$type":"arrow",
          "$dim":10,
          "$direction":["298", "484"],
      },
    },]
},
{
  id :"302",
  name :" Jamadagni",
  data :{
    gender :"male",
    father :"298",
    mother :"484",
    groups :"Rushi,Saptarshi,Bhargav Vansh",
  },
  "adjacencies" : [
    {
      "nodeTo":"303",
      "data" :{
          "nodeToName":'parshuram',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["302", "303"],
      },
    },
    {
      "nodeTo":"304",
      "data" :{
            "nodeToName":'Renuka',
          "$color":"#4DB6AC",
          "relation":"wife",
          "$type":"arrow",
          "$dim":10,
          "$direction":["302", "304"],
      },
    },]
},
{
  id :"303",
  name :" parshuram",
  data :{
    gender :"male",
    father :"302",
    mother :"304",
    groups :"Avatar,Bhargav Vansh",
  },
  "adjacencies" : []
},
{
  id :"155",
  name :" Ven",
  data :{
    gender :"male",
    father :"153",
  },
  "adjacencies" : []
},
{
  id :"156",
  name :" Dhushnu",
  data :{
    gender :"male",
    father :"153",
  },
  "adjacencies" : []
},
{
  id :"157",
  name :" Narishyant",
  data :{
    gender :"male",
    father :"153",
  },
  "adjacencies" : []
},
{
  id :"158",
  name :" Nabhag",
  data :{
    gender :"male",
    father :"153",
  },
  "adjacencies" : []
},
{
  id :"159",
  name :" Ishvaku",
  data :{
    gender :"male",
    father :"153",
    groups :"Ishvaku kul,King",
  },
  "adjacencies" : [
    {
      "nodeTo":"404",
      "data" :{
          "nodeToName":'Sasada',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["159", "404"],
      },
    },
    {
      "nodeTo":"395",
      "data" :{
          "nodeToName":'Nimi',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["159", "395"],
      },
    },]
},
{
  id :"404",
  name :" Sasada",
  data :{
    gender :"male",
    father :"159",
    title :"Made Ayodhya",
  },
  "adjacencies" : [
    {
      "nodeTo":"405",
      "data" :{
          "nodeToName":'Kukutstha',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["404", "405"],
      },
    },]
},
{
  id :"405",
  name :" Kukutstha",
  data :{
    gender :"male",
    father :"404",
  },
  "adjacencies" : [
    {
      "nodeTo":"406",
      "data" :{
          "nodeToName":'Suyodhana Anena',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["405", "406"],
      },
    },]
},
{
  id :"406",
  name :" Suyodhana Anena",
  data :{
    gender :"male",
    father :"405",
  },
  "adjacencies" : [
    {
      "nodeTo":"407",
      "data" :{
          "nodeToName":'Prithu',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["406", "407"],
      },
    },]
},
{
  id :"407",
  name :" Prithu",
  data :{
    gender :"male",
    father :"406",
  },
  "adjacencies" : [
    {
      "nodeTo":"408",
      "data" :{
          "nodeToName":'Viswagasva',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["407", "408"],
      },
    },]
},
{
  id :"408",
  name :" Viswagasva",
  data :{
    gender :"male",
    father :"407",
  },
  "adjacencies" : [
    {
      "nodeTo":"409",
      "data" :{
          "nodeToName":'Indu Ardra',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["408", "409"],
      },
    },]
},
{
  id :"409",
  name :" Indu Ardra",
  data :{
    gender :"male",
    father :"408",
  },
  "adjacencies" : [
    {
      "nodeTo":"410",
      "data" :{
          "nodeToName":'Yuvanaswa I',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["409", "410"],
      },
    },]
},
{
  id :"410",
  name :" Yuvanaswa I",
  data :{
    gender :"male",
    father :"409",
  },
  "adjacencies" : [
    {
      "nodeTo":"411",
      "data" :{
          "nodeToName":'Sravasta',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["410", "411"],
      },
    },]
},
{
  id :"411",
  name :" Sravasta",
  data :{
    gender :"male",
    father :"410",
  },
  "adjacencies" : [
    {
      "nodeTo":"412",
      "data" :{
          "nodeToName":'Vrihadaswa',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["411", "412"],
      },
    },]
},
{
  id :"412",
  name :" Vrihadaswa",
  data :{
    gender :"male",
    father :"411",
  },
  "adjacencies" : [
    {
      "nodeTo":"413",
      "data" :{
          "nodeToName":'Kuvalaswa Dhundhumara',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["412", "413"],
      },
    },]
},
{
  id :"413",
  name :" Kuvalaswa Dhundhumara",
  data :{
    gender :"male",
    father :"412",
  },
  "adjacencies" : [
    {
      "nodeTo":"414",
      "data" :{
          "nodeToName":'Dridhaswa',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["413", "414"],
      },
    },
    {
      "nodeTo":"415",
      "data" :{
          "nodeToName":'Kapilaswa',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["413", "415"],
      },
    },
    {
      "nodeTo":"416",
      "data" :{
          "nodeToName":'Chandraswa',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["413", "416"],
      },
    },]
},
{
  id :"414",
  name :" Dridhaswa",
  data :{
    gender :"male",
    father :"413",
  },
  "adjacencies" : [
    {
      "nodeTo":"417",
      "data" :{
          "nodeToName":'Pramaoda',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["414", "417"],
      },
    },]
},
{
  id :"417",
  name :" Pramaoda",
  data :{
    gender :"male",
    father :"414",
  },
  "adjacencies" : [
    {
      "nodeTo":"418",
      "data" :{
          "nodeToName":'Haryaswa',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["417", "418"],
      },
    },]
},
{
  id :"418",
  name :" Haryaswa",
  data :{
    gender :"male",
    father :"417",
  },
  "adjacencies" : [
    {
      "nodeTo":"419",
      "data" :{
          "nodeToName":'nikumbha',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["418", "419"],
      },
    },
    {
      "nodeTo":"488",
      "data" :{
          "nodeToName":'Sudeva',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["418", "488"],
      },
    },]
},
{
  id :"419",
  name :" nikumbha",
  data :{
    gender :"male",
    father :"418",
  },
  "adjacencies" : [
    {
      "nodeTo":"420",
      "data" :{
          "nodeToName":'Samahtswa',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["419", "420"],
      },
    },]
},
{
  id :"420",
  name :" Samahtswa",
  data :{
    gender :"male",
    father :"419",
  },
  "adjacencies" : [
    {
      "nodeTo":"421",
      "data" :{
          "nodeToName":'Akritatswa',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["420", "421"],
      },
    },
    {
      "nodeTo":"423",
      "data" :{
          "nodeToName":'Ranaswa',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["420", "423"],
      },
    },]
},
{
  id :"421",
  name :" Akritatswa",
  data :{
    gender :"male",
    father :"420",
  },
  "adjacencies" : [
    {
      "nodeTo":"422",
      "data" :{
          "nodeToName":'Kritatswa',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["421", "422"],
      },
    },]
},
{
  id :"422",
  name :" Kritatswa",
  data :{
    gender :"male",
    father :"421",
  },
  "adjacencies" : []
},
{
  id :"423",
  name :" Ranaswa",
  data :{
    gender :"male",
    father :"420",
  },
  "adjacencies" : [
    {
      "nodeTo":"400",
      "data" :{
          "nodeToName":'Ishvaku desendants',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["423", "400"],
      },
    },]
},
{
  id :"400",
  name :" Ishvaku desendants",
  data :{
    gender :"male",
    father :"423",
  },
  "adjacencies" : [
    {
      "nodeTo":"424",
      "data" :{
          "nodeToName":'Yuvanaswa II',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["400", "424"],
      },
    },]
},
{
  id :"424",
  name :" Yuvanaswa II",
  data :{
    gender :"male",
    father :"400",
  },
  "adjacencies" : [
    {
      "nodeTo":"425",
      "data" :{
          "nodeToName":'Mandhatri',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["424", "425"],
      },
    },]
},
{
  id :"425",
  name :" Mandhatri",
  data :{
    gender :"female",
    father :"424",
  },
  "adjacencies" : [
    {
      "nodeTo":"426",
      "data" :{
          "nodeToName":'Purukutswa',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["425", "426"],
      },
    },
    {
      "nodeTo":"427",
      "data" :{
          "nodeToName":'Dharmsena',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["425", "427"],
      },
    },
    {
      "nodeTo":"428",
      "data" :{
          "nodeToName":'Muchukunda',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["425", "428"],
      },
    },
    {
      "nodeTo":"429",
      "data" :{
          "nodeToName":'Satrojit',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["425", "429"],
      },
    },]
},
{
  id :"426",
  name :" Purukutswa",
  data :{
    gender :"male",
    mother :"425",
  },
  "adjacencies" : [
    {
      "nodeTo":"430",
      "data" :{
          "nodeToName":'Vasuda tarsadasyu',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["426", "430"],
      },
    },]
},
{
  id :"430",
  name :" Vasuda tarsadasyu",
  data :{
    gender :"male",
    father :"426",
  },
  "adjacencies" : [
    {
      "nodeTo":"431",
      "data" :{
          "nodeToName":'Samshuti',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["430", "431"],
      },
    },]
},
{
  id :"431",
  name :" Samshuti",
  data :{
    gender :"male",
    father :"430",
  },
  "adjacencies" : [
    {
      "nodeTo":"432",
      "data" :{
          "nodeToName":'Tridhanvan',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["431", "432"],
      },
    },]
},
{
  id :"432",
  name :" Tridhanvan",
  data :{
    gender :"male",
    father :"431",
  },
  "adjacencies" : [
    {
      "nodeTo":"433",
      "data" :{
          "nodeToName":'Trayyarun',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["432", "433"],
      },
    },]
},
{
  id :"433",
  name :" Trayyarun",
  data :{
    gender :"male",
    father :"432",
  },
  "adjacencies" : [
    {
      "nodeTo":"434",
      "data" :{
          "nodeToName":'Satyavrat',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["433", "434"],
      },
    },]
},
{
  id :"434",
  name :" Satyavrat",
  data :{
    gender :"male",
    father :"433",
  },
  "adjacencies" : [
    {
      "nodeTo":"435",
      "data" :{
          "nodeToName":'Satyarath Trishanku',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["434", "435"],
      },
    },]
},
{
  id :"435",
  name :" Satyarath Trishanku",
  data :{
    gender :"male",
    father :"434",
  },
  "adjacencies" : [
    {
      "nodeTo":"401",
      "data" :{
          "nodeToName":'Harishchandra',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["435", "401"],
      },
    },]
},
{
  id :"401",
  name :" Harishchandra",
  data :{
    gender :"male",
    father :"435",
    title :"The great Satyavadi",
    groups :"King",
  },
  "adjacencies" : [
    {
      "nodeTo":"402",
      "data" :{
          "nodeToName":'Rohita',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["401", "402"],
      },
    },]
},
{
  id :"402",
  name :" Rohita",
  data :{
    gender :"male",
    father :"401",
  },
  "adjacencies" : [
    {
      "nodeTo":"436",
      "data" :{
          "nodeToName":'Vrika',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["402", "436"],
      },
    },]
},
{
  id :"436",
  name :" Vrika",
  data :{
    gender :"male",
    father :"402",
  },
  "adjacencies" : [
    {
      "nodeTo":"437",
      "data" :{
          "nodeToName":'Sagara',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["436", "437"],
      },
    },]
},
{
  id :"437",
  name :" Sagara",
  data :{
    gender :"male",
    father :"436",
    title :"Mastered the Sea",
    groups :"King",
  },
  "adjacencies" : [
    {
      "nodeTo":"438",
      "data" :{
          "nodeToName":'Asamanjas',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["437", "438"],
      },
    },]
},
{
  id :"438",
  name :" Asamanjas",
  data :{
    gender :"male",
    father :"437",
    mother :"440",
  },
  "adjacencies" : [
    {
      "nodeTo":"441",
      "data" :{
          "nodeToName":'Ansuman',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["438", "441"],
      },
    },
    {
      "nodeTo":"439",
      "data" :{
            "nodeToName":'Vaidarbhi',
          "$color":"#4DB6AC",
          "relation":"wife",
          "$type":"arrow",
          "$dim":10,
          "$direction":["438", "439"],
      },
    },
    {
      "nodeTo":"440",
      "data" :{
            "nodeToName":'Sivi',
          "$color":"#4DB6AC",
          "relation":"wife",
          "$type":"arrow",
          "$dim":10,
          "$direction":["438", "440"],
      },
    },]
},
{
  id :"441",
  name :" Ansuman",
  data :{
    gender :"male",
    father :"438",
  },
  "adjacencies" : [
    {
      "nodeTo":"442",
      "data" :{
          "nodeToName":'Dilip I',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["441", "442"],
      },
    },]
},
{
  id :"442",
  name :" Dilip I",
  data :{
    gender :"male",
    father :"441",
    groups :"King",
  },
  "adjacencies" : [
    {
      "nodeTo":"443",
      "data" :{
          "nodeToName":'Bhagirath',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["442", "443"],
      },
    },]
},
{
  id :"443",
  name :" Bhagirath",
  data :{
    gender :"male",
    father :"442",
    title :"Brought Ganag to the earth with his efforts",
    groups :"King",
  },
  "adjacencies" : [
    {
      "nodeTo":"444",
      "data" :{
          "nodeToName":'Nabhag',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["443", "444"],
      },
    },]
},
{
  id :"444",
  name :" Nabhag",
  data :{
    gender :"male",
    father :"443",
  },
  "adjacencies" : [
    {
      "nodeTo":"445",
      "data" :{
          "nodeToName":'Ambarisa',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["444", "445"],
      },
    },]
},
{
  id :"445",
  name :" Ambarisa",
  data :{
    gender :"male",
    father :"444",
  },
  "adjacencies" : [
    {
      "nodeTo":"446",
      "data" :{
          "nodeToName":'Sindhudvipa',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["445", "446"],
      },
    },]
},
{
  id :"446",
  name :" Sindhudvipa",
  data :{
    gender :"male",
    father :"445",
  },
  "adjacencies" : [
    {
      "nodeTo":"447",
      "data" :{
          "nodeToName":'Ayutayus',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["446", "447"],
      },
    },]
},
{
  id :"447",
  name :" Ayutayus",
  data :{
    gender :"male",
    father :"446",
  },
  "adjacencies" : [
    {
      "nodeTo":"448",
      "data" :{
          "nodeToName":'Rituparna',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["447", "448"],
      },
    },]
},
{
  id :"448",
  name :" Rituparna",
  data :{
    gender :"male",
    father :"447",
    title :"Friend of Nal raja",
  },
  "adjacencies" : [
    {
      "nodeTo":"449",
      "data" :{
          "nodeToName":'kalmaspada',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["448", "449"],
      },
    },]
},
{
  id :"449",
  name :" kalmaspada",
  data :{
    gender :"male",
    father :"448",
  },
  "adjacencies" : [
    {
      "nodeTo":"450",
      "data" :{
          "nodeToName":'Sarvakarman',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["449", "450"],
      },
    },]
},
{
  id :"450",
  name :" Sarvakarman",
  data :{
    gender :"male",
    father :"449",
  },
  "adjacencies" : [
    {
      "nodeTo":"451",
      "data" :{
          "nodeToName":'Anaranya',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["450", "451"],
      },
    },]
},
{
  id :"451",
  name :" Anaranya",
  data :{
    gender :"male",
    father :"450",
    title :"Defeted by Ravan I",
  },
  "adjacencies" : [
    {
      "nodeTo":"452",
      "data" :{
          "nodeToName":'Nighna',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["451", "452"],
      },
    },]
},
{
  id :"452",
  name :" Nighna",
  data :{
    gender :"male",
    father :"451",
  },
  "adjacencies" : [
    {
      "nodeTo":"453",
      "data" :{
          "nodeToName":'Anamitra',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["452", "453"],
      },
    },
    {
      "nodeTo":"454",
      "data" :{
          "nodeToName":'Dilip II',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["452", "454"],
      },
    },]
},
{
  id :"453",
  name :" Anamitra",
  data :{
    gender :"male",
    father :"452",
  },
  "adjacencies" : []
},
{
  id :"454",
  name :" Dilip II",
  data :{
    gender :"male",
    father :"452",
    groups :"King",
  },
  "adjacencies" : [
    {
      "nodeTo":"455",
      "data" :{
          "nodeToName":'Raghu',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["454", "455"],
      },
    },]
},
{
  id :"455",
  name :" Raghu",
  data :{
    gender :"male",
    father :"454",
    groups :"King",
  },
  "adjacencies" : [
    {
      "nodeTo":"456",
      "data" :{
          "nodeToName":'Aja',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["455", "456"],
      },
    },]
},
{
  id :"456",
  name :" Aja",
  data :{
    gender :"male",
    father :"455",
    groups :"King",
  },
  "adjacencies" : [
    {
      "nodeTo":"457",
      "data" :{
          "nodeToName":'Dashrath',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["456", "457"],
      },
    },]
},
{
  id :"457",
  name :" Dashrath",
  data :{
    gender :"male",
    father :"456",
    groups :"King",
  },
  "adjacencies" : [
    {
      "nodeTo":"458",
      "data" :{
          "nodeToName":'Ram',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["457", "458"],
      },
    },
    {
      "nodeTo":"493",
      "data" :{
          "nodeToName":'Bharat of Dashrath',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["457", "493"],
      },
    },
    {
      "nodeTo":"496",
      "data" :{
          "nodeToName":'Lakshman Saumitri',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["457", "496"],
      },
    },
    {
      "nodeTo":"497",
      "data" :{
          "nodeToName":'Shatrugna',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["457", "497"],
      },
    },
    {
      "nodeTo":"492",
      "data" :{
            "nodeToName":'KayKayi',
          "$color":"#4DB6AC",
          "relation":"wife",
          "$type":"arrow",
          "$dim":10,
          "$direction":["457", "492"],
      },
    },
    {
      "nodeTo":"498",
      "data" :{
            "nodeToName":'Sumitra',
          "$color":"#4DB6AC",
          "relation":"wife",
          "$type":"arrow",
          "$dim":10,
          "$direction":["457", "498"],
      },
    },
    {
      "nodeTo":"499",
      "data" :{
            "nodeToName":'Kaushalya',
          "$color":"#4DB6AC",
          "relation":"wife",
          "$type":"arrow",
          "$dim":10,
          "$direction":["457", "499"],
      },
    },]
},
{
  id :"458",
  name :" Ram",
  data :{
    gender :"male",
    father :"457",
    mother :"499",
    title :"Defeted Ravan",
    groups :"King,Avatar",
  },
  "adjacencies" : [
    {
      "nodeTo":"459",
      "data" :{
          "nodeToName":'Lava',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["458", "459"],
      },
    },
    {
      "nodeTo":"460",
      "data" :{
          "nodeToName":'Kush',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["458", "460"],
      },
    },
    {
      "nodeTo":"399",
      "data" :{
            "nodeToName":'Sita Mata',
          "$color":"#4DB6AC",
          "relation":"wife",
          "$type":"arrow",
          "$dim":10,
          "$direction":["458", "399"],
      },
    },
    {
      "nodeTo":"461",
      "data" :{
            "nodeToName":'Vishwamitra Kausika',
          "$color":"#FF9800",
          "relation":"guru",
          "$type":"arrow",
          "$dim":10,
          "$direction":["458", "461"],
      },
    },
    {
      "nodeTo":"370",
      "data" :{
            "nodeToName":'Vasishtha',
          "$color":"#FF9800",
          "relation":"guru",
          "$type":"arrow",
          "$dim":10,
          "$direction":["458", "370"],
      },
    },]
},
{
  id :"459",
  name :" Lava",
  data :{
    gender :"male",
    father :"458",
    mother :"399",
    title :"Built Shravasthi",
  },
  "adjacencies" : []
},
{
  id :"460",
  name :" Kush",
  data :{
    gender :"male",
    father :"458",
    mother :"399",
    title :"Built Kushavati",
  },
  "adjacencies" : []
},
{
  id :"493",
  name :" Bharat of Dashrath",
  data :{
    gender :"male",
    father :"457",
    mother :"492",
    groups :"King",
  },
  "adjacencies" : [
    {
      "nodeTo":"494",
      "data" :{
          "nodeToName":'Taksha',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["493", "494"],
      },
    },
    {
      "nodeTo":"495",
      "data" :{
          "nodeToName":'Pushkal',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["493", "495"],
      },
    },
    {
      "nodeTo":"502",
      "data" :{
            "nodeToName":'Mandavi',
          "$color":"#4DB6AC",
          "relation":"wife",
          "$type":"arrow",
          "$dim":10,
          "$direction":["493", "502"],
      },
    },]
},
{
  id :"494",
  name :" Taksha",
  data :{
    gender :"male",
    father :"493",
    mother :"502",
    title :"Built Takshashila",
  },
  "adjacencies" : []
},
{
  id :"495",
  name :" Pushkal",
  data :{
    gender :"male",
    father :"493",
    mother :"502",
    title :"Built Pushkalvati",
  },
  "adjacencies" : []
},
{
  id :"496",
  name :" Lakshman Saumitri",
  data :{
    gender :"male",
    father :"457",
    mother :"498",
  },
  "adjacencies" : [
    {
      "nodeTo":"500",
      "data" :{
            "nodeToName":'Urmila',
          "$color":"#4DB6AC",
          "relation":"wife",
          "$type":"arrow",
          "$dim":10,
          "$direction":["496", "500"],
      },
    },]
},
{
  id :"497",
  name :" Shatrugna",
  data :{
    gender :"male",
    father :"457",
    mother :"498",
  },
  "adjacencies" : [
    {
      "nodeTo":"505",
      "data" :{
          "nodeToName":'Chitraketu',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["497", "505"],
      },
    },
    {
      "nodeTo":"506",
      "data" :{
          "nodeToName":'Subahu',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["497", "506"],
      },
    },
    {
      "nodeTo":"503",
      "data" :{
            "nodeToName":'ShrutKirti',
          "$color":"#4DB6AC",
          "relation":"wife",
          "$type":"arrow",
          "$dim":10,
          "$direction":["497", "503"],
      },
    },]
},
{
  id :"505",
  name :" Chitraketu",
  data :{
    gender :"male",
    father :"497",
    mother :"503",
  },
  "adjacencies" : []
},
{
  id :"506",
  name :" Subahu",
  data :{
    gender :"male",
    father :"497",
    mother :"503",
  },
  "adjacencies" : []
},
{
  id :"427",
  name :" Dharmsena",
  data :{
    gender :"male",
    mother :"425",
  },
  "adjacencies" : []
},
{
  id :"428",
  name :" Muchukunda",
  data :{
    gender :"male",
    mother :"425",
  },
  "adjacencies" : []
},
{
  id :"429",
  name :" Satrojit",
  data :{
    gender :"male",
    mother :"425",
  },
  "adjacencies" : []
},
{
  id :"488",
  name :" Sudeva",
  data :{
    gender :"male",
    father :"418",
  },
  "adjacencies" : [
    {
      "nodeTo":"489",
      "data" :{
          "nodeToName":'Divodasa',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["488", "489"],
      },
    },]
},
{
  id :"489",
  name :" Divodasa",
  data :{
    gender :"male",
    father :"488",
    title :"Made kasi as heaven on Earth",
    groups :"King",
  },
  "adjacencies" : [
    {
      "nodeTo":"490",
      "data" :{
          "nodeToName":'Pratardann',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["489", "490"],
      },
    },]
},
{
  id :"490",
  name :" Pratardann",
  data :{
    gender :"male",
    father :"489",
  },
  "adjacencies" : []
},
{
  id :"415",
  name :" Kapilaswa",
  data :{
    gender :"male",
    father :"413",
  },
  "adjacencies" : []
},
{
  id :"416",
  name :" Chandraswa",
  data :{
    gender :"male",
    father :"413",
  },
  "adjacencies" : []
},
{
  id :"395",
  name :" Nimi",
  data :{
    gender :"male",
    father :"159",
    title :"Established videh i.e Nepal",
  },
  "adjacencies" : [
    {
      "nodeTo":"403",
      "data" :{
          "nodeToName":'Mithi',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["395", "403"],
      },
    },]
},
{
  id :"403",
  name :" Mithi",
  data :{
    gender :"male",
    father :"395",
    title :"Founded Mithila",
  },
  "adjacencies" : [
    {
      "nodeTo":"396",
      "data" :{
          "nodeToName":'Janak 1',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["403", "396"],
      },
    },]
},
{
  id :"396",
  name :" Janak 1",
  data :{
    gender :"male",
    father :"403",
    title :"Videhraj",
    groups :"King",
  },
  "adjacencies" : [
    {
      "nodeTo":"397",
      "data" :{
          "nodeToName":'Decendant of janak',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["396", "397"],
      },
    },]
},
{
  id :"397",
  name :" Decendant of janak",
  data :{
    gender :"male",
    father :"396",
    title :"Janak parampara",
  },
  "adjacencies" : [
    {
      "nodeTo":"501",
      "data" :{
          "nodeToName":'Kushdwaj',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["397", "501"],
      },
    },
    {
      "nodeTo":"398",
      "data" :{
          "nodeToName":'SirDhvaja Janak',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["397", "398"],
      },
    },]
},
{
  id :"501",
  name :" Kushdwaj",
  data :{
    gender :"male",
    father :"397",
    groups :"King",
  },
  "adjacencies" : [
    {
      "nodeTo":"502",
      "data" :{
          "nodeToName":'Mandavi',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["501", "502"],
      },
    },
    {
      "nodeTo":"503",
      "data" :{
          "nodeToName":'ShrutKirti',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["501", "503"],
      },
    },
    {
      "nodeTo":"504",
      "data" :{
            "nodeToName":'Chandrabhaga',
          "$color":"#4DB6AC",
          "relation":"wife",
          "$type":"arrow",
          "$dim":10,
          "$direction":["501", "504"],
      },
    },]
},
{
  id :"502",
  name :" Mandavi",
  data :{
    gender :"female",
    father :"501",
    mother :"504",
  },
  "adjacencies" : [
    {
      "nodeTo":"494",
      "data" :{
          "nodeToName":'Taksha',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["502", "494"],
      },
    },
    {
      "nodeTo":"495",
      "data" :{
          "nodeToName":'Pushkal',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["502", "495"],
      },
    },
    {
      "nodeTo":"493",
      "data" :{
            "nodeToName":'Bharat of Dashrath',
          "$color":"#B2DFDB",
          "relation":"husband",
          "$type":"arrow",
          "$dim":10,
          "$direction":["502", "493"],
      },
    },]
},
{
  id :"503",
  name :" ShrutKirti",
  data :{
    gender :"female",
    father :"501",
    mother :"504",
  },
  "adjacencies" : [
    {
      "nodeTo":"505",
      "data" :{
          "nodeToName":'Chitraketu',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["503", "505"],
      },
    },
    {
      "nodeTo":"506",
      "data" :{
          "nodeToName":'Subahu',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["503", "506"],
      },
    },
    {
      "nodeTo":"497",
      "data" :{
            "nodeToName":'Shatrugna',
          "$color":"#B2DFDB",
          "relation":"husband",
          "$type":"arrow",
          "$dim":10,
          "$direction":["503", "497"],
      },
    },]
},
{
  id :"398",
  name :" SirDhvaja Janak",
  data :{
    gender :"male",
    father :"397",
  },
  "adjacencies" : [
    {
      "nodeTo":"500",
      "data" :{
          "nodeToName":'Urmila',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["398", "500"],
      },
    },
    {
      "nodeTo":"399",
      "data" :{
          "nodeToName":'Sita Mata',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["398", "399"],
      },
    },]
},
{
  id :"500",
  name :" Urmila",
  data :{
    gender :"female",
    father :"398",
  },
  "adjacencies" : [
    {
      "nodeTo":"496",
      "data" :{
            "nodeToName":'Lakshman Saumitri',
          "$color":"#B2DFDB",
          "relation":"husband",
          "$type":"arrow",
          "$dim":10,
          "$direction":["500", "496"],
      },
    },]
},
{
  id :"399",
  name :" Sita Mata",
  data :{
    gender :"female",
    father :"398",
    groups :"Devi",
  },
  "adjacencies" : [
    {
      "nodeTo":"459",
      "data" :{
          "nodeToName":'Lava',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["399", "459"],
      },
    },
    {
      "nodeTo":"460",
      "data" :{
          "nodeToName":'Kush',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["399", "460"],
      },
    },
    {
      "nodeTo":"458",
      "data" :{
            "nodeToName":'Ram',
          "$color":"#B2DFDB",
          "relation":"husband",
          "$type":"arrow",
          "$dim":10,
          "$direction":["399", "458"],
      },
    },]
},
{
  id :"160",
  name :" Karush",
  data :{
    gender :"male",
    father :"153",
  },
  "adjacencies" : []
},
{
  id :"161",
  name :" Sharyati",
  data :{
    gender :"male",
    father :"153",
  },
  "adjacencies" : []
},
{
  id :"162",
  name :" ila",
  data :{
    gender :"female",
    father :"153",
  },
  "adjacencies" : [
    {
      "nodeTo":"165",
      "data" :{
          "nodeToName":'Pururava',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["162", "165"],
      },
    },]
},
{
  id :"165",
  name :" Pururava",
  data :{
    gender :"male",
    mother :"162",
    title :"Built Pratishtan",
  },
  "adjacencies" : [
    {
      "nodeTo":"462",
      "data" :{
          "nodeToName":'Srutayu',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["165", "462"],
      },
    },
    {
      "nodeTo":"463",
      "data" :{
          "nodeToName":'Styayu',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["165", "463"],
      },
    },
    {
      "nodeTo":"464",
      "data" :{
          "nodeToName":'Raya',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["165", "464"],
      },
    },
    {
      "nodeTo":"465",
      "data" :{
          "nodeToName":'Vijaya',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["165", "465"],
      },
    },
    {
      "nodeTo":"466",
      "data" :{
          "nodeToName":'Jay',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["165", "466"],
      },
    },
    {
      "nodeTo":"167",
      "data" :{
          "nodeToName":'Aayu',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["165", "167"],
      },
    },
    {
      "nodeTo":"166",
      "data" :{
            "nodeToName":'Urvashi',
          "$color":"#4DB6AC",
          "relation":"wife",
          "$type":"arrow",
          "$dim":10,
          "$direction":["165", "166"],
      },
    },]
},
{
  id :"462",
  name :" Srutayu",
  data :{
    gender :"male",
    father :"165",
    mother :"166",
  },
  "adjacencies" : [
    {
      "nodeTo":"467",
      "data" :{
          "nodeToName":'Vasuman',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["462", "467"],
      },
    },]
},
{
  id :"467",
  name :" Vasuman",
  data :{
    gender :"male",
    father :"462",
  },
  "adjacencies" : []
},
{
  id :"463",
  name :" Styayu",
  data :{
    gender :"male",
    father :"165",
    mother :"166",
  },
  "adjacencies" : [
    {
      "nodeTo":"468",
      "data" :{
          "nodeToName":'Srutanjaya',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["463", "468"],
      },
    },]
},
{
  id :"468",
  name :" Srutanjaya",
  data :{
    gender :"male",
    father :"463",
  },
  "adjacencies" : []
},
{
  id :"464",
  name :" Raya",
  data :{
    gender :"male",
    father :"165",
    mother :"166",
  },
  "adjacencies" : [
    {
      "nodeTo":"469",
      "data" :{
          "nodeToName":'Eka',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["464", "469"],
      },
    },]
},
{
  id :"469",
  name :" Eka",
  data :{
    gender :"male",
    father :"464",
  },
  "adjacencies" : []
},
{
  id :"465",
  name :" Vijaya",
  data :{
    gender :"male",
    father :"165",
    mother :"166",
  },
  "adjacencies" : []
},
{
  id :"466",
  name :" Jay",
  data :{
    gender :"male",
    father :"165",
    mother :"166",
  },
  "adjacencies" : [
    {
      "nodeTo":"470",
      "data" :{
          "nodeToName":'Amita',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["466", "470"],
      },
    },]
},
{
  id :"470",
  name :" Amita",
  data :{
    gender :"male",
    father :"466",
  },
  "adjacencies" : [
    {
      "nodeTo":"471",
      "data" :{
          "nodeToName":'Bhima of Amita',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["470", "471"],
      },
    },]
},
{
  id :"471",
  name :" Bhima of Amita",
  data :{
    gender :"male",
    father :"470",
  },
  "adjacencies" : [
    {
      "nodeTo":"472",
      "data" :{
          "nodeToName":'Kankan',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["471", "472"],
      },
    },]
},
{
  id :"472",
  name :" Kankan",
  data :{
    gender :"male",
    father :"471",
  },
  "adjacencies" : [
    {
      "nodeTo":"473",
      "data" :{
          "nodeToName":'Hotraka',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["472", "473"],
      },
    },]
},
{
  id :"473",
  name :" Hotraka",
  data :{
    gender :"male",
    father :"472",
  },
  "adjacencies" : [
    {
      "nodeTo":"474",
      "data" :{
          "nodeToName":'Jahnu',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["473", "474"],
      },
    },]
},
{
  id :"474",
  name :" Jahnu",
  data :{
    gender :"male",
    father :"473",
    title :"Who drink Ganga in one sip to bring to his kingdom, Ganga is named jhanvi",
  },
  "adjacencies" : [
    {
      "nodeTo":"475",
      "data" :{
          "nodeToName":'Puru of jahnu',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["474", "475"],
      },
    },]
},
{
  id :"475",
  name :" Puru of jahnu",
  data :{
    gender :"male",
    father :"474",
  },
  "adjacencies" : [
    {
      "nodeTo":"476",
      "data" :{
          "nodeToName":'Balaka',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["475", "476"],
      },
    },]
},
{
  id :"476",
  name :" Balaka",
  data :{
    gender :"male",
    father :"475",
  },
  "adjacencies" : [
    {
      "nodeTo":"477",
      "data" :{
          "nodeToName":'Ajaka',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["476", "477"],
      },
    },]
},
{
  id :"477",
  name :" Ajaka",
  data :{
    gender :"male",
    father :"476",
  },
  "adjacencies" : [
    {
      "nodeTo":"478",
      "data" :{
          "nodeToName":'Kusa',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["477", "478"],
      },
    },]
},
{
  id :"478",
  name :" Kusa",
  data :{
    gender :"male",
    father :"477",
    title :"Lived near river Kusa",
  },
  "adjacencies" : [
    {
      "nodeTo":"479",
      "data" :{
          "nodeToName":'Kusambha',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["478", "479"],
      },
    },
    {
      "nodeTo":"480",
      "data" :{
          "nodeToName":'Tanaya',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["478", "480"],
      },
    },
    {
      "nodeTo":"481",
      "data" :{
          "nodeToName":'Vasu of kusa',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["478", "481"],
      },
    },
    {
      "nodeTo":"482",
      "data" :{
          "nodeToName":'kusanbha',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["478", "482"],
      },
    },]
},
{
  id :"479",
  name :" Kusambha",
  data :{
    gender :"male",
    father :"478",
  },
  "adjacencies" : []
},
{
  id :"480",
  name :" Tanaya",
  data :{
    gender :"male",
    father :"478",
  },
  "adjacencies" : []
},
{
  id :"481",
  name :" Vasu of kusa",
  data :{
    gender :"male",
    father :"478",
  },
  "adjacencies" : []
},
{
  id :"482",
  name :" kusanbha",
  data :{
    gender :"male",
    father :"478",
  },
  "adjacencies" : [
    {
      "nodeTo":"483",
      "data" :{
          "nodeToName":'Gadhi',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["482", "483"],
      },
    },]
},
{
  id :"483",
  name :" Gadhi",
  data :{
    gender :"male",
    father :"482",
  },
  "adjacencies" : [
    {
      "nodeTo":"461",
      "data" :{
          "nodeToName":'Vishwamitra Kausika',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["483", "461"],
      },
    },
    {
      "nodeTo":"484",
      "data" :{
          "nodeToName":'Satyavati of Gadhi',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["483", "484"],
      },
    },]
},
{
  id :"461",
  name :" Vishwamitra Kausika",
  data :{
    gender :"male",
    father :"483",
    title :"The citer or Gayatri Mantra, Made pratisrushti",
    groups :"Maharshi",
  },
  "adjacencies" : [
    {
      "nodeTo":"35",
      "data" :{
          "nodeToName":'shakuntala',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["461", "35"],
      },
    },]
},
{
  id :"484",
  name :" Satyavati of Gadhi",
  data :{
    gender :"female",
    father :"483",
  },
  "adjacencies" : [
    {
      "nodeTo":"302",
      "data" :{
          "nodeToName":'Jamadagni',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["484", "302"],
      },
    },
    {
      "nodeTo":"298",
      "data" :{
            "nodeToName":'Ruchik',
          "$color":"#B2DFDB",
          "relation":"husband",
          "$type":"arrow",
          "$dim":10,
          "$direction":["484", "298"],
      },
    },]
},
{
  id :"167",
  name :" Aayu",
  data :{
    gender :"male",
    father :"165",
    mother :"166",
    title :"King of Pratishthan",
  },
  "adjacencies" : [
    {
      "nodeTo":"169",
      "data" :{
          "nodeToName":'Nahush',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["167", "169"],
      },
    },
    {
      "nodeTo":"168",
      "data" :{
            "nodeToName":'sarvabhavani',
          "$color":"#4DB6AC",
          "relation":"wife",
          "$type":"arrow",
          "$dim":10,
          "$direction":["167", "168"],
      },
    },]
},
{
  id :"169",
  name :" Nahush",
  data :{
    gender :"male",
    father :"167",
    mother :"168",
    title :"Indra",
    groups :"Indra",
  },
  "adjacencies" : [
    {
      "nodeTo":"170",
      "data" :{
          "nodeToName":'Yati',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["169", "170"],
      },
    },
    {
      "nodeTo":"171",
      "data" :{
          "nodeToName":'yayati',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["169", "171"],
      },
    },
    {
      "nodeTo":"172",
      "data" :{
          "nodeToName":'samyati',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["169", "172"],
      },
    },
    {
      "nodeTo":"173",
      "data" :{
          "nodeToName":'Raji',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["169", "173"],
      },
    },
    {
      "nodeTo":"174",
      "data" :{
          "nodeToName":'gay',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["169", "174"],
      },
    },
    {
      "nodeTo":"175",
      "data" :{
          "nodeToName":'anena',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["169", "175"],
      },
    },]
},
{
  id :"170",
  name :" Yati",
  data :{
    gender :"male",
    father :"169",
  },
  "adjacencies" : []
},
{
  id :"171",
  name :" yayati",
  data :{
    gender :"male",
    father :"169",
    title :"Wanted to be young forever",
  },
  "adjacencies" : [
    {
      "nodeTo":"508",
      "data" :{
          "nodeToName":'Yadu',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["171", "508"],
      },
    },
    {
      "nodeTo":"486",
      "data" :{
          "nodeToName":'Madhavi',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["171", "486"],
      },
    },
    {
      "nodeTo":"177",
      "data" :{
          "nodeToName":'tarvashu',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["171", "177"],
      },
    },
    {
      "nodeTo":"179",
      "data" :{
          "nodeToName":'Druhyu',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["171", "179"],
      },
    },
    {
      "nodeTo":"180",
      "data" :{
          "nodeToName":'anu',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["171", "180"],
      },
    },
    {
      "nodeTo":"181",
      "data" :{
          "nodeToName":'Puru',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["171", "181"],
      },
    },
    {
      "nodeTo":"176",
      "data" :{
            "nodeToName":'devyani',
          "$color":"#4DB6AC",
          "relation":"wife",
          "$type":"arrow",
          "$dim":10,
          "$direction":["171", "176"],
      },
    },
    {
      "nodeTo":"178",
      "data" :{
            "nodeToName":'Sarmishtha',
          "$color":"#4DB6AC",
          "relation":"wife",
          "$type":"arrow",
          "$dim":10,
          "$direction":["171", "178"],
      },
    },]
},
{
  id :"508",
  name :" Yadu",
  data :{
    gender :"male",
    father :"171",
    groups :"yaduvansh",
  },
  "adjacencies" : [
    {
      "nodeTo":"509",
      "data" :{
          "nodeToName":'Sahastrarjun',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["508", "509"],
      },
    },]
},
{
  id :"509",
  name :" Sahastrarjun",
  data :{
    gender :"male",
    father :"508",
    title :"Kartyaveer arjun Defeated Ravana, Killed by parshuram",
    groups :"King",
  },
  "adjacencies" : [
    {
      "nodeTo":"510",
      "data" :{
          "nodeToName":'Desendent of yaduvansh',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["509", "510"],
      },
    },]
},
{
  id :"510",
  name :" Desendent of yaduvansh",
  data :{
    gender :"male",
    father :"509",
  },
  "adjacencies" : [
    {
      "nodeTo":"355",
      "data" :{
          "nodeToName":'Shursen',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["510", "355"],
      },
    },]
},
{
  id :"355",
  name :" Shursen",
  data :{
    gender :"male",
    father :"510",
    groups :"yaduvansh",
  },
  "adjacencies" : [
    {
      "nodeTo":"233",
      "data" :{
          "nodeToName":'Kunti or Pritha',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["355", "233"],
      },
    },
    {
      "nodeTo":"356",
      "data" :{
          "nodeToName":'Vasudev',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["355", "356"],
      },
    },]
},
{
  id :"233",
  name :" Kunti or Pritha",
  data :{
    gender :"female",
    father :"355,358",
  },
  "adjacencies" : [
    {
      "nodeTo":"235",
      "data" :{
          "nodeToName":'Arjun',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["233", "235"],
      },
    },
    {
      "nodeTo":"236",
      "data" :{
          "nodeToName":'Yudhishthir',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["233", "236"],
      },
    },
    {
      "nodeTo":"237",
      "data" :{
          "nodeToName":'bhim',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["233", "237"],
      },
    },
    {
      "nodeTo":"240",
      "data" :{
          "nodeToName":'Karna  or vasushen or Vaikartan',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["233", "240"],
      },
    },
    {
      "nodeTo":"232",
      "data" :{
            "nodeToName":'Pandu',
          "$color":"#B2DFDB",
          "relation":"husband",
          "$type":"arrow",
          "$dim":10,
          "$direction":["233", "232"],
      },
    },]
},
{
  id :"235",
  name :" Arjun",
  data :{
    gender :"male",
    father :"232",
    mother :"233",
    groups :"Pandav",
  },
  "adjacencies" : [
    {
      "nodeTo":"251",
      "data" :{
          "nodeToName":'Babhruvahan',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["235", "251"],
      },
    },
    {
      "nodeTo":"252",
      "data" :{
          "nodeToName":'Abhimanyu',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["235", "252"],
      },
    },
    {
      "nodeTo":"255",
      "data" :{
          "nodeToName":'ShrutKirti',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["235", "255"],
      },
    },
    {
      "nodeTo":"258",
      "data" :{
          "nodeToName":'Idavan',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["235", "258"],
      },
    },
    {
      "nodeTo":"242",
      "data" :{
            "nodeToName":'Chitrangada',
          "$color":"#4DB6AC",
          "relation":"wife",
          "$type":"arrow",
          "$dim":10,
          "$direction":["235", "242"],
      },
    },
    {
      "nodeTo":"243",
      "data" :{
            "nodeToName":'Subhadra',
          "$color":"#4DB6AC",
          "relation":"wife",
          "$type":"arrow",
          "$dim":10,
          "$direction":["235", "243"],
      },
    },
    {
      "nodeTo":"244",
      "data" :{
            "nodeToName":'Draupadi',
          "$color":"#4DB6AC",
          "relation":"wife",
          "$type":"arrow",
          "$dim":10,
          "$direction":["235", "244"],
      },
    },
    {
      "nodeTo":"245",
      "data" :{
            "nodeToName":'Ulupi',
          "$color":"#4DB6AC",
          "relation":"wife",
          "$type":"arrow",
          "$dim":10,
          "$direction":["235", "245"],
      },
    },]
},
{
  id :"251",
  name :" Babhruvahan",
  data :{
    gender :"male",
    father :"235",
    mother :"242",
  },
  "adjacencies" : []
},
{
  id :"252",
  name :" Abhimanyu",
  data :{
    gender :"male",
    father :"235",
    mother :"243",
  },
  "adjacencies" : [
    {
      "nodeTo":"265",
      "data" :{
          "nodeToName":'parikshit',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["252", "265"],
      },
    },
    {
      "nodeTo":"264",
      "data" :{
            "nodeToName":'Uttara',
          "$color":"#4DB6AC",
          "relation":"wife",
          "$type":"arrow",
          "$dim":10,
          "$direction":["252", "264"],
      },
    },]
},
{
  id :"265",
  name :" parikshit",
  data :{
    gender :"male",
    father :"252",
    mother :"264",
    groups :"King",
  },
  "adjacencies" : [
    {
      "nodeTo":"266",
      "data" :{
          "nodeToName":'Shrutsen',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["265", "266"],
      },
    },
    {
      "nodeTo":"267",
      "data" :{
          "nodeToName":'Ugrasen',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["265", "267"],
      },
    },
    {
      "nodeTo":"268",
      "data" :{
          "nodeToName":'Bhimsen',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["265", "268"],
      },
    },
    {
      "nodeTo":"270",
      "data" :{
          "nodeToName":'janmejay',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["265", "270"],
      },
    },
    {
      "nodeTo":"269",
      "data" :{
            "nodeToName":'Madravati',
          "$color":"#4DB6AC",
          "relation":"wife",
          "$type":"arrow",
          "$dim":10,
          "$direction":["265", "269"],
      },
    },]
},
{
  id :"266",
  name :" Shrutsen",
  data :{
    gender :"male",
    father :"265",
  },
  "adjacencies" : []
},
{
  id :"267",
  name :" Ugrasen",
  data :{
    gender :"male",
    father :"265",
  },
  "adjacencies" : []
},
{
  id :"268",
  name :" Bhimsen",
  data :{
    gender :"male",
    father :"265",
  },
  "adjacencies" : []
},
{
  id :"270",
  name :" janmejay",
  data :{
    gender :"male",
    father :"265",
    mother :"269",
    groups :"King",
  },
  "adjacencies" : [
    {
      "nodeTo":"271",
      "data" :{
          "nodeToName":'Bahushtama',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["270", "271"],
      },
    },]
},
{
  id :"271",
  name :" Bahushtama",
  data :{
    gender :"male",
    father :"270",
  },
  "adjacencies" : [
    {
      "nodeTo":"272",
      "data" :{
          "nodeToName":'shatanik',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["271", "272"],
      },
    },
    {
      "nodeTo":"273",
      "data" :{
          "nodeToName":'shankukarna',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["271", "273"],
      },
    },]
},
{
  id :"272",
  name :" shatanik",
  data :{
    gender :"male",
    father :"271",
  },
  "adjacencies" : [
    {
      "nodeTo":"274",
      "data" :{
          "nodeToName":'ashmeghadatta',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["272", "274"],
      },
    },]
},
{
  id :"274",
  name :" ashmeghadatta",
  data :{
    gender :"male",
    father :"272",
  },
  "adjacencies" : []
},
{
  id :"273",
  name :" shankukarna",
  data :{
    gender :"male",
    father :"271",
  },
  "adjacencies" : []
},
{
  id :"255",
  name :" ShrutKirti",
  data :{
    gender :"male",
    father :"235",
    mother :"244",
  },
  "adjacencies" : []
},
{
  id :"258",
  name :" Idavan",
  data :{
    gender :"male",
    father :"235",
    mother :"245",
  },
  "adjacencies" : []
},
{
  id :"236",
  name :" Yudhishthir",
  data :{
    gender :"male",
    father :"232",
    mother :"233",
    groups :"King,Pandav",
  },
  "adjacencies" : [
    {
      "nodeTo":"253",
      "data" :{
          "nodeToName":'Prativindhya',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["236", "253"],
      },
    },
    {
      "nodeTo":"259",
      "data" :{
          "nodeToName":'Yodhey',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["236", "259"],
      },
    },
    {
      "nodeTo":"244",
      "data" :{
            "nodeToName":'Draupadi',
          "$color":"#4DB6AC",
          "relation":"wife",
          "$type":"arrow",
          "$dim":10,
          "$direction":["236", "244"],
      },
    },
    {
      "nodeTo":"246",
      "data" :{
            "nodeToName":'Devika',
          "$color":"#4DB6AC",
          "relation":"wife",
          "$type":"arrow",
          "$dim":10,
          "$direction":["236", "246"],
      },
    },]
},
{
  id :"253",
  name :" Prativindhya",
  data :{
    gender :"male",
    father :"236",
    mother :"244",
  },
  "adjacencies" : []
},
{
  id :"259",
  name :" Yodhey",
  data :{
    gender :"male",
    father :"236",
    mother :"246",
  },
  "adjacencies" : []
},
{
  id :"237",
  name :" bhim",
  data :{
    gender :"male",
    father :"232",
    mother :"233",
    groups :"Pandav",
  },
  "adjacencies" : [
    {
      "nodeTo":"254",
      "data" :{
          "nodeToName":'Sutsome',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["237", "254"],
      },
    },
    {
      "nodeTo":"260",
      "data" :{
          "nodeToName":'Sarvag',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["237", "260"],
      },
    },
    {
      "nodeTo":"261",
      "data" :{
          "nodeToName":'Ghatotkach',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["237", "261"],
      },
    },
    {
      "nodeTo":"244",
      "data" :{
            "nodeToName":'Draupadi',
          "$color":"#4DB6AC",
          "relation":"wife",
          "$type":"arrow",
          "$dim":10,
          "$direction":["237", "244"],
      },
    },
    {
      "nodeTo":"247",
      "data" :{
            "nodeToName":'Balandhara',
          "$color":"#4DB6AC",
          "relation":"wife",
          "$type":"arrow",
          "$dim":10,
          "$direction":["237", "247"],
      },
    },
    {
      "nodeTo":"248",
      "data" :{
            "nodeToName":'Hidamba',
          "$color":"#4DB6AC",
          "relation":"wife",
          "$type":"arrow",
          "$dim":10,
          "$direction":["237", "248"],
      },
    },]
},
{
  id :"254",
  name :" Sutsome",
  data :{
    gender :"male",
    father :"237",
    mother :"244",
  },
  "adjacencies" : []
},
{
  id :"260",
  name :" Sarvag",
  data :{
    gender :"male",
    father :"237",
    mother :"247",
  },
  "adjacencies" : []
},
{
  id :"261",
  name :" Ghatotkach",
  data :{
    gender :"male",
    father :"237",
    mother :"248",
  },
  "adjacencies" : []
},
{
  id :"240",
  name :" Karna  or vasushen or Vaikartan",
  data :{
    gender :"male",
    father :"241,360",
    mother :"233,359",
  },
  "adjacencies" : []
},
{
  id :"356",
  name :" Vasudev",
  data :{
    gender :"male",
    father :"355",
    groups :"yaduvansh",
  },
  "adjacencies" : [
    {
      "nodeTo":"362",
      "data" :{
          "nodeToName":'Krushna',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["356", "362"],
      },
    },
    {
      "nodeTo":"363",
      "data" :{
            "nodeToName":'Devaki',
          "$color":"#4DB6AC",
          "relation":"wife",
          "$type":"arrow",
          "$dim":10,
          "$direction":["356", "363"],
      },
    },]
},
{
  id :"362",
  name :" Krushna",
  data :{
    gender :"male",
    father :"356",
    mother :"363",
    groups :"Avatar",
  },
  "adjacencies" : [
    {
      "nodeTo":"512",
      "data" :{
          "nodeToName":'Pradyumna',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["362", "512"],
      },
    },
    {
      "nodeTo":"515",
      "data" :{
          "nodeToName":'Samba',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["362", "515"],
      },
    },
    {
      "nodeTo":"366",
      "data" :{
            "nodeToName":'Rukmanidevi',
          "$color":"#4DB6AC",
          "relation":"wife",
          "$type":"arrow",
          "$dim":10,
          "$direction":["362", "366"],
      },
    },
    {
      "nodeTo":"513",
      "data" :{
            "nodeToName":'Satyabhama',
          "$color":"#4DB6AC",
          "relation":"wife",
          "$type":"arrow",
          "$dim":10,
          "$direction":["362", "513"],
      },
    },
    {
      "nodeTo":"514",
      "data" :{
            "nodeToName":'Jambavati',
          "$color":"#4DB6AC",
          "relation":"wife",
          "$type":"arrow",
          "$dim":10,
          "$direction":["362", "514"],
      },
    },]
},
{
  id :"512",
  name :" Pradyumna",
  data :{
    gender :"male",
    father :"362",
    mother :"366",
    title :"Ruled in Indraprastha after dwarka was down",
  },
  "adjacencies" : [
    {
      "nodeTo":"511",
      "data" :{
          "nodeToName":'Aniruddha',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["512", "511"],
      },
    },]
},
{
  id :"511",
  name :" Aniruddha",
  data :{
    gender :"male",
    father :"512",
  },
  "adjacencies" : []
},
{
  id :"486",
  name :" Madhavi",
  data :{
    gender :"female",
    father :"171",
  },
  "adjacencies" : [
    {
      "nodeTo":"487",
      "data" :{
          "nodeToName":'Shibi',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["486", "487"],
      },
    },]
},
{
  id :"487",
  name :" Shibi",
  data :{
    gender :"male",
    father :"333",
    mother :"486",
    title :"Willingly offered flesh to agni dev in rupa of eagle",
    groups :"King",
  },
  "adjacencies" : [
    {
      "nodeTo":"491",
      "data" :{
          "nodeToName":'Kekey',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["487", "491"],
      },
    },]
},
{
  id :"491",
  name :" Kekey",
  data :{
    gender :"male",
    father :"487",
  },
  "adjacencies" : [
    {
      "nodeTo":"492",
      "data" :{
          "nodeToName":'KayKayi',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["491", "492"],
      },
    },]
},
{
  id :"492",
  name :" KayKayi",
  data :{
    gender :"female",
    father :"491",
    title :"The most Beautiful",
  },
  "adjacencies" : [
    {
      "nodeTo":"493",
      "data" :{
          "nodeToName":'Bharat of Dashrath',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["492", "493"],
      },
    },
    {
      "nodeTo":"457",
      "data" :{
            "nodeToName":'Dashrath',
          "$color":"#B2DFDB",
          "relation":"husband",
          "$type":"arrow",
          "$dim":10,
          "$direction":["492", "457"],
      },
    },]
},
{
  id :"177",
  name :" tarvashu",
  data :{
    gender :"male",
    father :"171",
    mother :"176",
  },
  "adjacencies" : []
},
{
  id :"179",
  name :" Druhyu",
  data :{
    gender :"male",
    father :"171",
    mother :"178",
  },
  "adjacencies" : [
    {
      "nodeTo":"507",
      "data" :{
          "nodeToName":'Gandhar',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["179", "507"],
      },
    },]
},
{
  id :"507",
  name :" Gandhar",
  data :{
    gender :"male",
    father :"179",
    title :"Built Gandhar",
  },
  "adjacencies" : [
    {
      "nodeTo":"231",
      "data" :{
          "nodeToName":'Gandhari',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["507", "231"],
      },
    },]
},
{
  id :"231",
  name :" Gandhari",
  data :{
    gender :"female",
    father :"507",
  },
  "adjacencies" : [
    {
      "nodeTo":"347",
      "data" :{
          "nodeToName":'dushala',
          "$color":"#E91E63",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["231", "347"],
      },
    },
    {
      "nodeTo":"227",
      "data" :{
          "nodeToName":'Duryodhan',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["231", "227"],
      },
    },
    {
      "nodeTo":"228",
      "data" :{
          "nodeToName":'Duhshashan',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["231", "228"],
      },
    },
    {
      "nodeTo":"229",
      "data" :{
          "nodeToName":'Vikarna',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["231", "229"],
      },
    },
    {
      "nodeTo":"230",
      "data" :{
          "nodeToName":'Chitrasen',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["231", "230"],
      },
    },
    {
      "nodeTo":"226",
      "data" :{
            "nodeToName":'Dhrutrashtra',
          "$color":"#B2DFDB",
          "relation":"husband",
          "$type":"arrow",
          "$dim":10,
          "$direction":["231", "226"],
      },
    },]
},
{
  id :"347",
  name :" dushala",
  data :{
    gender :"female",
    father :"226",
    mother :"231",
  },
  "adjacencies" : [
    {
      "nodeTo":"348",
      "data" :{
            "nodeToName":'Jaydrath',
          "$color":"#B2DFDB",
          "relation":"husband",
          "$type":"arrow",
          "$dim":10,
          "$direction":["347", "348"],
      },
    },]
},
{
  id :"227",
  name :" Duryodhan",
  data :{
    gender :"male",
    father :"226",
    mother :"231",
    groups :"Kaurav",
  },
  "adjacencies" : []
},
{
  id :"228",
  name :" Duhshashan",
  data :{
    gender :"male",
    father :"226",
    mother :"231",
    groups :"Kaurav",
  },
  "adjacencies" : []
},
{
  id :"229",
  name :" Vikarna",
  data :{
    gender :"male",
    father :"226",
    mother :"231",
    groups :"Kaurav",
  },
  "adjacencies" : []
},
{
  id :"230",
  name :" Chitrasen",
  data :{
    gender :"male",
    father :"226",
    mother :"231",
    groups :"Kaurav",
  },
  "adjacencies" : []
},
{
  id :"180",
  name :" anu",
  data :{
    gender :"male",
    father :"171",
    mother :"178",
  },
  "adjacencies" : []
},
{
  id :"181",
  name :" Puru",
  data :{
    gender :"male",
    father :"171",
    mother :"178",
    title :"Gave his youth to his father yayati",
    groups :"puru",
  },
  "adjacencies" : [
    {
      "nodeTo":"182",
      "data" :{
          "nodeToName":'janmejay',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["181", "182"],
      },
    },]
},
{
  id :"182",
  name :" janmejay",
  data :{
    gender :"male",
    father :"181",
  },
  "adjacencies" : [
    {
      "nodeTo":"183",
      "data" :{
          "nodeToName":'prachinvan',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["182", "183"],
      },
    },]
},
{
  id :"183",
  name :" prachinvan",
  data :{
    gender :"male",
    father :"182",
  },
  "adjacencies" : [
    {
      "nodeTo":"184",
      "data" :{
          "nodeToName":'sanyati',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["183", "184"],
      },
    },]
},
{
  id :"184",
  name :" sanyati",
  data :{
    gender :"male",
    father :"183",
  },
  "adjacencies" : [
    {
      "nodeTo":"185",
      "data" :{
          "nodeToName":'ahmyati',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["184", "185"],
      },
    },]
},
{
  id :"185",
  name :" ahmyati",
  data :{
    gender :"male",
    father :"184",
  },
  "adjacencies" : [
    {
      "nodeTo":"186",
      "data" :{
          "nodeToName":'sarvabhom',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["185", "186"],
      },
    },]
},
{
  id :"186",
  name :" sarvabhom",
  data :{
    gender :"male",
    father :"185",
  },
  "adjacencies" : [
    {
      "nodeTo":"187",
      "data" :{
          "nodeToName":'jaytsen',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["186", "187"],
      },
    },]
},
{
  id :"187",
  name :" jaytsen",
  data :{
    gender :"male",
    father :"186",
  },
  "adjacencies" : [
    {
      "nodeTo":"188",
      "data" :{
          "nodeToName":'avachin',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["187", "188"],
      },
    },]
},
{
  id :"188",
  name :" avachin",
  data :{
    gender :"male",
    father :"187",
  },
  "adjacencies" : [
    {
      "nodeTo":"189",
      "data" :{
          "nodeToName":'arih',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["188", "189"],
      },
    },]
},
{
  id :"189",
  name :" arih",
  data :{
    gender :"male",
    father :"188",
  },
  "adjacencies" : [
    {
      "nodeTo":"190",
      "data" :{
          "nodeToName":'mahabhom',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["189", "190"],
      },
    },]
},
{
  id :"190",
  name :" mahabhom",
  data :{
    gender :"male",
    father :"189",
  },
  "adjacencies" : [
    {
      "nodeTo":"191",
      "data" :{
          "nodeToName":'aytnai',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["190", "191"],
      },
    },]
},
{
  id :"191",
  name :" aytnai",
  data :{
    gender :"male",
    father :"190",
  },
  "adjacencies" : [
    {
      "nodeTo":"192",
      "data" :{
          "nodeToName":'akrodhan',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["191", "192"],
      },
    },]
},
{
  id :"192",
  name :" akrodhan",
  data :{
    gender :"male",
    father :"191",
  },
  "adjacencies" : [
    {
      "nodeTo":"193",
      "data" :{
          "nodeToName":'devatithi',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["192", "193"],
      },
    },]
},
{
  id :"193",
  name :" devatithi",
  data :{
    gender :"male",
    father :"192",
  },
  "adjacencies" : [
    {
      "nodeTo":"194",
      "data" :{
          "nodeToName":'arih',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["193", "194"],
      },
    },]
},
{
  id :"194",
  name :" arih",
  data :{
    gender :"male",
    father :"193",
  },
  "adjacencies" : [
    {
      "nodeTo":"195",
      "data" :{
          "nodeToName":'ruksha',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["194", "195"],
      },
    },]
},
{
  id :"195",
  name :" ruksha",
  data :{
    gender :"male",
    father :"194",
  },
  "adjacencies" : [
    {
      "nodeTo":"196",
      "data" :{
          "nodeToName":'matinar',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["195", "196"],
      },
    },]
},
{
  id :"196",
  name :" matinar",
  data :{
    gender :"male",
    father :"195",
  },
  "adjacencies" : [
    {
      "nodeTo":"197",
      "data" :{
          "nodeToName":'tamsu',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["196", "197"],
      },
    },]
},
{
  id :"197",
  name :" tamsu",
  data :{
    gender :"male",
    father :"196",
  },
  "adjacencies" : [
    {
      "nodeTo":"198",
      "data" :{
          "nodeToName":'ilin',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["197", "198"],
      },
    },]
},
{
  id :"198",
  name :" ilin",
  data :{
    gender :"male",
    father :"197",
  },
  "adjacencies" : [
    {
      "nodeTo":"199",
      "data" :{
          "nodeToName":'dushyant',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["198", "199"],
      },
    },]
},
{
  id :"199",
  name :" dushyant",
  data :{
    gender :"male",
    father :"198",
    title :"King of hastinapur, Was defeated by ravan I",
  },
  "adjacencies" : [
    {
      "nodeTo":"200",
      "data" :{
          "nodeToName":'bharat',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["199", "200"],
      },
    },
    {
      "nodeTo":"35",
      "data" :{
            "nodeToName":'shakuntala',
          "$color":"#4DB6AC",
          "relation":"wife",
          "$type":"arrow",
          "$dim":10,
          "$direction":["199", "35"],
      },
    },]
},
{
  id :"172",
  name :" samyati",
  data :{
    gender :"male",
    father :"169",
  },
  "adjacencies" : []
},
{
  id :"173",
  name :" Raji",
  data :{
    gender :"male",
    father :"169",
  },
  "adjacencies" : []
},
{
  id :"174",
  name :" gay",
  data :{
    gender :"male",
    father :"169",
  },
  "adjacencies" : []
},
{
  id :"175",
  name :" anena",
  data :{
    gender :"male",
    father :"169",
  },
  "adjacencies" : []
},
{
  id :"163",
  name :" Prushadh",
  data :{
    gender :"male",
    father :"153",
  },
  "adjacencies" : []
},
{
  id :"164",
  name :" Nabhagrishtha",
  data :{
    gender :"male",
    father :"153",
  },
  "adjacencies" : []
},
{
  id :"154",
  name :" Yamraj",
  data :{
    gender :"male",
    father :"149",
    groups :"Dev",
  },
  "adjacencies" : []
},
{
  id :"150",
  name :" pusha",
  data :{
    gender :"male",
    mother :"50",
    groups :"12 Aaditya",
  },
  "adjacencies" : []
},
{
  id :"151",
  name :" Savita",
  data :{
    gender :"female",
    mother :"50",
    groups :"12 Aaditya",
  },
  "adjacencies" : []
},
{
  id :"152",
  name :" Tvashta",
  data :{
    gender :"female",
    mother :"50",
    groups :"12 Aaditya",
  },
  "adjacencies" : [
    {
      "nodeTo":"305",
      "data" :{
          "nodeToName":'Sangya or Saravyu or Vadavarupdharini',
          "$color":"#E91E63",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["152", "305"],
      },
    },]
},
{
  id :"305",
  name :" Sangya or Saravyu or Vadavarupdharini",
  data :{
    gender :"female",
    mother :"152",
  },
  "adjacencies" : [
    {
      "nodeTo":"306",
      "data" :{
          "nodeToName":'Ashvinikumar',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["305", "306"],
      },
    },
    {
      "nodeTo":"241",
      "data" :{
            "nodeToName":'surya',
          "$color":"#B2DFDB",
          "relation":"husband",
          "$type":"arrow",
          "$dim":10,
          "$direction":["305", "241"],
      },
    },]
},
{
  id :"306",
  name :" Ashvinikumar",
  data :{
    gender :"male",
    father :"241",
    mother :"305",
  },
  "adjacencies" : []
},
{
  id :"10",
  name :" dharm",
  data :{
    gender :"male",
    father :"393",
    groups :"Dev",
  },
  "adjacencies" : [
    {
      "nodeTo":"276",
      "data" :{
          "nodeToName":'Dhar',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["10", "276"],
      },
    },
    {
      "nodeTo":"277",
      "data" :{
          "nodeToName":'Dhruv',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["10", "277"],
      },
    },
    {
      "nodeTo":"278",
      "data" :{
          "nodeToName":'Som',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["10", "278"],
      },
    },
    {
      "nodeTo":"279",
      "data" :{
          "nodeToName":'Aha',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["10", "279"],
      },
    },
    {
      "nodeTo":"280",
      "data" :{
          "nodeToName":'Anil',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["10", "280"],
      },
    },
    {
      "nodeTo":"281",
      "data" :{
          "nodeToName":'Anal',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["10", "281"],
      },
    },
    {
      "nodeTo":"282",
      "data" :{
          "nodeToName":'Pratyush',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["10", "282"],
      },
    },
    {
      "nodeTo":"283",
      "data" :{
          "nodeToName":'Prabhas',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["10", "283"],
      },
    },
    {
      "nodeTo":"284",
      "data" :{
          "nodeToName":'Sham',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["10", "284"],
      },
    },
    {
      "nodeTo":"285",
      "data" :{
          "nodeToName":'Kaam',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["10", "285"],
      },
    },
    {
      "nodeTo":"286",
      "data" :{
          "nodeToName":'harsh',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["10", "286"],
      },
    },
    {
      "nodeTo":"307",
      "data" :{
            "nodeToName":'Kirti',
          "$color":"#4DB6AC",
          "relation":"wife",
          "$type":"arrow",
          "$dim":10,
          "$direction":["10", "307"],
      },
    },
    {
      "nodeTo":"308",
      "data" :{
            "nodeToName":'Lakshmi',
          "$color":"#4DB6AC",
          "relation":"wife",
          "$type":"arrow",
          "$dim":10,
          "$direction":["10", "308"],
      },
    },
    {
      "nodeTo":"309",
      "data" :{
            "nodeToName":'Dhruti',
          "$color":"#4DB6AC",
          "relation":"wife",
          "$type":"arrow",
          "$dim":10,
          "$direction":["10", "309"],
      },
    },
    {
      "nodeTo":"310",
      "data" :{
            "nodeToName":'Medha',
          "$color":"#4DB6AC",
          "relation":"wife",
          "$type":"arrow",
          "$dim":10,
          "$direction":["10", "310"],
      },
    },
    {
      "nodeTo":"311",
      "data" :{
            "nodeToName":'Pushti',
          "$color":"#4DB6AC",
          "relation":"wife",
          "$type":"arrow",
          "$dim":10,
          "$direction":["10", "311"],
      },
    },
    {
      "nodeTo":"312",
      "data" :{
            "nodeToName":'Shraddha',
          "$color":"#4DB6AC",
          "relation":"wife",
          "$type":"arrow",
          "$dim":10,
          "$direction":["10", "312"],
      },
    },
    {
      "nodeTo":"313",
      "data" :{
            "nodeToName":'Kriya',
          "$color":"#4DB6AC",
          "relation":"wife",
          "$type":"arrow",
          "$dim":10,
          "$direction":["10", "313"],
      },
    },
    {
      "nodeTo":"314",
      "data" :{
            "nodeToName":'Buddhi',
          "$color":"#4DB6AC",
          "relation":"wife",
          "$type":"arrow",
          "$dim":10,
          "$direction":["10", "314"],
      },
    },
    {
      "nodeTo":"315",
      "data" :{
            "nodeToName":'Lajja',
          "$color":"#4DB6AC",
          "relation":"wife",
          "$type":"arrow",
          "$dim":10,
          "$direction":["10", "315"],
      },
    },
    {
      "nodeTo":"316",
      "data" :{
            "nodeToName":'Mati',
          "$color":"#4DB6AC",
          "relation":"wife",
          "$type":"arrow",
          "$dim":10,
          "$direction":["10", "316"],
      },
    },]
},
{
  id :"276",
  name :" Dhar",
  data :{
    gender :"male",
    father :"10",
    title :"Pruthivi",
  },
  "adjacencies" : [
    {
      "nodeTo":"318",
      "data" :{
          "nodeToName":'Dravin',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["276", "318"],
      },
    },
    {
      "nodeTo":"319",
      "data" :{
          "nodeToName":'Hutahavyaha',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["276", "319"],
      },
    },]
},
{
  id :"318",
  name :" Dravin",
  data :{
    gender :"male",
    father :"276",
  },
  "adjacencies" : []
},
{
  id :"319",
  name :" Hutahavyaha",
  data :{
    gender :"male",
    father :"276",
  },
  "adjacencies" : []
},
{
  id :"277",
  name :" Dhruv",
  data :{
    gender :"male",
    father :"10",
    title :"Nakstrani, Bhrahmavetta",
    groups :"Bhakta",
  },
  "adjacencies" : [
    {
      "nodeTo":"317",
      "data" :{
          "nodeToName":'kaal',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["277", "317"],
      },
    },]
},
{
  id :"317",
  name :" kaal",
  data :{
    gender :"male",
    father :"277",
  },
  "adjacencies" : []
},
{
  id :"278",
  name :" Som",
  data :{
    gender :"male",
    father :"10",
    title :"Chandra",
  },
  "adjacencies" : []
},
{
  id :"279",
  name :" Aha",
  data :{
    gender :"male",
    father :"10",
    title :"Antariksha",
  },
  "adjacencies" : []
},
{
  id :"280",
  name :" Anil",
  data :{
    gender :"male",
    father :"10",
    title :"Vayu",
  },
  "adjacencies" : []
},
{
  id :"281",
  name :" Anal",
  data :{
    gender :"male",
    father :"10",
    title :"Agni",
  },
  "adjacencies" : []
},
{
  id :"282",
  name :" Pratyush",
  data :{
    gender :"male",
    father :"10",
    title :"Aditya",
  },
  "adjacencies" : [
    {
      "nodeTo":"320",
      "data" :{
          "nodeToName":'Deval',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["282", "320"],
      },
    },]
},
{
  id :"320",
  name :" Deval",
  data :{
    gender :"male",
    father :"282",
    groups :"Rushi",
  },
  "adjacencies" : []
},
{
  id :"283",
  name :" Prabhas",
  data :{
    gender :"male",
    father :"10",
    title :"Dhosh",
  },
  "adjacencies" : [
    {
      "nodeTo":"322",
      "data" :{
          "nodeToName":'Vishvakarma',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["283", "322"],
      },
    },
    {
      "nodeTo":"321",
      "data" :{
            "nodeToName":'Sister of bruhaspati',
          "$color":"#4DB6AC",
          "relation":"wife",
          "$type":"arrow",
          "$dim":10,
          "$direction":["283", "321"],
      },
    },]
},
{
  id :"284",
  name :" Sham",
  data :{
    gender :"male",
    father :"10",
  },
  "adjacencies" : [
    {
      "nodeTo":"287",
      "data" :{
            "nodeToName":'prapti',
          "$color":"#4DB6AC",
          "relation":"wife",
          "$type":"arrow",
          "$dim":10,
          "$direction":["284", "287"],
      },
    },]
},
{
  id :"285",
  name :" Kaam",
  data :{
    gender :"male",
    father :"10",
  },
  "adjacencies" : [
    {
      "nodeTo":"288",
      "data" :{
            "nodeToName":'rati',
          "$color":"#4DB6AC",
          "relation":"wife",
          "$type":"arrow",
          "$dim":10,
          "$direction":["285", "288"],
      },
    },]
},
{
  id :"286",
  name :" harsh",
  data :{
    gender :"male",
    father :"10",
  },
  "adjacencies" : [
    {
      "nodeTo":"289",
      "data" :{
            "nodeToName":'nanda',
          "$color":"#4DB6AC",
          "relation":"wife",
          "$type":"arrow",
          "$dim":10,
          "$direction":["286", "289"],
      },
    },]
},
{
  id :"11",
  name :" bhrugu",
  data :{
    gender :"male",
    father :"393",
    groups :"Rushi",
  },
  "adjacencies" : [
    {
      "nodeTo":"323",
      "data" :{
          "nodeToName":'kavi',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["11", "323"],
      },
    },
    {
      "nodeTo":"293",
      "data" :{
          "nodeToName":'Chyavan',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["11", "293"],
      },
    },
    {
      "nodeTo":"294",
      "data" :{
          "nodeToName":'Vrushparva',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["11", "294"],
      },
    },]
},
{
  id :"323",
  name :" kavi",
  data :{
    gender :"male",
    father :"11",
  },
  "adjacencies" : [
    {
      "nodeTo":"292",
      "data" :{
          "nodeToName":'shukracharya',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["323", "292"],
      },
    },]
},
{
  id :"292",
  name :" shukracharya",
  data :{
    gender :"male",
    father :"323",
    title :"Daitya guru",
    groups :"Bhargav Vansh",
  },
  "adjacencies" : [
    {
      "nodeTo":"295",
      "data" :{
          "nodeToName":'Tvashtadhar',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["292", "295"],
      },
    },
    {
      "nodeTo":"296",
      "data" :{
          "nodeToName":'Atri',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["292", "296"],
      },
    },
    {
      "nodeTo":"176",
      "data" :{
          "nodeToName":'devyani',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["292", "176"],
      },
    },
    {
      "nodeTo":"301",
      "data" :{
            "nodeToName":'Jayanti',
          "$color":"#4DB6AC",
          "relation":"wife",
          "$type":"arrow",
          "$dim":10,
          "$direction":["292", "301"],
      },
    },]
},
{
  id :"295",
  name :" Tvashtadhar",
  data :{
    gender :"male",
    father :"292",
  },
  "adjacencies" : []
},
{
  id :"296",
  name :" Atri",
  data :{
    gender :"male",
    father :"292",
  },
  "adjacencies" : []
},
{
  id :"176",
  name :" devyani",
  data :{
    gender :"female",
    father :"292",
    mother :"301",
  },
  "adjacencies" : [
    {
      "nodeTo":"177",
      "data" :{
          "nodeToName":'tarvashu',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["176", "177"],
      },
    },
    {
      "nodeTo":"171",
      "data" :{
            "nodeToName":'yayati',
          "$color":"#B2DFDB",
          "relation":"husband",
          "$type":"arrow",
          "$dim":10,
          "$direction":["176", "171"],
      },
    },]
},
{
  id :"293",
  name :" Chyavan",
  data :{
    gender :"male",
    father :"11",
    groups :"Rushi",
  },
  "adjacencies" : [
    {
      "nodeTo":"12",
      "data" :{
          "nodeToName":'Aurva',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["293", "12"],
      },
    },
    {
      "nodeTo":"299",
      "data" :{
            "nodeToName":'Aaruni',
          "$color":"#4DB6AC",
          "relation":"wife",
          "$type":"arrow",
          "$dim":10,
          "$direction":["293", "299"],
      },
    },
    {
      "nodeTo":"324",
      "data" :{
            "nodeToName":'Aarushi',
          "$color":"#4DB6AC",
          "relation":"wife",
          "$type":"arrow",
          "$dim":10,
          "$direction":["293", "324"],
      },
    },]
},
{
  id :"294",
  name :" Vrushparva",
  data :{
    gender :"male",
    father :"11",
  },
  "adjacencies" : [
    {
      "nodeTo":"178",
      "data" :{
          "nodeToName":'Sarmishtha',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["294", "178"],
      },
    },]
},
{
  id :"178",
  name :" Sarmishtha",
  data :{
    gender :"female",
    father :"294",
  },
  "adjacencies" : [
    {
      "nodeTo":"179",
      "data" :{
          "nodeToName":'Druhyu',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["178", "179"],
      },
    },
    {
      "nodeTo":"180",
      "data" :{
          "nodeToName":'anu',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["178", "180"],
      },
    },
    {
      "nodeTo":"181",
      "data" :{
          "nodeToName":'Puru',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["178", "181"],
      },
    },
    {
      "nodeTo":"171",
      "data" :{
            "nodeToName":'yayati',
          "$color":"#B2DFDB",
          "relation":"husband",
          "$type":"arrow",
          "$dim":10,
          "$direction":["178", "171"],
      },
    },]
},
{
  id :"13",
  name :" Dhata",
  data :{
    gender :"male",
    father :"393",
  },
  "adjacencies" : []
},
{
  id :"14",
  name :" Vidhat",
  data :{
    gender :"male",
    father :"393",
  },
  "adjacencies" : []
},
{
  id :"15",
  name :" Lakshmi",
  data :{
    gender :"female",
    father :"393",
    groups :"Devi",
  },
  "adjacencies" : []
},
{
  id :"23",
  name :" Sthanu",
  data :{
    gender :"male",
    father :"393",
  },
  "adjacencies" : [
    {
      "nodeTo":"24",
      "data" :{
          "nodeToName":'mrugvyadh',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["23", "24"],
      },
    },
    {
      "nodeTo":"25",
      "data" :{
          "nodeToName":'Sarp',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["23", "25"],
      },
    },
    {
      "nodeTo":"26",
      "data" :{
          "nodeToName":'Nirhurti',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["23", "26"],
      },
    },
    {
      "nodeTo":"27",
      "data" :{
          "nodeToName":'Ajaikpaad',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["23", "27"],
      },
    },
    {
      "nodeTo":"28",
      "data" :{
          "nodeToName":'Ahirbrudhnya',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["23", "28"],
      },
    },
    {
      "nodeTo":"29",
      "data" :{
          "nodeToName":'Pinaki',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["23", "29"],
      },
    },
    {
      "nodeTo":"30",
      "data" :{
          "nodeToName":'dahan',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["23", "30"],
      },
    },
    {
      "nodeTo":"31",
      "data" :{
          "nodeToName":'Ishvar',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["23", "31"],
      },
    },
    {
      "nodeTo":"32",
      "data" :{
          "nodeToName":'kapali',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["23", "32"],
      },
    },
    {
      "nodeTo":"33",
      "data" :{
          "nodeToName":'Sthanu',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["23", "33"],
      },
    },
    {
      "nodeTo":"34",
      "data" :{
          "nodeToName":'Bhava',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["23", "34"],
      },
    },]
},
{
  id :"24",
  name :" mrugvyadh",
  data :{
    gender :"male",
    father :"23",
    groups :"11 Rudra",
  },
  "adjacencies" : []
},
{
  id :"25",
  name :" Sarp",
  data :{
    gender :"male",
    father :"23",
    groups :"11 Rudra",
  },
  "adjacencies" : []
},
{
  id :"26",
  name :" Nirhurti",
  data :{
    gender :"male",
    father :"23",
    groups :"11 Rudra",
  },
  "adjacencies" : []
},
{
  id :"27",
  name :" Ajaikpaad",
  data :{
    gender :"male",
    father :"23",
    groups :"11 Rudra",
  },
  "adjacencies" : []
},
{
  id :"28",
  name :" Ahirbrudhnya",
  data :{
    gender :"male",
    father :"23",
    groups :"11 Rudra",
  },
  "adjacencies" : []
},
{
  id :"29",
  name :" Pinaki",
  data :{
    gender :"male",
    father :"23",
    groups :"11 Rudra",
  },
  "adjacencies" : []
},
{
  id :"30",
  name :" dahan",
  data :{
    gender :"male",
    father :"23",
    groups :"11 Rudra",
  },
  "adjacencies" : []
},
{
  id :"31",
  name :" Ishvar",
  data :{
    gender :"male",
    father :"23",
    groups :"11 Rudra",
  },
  "adjacencies" : []
},
{
  id :"32",
  name :" kapali",
  data :{
    gender :"male",
    father :"23",
    groups :"11 Rudra",
  },
  "adjacencies" : []
},
{
  id :"33",
  name :" Sthanu",
  data :{
    gender :"male",
    father :"23",
    groups :"11 Rudra",
  },
  "adjacencies" : []
},
{
  id :"34",
  name :" Bhava",
  data :{
    gender :"male",
    father :"23",
    groups :"11 Rudra",
  },
  "adjacencies" : []
},
{
  id :"370",
  name :" Vasishtha",
  data :{
    gender :"male",
    father :"393",
    title :"Had Kamdhenu",
    groups :"Maharshi,Saptarshi",
  },
  "adjacencies" : [
    {
      "nodeTo":"223",
      "data" :{
          "nodeToName":'parashar',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["370", "223"],
      },
    },
    {
      "nodeTo":"371",
      "data" :{
          "nodeToName":'Shakti',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["370", "371"],
      },
    },
    {
      "nodeTo":"372",
      "data" :{
          "nodeToName":'Mitra',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["370", "372"],
      },
    },
    {
      "nodeTo":"373",
      "data" :{
            "nodeToName":'Arundhati',
          "$color":"#4DB6AC",
          "relation":"wife",
          "$type":"arrow",
          "$dim":10,
          "$direction":["370", "373"],
      },
    },]
},
{
  id :"223",
  name :" parashar",
  data :{
    gender :"male",
    father :"370",
    mother :"373",
    groups :"Rushi,Saptarshi",
  },
  "adjacencies" : [
    {
      "nodeTo":"222",
      "data" :{
          "nodeToName":'Maharshi Vyas',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["223", "222"],
      },
    },]
},
{
  id :"222",
  name :" Maharshi Vyas",
  data :{
    gender :"male",
    father :"223",
    mother :"217",
    groups :"Rushi,Saptarshi",
  },
  "adjacencies" : [
    {
      "nodeTo":"226",
      "data" :{
          "nodeToName":'Dhrutrashtra',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["222", "226"],
      },
    },
    {
      "nodeTo":"232",
      "data" :{
          "nodeToName":'Pandu',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["222", "232"],
      },
    },
    {
      "nodeTo":"376",
      "data" :{
          "nodeToName":'sukhdevji',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["222", "376"],
      },
    },
    {
      "nodeTo":"378",
      "data" :{
          "nodeToName":'Mahabharat or Jay',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["222", "378"],
      },
    },
    {
      "nodeTo":"291",
      "data" :{
          "nodeToName":'vidur',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["222", "291"],
      },
    },
    {
      "nodeTo":"374",
      "data" :{
            "nodeToName":'Pinjala or Vatika',
          "$color":"#4DB6AC",
          "relation":"wife",
          "$type":"arrow",
          "$dim":10,
          "$direction":["222", "374"],
      },
    },
    {
      "nodeTo":"378",
      "data" :{
            "nodeToName":'Mahabharat or Jay',
          "$color":"#9E9E9E",
          "relation":"work",
          "$type":"arrow",
          "$dim":10,
          "$direction":["222", "378"],
      },
    },]
},
{
  id :"226",
  name :" Dhrutrashtra",
  data :{
    gender :"male",
    father :"222",
    mother :"224",
    groups :"King,Kaurav",
  },
  "adjacencies" : [
    {
      "nodeTo":"347",
      "data" :{
          "nodeToName":'dushala',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["226", "347"],
      },
    },
    {
      "nodeTo":"227",
      "data" :{
          "nodeToName":'Duryodhan',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["226", "227"],
      },
    },
    {
      "nodeTo":"228",
      "data" :{
          "nodeToName":'Duhshashan',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["226", "228"],
      },
    },
    {
      "nodeTo":"229",
      "data" :{
          "nodeToName":'Vikarna',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["226", "229"],
      },
    },
    {
      "nodeTo":"230",
      "data" :{
          "nodeToName":'Chitrasen',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["226", "230"],
      },
    },
    {
      "nodeTo":"231",
      "data" :{
            "nodeToName":'Gandhari',
          "$color":"#4DB6AC",
          "relation":"wife",
          "$type":"arrow",
          "$dim":10,
          "$direction":["226", "231"],
      },
    },]
},
{
  id :"232",
  name :" Pandu",
  data :{
    gender :"male",
    father :"222",
    mother :"225",
    groups :"King,Pandav",
  },
  "adjacencies" : [
    {
      "nodeTo":"235",
      "data" :{
          "nodeToName":'Arjun',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["232", "235"],
      },
    },
    {
      "nodeTo":"236",
      "data" :{
          "nodeToName":'Yudhishthir',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["232", "236"],
      },
    },
    {
      "nodeTo":"237",
      "data" :{
          "nodeToName":'bhim',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["232", "237"],
      },
    },
    {
      "nodeTo":"238",
      "data" :{
          "nodeToName":'Nakul',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["232", "238"],
      },
    },
    {
      "nodeTo":"239",
      "data" :{
          "nodeToName":'Sahadev',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["232", "239"],
      },
    },
    {
      "nodeTo":"233",
      "data" :{
            "nodeToName":'Kunti or Pritha',
          "$color":"#4DB6AC",
          "relation":"wife",
          "$type":"arrow",
          "$dim":10,
          "$direction":["232", "233"],
      },
    },
    {
      "nodeTo":"234",
      "data" :{
            "nodeToName":'madri',
          "$color":"#4DB6AC",
          "relation":"wife",
          "$type":"arrow",
          "$dim":10,
          "$direction":["232", "234"],
      },
    },]
},
{
  id :"238",
  name :" Nakul",
  data :{
    gender :"male",
    father :"232",
    mother :"234",
    groups :"Pandav",
  },
  "adjacencies" : [
    {
      "nodeTo":"256",
      "data" :{
          "nodeToName":'Shatanik',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["238", "256"],
      },
    },
    {
      "nodeTo":"262",
      "data" :{
          "nodeToName":'Nirmitra',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["238", "262"],
      },
    },
    {
      "nodeTo":"244",
      "data" :{
            "nodeToName":'Draupadi',
          "$color":"#4DB6AC",
          "relation":"wife",
          "$type":"arrow",
          "$dim":10,
          "$direction":["238", "244"],
      },
    },
    {
      "nodeTo":"249",
      "data" :{
            "nodeToName":'karenumati',
          "$color":"#4DB6AC",
          "relation":"wife",
          "$type":"arrow",
          "$dim":10,
          "$direction":["238", "249"],
      },
    },]
},
{
  id :"256",
  name :" Shatanik",
  data :{
    gender :"male",
    father :"238",
    mother :"244",
  },
  "adjacencies" : []
},
{
  id :"262",
  name :" Nirmitra",
  data :{
    gender :"male",
    father :"238",
    mother :"249",
  },
  "adjacencies" : []
},
{
  id :"239",
  name :" Sahadev",
  data :{
    gender :"male",
    father :"232",
    mother :"234",
    groups :"Pandav",
  },
  "adjacencies" : [
    {
      "nodeTo":"257",
      "data" :{
          "nodeToName":'Shrutkarma',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["239", "257"],
      },
    },
    {
      "nodeTo":"263",
      "data" :{
          "nodeToName":'Suhotra',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["239", "263"],
      },
    },
    {
      "nodeTo":"244",
      "data" :{
            "nodeToName":'Draupadi',
          "$color":"#4DB6AC",
          "relation":"wife",
          "$type":"arrow",
          "$dim":10,
          "$direction":["239", "244"],
      },
    },
    {
      "nodeTo":"250",
      "data" :{
            "nodeToName":'Vijaya',
          "$color":"#4DB6AC",
          "relation":"wife",
          "$type":"arrow",
          "$dim":10,
          "$direction":["239", "250"],
      },
    },]
},
{
  id :"257",
  name :" Shrutkarma",
  data :{
    gender :"male",
    father :"239",
    mother :"244",
  },
  "adjacencies" : []
},
{
  id :"263",
  name :" Suhotra",
  data :{
    gender :"male",
    father :"239",
    mother :"250",
  },
  "adjacencies" : []
},
{
  id :"376",
  name :" sukhdevji",
  data :{
    gender :"male",
    father :"222",
    mother :"374",
  },
  "adjacencies" : [
    {
      "nodeTo":"377",
      "data" :{
          "nodeToName":'Bhagvad purana',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["376", "377"],
      },
    },
    {
      "nodeTo":"377",
      "data" :{
            "nodeToName":'Bhagvad purana',
          "$color":"#9E9E9E",
          "relation":"work",
          "$type":"arrow",
          "$dim":10,
          "$direction":["376", "377"],
      },
    },]
},
{
  id :"377",
  name :" Bhagvad purana",
  data :{
    gender :"work",
    father :"376",
  },
  "adjacencies" : []
},
{
  id :"378",
  name :" Mahabharat or Jay",
  data :{
    gender :"work",
    father :"222",
  },
  "adjacencies" : []
},
{
  id :"291",
  name :" vidur",
  data :{
    gender :"male",
    father :"222",
    mother :"290",
    title :"The mantri of dhrutrashtra",
  },
  "adjacencies" : []
},
{
  id :"371",
  name :" Shakti",
  data :{
    gender :"male",
    father :"370",
    mother :"373",
  },
  "adjacencies" : []
},
{
  id :"372",
  name :" Mitra",
  data :{
    gender :"male",
    father :"370",
  },
  "adjacencies" : []
},
{
  id :"380",
  name :" Narad",
  data :{
    gender :"male",
    father :"393",
    groups :"Devarshi,Muni",
  },
  "adjacencies" : [
    {
      "nodeTo":"381",
      "data" :{
          "nodeToName":'Bhakti sutra',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["380", "381"],
      },
    },
    {
      "nodeTo":"381",
      "data" :{
            "nodeToName":'Bhakti sutra',
          "$color":"#9E9E9E",
          "relation":"work",
          "$type":"arrow",
          "$dim":10,
          "$direction":["380", "381"],
      },
    },]
},
{
  id :"381",
  name :" Bhakti sutra",
  data :{
    gender :"work",
    father :"380",
  },
  "adjacencies" : []
},
{
  id :"382",
  name :" Kardama",
  data :{
    gender :"male",
    father :"393",
  },
  "adjacencies" : [
    {
      "nodeTo":"373",
      "data" :{
          "nodeToName":'Arundhati',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["382", "373"],
      },
    },]
},
{
  id :"373",
  name :" Arundhati",
  data :{
    gender :"female",
    father :"382",
    mother :"383",
    title :"Who gives discourses to sages",
    groups :"Women scholar",
  },
  "adjacencies" : [
    {
      "nodeTo":"223",
      "data" :{
          "nodeToName":'parashar',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["373", "223"],
      },
    },
    {
      "nodeTo":"371",
      "data" :{
          "nodeToName":'Shakti',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["373", "371"],
      },
    },
    {
      "nodeTo":"370",
      "data" :{
            "nodeToName":'Vasishtha',
          "$color":"#B2DFDB",
          "relation":"husband",
          "$type":"arrow",
          "$dim":10,
          "$direction":["373", "370"],
      },
    },]
},
{
  id :"0",
  name :" unknown ansestors",
  data :{
    gender :"group",
  },
  "adjacencies" : [
    {
      "nodeTo":"1",
      "data" :{
          "nodeToName":'Bhrahma',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["0", "1"],
      },
    },
    {
      "nodeTo":"504",
      "data" :{
          "nodeToName":'Chandrabhaga',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["0", "504"],
      },
    },
    {
      "nodeTo":"517",
      "data" :{
          "nodeToName":'Satrajit',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["0", "517"],
      },
    },
    {
      "nodeTo":"300",
      "data" :{
          "nodeToName":'Chand bhargav',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["0", "300"],
      },
    },
    {
      "nodeTo":"301",
      "data" :{
          "nodeToName":'Jayanti',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["0", "301"],
      },
    },
    {
      "nodeTo":"304",
      "data" :{
          "nodeToName":'Renuka',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["0", "304"],
      },
    },
    {
      "nodeTo":"439",
      "data" :{
          "nodeToName":'Vaidarbhi',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["0", "439"],
      },
    },
    {
      "nodeTo":"440",
      "data" :{
          "nodeToName":'Sivi',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["0", "440"],
      },
    },
    {
      "nodeTo":"325",
      "data" :{
          "nodeToName":'Adharm',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["0", "325"],
      },
    },
    {
      "nodeTo":"326",
      "data" :{
          "nodeToName":'Nairurta',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["0", "326"],
      },
    },
    {
      "nodeTo":"330",
      "data" :{
          "nodeToName":'Bharadvaj',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["0", "330"],
      },
    },
    {
      "nodeTo":"333",
      "data" :{
          "nodeToName":'Ushinara',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["0", "333"],
      },
    },
    {
      "nodeTo":"334",
      "data" :{
          "nodeToName":'Satyaki',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["0", "334"],
      },
    },
    {
      "nodeTo":"335",
      "data" :{
          "nodeToName":'Drupad',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["0", "335"],
      },
    },
    {
      "nodeTo":"336",
      "data" :{
          "nodeToName":'Krutvarma',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["0", "336"],
      },
    },
    {
      "nodeTo":"337",
      "data" :{
          "nodeToName":'Ugrasen',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["0", "337"],
      },
    },
    {
      "nodeTo":"217",
      "data" :{
          "nodeToName":'satyavati',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["0", "217"],
      },
    },
    {
      "nodeTo":"338",
      "data" :{
          "nodeToName":'Svarbhanu',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["0", "338"],
      },
    },
    {
      "nodeTo":"339",
      "data" :{
          "nodeToName":'Pondramatsyak',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["0", "339"],
      },
    },
    {
      "nodeTo":"219",
      "data" :{
          "nodeToName":'Ganga',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["0", "219"],
      },
    },
    {
      "nodeTo":"340",
      "data" :{
          "nodeToName":'Shakuni',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["0", "340"],
      },
    },
    {
      "nodeTo":"341",
      "data" :{
          "nodeToName":'Virat',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["0", "341"],
      },
    },
    {
      "nodeTo":"342",
      "data" :{
          "nodeToName":'Arishta',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["0", "342"],
      },
    },
    {
      "nodeTo":"344",
      "data" :{
          "nodeToName":'Kali',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["0", "344"],
      },
    },
    {
      "nodeTo":"224",
      "data" :{
          "nodeToName":'Ambika',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["0", "224"],
      },
    },
    {
      "nodeTo":"225",
      "data" :{
          "nodeToName":'Ambalika',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["0", "225"],
      },
    },
    {
      "nodeTo":"346",
      "data" :{
          "nodeToName":'Vishvjatiy',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["0", "346"],
      },
    },
    {
      "nodeTo":"348",
      "data" :{
          "nodeToName":'Jaydrath',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["0", "348"],
      },
    },
    {
      "nodeTo":"349",
      "data" :{
          "nodeToName":'Agni',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["0", "349"],
      },
    },
    {
      "nodeTo":"350",
      "data" :{
          "nodeToName":'Vayu',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["0", "350"],
      },
    },
    {
      "nodeTo":"351",
      "data" :{
          "nodeToName":'Chandrama',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["0", "351"],
      },
    },
    {
      "nodeTo":"353",
      "data" :{
          "nodeToName":'Dhrushtadhumna',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["0", "353"],
      },
    },
    {
      "nodeTo":"354",
      "data" :{
          "nodeToName":'Shikhandi',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["0", "354"],
      },
    },
    {
      "nodeTo":"234",
      "data" :{
          "nodeToName":'madri',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["0", "234"],
      },
    },
    {
      "nodeTo":"358",
      "data" :{
          "nodeToName":'Kuntibhoj',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["0", "358"],
      },
    },
    {
      "nodeTo":"359",
      "data" :{
          "nodeToName":'Radha',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["0", "359"],
      },
    },
    {
      "nodeTo":"360",
      "data" :{
          "nodeToName":'Adhirath',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["0", "360"],
      },
    },
    {
      "nodeTo":"361",
      "data" :{
          "nodeToName":'Narayan',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["0", "361"],
      },
    },
    {
      "nodeTo":"241",
      "data" :{
          "nodeToName":'surya',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["0", "241"],
      },
    },
    {
      "nodeTo":"242",
      "data" :{
          "nodeToName":'Chitrangada',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["0", "242"],
      },
    },
    {
      "nodeTo":"363",
      "data" :{
          "nodeToName":'Devaki',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["0", "363"],
      },
    },
    {
      "nodeTo":"243",
      "data" :{
          "nodeToName":'Subhadra',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["0", "243"],
      },
    },
    {
      "nodeTo":"364",
      "data" :{
          "nodeToName":'Baldev or Balram',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["0", "364"],
      },
    },
    {
      "nodeTo":"485",
      "data" :{
          "nodeToName":'Menaka',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["0", "485"],
      },
    },
    {
      "nodeTo":"365",
      "data" :{
          "nodeToName":'Bhishmak',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["0", "365"],
      },
    },
    {
      "nodeTo":"245",
      "data" :{
          "nodeToName":'Ulupi',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["0", "245"],
      },
    },
    {
      "nodeTo":"246",
      "data" :{
          "nodeToName":'Devika',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["0", "246"],
      },
    },
    {
      "nodeTo":"367",
      "data" :{
          "nodeToName":'Sachi',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["0", "367"],
      },
    },
    {
      "nodeTo":"247",
      "data" :{
          "nodeToName":'Balandhara',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["0", "247"],
      },
    },
    {
      "nodeTo":"248",
      "data" :{
          "nodeToName":'Hidamba',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["0", "248"],
      },
    },
    {
      "nodeTo":"249",
      "data" :{
          "nodeToName":'karenumati',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["0", "249"],
      },
    },
    {
      "nodeTo":"22",
      "data" :{
          "nodeToName":'virani',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["0", "22"],
      },
    },
    {
      "nodeTo":"250",
      "data" :{
          "nodeToName":'Vijaya',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["0", "250"],
      },
    },
    {
      "nodeTo":"132",
      "data" :{
          "nodeToName":'jarasangh',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["0", "132"],
      },
    },
    {
      "nodeTo":"375",
      "data" :{
          "nodeToName":'Jabali',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["0", "375"],
      },
    },
    {
      "nodeTo":"498",
      "data" :{
          "nodeToName":'Sumitra',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["0", "498"],
      },
    },
    {
      "nodeTo":"499",
      "data" :{
          "nodeToName":'Kaushalya',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["0", "499"],
      },
    },
    {
      "nodeTo":"36",
      "data" :{
          "nodeToName":'krupachary',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["0", "36"],
      },
    },
    {
      "nodeTo":"383",
      "data" :{
          "nodeToName":'Devhuti',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["0", "383"],
      },
    },
    {
      "nodeTo":"384",
      "data" :{
          "nodeToName":'Lopamudra',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["0", "384"],
      },
    },
    {
      "nodeTo":"264",
      "data" :{
          "nodeToName":'Uttara',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["0", "264"],
      },
    },
    {
      "nodeTo":"269",
      "data" :{
          "nodeToName":'Madravati',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["0", "269"],
      },
    },
    {
      "nodeTo":"392",
      "data" :{
          "nodeToName":'Kaikeshi',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["0", "392"],
      },
    },
    {
      "nodeTo":"51",
      "data" :{
          "nodeToName":'garud',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["0", "51"],
      },
    },
    {
      "nodeTo":"52",
      "data" :{
          "nodeToName":'arun',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["0", "52"],
      },
    },
    {
      "nodeTo":"287",
      "data" :{
          "nodeToName":'prapti',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["0", "287"],
      },
    },
    {
      "nodeTo":"288",
      "data" :{
          "nodeToName":'rati',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["0", "288"],
      },
    },
    {
      "nodeTo":"168",
      "data" :{
          "nodeToName":'sarvabhavani',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["0", "168"],
      },
    },
    {
      "nodeTo":"289",
      "data" :{
          "nodeToName":'nanda',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["0", "289"],
      },
    },
    {
      "nodeTo":"290",
      "data" :{
          "nodeToName":'parishrami',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["0", "290"],
      },
    },
    {
      "nodeTo":"299",
      "data" :{
          "nodeToName":'Aaruni',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["0", "299"],
      },
    },
    {
      "nodeTo":"86",
      "data" :{
          "nodeToName":'shailya',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["0", "86"],
      },
    },
    {
      "nodeTo":"87",
      "data" :{
          "nodeToName":'Dhrushtketu',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["0", "87"],
      },
    },
    {
      "nodeTo":"88",
      "data" :{
          "nodeToName":'Daitya drum',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["0", "88"],
      },
    },
    {
      "nodeTo":"89",
      "data" :{
          "nodeToName":'Bhagdatta',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["0", "89"],
      },
    },
    {
      "nodeTo":"90",
      "data" :{
          "nodeToName":'shishupal',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["0", "90"],
      },
    },]
},
{
  id :"504",
  name :" Chandrabhaga",
  data :{
    gender :"female",
    father :"0",
  },
  "adjacencies" : [
    {
      "nodeTo":"502",
      "data" :{
          "nodeToName":'Mandavi',
          "$color":"#E91E63",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["504", "502"],
      },
    },
    {
      "nodeTo":"503",
      "data" :{
          "nodeToName":'ShrutKirti',
          "$color":"#E91E63",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["504", "503"],
      },
    },
    {
      "nodeTo":"501",
      "data" :{
            "nodeToName":'Kushdwaj',
          "$color":"#B2DFDB",
          "relation":"husband",
          "$type":"arrow",
          "$dim":10,
          "$direction":["504", "501"],
      },
    },]
},
{
  id :"517",
  name :" Satrajit",
  data :{
    gender :"male",
    father :"0",
    groups :"King",
  },
  "adjacencies" : [
    {
      "nodeTo":"513",
      "data" :{
          "nodeToName":'Satyabhama',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["517", "513"],
      },
    },]
},
{
  id :"513",
  name :" Satyabhama",
  data :{
    gender :"female",
    father :"517",
  },
  "adjacencies" : [
    {
      "nodeTo":"362",
      "data" :{
            "nodeToName":'Krushna',
          "$color":"#B2DFDB",
          "relation":"husband",
          "$type":"arrow",
          "$dim":10,
          "$direction":["513", "362"],
      },
    },]
},
{
  id :"300",
  name :" Chand bhargav",
  data :{
    gender :"male",
    father :"0",
    groups :"Chayan Vansh,King",
  },
  "adjacencies" : []
},
{
  id :"301",
  name :" Jayanti",
  data :{
    gender :"female",
    father :"0",
    title :"Daughter of Indra",
  },
  "adjacencies" : [
    {
      "nodeTo":"176",
      "data" :{
          "nodeToName":'devyani',
          "$color":"#E91E63",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["301", "176"],
      },
    },
    {
      "nodeTo":"292",
      "data" :{
            "nodeToName":'shukracharya',
          "$color":"#B2DFDB",
          "relation":"husband",
          "$type":"arrow",
          "$dim":10,
          "$direction":["301", "292"],
      },
    },]
},
{
  id :"304",
  name :" Renuka",
  data :{
    gender :"female",
    father :"0",
  },
  "adjacencies" : [
    {
      "nodeTo":"303",
      "data" :{
          "nodeToName":'parshuram',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["304", "303"],
      },
    },
    {
      "nodeTo":"302",
      "data" :{
            "nodeToName":'Jamadagni',
          "$color":"#B2DFDB",
          "relation":"husband",
          "$type":"arrow",
          "$dim":10,
          "$direction":["304", "302"],
      },
    },]
},
{
  id :"439",
  name :" Vaidarbhi",
  data :{
    gender :"female",
    father :"0",
  },
  "adjacencies" : []
},
{
  id :"440",
  name :" Sivi",
  data :{
    gender :"female",
    father :"0",
  },
  "adjacencies" : [
    {
      "nodeTo":"438",
      "data" :{
          "nodeToName":'Asamanjas',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["440", "438"],
      },
    },]
},
{
  id :"325",
  name :" Adharm",
  data :{
    gender :"male",
    father :"0",
    title :"Born due to misconduct",
  },
  "adjacencies" : [
    {
      "nodeTo":"327",
      "data" :{
          "nodeToName":'Bhay',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["325", "327"],
      },
    },
    {
      "nodeTo":"328",
      "data" :{
          "nodeToName":'Mahabhay',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["325", "328"],
      },
    },
    {
      "nodeTo":"329",
      "data" :{
          "nodeToName":'Mrutyu',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["325", "329"],
      },
    },
    {
      "nodeTo":"326",
      "data" :{
            "nodeToName":'Nairurta',
          "$color":"#4DB6AC",
          "relation":"wife",
          "$type":"arrow",
          "$dim":10,
          "$direction":["325", "326"],
      },
    },]
},
{
  id :"327",
  name :" Bhay",
  data :{
    gender :"male",
    father :"325",
    mother :"326",
  },
  "adjacencies" : []
},
{
  id :"328",
  name :" Mahabhay",
  data :{
    gender :"male",
    father :"325",
    mother :"326",
  },
  "adjacencies" : []
},
{
  id :"329",
  name :" Mrutyu",
  data :{
    gender :"male",
    father :"325",
    mother :"326",
  },
  "adjacencies" : []
},
{
  id :"326",
  name :" Nairurta",
  data :{
    gender :"female",
    father :"0",
  },
  "adjacencies" : [
    {
      "nodeTo":"327",
      "data" :{
          "nodeToName":'Bhay',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["326", "327"],
      },
    },
    {
      "nodeTo":"328",
      "data" :{
          "nodeToName":'Mahabhay',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["326", "328"],
      },
    },
    {
      "nodeTo":"329",
      "data" :{
          "nodeToName":'Mrutyu',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["326", "329"],
      },
    },
    {
      "nodeTo":"325",
      "data" :{
            "nodeToName":'Adharm',
          "$color":"#B2DFDB",
          "relation":"husband",
          "$type":"arrow",
          "$dim":10,
          "$direction":["326", "325"],
      },
    },]
},
{
  id :"330",
  name :" Bharadvaj",
  data :{
    gender :"male",
    father :"0",
    groups :"Rushi",
  },
  "adjacencies" : [
    {
      "nodeTo":"331",
      "data" :{
          "nodeToName":'Dron',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["330", "331"],
      },
    },]
},
{
  id :"331",
  name :" Dron",
  data :{
    gender :"male",
    father :"330",
    title :"Guru of Kaurav/Pandav",
  },
  "adjacencies" : [
    {
      "nodeTo":"332",
      "data" :{
          "nodeToName":'Ashvathama',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["331", "332"],
      },
    },]
},
{
  id :"332",
  name :" Ashvathama",
  data :{
    gender :"male",
    father :"331",
  },
  "adjacencies" : []
},
{
  id :"333",
  name :" Ushinara",
  data :{
    gender :"male",
    father :"0",
    title :"King of Kashi",
    groups :"King",
  },
  "adjacencies" : [
    {
      "nodeTo":"487",
      "data" :{
          "nodeToName":'Shibi',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["333", "487"],
      },
    },]
},
{
  id :"334",
  name :" Satyaki",
  data :{
    gender :"male",
    father :"0",
    groups :"Vrushni Vansh",
  },
  "adjacencies" : []
},
{
  id :"335",
  name :" Drupad",
  data :{
    gender :"male",
    father :"0",
    groups :"King,Rajarshi",
  },
  "adjacencies" : [
    {
      "nodeTo":"244",
      "data" :{
          "nodeToName":'Draupadi',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["335", "244"],
      },
    },]
},
{
  id :"244",
  name :" Draupadi",
  data :{
    gender :"female",
    father :"335",
  },
  "adjacencies" : [
    {
      "nodeTo":"253",
      "data" :{
          "nodeToName":'Prativindhya',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["244", "253"],
      },
    },
    {
      "nodeTo":"254",
      "data" :{
          "nodeToName":'Sutsome',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["244", "254"],
      },
    },
    {
      "nodeTo":"255",
      "data" :{
          "nodeToName":'ShrutKirti',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["244", "255"],
      },
    },
    {
      "nodeTo":"256",
      "data" :{
          "nodeToName":'Shatanik',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["244", "256"],
      },
    },
    {
      "nodeTo":"257",
      "data" :{
          "nodeToName":'Shrutkarma',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["244", "257"],
      },
    },
    {
      "nodeTo":"235",
      "data" :{
            "nodeToName":'Arjun',
          "$color":"#B2DFDB",
          "relation":"husband",
          "$type":"arrow",
          "$dim":10,
          "$direction":["244", "235"],
      },
    },
    {
      "nodeTo":"236",
      "data" :{
            "nodeToName":'Yudhishthir',
          "$color":"#B2DFDB",
          "relation":"husband",
          "$type":"arrow",
          "$dim":10,
          "$direction":["244", "236"],
      },
    },
    {
      "nodeTo":"237",
      "data" :{
            "nodeToName":'bhim',
          "$color":"#B2DFDB",
          "relation":"husband",
          "$type":"arrow",
          "$dim":10,
          "$direction":["244", "237"],
      },
    },
    {
      "nodeTo":"238",
      "data" :{
            "nodeToName":'Nakul',
          "$color":"#B2DFDB",
          "relation":"husband",
          "$type":"arrow",
          "$dim":10,
          "$direction":["244", "238"],
      },
    },
    {
      "nodeTo":"239",
      "data" :{
            "nodeToName":'Sahadev',
          "$color":"#B2DFDB",
          "relation":"husband",
          "$type":"arrow",
          "$dim":10,
          "$direction":["244", "239"],
      },
    },]
},
{
  id :"336",
  name :" Krutvarma",
  data :{
    gender :"male",
    father :"0",
    groups :"King",
  },
  "adjacencies" : []
},
{
  id :"337",
  name :" Ugrasen",
  data :{
    gender :"male",
    father :"0",
    groups :"King",
  },
  "adjacencies" : [
    {
      "nodeTo":"70",
      "data" :{
          "nodeToName":'kansa',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["337", "70"],
      },
    },]
},
{
  id :"70",
  name :" kansa",
  data :{
    gender :"male",
    father :"337",
    title :"Uncle of krushna",
    groups :"Rakshas,King",
  },
  "adjacencies" : []
},
{
  id :"217",
  name :" satyavati",
  data :{
    gender :"female",
    father :"0",
  },
  "adjacencies" : [
    {
      "nodeTo":"218",
      "data" :{
          "nodeToName":'Vichitravirya',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["217", "218"],
      },
    },
    {
      "nodeTo":"221",
      "data" :{
          "nodeToName":'Chitrangad',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["217", "221"],
      },
    },
    {
      "nodeTo":"222",
      "data" :{
          "nodeToName":'Maharshi Vyas',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["217", "222"],
      },
    },
    {
      "nodeTo":"215",
      "data" :{
            "nodeToName":'shantanu',
          "$color":"#B2DFDB",
          "relation":"husband",
          "$type":"arrow",
          "$dim":10,
          "$direction":["217", "215"],
      },
    },]
},
{
  id :"338",
  name :" Svarbhanu",
  data :{
    gender :"male",
    father :"0",
    groups :"Rakshas",
  },
  "adjacencies" : []
},
{
  id :"339",
  name :" Pondramatsyak",
  data :{
    gender :"male",
    father :"0",
    title :"Krushna made shankh of",
    groups :"Asur",
  },
  "adjacencies" : []
},
{
  id :"219",
  name :" Ganga",
  data :{
    gender :"female",
    father :"0",
  },
  "adjacencies" : [
    {
      "nodeTo":"220",
      "data" :{
          "nodeToName":'bhishma',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["219", "220"],
      },
    },
    {
      "nodeTo":"215",
      "data" :{
            "nodeToName":'shantanu',
          "$color":"#B2DFDB",
          "relation":"husband",
          "$type":"arrow",
          "$dim":10,
          "$direction":["219", "215"],
      },
    },]
},
{
  id :"340",
  name :" Shakuni",
  data :{
    gender :"male",
    father :"0",
  },
  "adjacencies" : []
},
{
  id :"341",
  name :" Virat",
  data :{
    gender :"male",
    father :"0",
    groups :"King",
  },
  "adjacencies" : []
},
{
  id :"342",
  name :" Arishta",
  data :{
    gender :"female",
    father :"0",
  },
  "adjacencies" : [
    {
      "nodeTo":"343",
      "data" :{
          "nodeToName":'Hansa',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["342", "343"],
      },
    },]
},
{
  id :"343",
  name :" Hansa",
  data :{
    gender :"male",
    mother :"342",
    title :"Gandharvraj",
  },
  "adjacencies" : []
},
{
  id :"344",
  name :" Kali",
  data :{
    gender :"male",
    father :"0",
    groups :"Asur",
  },
  "adjacencies" : []
},
{
  id :"224",
  name :" Ambika",
  data :{
    gender :"female",
    father :"0",
  },
  "adjacencies" : [
    {
      "nodeTo":"226",
      "data" :{
          "nodeToName":'Dhrutrashtra',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["224", "226"],
      },
    },
    {
      "nodeTo":"218",
      "data" :{
            "nodeToName":'Vichitravirya',
          "$color":"#B2DFDB",
          "relation":"husband",
          "$type":"arrow",
          "$dim":10,
          "$direction":["224", "218"],
      },
    },]
},
{
  id :"225",
  name :" Ambalika",
  data :{
    gender :"female",
    father :"0",
  },
  "adjacencies" : [
    {
      "nodeTo":"232",
      "data" :{
          "nodeToName":'Pandu',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["225", "232"],
      },
    },
    {
      "nodeTo":"218",
      "data" :{
            "nodeToName":'Vichitravirya',
          "$color":"#B2DFDB",
          "relation":"husband",
          "$type":"arrow",
          "$dim":10,
          "$direction":["225", "218"],
      },
    },]
},
{
  id :"346",
  name :" Vishvjatiy",
  data :{
    gender :"female",
    father :"0",
  },
  "adjacencies" : [
    {
      "nodeTo":"345",
      "data" :{
          "nodeToName":'Yuyutsu',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["346", "345"],
      },
    },]
},
{
  id :"345",
  name :" Yuyutsu",
  data :{
    gender :"male",
    mother :"346",
    groups :"Kaurav",
  },
  "adjacencies" : []
},
{
  id :"348",
  name :" Jaydrath",
  data :{
    gender :"male",
    father :"0",
    title :"Sindhu naresh",
    groups :"King",
  },
  "adjacencies" : [
    {
      "nodeTo":"347",
      "data" :{
            "nodeToName":'dushala',
          "$color":"#4DB6AC",
          "relation":"wife",
          "$type":"arrow",
          "$dim":10,
          "$direction":["348", "347"],
      },
    },]
},
{
  id :"349",
  name :" Agni",
  data :{
    gender :"male",
    father :"0",
    groups :"Dev",
  },
  "adjacencies" : []
},
{
  id :"350",
  name :" Vayu",
  data :{
    gender :"male",
    father :"0",
    groups :"Dev",
  },
  "adjacencies" : []
},
{
  id :"351",
  name :" Chandrama",
  data :{
    gender :"male",
    father :"0",
  },
  "adjacencies" : [
    {
      "nodeTo":"352",
      "data" :{
          "nodeToName":'Varcha',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["351", "352"],
      },
    },]
},
{
  id :"352",
  name :" Varcha",
  data :{
    gender :"male",
    father :"351",
  },
  "adjacencies" : []
},
{
  id :"353",
  name :" Dhrushtadhumna",
  data :{
    gender :"male",
    father :"0",
  },
  "adjacencies" : []
},
{
  id :"354",
  name :" Shikhandi",
  data :{
    gender :"male",
    father :"0",
  },
  "adjacencies" : []
},
{
  id :"234",
  name :" madri",
  data :{
    gender :"female",
    father :"0",
  },
  "adjacencies" : [
    {
      "nodeTo":"238",
      "data" :{
          "nodeToName":'Nakul',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["234", "238"],
      },
    },
    {
      "nodeTo":"239",
      "data" :{
          "nodeToName":'Sahadev',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["234", "239"],
      },
    },
    {
      "nodeTo":"232",
      "data" :{
            "nodeToName":'Pandu',
          "$color":"#B2DFDB",
          "relation":"husband",
          "$type":"arrow",
          "$dim":10,
          "$direction":["234", "232"],
      },
    },]
},
{
  id :"358",
  name :" Kuntibhoj",
  data :{
    gender :"male",
    father :"0",
  },
  "adjacencies" : [
    {
      "nodeTo":"233",
      "data" :{
          "nodeToName":'Kunti or Pritha',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["358", "233"],
      },
    },]
},
{
  id :"359",
  name :" Radha",
  data :{
    gender :"female",
    father :"0",
  },
  "adjacencies" : [
    {
      "nodeTo":"240",
      "data" :{
          "nodeToName":'Karna  or vasushen or Vaikartan',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["359", "240"],
      },
    },
    {
      "nodeTo":"360",
      "data" :{
            "nodeToName":'Adhirath',
          "$color":"#B2DFDB",
          "relation":"husband",
          "$type":"arrow",
          "$dim":10,
          "$direction":["359", "360"],
      },
    },]
},
{
  id :"360",
  name :" Adhirath",
  data :{
    gender :"male",
    father :"0",
  },
  "adjacencies" : [
    {
      "nodeTo":"240",
      "data" :{
          "nodeToName":'Karna  or vasushen or Vaikartan',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["360", "240"],
      },
    },
    {
      "nodeTo":"359",
      "data" :{
            "nodeToName":'Radha',
          "$color":"#4DB6AC",
          "relation":"wife",
          "$type":"arrow",
          "$dim":10,
          "$direction":["360", "359"],
      },
    },]
},
{
  id :"361",
  name :" Narayan",
  data :{
    gender :"male",
    father :"0",
    groups :"Bhagvan",
  },
  "adjacencies" : [
    {
      "nodeTo":"166",
      "data" :{
          "nodeToName":'Urvashi',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["361", "166"],
      },
    },]
},
{
  id :"166",
  name :" Urvashi",
  data :{
    gender :"female",
    father :"361",
    groups :"Apsara",
  },
  "adjacencies" : [
    {
      "nodeTo":"462",
      "data" :{
          "nodeToName":'Srutayu',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["166", "462"],
      },
    },
    {
      "nodeTo":"463",
      "data" :{
          "nodeToName":'Styayu',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["166", "463"],
      },
    },
    {
      "nodeTo":"464",
      "data" :{
          "nodeToName":'Raya',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["166", "464"],
      },
    },
    {
      "nodeTo":"465",
      "data" :{
          "nodeToName":'Vijaya',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["166", "465"],
      },
    },
    {
      "nodeTo":"466",
      "data" :{
          "nodeToName":'Jay',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["166", "466"],
      },
    },
    {
      "nodeTo":"167",
      "data" :{
          "nodeToName":'Aayu',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["166", "167"],
      },
    },
    {
      "nodeTo":"165",
      "data" :{
            "nodeToName":'Pururava',
          "$color":"#B2DFDB",
          "relation":"husband",
          "$type":"arrow",
          "$dim":10,
          "$direction":["166", "165"],
      },
    },]
},
{
  id :"241",
  name :" surya",
  data :{
    gender :"male",
    father :"0",
    groups :"Dev",
  },
  "adjacencies" : [
    {
      "nodeTo":"306",
      "data" :{
          "nodeToName":'Ashvinikumar',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["241", "306"],
      },
    },
    {
      "nodeTo":"240",
      "data" :{
          "nodeToName":'Karna  or vasushen or Vaikartan',
          "$color":"#2196f3",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["241", "240"],
      },
    },
    {
      "nodeTo":"305",
      "data" :{
            "nodeToName":'Sangya or Saravyu or Vadavarupdharini',
          "$color":"#4DB6AC",
          "relation":"wife",
          "$type":"arrow",
          "$dim":10,
          "$direction":["241", "305"],
      },
    },]
},
{
  id :"242",
  name :" Chitrangada",
  data :{
    gender :"female",
    father :"0",
  },
  "adjacencies" : [
    {
      "nodeTo":"251",
      "data" :{
          "nodeToName":'Babhruvahan',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["242", "251"],
      },
    },
    {
      "nodeTo":"235",
      "data" :{
            "nodeToName":'Arjun',
          "$color":"#B2DFDB",
          "relation":"husband",
          "$type":"arrow",
          "$dim":10,
          "$direction":["242", "235"],
      },
    },]
},
{
  id :"363",
  name :" Devaki",
  data :{
    gender :"female",
    father :"0",
  },
  "adjacencies" : [
    {
      "nodeTo":"362",
      "data" :{
          "nodeToName":'Krushna',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["363", "362"],
      },
    },
    {
      "nodeTo":"356",
      "data" :{
            "nodeToName":'Vasudev',
          "$color":"#B2DFDB",
          "relation":"husband",
          "$type":"arrow",
          "$dim":10,
          "$direction":["363", "356"],
      },
    },]
},
{
  id :"243",
  name :" Subhadra",
  data :{
    gender :"female",
    father :"0",
  },
  "adjacencies" : [
    {
      "nodeTo":"252",
      "data" :{
          "nodeToName":'Abhimanyu',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["243", "252"],
      },
    },
    {
      "nodeTo":"235",
      "data" :{
            "nodeToName":'Arjun',
          "$color":"#B2DFDB",
          "relation":"husband",
          "$type":"arrow",
          "$dim":10,
          "$direction":["243", "235"],
      },
    },]
},
{
  id :"364",
  name :" Baldev or Balram",
  data :{
    gender :"male",
    father :"0",
  },
  "adjacencies" : []
},
{
  id :"485",
  name :" Menaka",
  data :{
    gender :"female",
    father :"0",
    groups :"Apsara",
  },
  "adjacencies" : [
    {
      "nodeTo":"35",
      "data" :{
          "nodeToName":'shakuntala',
          "$color":"#E91E63",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["485", "35"],
      },
    },]
},
{
  id :"365",
  name :" Bhishmak",
  data :{
    gender :"male",
    father :"0",
    title :"Vidarbh raj",
    groups :"King",
  },
  "adjacencies" : [
    {
      "nodeTo":"366",
      "data" :{
          "nodeToName":'Rukmanidevi',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["365", "366"],
      },
    },]
},
{
  id :"366",
  name :" Rukmanidevi",
  data :{
    gender :"female",
    father :"365",
  },
  "adjacencies" : [
    {
      "nodeTo":"512",
      "data" :{
          "nodeToName":'Pradyumna',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["366", "512"],
      },
    },
    {
      "nodeTo":"362",
      "data" :{
            "nodeToName":'Krushna',
          "$color":"#B2DFDB",
          "relation":"husband",
          "$type":"arrow",
          "$dim":10,
          "$direction":["366", "362"],
      },
    },]
},
{
  id :"245",
  name :" Ulupi",
  data :{
    gender :"female",
    father :"0",
  },
  "adjacencies" : [
    {
      "nodeTo":"258",
      "data" :{
          "nodeToName":'Idavan',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["245", "258"],
      },
    },
    {
      "nodeTo":"235",
      "data" :{
            "nodeToName":'Arjun',
          "$color":"#B2DFDB",
          "relation":"husband",
          "$type":"arrow",
          "$dim":10,
          "$direction":["245", "235"],
      },
    },]
},
{
  id :"246",
  name :" Devika",
  data :{
    gender :"female",
    father :"0",
  },
  "adjacencies" : [
    {
      "nodeTo":"259",
      "data" :{
          "nodeToName":'Yodhey',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["246", "259"],
      },
    },
    {
      "nodeTo":"236",
      "data" :{
            "nodeToName":'Yudhishthir',
          "$color":"#B2DFDB",
          "relation":"husband",
          "$type":"arrow",
          "$dim":10,
          "$direction":["246", "236"],
      },
    },]
},
{
  id :"367",
  name :" Sachi",
  data :{
    gender :"female",
    father :"0",
  },
  "adjacencies" : []
},
{
  id :"247",
  name :" Balandhara",
  data :{
    gender :"female",
    father :"0",
  },
  "adjacencies" : [
    {
      "nodeTo":"260",
      "data" :{
          "nodeToName":'Sarvag',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["247", "260"],
      },
    },
    {
      "nodeTo":"237",
      "data" :{
            "nodeToName":'bhim',
          "$color":"#B2DFDB",
          "relation":"husband",
          "$type":"arrow",
          "$dim":10,
          "$direction":["247", "237"],
      },
    },]
},
{
  id :"248",
  name :" Hidamba",
  data :{
    gender :"female",
    father :"0",
  },
  "adjacencies" : [
    {
      "nodeTo":"261",
      "data" :{
          "nodeToName":'Ghatotkach',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["248", "261"],
      },
    },
    {
      "nodeTo":"237",
      "data" :{
            "nodeToName":'bhim',
          "$color":"#B2DFDB",
          "relation":"husband",
          "$type":"arrow",
          "$dim":10,
          "$direction":["248", "237"],
      },
    },]
},
{
  id :"249",
  name :" karenumati",
  data :{
    gender :"female",
    father :"0",
  },
  "adjacencies" : [
    {
      "nodeTo":"262",
      "data" :{
          "nodeToName":'Nirmitra',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["249", "262"],
      },
    },
    {
      "nodeTo":"238",
      "data" :{
            "nodeToName":'Nakul',
          "$color":"#B2DFDB",
          "relation":"husband",
          "$type":"arrow",
          "$dim":10,
          "$direction":["249", "238"],
      },
    },]
},
{
  id :"22",
  name :" virani",
  data :{
    gender :"female",
    father :"0",
  },
  "adjacencies" : [
    {
      "nodeTo":"21",
      "data" :{
            "nodeToName":'Prachetas Daksh',
          "$color":"#B2DFDB",
          "relation":"husband",
          "$type":"arrow",
          "$dim":10,
          "$direction":["22", "21"],
      },
    },]
},
{
  id :"250",
  name :" Vijaya",
  data :{
    gender :"female",
    father :"0",
  },
  "adjacencies" : [
    {
      "nodeTo":"263",
      "data" :{
          "nodeToName":'Suhotra',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["250", "263"],
      },
    },
    {
      "nodeTo":"239",
      "data" :{
            "nodeToName":'Sahadev',
          "$color":"#B2DFDB",
          "relation":"husband",
          "$type":"arrow",
          "$dim":10,
          "$direction":["250", "239"],
      },
    },]
},
{
  id :"132",
  name :" jarasangh",
  data :{
    gender :"male",
    father :"0",
  },
  "adjacencies" : []
},
{
  id :"375",
  name :" Jabali",
  data :{
    gender :"male",
    father :"0",
    groups :"Rushi",
  },
  "adjacencies" : [
    {
      "nodeTo":"374",
      "data" :{
          "nodeToName":'Pinjala or Vatika',
          "$color":"#2196f3",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["375", "374"],
      },
    },]
},
{
  id :"374",
  name :" Pinjala or Vatika",
  data :{
    gender :"female",
    father :"375",
  },
  "adjacencies" : [
    {
      "nodeTo":"376",
      "data" :{
          "nodeToName":'sukhdevji',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["374", "376"],
      },
    },
    {
      "nodeTo":"222",
      "data" :{
            "nodeToName":'Maharshi Vyas',
          "$color":"#B2DFDB",
          "relation":"husband",
          "$type":"arrow",
          "$dim":10,
          "$direction":["374", "222"],
      },
    },]
},
{
  id :"498",
  name :" Sumitra",
  data :{
    gender :"female",
    father :"0",
    title :"Most Intelligent and Youngest, Encouraged Lakshman to go with Ram in vanvas",
  },
  "adjacencies" : [
    {
      "nodeTo":"496",
      "data" :{
          "nodeToName":'Lakshman Saumitri',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["498", "496"],
      },
    },
    {
      "nodeTo":"497",
      "data" :{
          "nodeToName":'Shatrugna',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["498", "497"],
      },
    },
    {
      "nodeTo":"457",
      "data" :{
            "nodeToName":'Dashrath',
          "$color":"#B2DFDB",
          "relation":"husband",
          "$type":"arrow",
          "$dim":10,
          "$direction":["498", "457"],
      },
    },]
},
{
  id :"499",
  name :" Kaushalya",
  data :{
    gender :"female",
    father :"0",
    title :"Sweetest and eldest",
  },
  "adjacencies" : [
    {
      "nodeTo":"458",
      "data" :{
          "nodeToName":'Ram',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["499", "458"],
      },
    },
    {
      "nodeTo":"457",
      "data" :{
            "nodeToName":'Dashrath',
          "$color":"#B2DFDB",
          "relation":"husband",
          "$type":"arrow",
          "$dim":10,
          "$direction":["499", "457"],
      },
    },]
},
{
  id :"36",
  name :" krupachary",
  data :{
    gender :"male",
    father :"0",
    title :"Kaurav guru",
    groups :"Kaurav,Bhrahmarshi",
  },
  "adjacencies" : []
},
{
  id :"383",
  name :" Devhuti",
  data :{
    gender :"female",
    father :"0",
  },
  "adjacencies" : [
    {
      "nodeTo":"373",
      "data" :{
          "nodeToName":'Arundhati',
          "$color":"#E91E63",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["383", "373"],
      },
    },]
},
{
  id :"384",
  name :" Lopamudra",
  data :{
    gender :"female",
    father :"0",
    title :"Created by Agatsya",
  },
  "adjacencies" : [
    {
      "nodeTo":"379",
      "data" :{
            "nodeToName":'Agatsya',
          "$color":"#B2DFDB",
          "relation":"husband",
          "$type":"arrow",
          "$dim":10,
          "$direction":["384", "379"],
      },
    },]
},
{
  id :"264",
  name :" Uttara",
  data :{
    gender :"female",
    father :"0",
  },
  "adjacencies" : [
    {
      "nodeTo":"265",
      "data" :{
          "nodeToName":'parikshit',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["264", "265"],
      },
    },
    {
      "nodeTo":"252",
      "data" :{
            "nodeToName":'Abhimanyu',
          "$color":"#B2DFDB",
          "relation":"husband",
          "$type":"arrow",
          "$dim":10,
          "$direction":["264", "252"],
      },
    },]
},
{
  id :"269",
  name :" Madravati",
  data :{
    gender :"female",
    father :"0",
  },
  "adjacencies" : [
    {
      "nodeTo":"270",
      "data" :{
          "nodeToName":'janmejay',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["269", "270"],
      },
    },
    {
      "nodeTo":"265",
      "data" :{
            "nodeToName":'parikshit',
          "$color":"#B2DFDB",
          "relation":"husband",
          "$type":"arrow",
          "$dim":10,
          "$direction":["269", "265"],
      },
    },]
},
{
  id :"392",
  name :" Kaikeshi",
  data :{
    gender :"female",
    father :"0",
    groups :"Rakshas",
  },
  "adjacencies" : [
    {
      "nodeTo":"386",
      "data" :{
          "nodeToName":'Vibhishan',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["392", "386"],
      },
    },
    {
      "nodeTo":"388",
      "data" :{
          "nodeToName":'Ravan',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["392", "388"],
      },
    },
    {
      "nodeTo":"389",
      "data" :{
          "nodeToName":'Kumnhakarna',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["392", "389"],
      },
    },
    {
      "nodeTo":"390",
      "data" :{
          "nodeToName":'Surpankha',
          "$color":"#E91E63",
          "relation":"daughter",
          "$type":"arrow",
          "$dim":10,
          "$direction":["392", "390"],
      },
    },
    {
      "nodeTo":"385",
      "data" :{
            "nodeToName":'Visravas',
          "$color":"#B2DFDB",
          "relation":"husband",
          "$type":"arrow",
          "$dim":10,
          "$direction":["392", "385"],
      },
    },]
},
{
  id :"287",
  name :" prapti",
  data :{
    gender :"female",
    father :"0",
  },
  "adjacencies" : [
    {
      "nodeTo":"284",
      "data" :{
            "nodeToName":'Sham',
          "$color":"#B2DFDB",
          "relation":"husband",
          "$type":"arrow",
          "$dim":10,
          "$direction":["287", "284"],
      },
    },]
},
{
  id :"288",
  name :" rati",
  data :{
    gender :"female",
    father :"0",
  },
  "adjacencies" : [
    {
      "nodeTo":"285",
      "data" :{
            "nodeToName":'Kaam',
          "$color":"#B2DFDB",
          "relation":"husband",
          "$type":"arrow",
          "$dim":10,
          "$direction":["288", "285"],
      },
    },]
},
{
  id :"168",
  name :" sarvabhavani",
  data :{
    gender :"female",
    father :"0",
  },
  "adjacencies" : [
    {
      "nodeTo":"169",
      "data" :{
          "nodeToName":'Nahush',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["168", "169"],
      },
    },
    {
      "nodeTo":"167",
      "data" :{
            "nodeToName":'Aayu',
          "$color":"#B2DFDB",
          "relation":"husband",
          "$type":"arrow",
          "$dim":10,
          "$direction":["168", "167"],
      },
    },]
},
{
  id :"289",
  name :" nanda",
  data :{
    gender :"female",
    father :"0",
  },
  "adjacencies" : [
    {
      "nodeTo":"286",
      "data" :{
            "nodeToName":'harsh',
          "$color":"#B2DFDB",
          "relation":"husband",
          "$type":"arrow",
          "$dim":10,
          "$direction":["289", "286"],
      },
    },]
},
{
  id :"290",
  name :" parishrami",
  data :{
    gender :"female",
    father :"0",
    title :"Maid of Amba Ambalika",
  },
  "adjacencies" : [
    {
      "nodeTo":"291",
      "data" :{
          "nodeToName":'vidur',
          "$color":"#E91E63",
          "relation":"son",
          "$type":"arrow",
          "$dim":10,
          "$direction":["290", "291"],
      },
    },]
},
{
  id :"299",
  name :" Aaruni",
  data :{
    gender :"female",
    father :"0",
  },
  "adjacencies" : [
    {
      "nodeTo":"293",
      "data" :{
            "nodeToName":'Chyavan',
          "$color":"#B2DFDB",
          "relation":"husband",
          "$type":"arrow",
          "$dim":10,
          "$direction":["299", "293"],
      },
    },]
},
{
  id :"86",
  name :" shailya",
  data :{
    gender :"male",
    father :"0",
  },
  "adjacencies" : []
},
{
  id :"87",
  name :" Dhrushtketu",
  data :{
    gender :"male",
    father :"0",
  },
  "adjacencies" : []
},
{
  id :"88",
  name :" Daitya drum",
  data :{
    gender :"male",
    father :"0",
  },
  "adjacencies" : []
},
{
  id :"89",
  name :" Bhagdatta",
  data :{
    gender :"male",
    father :"0",
  },
  "adjacencies" : []
},
{
  id :"90",
  name :" shishupal",
  data :{
    gender :"male",
    father :"0",
  },
  "adjacencies" : []
},

];