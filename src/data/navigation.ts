export interface NavItem {
  title: string;
  href: string;
  badge?: string;
  children?: {
    title: string;
    href: string;
    description?: string;
  }[];
}

export const navigationItems: NavItem[] = [
  {
    title: "Home",
    href: "/"
  },
  {
    title: "About Us",
    href: "/about"
  },
  {
    title: "Courses",
    href: "/courses",
    children: [
      {
        title: "CNC Programming Training",
        href: "/courses/cnc-programming",
        description: "G-Codes, M-Codes, canned cycles & turning calculations"
      },
      {
        title: "VMC Programming Training",
        href: "/courses/vmc-programming",
        description: "3-Axis vertical milling, work offsets & canned cycles"
      },
      {
        title: "Mastercam 2D & 3D Training",
        href: "/courses/mastercam-2d-3d",
        description: "CAD/CAM modeling, 3D toolpaths & post-processing"
      },
      {
        title: "Delcam Programming Training",
        href: "/courses/delcam-programming",
        description: "PowerMill roughing & finishing strategies for mold/die"
      },
      {
        title: "AutoCAD Training",
        href: "/courses/autocad",
        description: "2D mechanical drafting, GD&T & orthographic views"
      },
      {
        title: "Siemens CNC Control Programming",
        href: "/courses/siemens-cnc-programming",
        description: "Sinumerik controller interface & cycle programming"
      },
      {
        title: "View All 11 Courses →",
        href: "/courses",
        description: "Browse our complete catalog of industrial training courses"
      }
    ]
  },
  {
    title: "Training Facilities",
    href: "/facilities"
  },
  {
    title: "Gallery",
    href: "/gallery"
  },
  {
    title: "Contact Us",
    href: "/contact"
  }
];

export const footerQuickLinks = [
  { title: "Home", href: "/" },
  { title: "About JAYRISH", href: "/about" },
  { title: "All Training Courses", href: "/courses" },
  { title: "Training Facilities", href: "/facilities" },
  { title: "Institute Gallery", href: "/gallery" },
  { title: "Contact & Admissions", href: "/contact" }
];

export const footerCourseLinks = [
  { title: "CNC Machine Operating", href: "/courses/cnc-machine-operating" },
  { title: "VMC Machine Operating", href: "/courses/vmc-machine-operating" },
  { title: "CNC Programming Training", href: "/courses/cnc-programming" },
  { title: "VMC Programming Training", href: "/courses/vmc-programming" },
  { title: "Mastercam 2D & 3D", href: "/courses/mastercam-2d-3d" },
  { title: "Delcam Programming", href: "/courses/delcam-programming" },
  { title: "AutoCAD 2D Drafting", href: "/courses/autocad" },
  { title: "Siemens CNC Controls", href: "/courses/siemens-cnc-programming" }
];
