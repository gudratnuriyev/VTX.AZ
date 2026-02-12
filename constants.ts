import { ArrowUpRight, GraduationCap, Globe, BookOpen, Plane, FileCheck, Instagram, Facebook, Linkedin } from "lucide-react";

export const BRAND_NAME = "Vertex Foundation";


export const NAVIGATION_LINKS = [
  { name: "Haqqımızda", href: "#about" },
  { name: "Xidmətlər", href: "#services" },
  { name: "Destinasiyalar", href: "#destinations" },
  { name: "Əlaqə", href: "#contact" },
];

export const SERVICES_DATA = [
  {
    id: 1,
    title: "Xaricdə Bakalavr",
    description: "Dünyanın nüfuzlu universitetlərində bakalavr təhsili almaq şansı.",
    icon: GraduationCap,
    colSpan: "md:col-span-2",
    bgImage: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: 2,
    title: "Viza Dəstəyi",
    description: "Sənədləşmə və viza proseslərində tam dəstək.",
    icon: FileCheck,
    colSpan: "md:col-span-1",
    bgImage: "/visa.jpg"
  },
  {
    id: 3,
    title: "Magistr Təhsili",
    description: "Karyeranızı yüksəltmək üçün magistratura proqramları.",
    icon: BookOpen,
    colSpan: "md:col-span-1",
    bgImage: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    title: "İmtahanlara Hazırlıq",
    description: "TOEFL, IELTS, SAT, TÖMER hazırlıq kursları.",
    icon: ArrowUpRight,
    colSpan: "md:col-span-1",
    bgImage: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5,
    title: "Attestatla Təhsil",
    description: "Yalnız attestatla universitetə qəbul imkanı.",
    icon: Globe,
    colSpan: "md:col-span-1",
    bgImage: "/attestat.jpg"
  },
  {
    id: 6,
    title: "Qiyabi Təhsil",
    description: "İşləyərək təhsil almaq istəyənlər üçün qiyabi proqramlar.",
    icon: Plane,
    colSpan: "md:col-span-3",
    bgImage: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=1200"
  },
];

export const DESTINATIONS = [
  {
    name: "Türkiyə",
    image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=1200", // Istanbul
  },
  {
    name: "Rusiya",
    image: "https://images.unsplash.com/photo-1512495039889-52a3b799c9bc?q=80&w=1200", // St Basil
  },
  {
    name: "Polşa",
    image: "https://images.unsplash.com/photo-1519197924294-4ba991a11128?q=80&w=1200", // Warsaw
  },
  {
    name: "Özbəkistan",
    image: "/uzbekistan_tashkent-3.jpg",
  },
  {
    name: "Çexiya",
    image: "https://images.unsplash.com/photo-1541849546-216549ae216d?q=80&w=1200", // Prague
  },
  {
    name: "Britaniya",
    image: "https://images.unsplash.com/photo-1486299267070-83823f5448dd?q=80&w=1200", // London
  },
];

export const CONTACT_INFO = {
  address: "Bakı, Ağ Şəhər, Mərkəzi bulvar küçəsi 6. Raffle Business Center",
  phone: "+994 10 212 0308",
  email: "office@vtx.az",
};

export const SOCIAL_LINKS = [
  { icon: Instagram, href: "https://www.instagram.com/vertexfoundation.az/" },
  { icon: Facebook, href: "https://www.facebook.com/vertexfoundation.az/" },
  { icon: Linkedin, href: "#" },
];