import {
  yieldimage,
  weatherimg,
  marketimg,
  fertilizerimg,
  plantdiseaseimg,
  ecoimage,
  freshimage,
  safeimage,
  easyimage,
  Framericon,
  Insectsicon,
  Graphicon,
  Cloudicon,
  WindIcon,
  HumidityIcon,
  PhImg,
  NitrogenImg,
  RainingImg,
  PhosphorousImg,
  PottasiumImg,
  RainyCloudIcon,
  GrainsIcon,
  CgTreesIcons,
  FertlizerIcon,
  CommunityIcons,
  EducationIcon,
  EmailIcon,
  CallIcon,
  AddressIcon,
  TempIcon,
  RainIcon,
  CommunityImage,
} from "../constants";

export const ServicecardData = [
  {
    id: 1,
    img: weatherimg,
    label: "Weather Updates",
  },
  {
    id: 2,
    img: marketimg,
    label: "Market Trends",
  },
  {
    id: 3,
    img: plantdiseaseimg,
    label: "Check Plant Disease",
  },
  {
    id: 4,
    img: fertilizerimg,
    label: "Find Best Fertilizer",
  },
  {
    id: 5,
    img: yieldimage,
    label: "Calculate Yield",
  },
  {
    id: 6,
    img: CommunityImage,
    label: "Community",
  },
];

export const PropcardsData = [
  {
    id: 1,
    img: ecoimage,
    label: "Eco",
  },
  {
    id: 2,
    img: freshimage,
    label: "Fresh",
  },
  {
    id: 3,
    img: safeimage,
    label: "Safe",
  },
  {
    id: 4,
    img: easyimage,
    label: "Easy",
  },
];

export const AppinfoData = [
  {
    id: 1,
    icons: Cloudicon,
    title: "Weather Updates",
    text: "Access real-time weather forecasts to make informed decisions for your crops and farming activities.",
  },
  {
    id: 2,
    icons: Insectsicon,
    title: "Check Plant Disease",
    text: "Utilize our plant disease detection feature to identify potential issues early and take corrective action.",
  },
  {
    id: 3,
    icons: Framericon,
    title: "Calculate Yield",
    text: "Estimate your crop yield with our specialized tools, ensuring better planning and resource allocation.",
  },
  {
    id: 4,
    icons: Graphicon,
    title: "Market Trends",
    text: "Analyze market trends and make informed decisions on selling your produce for the best price.",
  },
];

export const AircondtionsData = [
  {
    id: 1,
    icon: WindIcon,
    label: "Wind",
    value: "123",
  },
  {
    id: 2,
    icon: Cloudicon,
    label: "Cloud",
    value: "123",
  },
  {
    id: 3,
    icon: HumidityIcon,
    label: "Humidity",
    value: "123",
  },
];

export const TodaysForecastData = [
  {
    id: 1,
    time: "9:00",
  },
  {
    id: 2,
    time: "9:00",
  },
  {
    id: 3,
    time: "9:00",
  },
  {
    id: 4,
    time: "9:00",
  },
  {
    id: 5,
    time: "9:00",
  },
];

export const FertilizerPageInfoData = (t) => [
  {
    id: 2,
    img: NitrogenImg,
    label: t("Appinfo.fertilizerInfo.nitrogen.label"),
    content: t("Appinfo.fertilizerInfo.nitrogen.content"),
  },
  {
    id: 3,
    img: RainingImg,
    label: t("Appinfo.fertilizerInfo.rainfall.label"),
    content: t("Appinfo.fertilizerInfo.rainfall.content"),
  },
  {
    id: 4,
    img: PhosphorousImg,
    label: t("Appinfo.fertilizerInfo.phosphorous.label"),
    content: t("Appinfo.fertilizerInfo.phosphorous.content"),
  },
  {
    id: 5,
    img: PottasiumImg,
    label: t("Appinfo.fertilizerInfo.pottasium.label"),
    content: t("Appinfo.fertilizerInfo.pottasium.content"),
  },
  {
    id: 1,
    img: PhImg,
    label: t("Appinfo.fertilizerInfo.phLevel.label"),
    content: t("Appinfo.fertilizerInfo.phLevel.content"),
  },
];


export const navListMenuItems = [
  {
    title: "Navbar.weather",
    description: "Navbar.weather_description",
    icon: RainyCloudIcon,
    path: "/weather/:location/:userid",
  },
  {
    title: "Navbar.crop_yield_prediction",
    description: "Navbar.crop_yield_prediction_description",
    icon: GrainsIcon,
    path: "/crop-yield-prediction/:userid",
  },
  {
    title: "Navbar.plant_disease_prediction",
    description: "Navbar.plant_disease_prediction_description",
    icon: Insectsicon,
    path: "/plants-disease-prediction/:id",
  },
  {
    title: "Navbar.market_price",
    description: "Navbar.market_price_description",
    icon: Graphicon,
    path: "/market-price/:id",
  },
  {
    title: "Navbar.crop_prediction",
    description: "Navbar.crop_prediction_description",
    icon: CgTreesIcons,
    path: "/crop-prediction/:id",
  },
  {
    title: "Navbar.fertilizer_prediction",
    description: "Navbar.fertilizer_prediction_description",
    icon: FertlizerIcon,
    path: "/fertilizer-prediction/:id",
  },
  {
    title: "Navbar.community",
    description: "Navbar.community_description",
    icon: CommunityIcons,
    path: "/kissan-mitra/comuunity/:id",
  },
];

export const KeyfeaturesData = [
  {
    id: 2,
    feature: " info@kissanmitr.com",
    icon: EmailIcon,
  },
  {
    id: 3,
    feature: " 1-800-227-1031",
    icon: CallIcon,
  },
  {
    id: 4,
    feature: "1816 Bimini Drive, Delhi, FL 32806",
    icon: AddressIcon,
  },
];

export const Accord_Data = [
  {
    id: 1,
    question: "What is Kisaan Mitra App?",
    answer:
      "The Kisaan Mitra App is a digital platform designed to support farmers by providing them with essential resources, information, and services to improve agricultural productivity and sustainability.",
  },
  {
    id: 2,
    question: "Why do we need the Kisaan Mitra App?",
    answer:
      "The Kisaan Mitra App is crucial for empowering farmers with knowledge, connecting them with experts, and providing timely information on weather, market prices, and best farming practices.",
  },
  {
    id: 3,
    question: "What is the purpose of the Kisaan Mitra App?",
    answer:
      "The primary purpose of the Kisaan Mitra App is to enhance the livelihood of farmers by providing a comprehensive platform for accessing resources, expert advice, and real-time updates.",
  },
  {
    id: 4,
    question: "How is Kisaan Mitra App different from other agricultural apps?",
    answer:
      "It offers features such as cloud-based document submission, video consultations with agricultural experts, real-time chat, one-on-one interactions, and up-to-date information tailored to the farmer's needs.",
  },
];
