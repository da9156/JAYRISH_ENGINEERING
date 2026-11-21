export interface CourseModule {
  title: string;
  topics: string[];
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: "CNC Machining" | "VMC Machining" | "CAD/CAM Software" | "Technical Fundamentals";
  shortDescription: string;
  fullDescription: string;
  duration: string;
  trainingMode: string;
  certification: string;
  eligibility: string[];
  keyHighlights: string[];
  syllabus: CourseModule[];
  image: string;
  badge?: string;
  featured?: boolean;
  disclaimer?: string;
  relatedSlugs: string[];
}

export const coursesData: Course[] = [
  {
    id: "course-1",
    slug: "computer-training",
    title: "Computer Training Class",
    subtitle: "Essential Computer Knowledge & Digital Foundations for Engineering Students",
    category: "Technical Fundamentals",
    shortDescription: "Develop essential computer literacy, digital operating skills, and software workflows needed for technical and industrial drafting environments.",
    fullDescription: "The Computer Training Class at JAYRISH ENGINEERING is designed to build a strong digital foundation for students, freshers, and technicians. Modern manufacturing environments and CAD/CAM software require fluent computer navigation, file management, and technical documentation proficiency.",
    duration: "Approx. 1 to 2 Months",
    trainingMode: "Classroom / Offline",
    certification: "Course Completion Certificate provided",
    eligibility: [
      "Engineering freshers & diploma students",
      "Technicians upgrading digital computer skills",
      "Anyone entering technical manufacturing fields"
    ],
    keyHighlights: [
      "Comprehensive computer operations from fundamentals",
      "Engineering file and directory organization",
      "Essential technical documentation and spreadsheets",
      "Offline, hands-on computer lab training"
    ],
    syllabus: [
      {
        title: "Module 1: Computer Fundamentals & Hardware",
        topics: [
          "Understanding computer hardware, architecture & peripherals",
          "Operating system fundamentals (Windows environment)",
          "Storage drives, memory management, and file systems",
          "System settings and hardware troubleshooting basics"
        ]
      },
      {
        title: "Module 2: File Management & Digital Organization",
        topics: [
          "File naming conventions for engineering designs",
          "Creating structured project folders & archives",
          "Managing external drives, USB storage & machine transfer files",
          "Data backup protocols and security practices"
        ]
      },
      {
        title: "Module 3: Office Applications & Technical Reports",
        topics: [
          "Creating technical documentation & reports in word processors",
          "Spreadsheets for machining parameters, tooling lists & cycle times",
          "Formulas, sorting, and tabular engineering calculations",
          "Generating printable and digital documentation"
        ]
      },
      {
        title: "Module 4: Digital Skills & Technical Communications",
        topics: [
          "Internet research for manufacturing standards & datasheets",
          "Email protocols for engineering correspondence",
          "Handling PDF engineering drawings and annotations",
          "Digital workflow ethics and workplace safety"
        ]
      }
    ],
    image: "/assets/courses/CNC Programming Training.png",
    relatedSlugs: ["autocad", "cnc-machine-operating", "cnc-programming"]
  },
  {
    id: "course-2",
    slug: "cnc-machine-operating",
    title: "CNC Machine Operating Training",
    subtitle: "Comprehensive Training on CNC Lathe Machine Operations & Handling",
    category: "CNC Machining",
    shortDescription: "Learn core CNC machine operation principles, control panel handling, workpiece setup, tooling installation, and industrial machine safety standards.",
    fullDescription: "Gain practical insights into how CNC turning and lathe machines function in production environments. This course introduces learners to machine hardware, control switches, jog modes, cutting tools, workpiece clamping, and essential safety guidelines required by modern machine shops.",
    duration: "Approx. 3 Months",
    trainingMode: "Classroom / Offline",
    certification: "Course Completion Certificate provided",
    eligibility: [
      "Diploma / Degree in Mechanical / Production Engineering",
      "ITI Machine Tool / Machinist students",
      "Freshers seeking entry into CNC machining",
      "Existing machine helpers and operators seeking skill upgrade"
    ],
    keyHighlights: [
      "Detailed breakdown of CNC lathe machine components",
      "Control panel layout, operational modes, and emergency protocols",
      "Workpiece alignment, clamping fixtures, and chuck setup",
      "Cutting tool mounting, insert geometry, and tool wear inspection"
    ],
    syllabus: [
      {
        title: "Module 1: Introduction to CNC Machines & Principles",
        topics: [
          "History and evolution of CNC machining",
          "Difference between conventional lathes and CNC turning centers",
          "Core axes of CNC turning (X and Z axis principles)",
          "Basic machining operations: Facing, turning, grooving, threading & boring"
        ]
      },
      {
        title: "Module 2: Machine Components & Subsystems",
        topics: [
          "Spindle assembly, chucks, and collet systems",
          "Tool turret mechanism and tool indexing",
          "Tailstock operation and quill positioning",
          "Coolant systems, chip conveyors, and hydraulic units"
        ]
      },
      {
        title: "Module 3: Machine Control Panel Operations",
        topics: [
          "Control panel buttons, switches, and emergency stops",
          "Operational modes: JOG, MDI, EDIT, AUTO, MEMORY, and REF RETURN",
          "Handwheel (MPG) operation for fine axis positioning",
          "Reading display screens, coordinates (Machine, Absolute, Relative)"
        ]
      },
      {
        title: "Module 4: Workpiece Setup & Tooling Basics",
        topics: [
          "Clamping methods, soft jaw boring & concentricity alignment",
          "Cutting tool types: Carbide inserts, turning tools, boring bars",
          "Work zero reference and basic touch-off concepts",
          "Preventing collisions, over-travels & operational safety measures"
        ]
      }
    ],
    image: "/assets/courses/CNC Programming Training.png",
    badge: "Core Technical",
    featured: true,
    relatedSlugs: ["cnc-programming", "cnc-setup-tooling", "vmc-machine-operating"]
  },
  {
    id: "course-3",
    slug: "vmc-machine-operating",
    title: "VMC Machine Operating Training",
    subtitle: "Vertical Machining Center Operations, Multi-Axis Setup & Panel Mastery",
    category: "VMC Machining",
    shortDescription: "Understand Vertical Machining Center (VMC) machine parts, milling operations, control panel operation, workpiece setting, and tooling procedures.",
    fullDescription: "Vertical Machining Centers form the backbone of precision milling in automotive, aerospace, and die-mold sectors. This course covers VMC components, 3-axis motion (X, Y, Z), Automatic Tool Changer (ATC) systems, workholding clamps, edge finding, and machine handling.",
    duration: "Approx. 3 Months",
    trainingMode: "Classroom / Offline",
    certification: "Course Completion Certificate provided",
    eligibility: [
      "Diploma / Degree in Mechanical, Automobile, or Production Engineering",
      "ITI Millers, Machinists, and Tool & Die Makers",
      "CNC lathe operators transitioning to milling centers",
      "Engineering freshers preparing for industrial manufacturing jobs"
    ],
    keyHighlights: [
      "In-depth study of 3-Axis Vertical Machining Centers",
      "Control console handling across FANUC and modern controller layouts",
      "ATC (Automatic Tool Changer) and carousel magazine management",
      "Workpiece zero setting using edge finders and dial test indicators"
    ],
    syllabus: [
      {
        title: "Module 1: Introduction to VMC Architecture",
        topics: [
          "Fundamentals of vertical milling technology",
          "Coordinate systems and 3-axis Cartesian movement (X, Y, Z)",
          "Machine construction: Bed, column, spindle head, table, and linear guideways",
          "Difference between horizontal (HMC) and vertical (VMC) machining"
        ]
      },
      {
        title: "Module 2: Machine Control Panel & Operations",
        topics: [
          "Interface layout, function keys, and alphanumeric keypad",
          "Selecting operational modes: AUTO, EDIT, MDI, JOG, HANDLE, ZERO RETURN",
          "Spindle speed override, feed rate override, and rapid traverse control",
          "Interpreting alarm messages and error recovery procedures"
        ]
      },
      {
        title: "Module 3: Workholding, Workpiece Setup & Clamping",
        topics: [
          "Machine vices, clamping kits, fixture plates, and toe clamps",
          "Aligning workpiece with dial gauges and test indicators",
          "Using mechanical and electronic edge finders for X/Y zeroes",
          "Z-axis touch-off using Z-axis presetters and slip gauges"
        ]
      },
      {
        title: "Module 4: Milling Tooling Systems & Workshop Safety",
        topics: [
          "Milling cutters: Face mills, end mills, ball nose cutters, slot drills",
          "Tool holders: BT40, BT50, collet chucks, shrink-fit, and pull studs",
          "Loading and managing tools in Automatic Tool Changer (ATC) carousels",
          "Machine safety doors, interlocks, eye protection, and coolant management"
        ]
      }
    ],
    image: "/assets/courses/VMC Machine Operating Training.png",
    badge: "High Demand",
    featured: true,
    relatedSlugs: ["vmc-programming", "cnc-setup-tooling", "cnc-machine-operating"]
  },
  {
    id: "course-4",
    slug: "cnc-programming",
    title: "CNC Programming Training",
    subtitle: "Complete G-Code & M-Code Programming for CNC Lathes & Turning Centers",
    category: "CNC Machining",
    shortDescription: "Master CNC turning programming from scratch. Learn G-codes, M-codes, coordinate systems, canned cycles (G71, G72, G76), tool offsets, and program optimization.",
    fullDescription: "Programming is the brain behind modern CNC manufacturing. In this structured course, learners develop fluency in drafting CNC turning programs manually. You will learn Cartesian coordinate geometry, tool nose radius compensation, roughing cycles, grooving, threading cycles, and subprograms.",
    duration: "Approx. 3 Months",
    trainingMode: "Classroom / Offline",
    certification: "Course Completion Certificate provided",
    eligibility: [
      "Diploma / Degree in Mechanical / Automobile Engineering",
      "CNC machine operators aiming to become programmers",
      "Job seekers targeting manufacturing & production engineering roles",
      "Quality assurance and production supervisors"
    ],
    keyHighlights: [
      "Thorough command of G-Codes, M-Codes, and block structures",
      "Comprehensive training on Fanuc-style turning canned cycles (G71, G72, G70, G76)",
      "Radius compensation (G40, G41, G42) and tool nose vector geometry",
      "Complete part program preparation from engineering blueprints"
    ],
    syllabus: [
      {
        title: "Module 1: CNC Programming Fundamentals & Mathematics",
        topics: [
          "Structure of a CNC part program: Program number, sequence, end of block",
          "Absolute (G90 / X, Z) vs. Incremental (G91 / U, W) programming",
          "Work coordinate systems: G54 to G59 offset calls",
          "Spindle commands: Constant surface speed (G96) and direct RPM (G97)"
        ]
      },
      {
        title: "Module 2: Essential G-Codes & Linear / Circular Motion",
        topics: [
          "Rapid positioning (G00) and linear feed interpolation (G01)",
          "Circular interpolation: Clockwise (G02) and Counter-Clockwise (G03) arcs",
          "Chamfering and corner rounding programming calculations",
          "Feed per revolution (G95) vs Feed per minute (G94)"
        ]
      },
      {
        title: "Module 3: Canned Machining Cycles (Turning, Facing, Grooving)",
        topics: [
          "G71 Stock removal in turning (roughing cycle) and profile definitions",
          "G70 Finishing cycle execution",
          "G72 Facing cycle for broad end-face stock removal",
          "G75 Grooving cycle and parting-off calculations"
        ]
      },
      {
        title: "Module 4: Threading Cycles, Offsets & Subprograms",
        topics: [
          "G76 Multiple repetitive threading cycle (pitch, lead, thread depth)",
          "Tool geometry offsets, wear offsets, and tool nose radius compensation (G41/G42)",
          "Subprogram calls (M98 / M99) for repetitive features",
          "Blueprint reading, part dimensioning, and program verification"
        ]
      }
    ],
    image: "/assets/courses/CNC Programming Training.png",
    badge: "Flagship Course",
    featured: true,
    relatedSlugs: ["vmc-programming", "cnc-machine-operating", "mastercam-2d-3d"]
  },
  {
    id: "course-5",
    slug: "vmc-programming",
    title: "VMC Programming Training",
    subtitle: "Professional Manual Programming for 3-Axis Vertical Machining Centers",
    category: "VMC Machining",
    shortDescription: "Understand VMC milling programming, coordinate work offsets, drilling canned cycles (G81-G89), circular pocketing, face milling, and cutter radius compensation.",
    fullDescription: "VMC Programming prepares learners to generate precise manual machining programs for complex prismatic parts. Learn how to write structured code for face milling, rectangular and circular pocketing, slot milling, center drilling, tapping, and counterboring using standard Fanuc control syntax.",
    duration: "Approx. 3 Months",
    trainingMode: "Classroom / Offline",
    certification: "Course Completion Certificate provided",
    eligibility: [
      "Diploma / Degree in Mechanical / Production Engineering",
      "VMC machine operators seeking promotion to programmer roles",
      "Tool & Die makers and precision machining specialists",
      "Engineers wanting to bridge design knowledge with workshop code"
    ],
    keyHighlights: [
      "Detailed 3-axis milling program structuring and syntax",
      "Cutter radius compensation (G40, G41, G42) and lead-in / lead-out strategies",
      "Standard canned drilling, pecking & tapping cycles (G73, G81, G83, G84)",
      "Blueprint-to-code translation for industrial mechanical components"
    ],
    syllabus: [
      {
        title: "Module 1: VMC Coordinate Systems & Motion Syntax",
        topics: [
          "Cartesian coordinates in 3D: X, Y, and Z plane selection (G17, G18, G19)",
          "Work Coordinate System offsets: G54 to G59 setup and selection",
          "Tool length compensation: G43, G44, and H-code assignment with G49 cancellation",
          "Feed types: Feed per minute (G94) and Feed per tooth calculations"
        ]
      },
      {
        title: "Module 2: 2D Milling Operations & Path Generation",
        topics: [
          "Face milling strategies: Zigzag, one-way, and spiral path coding",
          "Profile contouring: Linear interpolation and arc blending (G02/G03)",
          "Cutter radius compensation left/right (G41/G42) and lead-in/lead-out arcs",
          "Slot milling and helical ramping programming"
        ]
      },
      {
        title: "Module 3: Canned Drilling & Hole-Making Cycles",
        topics: [
          "G81 Drilling / Spotting cycle and G80 cycle cancel",
          "G82 Counterboring cycle with dwell (P parameter)",
          "G83 Deep hole peck drilling cycle with Q step-down calculation",
          "G73 High-speed chip breaking peck drilling cycle",
          "G84 Right-hand rigid tapping cycle synchronization"
        ]
      },
      {
        title: "Module 4: Pocketing, Subroutines & Optimization",
        topics: [
          "Rectangular and circular pocket milling programs",
          "Subprogram structure (M98/M99) for incremental depth passes",
          "Cycle time estimation, cutting parameters, and surface finish optimization",
          "Safe retract planes (G98/G99) and collision prevention rules"
        ]
      }
    ],
    image: "/assets/courses/VMC Programming Training.png",
    badge: "Flagship Course",
    featured: true,
    relatedSlugs: ["cnc-programming", "mastercam-2d-3d", "delcam-programming"]
  },
  {
    id: "course-6",
    slug: "siemens-cnc-programming",
    title: "Siemens CNC Control Programming",
    subtitle: "Sinumerik Controller Programming & Advanced Machining Cycles",
    category: "CNC Machining",
    shortDescription: "Learn Siemens Sinumerik control system architecture, ShopMill / ShopTurn concepts, cycle programming, tool management, and offset handling.",
    fullDescription: "Siemens CNC controllers are widely deployed across European and high-precision Indian automotive and aerospace toolrooms. This course introduces learners to Siemens programming concepts, coordinate structures, standard Sinumerik cycles, and modern controller navigation.",
    duration: "Approx. 3 Months",
    trainingMode: "Classroom / Offline",
    certification: "Course Completion Certificate provided",
    eligibility: [
      "Machinists & operators working on Siemens controller-equipped machines",
      "Mechanical engineering students wanting multi-controller versatility",
      "Programmers looking to expand beyond Fanuc syntax"
    ],
    keyHighlights: [
      "Siemens Sinumerik controller interface and navigation",
      "Siemens cycle syntax (CYCLE81, CYCLE83, CYCLE71 face milling)",
      "Tool offset management, tool wear, and D-offset numbering",
      "Comparison and transition between Fanuc and Siemens programming philosophies"
    ],
    syllabus: [
      {
        title: "Module 1: Siemens Sinumerik Control Architecture",
        topics: [
          "Introduction to Siemens Sinumerik controllers and HMI layout",
          "Navigation through Machine, Program, Offset, and Diagnosis areas",
          "Workpiece coordinates, zero offsets (G54-G57), and frames",
          "Program structure and syntax in Siemens DIN 66025 standard"
        ]
      },
      {
        title: "Module 2: Sinumerik Tool Management & Offsets",
        topics: [
          "Tool list creation, tool names, and tool types (End mill, drill, tap)",
          "Geometry data: Length (L1), Radius (R), and tool wear compensation",
          "Cutting edge selection with D-words",
          "Tool life monitoring concepts and sister tooling"
        ]
      },
      {
        title: "Module 3: Siemens Standard Machining Cycles",
        topics: [
          "Standard drilling cycles: CYCLE81 (Centering) & CYCLE82 (Dwell)",
          "Deep hole drilling with CYCLE83 (Variable peck depths & chip removal)",
          "Tapping cycles: CYCLE84 / CYCLE840 rigid tapping",
          "CYCLE71 Face milling and CYCLE72 Contour milling parameterization"
        ]
      },
      {
        title: "Module 4: Practical Program Preparation & Execution",
        topics: [
          "Writing complete part programs using Siemens cycle calls",
          "Program simulation and graphical verification on Siemens screens",
          "Dry run and single block test execution procedures",
          "Troubleshooting syntax errors and alarms on Siemens consoles"
        ]
      }
    ],
    image: "/assets/courses/VMC Programming Training.png",
    disclaimer: "Course focuses on standard Siemens Sinumerik programming concepts. Specific controller model versions may vary.",
    relatedSlugs: ["vmc-programming", "cnc-programming", "mastercam-2d-3d"]
  },
  {
    id: "course-7",
    slug: "mastercam-2d-3d",
    title: "Mastercam 2D & 3D Training",
    subtitle: "Industry-Standard CAD/CAM Modeling & Multi-Axis Toolpath Generation",
    category: "CAD/CAM Software",
    shortDescription: "Develop CAD/CAM expertise using Mastercam. Learn 2D geometry creation, 3D surface modeling, milling toolpaths, simulation, and NC post-processing.",
    fullDescription: "Mastercam is the world's most widely used CAD/CAM software for CNC and VMC manufacturing. In this program, learners progress from 2D mechanical drafting to advanced 3D surface modeling, high-speed toolpath strategies, dynamic milling, simulation, and post-processor G-code generation.",
    duration: "Approx. 3 Months",
    trainingMode: "Classroom / Offline",
    certification: "Course Completion Certificate provided",
    eligibility: [
      "Diploma / Degree in Mechanical / Automobile / Production Engineering",
      "CNC/VMC manual programmers seeking transition to CAD/CAM",
      "Designers & Toolroom technicians",
      "Students preparing for CAM engineer job profiles"
    ],
    keyHighlights: [
      "Complete 2D drafting and 3D solid/surface modeling in Mastercam",
      "Standard 2D toolpaths: Contour, Pocketing, Drilling, Facing",
      "Advanced 3D surface roughing and finishing strategies",
      "Backplot, Solid Verify simulation, and NC code generation via post-processors"
    ],
    syllabus: [
      {
        title: "Module 1: Mastercam Interface & 2D Wireframe Design",
        topics: [
          "User interface, ribbon menu, planes, levels, and attributes",
          "Creating 2D geometry: Lines, arcs, rectangles, fillets, and chamfers",
          "Transformation tools: Translate, rotate, mirror, scale, and offset",
          "Importing engineering CAD files (.DXF, .DWG, .STEP, .IGES)"
        ]
      },
      {
        title: "Module 2: 2D Toolpaths & Machining Strategies",
        topics: [
          "Machine definition selection and stock setup",
          "Facing toolpaths with step-over and depth of cut controls",
          "Contour milling toolpaths with lead-in/lead-out and multi-passes",
          "Standard and dynamic pocketing strategies with island management",
          "Drill toolpath generation with cycle selection and sorting"
        ]
      },
      {
        title: "Module 3: 3D Surface & Solid Modeling",
        topics: [
          "Solid modeling basics: Extrude, revolve, sweep, and fillet",
          "Creating 3D surfaces: Loft, ruled, swept, and net surfaces",
          "Curve extraction and bounding box creation",
          "Preparing 3D geometry for multi-axis machining toolpaths"
        ]
      },
      {
        title: "Module 4: 3D Toolpaths, Verification & Post Processing",
        topics: [
          "Surface Roughing: Parallel, radial, pocket, and OptiRough strategies",
          "Surface Finishing: Parallel, flowline, scallop, and pencil finishing",
          "Backplot toolpath review and 3D Solid Verify simulation for collision detection",
          "Post-processing to generate Fanuc and Siemens compatible G-code"
        ]
      }
    ],
    image: "/assets/courses/Mastercam 2D & 3D Training.png",
    badge: "Industry Favorite",
    featured: true,
    relatedSlugs: ["delcam-programming", "autocad", "vmc-programming"]
  },
  {
    id: "course-8",
    slug: "delcam-programming",
    title: "Delcam Programming Training",
    subtitle: "Advanced CAM Programming with PowerMill Machining Strategies",
    category: "CAD/CAM Software",
    shortDescription: "Learn advanced CAD/CAM principles, 3D mold & die toolpath creation, high-speed roughing, and precision finishing strategies using Delcam / PowerMill.",
    fullDescription: "Delcam (PowerMill) is the premier CAM solution for complex 3D dies, molds, and aerospace components. This course covers model preparation, workplanes, stock boundary definition, 3D roughing clearance, high-speed finishing strategies, collision avoidance, and NC program output.",
    duration: "Approx. 3 Months",
    trainingMode: "Classroom / Offline",
    certification: "Course Completion Certificate provided",
    eligibility: [
      "Diploma / Degree in Mechanical / Tool & Die Engineering",
      "Mastercam users and VMC programmers aiming for die & mold CAM roles",
      "Tool designers and CAM engineers"
    ],
    keyHighlights: [
      "Understanding Delcam / PowerMill CAM workflow & workplane logic",
      "Model roughing strategies: Model area clearance & raster passes",
      "Surface finishing: Constant Z, raster, 3D offset, and corner finishing",
      "Tool holder collision verification and post-processing"
    ],
    syllabus: [
      {
        title: "Module 1: Introduction to Delcam & PowerMill Environment",
        topics: [
          "PowerMill interface layout, explorer tree, and command bar",
          "Importing CAD solid and surface models (.STEP, .IGES, .X_T)",
          "Workplane creation: Transform, orient, and multiple coordinate setups",
          "Block / stock definition: Box, cylinder, and triangular mesh"
        ]
      },
      {
        title: "Module 2: Tooling & Boundary Management",
        topics: [
          "Tool creation: End mills, ball nose, bull nose (tip rad), and tapered cutters",
          "Tool assembly definition: Shanks and tool holders for collision checks",
          "Creating boundaries: User-defined, selected surface, silhouette, and shallow",
          "Boundary editing and limiting toolpath regions"
        ]
      },
      {
        title: "Module 3: 3D Roughing & Semi-Finishing Strategies",
        topics: [
          "Model Area Clearance (Raster, Offset, and Vortex high-speed roughing)",
          "Rest roughing strategies using stock models",
          "Stepdown and stepover calculations based on tool geometry",
          "Lead and link settings for smooth cutter engagement"
        ]
      },
      {
        title: "Module 4: 3D Finishing Strategies & NC Output",
        topics: [
          "Constant Z finishing for steep sidewall surfaces",
          "Raster and 3D offset finishing for shallow surface contours",
          "Corner finishing and pencil milling for intricate fillets",
          "Toolpath simulation, gouge checking, and generating NC code for machine controllers"
        ]
      }
    ],
    image: "/assets/courses/Delcam Programming Training.png",
    badge: "Advanced CAM",
    disclaimer: "Delcam / PowerMill software concepts are taught on standard training setups. Specific product versions confirmed during enrollment.",
    relatedSlugs: ["mastercam-2d-3d", "vmc-programming", "autocad"]
  },
  {
    id: "course-9",
    slug: "autocad",
    title: "AutoCAD Training",
    subtitle: "2D Mechanical Drafting, Engineering Drawings & Geometric Dimensioning",
    category: "CAD/CAM Software",
    shortDescription: "Master 2D mechanical drafting in AutoCAD. Learn technical drawing standards, orthographic views, sectional details, geometric dimensions (GD&T basics), and plotting.",
    fullDescription: "Engineering begins with a clear blueprint. This AutoCAD course equips learners with professional 2D drafting skills tailored for mechanical engineering, manufacturing, and fabrication. Learn standard draw/modify tools, layers, dimension styles, isometric drawings, and drawing sheet preparation.",
    duration: "Approx. 2 to 3 Months",
    trainingMode: "Classroom / Offline",
    certification: "Course Completion Certificate provided",
    eligibility: [
      "Diploma & Degree students in Mechanical, Civil, or Automobile Engineering",
      "Draftsmen, technicians, and CNC operators needing drawing reading skills",
      "Freshers seeking entry into CAD drafting roles"
    ],
    keyHighlights: [
      "Comprehensive training on AutoCAD 2D drafting commands",
      "Standard orthographic projection: First-angle and third-angle views",
      "Layer management, line types, colors, and line weights",
      "Dimensioning styles, tolerances, and title block preparation"
    ],
    syllabus: [
      {
        title: "Module 1: AutoCAD Interface & Basic Drawing Tools",
        topics: [
          "AutoCAD user interface, command line, workspace, and units setup",
          "Coordinate systems: Absolute, relative Cartesian, and relative polar",
          "Drawing commands: Line, circle, arc, rectangle, polygon, and ellipse",
          "Object snaps (OSNAP) and tracking for precision drafting"
        ]
      },
      {
        title: "Module 2: Modification & Editing Commands",
        topics: [
          "Move, copy, rotate, scale, mirror, and offset tools",
          "Trim, extend, fillet, chamfer, break, and join commands",
          "Array commands: Rectangular, polar, and path arrays",
          "Stretch, lengthen, and grip editing techniques"
        ]
      },
      {
        title: "Module 3: Layers, Blocks & Dimensioning Standards",
        topics: [
          "Layer creation, color management, line weights, and line types",
          "Creating reusable blocks and attribute definitions",
          "Linear, aligned, angular, radius, and diameter dimensions",
          "Dimension style manager (DIMSTYLE), tolerances, and annotations"
        ]
      },
      {
        title: "Module 4: Mechanical Drawings & Printing Layouts",
        topics: [
          "Orthographic projections and sectional view generation",
          "Isometric drafting and isometric text placement",
          "Standard drawing title blocks, BOM (Bill of Materials) tables",
          "Paper space layouts, viewports, scale setting, and PDF plotting"
        ]
      }
    ],
    image: "/assets/courses/Delcam Programming Training.png",
    badge: "Essential CAD",
    relatedSlugs: ["mastercam-2d-3d", "cnc-programming", "computer-training"]
  },
  {
    id: "course-10",
    slug: "cnc-setup-tooling",
    title: "CNC Machine Setup and Tooling Training",
    subtitle: "Precision Machine Preparation, Tool Presetting & Workpiece Workholding",
    category: "CNC Machining",
    shortDescription: "Learn how to prepare CNC and VMC machines for production. Covers cutting tool selection, tool holders, dial gauge alignment, work offsets, and first-piece inspection.",
    fullDescription: "A machine operator or programmer is only as good as their machine setup. This course dives deep into the physical setup of machines: cutting tool geometry, carbide grades, holder types, workholding fixtures, dial indicator truing, edge finding, tool presetting, and runout checks.",
    duration: "Approx. 2 to 3 Months",
    trainingMode: "Classroom / Offline",
    certification: "Course Completion Certificate provided",
    eligibility: [
      "CNC/VMC operators wanting to become independent setup technicians",
      "Mechanical engineering students seeking hands-on tooling knowledge",
      "Machinists looking to eliminate setup errors and part rejections"
    ],
    keyHighlights: [
      "In-depth cutting tool nomenclature, inserts, and holder mechanics",
      "Workholding setup: Vices, magnetic chucks, and soft jaw boring",
      "Dial indicator alignment, sweep checks, and runout inspection",
      "First piece trial setup, offset fine-tuning, and dimension verification"
    ],
    syllabus: [
      {
        title: "Module 1: Cutting Tool Selection & Insert Technology",
        topics: [
          "Turning inserts: ISO designations (e.g. CNMG, WNMG, TNMG, DNMG)",
          "Milling inserts: Geometry, rake angles, nose radii, and chip breakers",
          "Tool materials: High-speed steel (HSS), solid carbide, coated carbide, cermet",
          "Selecting speed, feed, and depth of cut based on material datasheets"
        ]
      },
      {
        title: "Module 2: Tool Holding Systems & Presetting",
        topics: [
          "Tool holder types: Side lock, ER collet chucks, milling chucks, hydraulic",
          "Taper standards: BT30, BT40, BT50, HSK, and CAT tapers",
          "Using tool presetters and Z-axis dial indicators",
          "Checking spindle runout and tool holder balance"
        ]
      },
      {
        title: "Module 3: Workholding & Part Alignment Procedures",
        topics: [
          "Precision machine vice clamping and truing with dial test indicators",
          "Soft jaw boring for concentric second-operation turning",
          "Using edge finders, wobblers, and optical 3D probes for X/Y zero pickup",
          "Calculating cosine errors and eliminating alignment runout"
        ]
      },
      {
        title: "Module 4: Machine Setup Verification & Quality Checks",
        topics: [
          "Entering tool length geometry and wear offsets on the controller",
          "Dry run and single block execution to verify safety distances",
          "Measuring first-off pieces using vernier calipers, micrometers & height gauges",
          "Applying wear offset compensation to achieve blueprint drawing tolerances"
        ]
      }
    ],
    image: "/assets/courses/VMC Machine Operating Training.png",
    badge: "Industry Skills",
    relatedSlugs: ["cnc-machine-operating", "vmc-machine-operating", "cnc-programming"]
  },
  {
    id: "course-11",
    slug: "practical-cnc-vmc",
    title: "Practical CNC and VMC Training",
    subtitle: "Workflow Integration, Simulation & Machining Process Understanding",
    category: "Technical Fundamentals",
    shortDescription: "Synthesize operating concepts, programming codes, and tooling strategies into unified machining workflows with practical simulation and process analysis.",
    fullDescription: "This advanced synthesis course brings together CNC turning, VMC milling, tooling preparation, and part programming. Learners explore entire machining lifecycles — from reading raw drawings to selecting tools, generating programs, verifying clearances, and establishing safe machine operating procedures.",
    duration: "Approx. 3 Months",
    trainingMode: "Classroom / Offline",
    certification: "Course Completion Certificate provided",
    eligibility: [
      "Students who have completed CNC or VMC programming theory",
      "Mechanical engineers preparing for industrial shop-floor interviews",
      "Operators aiming to manage complete production batches"
    ],
    keyHighlights: [
      "End-to-end machining workflow: Blueprint to finished part",
      "Process planning: Operation sequencing, cycle time calculation, and tool lists",
      "Program proofing through graphical simulation and dry run protocols",
      "Strict industrial shop-floor safety, coolant care, and maintenance awareness"
    ],
    syllabus: [
      {
        title: "Module 1: Production Process Planning & Blueprint Study",
        topics: [
          "Deconstructing complex engineering drawings and GD&T symbols",
          "Deciding process sequence: Turning vs. milling operations",
          "Preparing complete tooling sheets, insert requirements, and raw stock sizes",
          "Cycle time estimation and production cost basics"
        ]
      },
      {
        title: "Module 2: Machining Simulation & Program Proofing",
        topics: [
          "Simulation software workflows for turning and milling parts",
          "Detecting axis over-travels, rapid collision hazards, and tool gouges",
          "Code optimization to reduce non-cutting air time",
          "Verifying canned cycles and subprogram execution"
        ]
      },
      {
        title: "Module 3: Workpiece & Machine Setup Integration",
        topics: [
          "Step-by-step setup checklists for turning centers and VMCs",
          "Standard operating procedure (SOP) for setting work and tool offsets",
          "Emergency recovery procedures and collision prevention discipline",
          "Daily machine maintenance: Lubrication, air pressure, and coolant concentration"
        ]
      },
      {
        title: "Module 4: Quality Inspection & Tolerance Control",
        topics: [
          "Using precision measuring instruments (Micrometers, Bore gauges, Vernier calipers)",
          "Surface finish evaluation and causes of chatter or poor finish",
          "Offset adjustments for dimensional accuracy during production runs",
          "Final course review and technical viva preparation"
        ]
      }
    ],
    image: "/assets/courses/CNC Programming Training.png",
    badge: "Integrated Program",
    disclaimer: "Actual hands-on machine training is subject to confirmation of available machine facilities. Course emphasizes complete operational workflows, programming simulation, and tooling procedures.",
    relatedSlugs: ["cnc-programming", "vmc-programming", "cnc-setup-tooling"]
  }
];

export function getCourseBySlug(slug: string): Course | undefined {
  return coursesData.find((course) => course.slug === slug);
}

export function getFeaturedCourses(): Course[] {
  return coursesData.filter((course) => course.featured);
}

export function getCoursesByCategory(category: Course["category"]): Course[] {
  return coursesData.filter((course) => course.category === category);
}
