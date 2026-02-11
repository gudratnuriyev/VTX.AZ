import { ArrowUpRight, GraduationCap, Globe, BookOpen, Plane, FileCheck } from "lucide-react";

export const BRAND_NAME = "Marmara Group";

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
    bgImage: "https://picsum.photos/800/600?random=1"
  },
  {
    id: 2,
    title: "Viza Dəstəyi",
    description: "Sənədləşmə və viza proseslərində tam dəstək.",
    icon: FileCheck,
    colSpan: "md:col-span-1",
    bgImage: "https://picsum.photos/400/600?random=2"
  },
  {
    id: 3,
    title: "Magistr Təhsili",
    description: "Karyeranızı yüksəltmək üçün magistratura proqramları.",
    icon: BookOpen,
    colSpan: "md:col-span-1",
    bgImage: "https://picsum.photos/400/400?random=3"
  },
  {
    id: 4,
    title: "İmtahanlara Hazırlıq",
    description: "TOEFL, IELTS, SAT, TÖMER hazırlıq kursları.",
    icon: ArrowUpRight,
    colSpan: "md:col-span-1",
    bgImage: null
  },
  {
    id: 5,
    title: "Attestatla Təhsil",
    description: "Yalnız attestatla universitetə qəbul imkanı.",
    icon: Globe,
    colSpan: "md:col-span-1",
    bgImage: null
  },
  {
    id: 6,
    title: "Qiyabi Təhsil",
    description: "İşləyərək təhsil almaq istəyənlər üçün qiyabi proqramlar.",
    icon: Plane,
    colSpan: "md:col-span-3",
    bgImage: "https://picsum.photos/1200/400?random=4"
  },
];

export const DESTINATIONS = [
  "Türkiyə",
  "Rusiya",
  "Polşa",
  "Litva",
  "Latviya",
  "Estoniya",
  "Avropa",
];

export const CONTACT_INFO = {
  address: "Bakı şəhəri, Azərbaycan",
  phone: "+994 50 000 00 00",
  email: "info@marmaragroup.az",
};