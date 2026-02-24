import {
  WifiOutlined,
  CarOutlined,
  CoffeeOutlined,
  CustomerServiceOutlined,
  SafetyOutlined,
  ClockCircleOutlined
} from "@ant-design/icons";

export const rooms = [
  {
    title: "Deluxe Room",
    price: "₹3,499",
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800",
    features: ["King Size Bed", "AC", "WiFi", "TV", "Bathroom"],
    capacity: "2 Adults"
  },
  {
    title: "Executive Suite",
    price: "₹5,999",
    image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?w=800",
    features: ["Queen Bed", "Living Area", "Mini Bar", "City View", "Premium Amenities"],
    capacity: "2-3 Adults"
  }
];

export const amenities = [
  { icon: <WifiOutlined />, title: "Free WiFi", desc: "High-speed internet" },
  { icon: <CarOutlined />, title: "Free Parking", desc: "Secure parking area" },
  { icon: <CoffeeOutlined />, title: "Restaurant", desc: "Multi-cuisine dining" },
  { icon: <CustomerServiceOutlined />, title: "24/7 Service", desc: "Always available" },
  { icon: <SafetyOutlined />, title: "Security", desc: "CCTV surveillance" },
  { icon: <ClockCircleOutlined />, title: "Room Service", desc: "Round the clock" }
];

export const reviews = [
  {
    name: "Rajesh Kumar",
    rating: 5,
    comment: "Excellent service and very clean rooms.",
    date: "January 2026"
  }
];
