import Link from "next/link";
import Image from "next/image";
import {
  ArrowDownRight,
  BriefcaseBusiness,
  Building2,
  Code2,
  Globe2,
  GraduationCap,
  Layers3,
  Mail,
  Phone,
} from "lucide-react";
import {
  FaCss3Alt,
  FaFileExcel,
  FaFileWord,
  FaFacebookF,
  FaFigma,
  FaInstagram,
  FaLinkedinIn,
  FaSlack,
  FaTwitter,
} from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import {
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJira,
  SiMysql,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVisualparadigm,
} from "react-icons/si";
import CertificateImageModal from "@/components/CertificateImageModal";
import ContactForm from "@/components/ContactForm";
import ProjectResponsibilitiesModal from "@/components/ProjectResponsibilitiesModal";

const projects = [
  {
    number: "01",
    name: "Documentation System and API Design System",
    type: "โครงการความร่วมมือระหว่างมหาวิทยาลัยและภาคอุตสาหกรรม",
    acronym: "SPEC",
    note: "หมายเหตุ : ผลงานตัวอย่างดัดแปลงให้เป็นข้อมูลทั่วไปจากประสบการณ์โปรเจกต์จริง เพื่อการสมัครงานเท่านั้น ไม่เปิดเผยข้อมูลลับของบริษัทใด",
    role: "Support Engineer",
    className: "project-art--spec",
    icon: Layers3,
    description:
      "เป็นเครื่องมือสำหรับสร้างเอกสารและออกแบบ API ในที่เดียว ช่วยลดงานซ้ำซ้อน และทำให้เอกสารมีรูปแบบเป็นมาตรฐานเดียวกันทั้งองค์กร นักพัฒนาสามารถทำงานและตรวจสอบเอกสารได้สะดวกและรวดเร็วยิ่งขึ้น",
    highlights: [],
    tags: [],
    diagrams: [
      {
        kind: "modal",
        label: "Use-Case Diagram",
        href: "/projects/spec-use-case.png",
        idPrefix: "spec-use-case",
        title: "Use-Case Diagram",
        eyebrow: "SPEC · SYSTEM OVERVIEW",
        imageAlt: "Use-case Diagram แสดงการทำงานหลักของระบบ SPEC",
        imageWidth: 747,
        imageHeight: 746,
        description:
          "แผนภาพแสดงการใช้งานระบบ SPEC โดยผู้ใช้สามารถจัดการ Workspace, Collection และตาราง API ได้",
        details: [
          {
            title: "Manage workspace",
            description:
              "เพิ่ม เปลี่ยนชื่อ ลบ และดูรายการ Workspace รวมถึงเชิญสมาชิก",
          },
          {
            title: "Manage collection",
            description: "เพิ่ม เปลี่ยนชื่อ ลบ ดูรายการ และนำเข้า Collection",
          },
          {
            title: "Manage table",
            description: "แก้ไข ส่งออก และบันทึกตาราง API",
          },
        ],
      },
      {
        kind: "modal",
        label: "Sequence Diagram",
        href: "/projects/spec-sequence-view-collection.png",
        idPrefix: "spec-sequence-view-collection",
        title: "Sequence Diagram",
        eyebrow: "SPEC · VIEW COLLECTION LIST",
        imageAlt: "Sequence Diagram มอดูล View collection list",
        imageWidth: 430,
        imageHeight: 203,
        description:
          "นักพัฒนาสามารถดูรายการของ Collection ที่ได้ทำการ Import ไฟล์ไว้ได้ เมื่อผู้ใช้เข้าสู่หน้าจอ Collection ระบบจะแสดงรายการ Collection ทั้งหมดที่ผู้ใช้ Import เข้ามาภายใน Workspace",
        details: [
          {
            title: "มอดูล",
            description: "View collection list",
          },
          {
            title: "ลำดับการทำงาน",
            description:
              "ผู้ใช้เข้าสู่ Workspace และหน้าจอ Collection จากนั้นระบบใช้ Workspace ID เพื่อค้นหารายการและแสดงชื่อ Collection ที่ Import ไว้ทั้งหมด",
          },
        ],
      },
    ],
    testCases: [],
  },
  {
    number: "02",
    name: "Information Security Patrol System",
    acronym: "DENSY",
    note: "หมายเหตุ : ผลงานตัวอย่างดัดแปลงให้เป็นข้อมูลทั่วไปจากประสบการณ์โปรเจกต์จริง เพื่อการสมัครงานเท่านั้น ไม่เปิดเผยข้อมูลลับของบริษัทใด",
    role: "Quality Engineer",
    type: "Information Security · Inspection & Issue Tracking",
    className: "project-art--forma",
    icon: Globe2,
    description:
      "ระบบสำหรับบันทึกผลตรวจ checklist ด้านไอทีและความปลอดภัย พร้อมส่งอีเมลแจ้งปัญหาและรายละเอียดไปยังผู้รับผิดชอบในพื้นที่ที่พบปัญหาโดยอัตโนมัติ ผู้รับผิดชอบสามารถอัปเดตสถานะ วิธีแก้ไข และวันที่แก้ไขเสร็จเพื่อติดตามผล พร้อมส่งออกข้อมูลเป็นไฟล์ Excel ได้",
    tags: [],
    diagrams: [
      {
        kind: "modal",
        label: "Use-Case Diagram",
        href: "/projects/densy-use-case.png",
        idPrefix: "densy-use-case",
        title: "Use-Case Diagram · DENSY",
        eyebrow: "DENSY · SYSTEM OVERVIEW",
        imageAlt: "Use-Case Diagram ของระบบ Information Security Patrol System",
        imageWidth: 847,
        imageHeight: 768,
        description:
          "แผนภาพแสดง Use Case หลักของระบบ DENSY และการทำงานร่วมกันของผู้ตรวจ ผู้รับผิดชอบส่วนงาน และผู้ดูแลระบบ",
        details: [
          {
            title: "ผู้ตรวจ",
            description: "จัดการรายการตรวจ Patrol และดำเนินการตรวจ",
          },
          {
            title: "ผู้รับผิดชอบส่วนงาน",
            description: "จัดการ Defect และข้อมูลส่วนตัว",
          },
          {
            title: "ผู้ดูแลระบบ",
            description: "จัดการข้อมูลและการตั้งค่าของระบบ",
          },
        ],
      },
      {
        kind: "modal",
        label: "Entity-Relationship Diagram",
        href: "/projects/densy-er-diagram.png",
        idPrefix: "densy-er-diagram",
        title: "ER Diagram · DENSY",
        eyebrow: "DENSY · DATABASE OVERVIEW",
        imageAlt: "ER Diagram ของระบบ Information Security Patrol System",
        imageWidth: 1511,
        imageHeight: 768,
        description:
          "แผนภาพความสัมพันธ์ข้อมูลของระบบตรวจสอบความปลอดภัย ครอบคลุมการตรวจรายการ checklist การบันทึกปัญหา ผู้ใช้งาน พื้นที่ และความคิดเห็น",
        details: [
          {
            title: "ผู้ตรวจ (Inspector)",
            description: "ดำเนินการตรวจและบันทึกผล checklist",
          },
          {
            title: "ผู้รับผิดชอบส่วนงาน (Supervisor)",
            description: "รับผิดชอบปัญหาในพื้นที่และอัปเดตผลการแก้ไข",
          },
          {
            title: "ผู้ดูแลระบบ (Admin)",
            description: "ผู้ดูแลระบบ",
          },
        ],
      },
    ],
    testCases: [
      {
        id: "uc3",
        label: "UC3",
        title: "UC3 - พิจารณาผลการแก้ไข Defect",
        images: [
          {
            src: "/projects/densy-uc3.jpg",
            alt: "เอกสารทดสอบระบบ UC3 พิจารณาผลการแก้ไข Defect",
            width: 1733,
            height: 573,
          },
        ],
      },
      {
        id: "uc4",
        label: "UC4",
        title: "UC4 - จัดการรายการตรวจ Patrol",
        images: [
          {
            src: "/projects/densy-uc4.jpg",
            alt: "เอกสารทดสอบระบบ UC4 จัดการรายการตรวจ Patrol",
            width: 2024,
            height: 684,
          },
        ],
      },
      {
        id: "uc5",
        label: "UC5",
        title: "UC5 - จัดการ Defect",
        images: [
          {
            src: "/projects/densy-uc5.jpg",
            alt: "เอกสารทดสอบระบบ UC5 จัดการ Defect",
            width: 768,
            height: 782,
          },
        ],
      },
      {
        id: "uc6",
        label: "UC6",
        title: "UC6 - จัดการข้อมูลส่วนตัว",
        images: [
          {
            src: "/projects/densy-uc6-1.jpg",
            alt: "เอกสารทดสอบระบบ UC6 จัดการข้อมูลส่วนตัว รูปที่ 1",
            width: 1144,
            height: 768,
          },
          {
            src: "/projects/densy-uc6-2.jpg",
            alt: "เอกสารทดสอบระบบ UC6 จัดการข้อมูลส่วนตัว รูปที่ 2",
            width: 932,
            height: 768,
          },
        ],
      },
    ],
  },
  {
    number: "03",
    name: "Faculty Competency Development System",
    acronym: "",
    note: "หมายเหตุ : ผลงานตัวอย่างดัดแปลงให้เป็นข้อมูลทั่วไปจากประสบการณ์โปรเจกต์จริง เพื่อการสมัครงานเท่านั้น ไม่เปิดเผยข้อมูลลับของบริษัทใด",
    role: "Business Analyst - Internship",
    type: "Internship Project · Thailand Professional Standards Framework",
    className: "project-art--orbit",
    icon: Code2,
    description:
      "เป็นระบบที่ช่วยส่งเสริมและพัฒนาอาจารย์ในสถาบันอุดมศึกษาให้มีความรู้ ทักษะ และสมรรถนะด้านการจัดการเรียนการสอนตามมาตรฐานวิชาชีพ โดยครอบคลุมการประเมินตนเอง การวางแผนพัฒนา และการติดตามผลอย่างเป็นระบบ ตามกรอบ Thailand Professional Standards Framework (Thailand PSF)",
    highlights: [
      "Requirement Gathering และวิเคราะห์ขอบเขตฟังก์ชัน",
      "ออกแบบ Software Designs และ ER Diagram",
      "ออกแบบ UX/UI สำหรับกระบวนการใช้งาน",
    ],
    tags: [],
    diagrams: [
      {
        kind: "modal",
        label: "Use-Case Diagram",
        href: "/projects/psf-use-case.png",
        idPrefix: "psf-use-case",
        title: "Use-Case Diagram · Thailand PSF",
        eyebrow: "PSF · SYSTEM OVERVIEW",
        imageAlt: "Use-case Diagram ของระบบพัฒนาสมรรถนะอาจารย์ตามกรอบ Thailand PSF",
        imageWidth: 1365,
        imageHeight: 768,
        description:
          "แผนภาพแสดงการใช้งานระบบโดยอาจารย์และผู้ดูแลระบบ ครอบคลุมการแสดง รายการ บันทึก แก้ไข และรายงานข้อมูลการพัฒนาสมรรถนะ",
        details: [],
      },
      {
        kind: "modal",
        label: "ER Diagram",
        href: "/projects/psf-er-diagram.png",
        idPrefix: "psf-er-diagram",
        title: "ER Diagram · Thailand PSF",
        eyebrow: "PSF · DATABASE OVERVIEW",
        imageAlt: "ER Diagram ของระบบพัฒนาสมรรถนะอาจารย์ตามกรอบ Thailand PSF",
        imageWidth: 1152,
        imageHeight: 768,
        description:
          "แผนภาพฐานข้อมูลสำหรับเก็บประวัติการพัฒนา Competency Thailand PSF หลักฐานกิจกรรม ผู้จัดหน่วยงาน และระดับสมรรถนะ",
        details: [],
      },
    ],
    testCases: [],
  },
  {
    number: "04",
    name: "ระบบตัวอย่างการจัดการข้อมูล",
    acronym: "",
    note: "",
    role: "",
    type: "University Project · Example Project",
    className: "project-art--four",
    icon: BriefcaseBusiness,
    description:
      "ตัวอย่างระบบสำหรับบันทึก จัดการ และติดตามข้อมูล รวมถึงแสดงผลรายงานเพื่อช่วยในการตัดสินใจ",
    highlights: [
      "วิเคราะห์ความต้องการและออกแบบกระบวนการทำงาน",
      "จัดการข้อมูลและตรวจสอบสถานะของรายการ",
      "สรุปผลรายงานและทดสอบการใช้งาน",
    ],
    tags: ["วิเคราะห์ระบบ", "ออกแบบระบบ", "ทดสอบระบบ"],
    diagrams: [],
    testCases: [],
  },
];

const experience = [
  {
    date: "June 2023 – April 2024",
    role: "Support Engineer",
    company: "Clicknext Co., Ltd.",
    project: "University-Industry Project",
    responsibilities: [
      "Supported the Documentation System and API Design System (SPEC) project through system design and documentation activities.",
      "Designed a Sequence Diagram for the View Collection List function to document system interactions.",
      "Developed a User Manual to explain system functions and support user understanding.",
      "Prepared Risk Management Documentation to record project-related risks.",
      "Collaborated with Team Leaders, Developers, and Testers to support project coordination and documentation.",
    ],
    skills: ["System Design", "Sequence Diagram", "User Manual", "Risk Management"],
  },
  {
    date: "June 2024 – April 2025",
    role: "Quality Engineer",
    company: "Siam Denso Manufacturing Co., Ltd.",
    project: "University-Industry Project",
    responsibilities: [
      "Supported the development and quality assurance of the Information Security Patrol System (DENSY) for managing and tracking factory defects.",
      "Designed Figma interfaces for Supervisor and Defect View modules to organize defect reporting by department and category.",
      "Developed front-end components using Next.js, TypeScript, React, and Tailwind CSS to implement defect management interfaces.",
      "Implemented defect retrieval, sorting, filtering, and language translation functions to support system usability.",
      "Designed system test cases across five functional modules and prepared testing documentation to support structured verification.",
      "Coordinated with Development and Quality teams and participated in client UAT to review system functionality.",
    ],
    skills: ["Figma", "Next.js", "TypeScript", "React", "Tailwind CSS", "UAT"],
  },
  {
    date: "June 2025 – November 2025",
    role: "Business Analyst",
    company: "Faculty of Informatics, Burapha University (SE-BUU)",
    project: "University Project",
    responsibilities: [
      "Analyzed requirements and designed the Software Engineering Skills Assessment System (SE-SKILLTEST) to support skills assessment within the Software Engineering program.",
      "Gathered client requirements through meetings to identify system functions and user needs.",
      "Created Use Case Diagrams to define functional requirements and illustrate user-system interactions.",
      "Developed system design concepts based on analyzed requirements to support development discussions.",
      "Participated in client UAT sessions to review system functionality against requirements.",
      "Collaborated with Developers and clients to clarify requirements and support system development.",
    ],
    skills: ["Requirements Analysis", "Use Case Diagram", "System Design", "UAT"],
  },
  {
    date: "June 2026 – September 2026",
    role: "Business Analyst - Internship",
    company: "All O Soft Co., Ltd.",
    project: "",
    responsibilities: [
      "Analyzed client requirements and business needs to support functional system design and development planning.",
      "Designed faculty development system interfaces based on Thailand PSF requirements, covering data management, profiles, imports, and reporting.",
      "Translated client requirements into development discussions with Product Owners and Developers to align system functionality with user needs.",
      "Supported UAT activities to evaluate system functionality and identify areas requiring review.",
      "Developed test cases and tested examination and question bank management functions to support system quality verification.",
      "Collaborated with clients, Product Owners, Developers, and QA teams to maintain clear communication throughout development and testing.",
    ],
    skills: ["Business Analysis", "Thailand PSF", "UAT", "Test Cases"],
  },
];

const skillGroups = [
  {
    title: "Key Skill",
    icon: null,
    items: [
      "Business Requirements Analysis",
      "Requirements Gathering & Documentation",
      "System Analysis & Design",
      "Use Case Modeling",
      "Wireframing & Prototyping",
      "User Acceptance Testing",
    ],
  },
  {
    title: "Programming Languages",
    items: [
      { name: "HTML", icon: SiHtml5, color: "#e34f26" },
      { name: "CSS", icon: FaCss3Alt, color: "#1572b6" },
      { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
      { name: "React.js", icon: SiReact, color: "#61dafb" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06b6d4" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
      { name: "Next.js", icon: SiNextdotjs, color: "#111827" },
    ],
  },
  {
    title: "Tool",
    items: [
      { name: "Figma", icon: FaFigma, color: "#f24e1e" },
      { name: "Visual Studio Code", icon: VscVscode, color: "#007acc" },
      { name: "Visual Paradigm", icon: SiVisualparadigm, color: "#155eef" },
      { name: "MySQL Workbench", icon: SiMysql, color: "#4479a1" },
      { name: "GitHub", icon: SiGithub, color: "#181717" },
      { name: "Microsoft Word", icon: FaFileWord, color: "#2b579a" },
      { name: "Microsoft Excel", icon: FaFileExcel, color: "#217346" },
      { name: "Jira", icon: SiJira, color: "#0052cc" },
      { name: "Slack", icon: FaSlack, color: "#4a154b" },
    ],
  },
  {
    title: "Language Skill",
    items: [],
    languages: [
      { name: "Thai", level: "Native" },
      { name: "English", level: "Intermediate" },
    ],
  },
];

const projectExperience = [
  {
    title: "University-Industry Project",
    count: "02",
    icon: Building2,
  },
  {
    title: "Internship",
    count: "01",
    icon: BriefcaseBusiness,
  },
  {
    title: "University Project",
    count: "01",
    icon: GraduationCap,
  },
];

const certifications = [
  {
    name: "Foundations of Project Management",
    issuer: "Google",
    href: "/certifications/google-foundations-of-project-management.pdf",
    image: "/certifications/google-foundations-of-project-management.jpg",
  },
  {
    name: "Agile Project Management",
    issuer: "Google",
    href: "/certifications/google-agile-project-management.pdf",
    image: "/certifications/google-agile-project-management.jpg",
  },
  {
    name: "Business Analyst Certification",
    issuer: "Business Analyst Course",
    href: "/certifications/business-analyst-certificate.pdf",
    image: "/certifications/business-analyst-certificate.jpg",
  },
];

export default function Home() {
  return (
    <main>
      <section id="home" className="hero-section section-shell">
        <div className="hero-copy">
          <p className="eyebrow">BUSINESS ANALYST <span>|</span> SOFTWARE ENGINEERING GRADUATE</p>
          <h1>Korawit Rinnairak</h1>
          <p className="hero-intro">
            Business Analyst with experience in requirements analysis, system
            design and user acceptance testing, supporting effective
            collaboration between clients and development teams.
          </p>
          <div className="hero-actions">
            <div className="hero-socials" aria-label="Social links">
              <a href="https://www.facebook.com/kronwich2003" target="_blank" rel="noreferrer" aria-label="Facebook">
                <FaFacebookF size={17} />
              </a>
              <a href="https://www.instagram.com/bexm.krv_" target="_blank" rel="noreferrer" aria-label="Instagram">
                <FaInstagram size={17} />
              </a>
              <a href="https://x.com/CARAMERI1846" target="_blank" rel="noreferrer" aria-label="Twitter">
                <FaTwitter size={17} />
              </a>
              <a href="https://www.linkedin.com/in/korawit-rinnairak-220046392/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn size={17} />
              </a>
            </div>
            <a href="/Korawit_Rinnairak_CV.pdf" download className="button button-primary">
              Download CV <ArrowDownRight size={16} />
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="portrait-card">
            <Image
              src="/profile.jpg"
              alt="Korawit Rinnairak"
              fill
              priority
              sizes="(max-width: 680px) 80vw, 390px"
              className="portrait-photo"
            />
            <div className="portrait-shade" />
          </div>
        </div>
        <div className="hero-info">
          <div className="hero-info-card">
            <span>EDUCATION</span>
            <p>B.Sc. Software Engineering, Burapha University</p>
          </div>
          <div className="hero-info-card">
            <span>LOCATION</span>
            <p>Sukhumvit 71 Road, Phra Khanong Nuea, Watthana, Bangkok 10110</p>
          </div>
        </div>
      </section>

      <section id="about" className="about-section section-shell">
        <div className="about-layout">
          <div className="about-content">
            <div className="about-title">
              <span>About Me</span>
            </div>
            <h2 className="about-headline">
              Business Analyst
            </h2>
            <p className="about-intro">
              Recent Software Engineering graduate with hands-on Business
              Analyst experience through an internship and system development
              projects. Skilled in requirements analysis, system design, UAT
              and cross-functional coordination.
            </p>
            <p className="about-intro">
              I contributed to the SE-SKILLTEST and Thailand PSF systems,
              translating user requirements into functional designs and
              supporting collaboration between clients and development teams.
            </p>
          </div>
        </div>
        <div className="about-highlights">
          {projectExperience.map((item) => {
            const Icon = item.icon;
            return (
              <article className="about-highlight" key={item.title}>
                <span className="about-highlight-icon"><Icon size={32} /></span>
                <h3>{item.title}</h3>
                <p className="project-count"><strong>{item.count}</strong> projects</p>
              </article>
            );
          })}
        </div>
        <div className="certifications">
          <div className="certifications-heading">
            <h3>LICENSES &amp; CERTIFICATIONS</h3>
            <p>Select a certification to view its details.</p>
          </div>
          <div className="certification-list">
            {certifications.map((certification) => (
              <details className="certification-item" key={certification.name}>
                <summary>
                  <span>{certification.name}</span>
                  <span className="certification-toggle" aria-hidden="true">+</span>
                </summary>
                <div className="certification-details">
                  <a
                    className="certification-image"
                    href={certification.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open ${certification.name} certificate`}
                  >
                    <Image
                      src={certification.image}
                      alt={`${certification.name} certificate`}
                      fill
                      sizes="(max-width: 680px) 90vw, 360px"
                    />
                  </a>
                  <p>Provider: {certification.issuer}</p>
                  <CertificateImageModal
                    imageAlt={`${certification.name} certificate`}
                    imageSrc={certification.image}
                    title={certification.name}
                  />
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="projects-section section-shell">
        <div className="projects-heading about-layout">
          <div className="about-content">
            <div className="about-title">Projects</div>
            <h2 className="about-headline">Detail Projects</h2>
            <p className="about-intro">
              ผลงานจากโครงการความร่วมมือระหว่างมหาวิทยาลัยและภาคอุตสาหกรรม, โครงการฝึกงาน และผลงานของมหาวิทยาลัย
            </p>
          </div>
        </div>
        <div className="project-grid">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <article
                className={`project-card${project.number === "01" ? " project-card--spec" : project.number === "02" ? " project-card--densy" : project.number === "03" ? " project-card--psf" : ""}`}
                key={project.number}
              >
                <div
                  className={`project-art ${project.className}`}
                  role="img"
                  aria-label={`ภาพตัวอย่าง ${project.name}`}
                >
                  {project.number !== "01" && project.number !== "02" && (
                    <span className="project-number">{project.number}</span>
                  )}
                  {project.number === "01" ? (
                    <Image
                      alt=""
                      className="project-art-image"
                      fill
                      sizes="(max-width: 680px) 90vw, 40vw"
                      src="/projects/spec-cover.jpg"
                    />
                  ) : project.number === "02" ? (
                    <Image
                      alt=""
                      className="project-art-image project-art-image--densy"
                      fill
                      sizes="(max-width: 680px) 90vw, 40vw"
                      src="/projects/densy-cover.png"
                    />
                  ) : project.number === "03" ? (
                    <Image
                      alt=""
                      className="project-art-image project-art-image--psf"
                      fill
                      sizes="(max-width: 680px) 90vw, 40vw"
                      src="/projects/psf-cover.png"
                    />
                  ) : (
                    <div className="project-art-window">
                      <div className="project-window-top"><i /><i /><i /></div>
                      <div className="project-window-content">
                        <Icon size={28} strokeWidth={1.4} />
                        <span>{project.name}</span>
                      </div>
                    </div>
                  )}
                </div>
                <div className="project-details">
                  <div>
                    <h3>{project.name}</h3>
                    {project.acronym && (
                      <span className="project-acronym">ชื่อย่อ ({project.acronym})</span>
                    )}
                    <p className="project-description">{project.description}</p>
                    {project.note && (
                      <p className="project-note">{project.note}</p>
                    )}
                    {project.role && (
                      <p className="project-role">
                        <strong>Role:</strong> {project.role}
                      </p>
                    )}
                    {project.diagrams.length > 0 && (
                      <div className="project-diagrams">
                        <h4>หน้าที่การทำงาน</h4>
                        <div className="project-document-links">
                          {project.number === "01" || project.number === "02" || project.number === "03" ? (
                            <ProjectResponsibilitiesModal
                              diagrams={project.diagrams}
                              projectCode={project.number === "01" ? "SPEC" : project.number === "02" ? "DENSY" : "PSF"}
                              testCases={project.testCases}
                            />
                          ) : null}
                        </div>
                      </div>
                    )}
                  </div>
                  {project.tags.length > 0 && (
                    <div className="tag-list">
                      {project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>


      <section id="experience" className="experience-section section-shell">
        <div className="projects-heading about-layout">
          <div className="about-content">
            <div className="about-title">Experience</div>
            <h2 className="about-headline">Experience</h2>
            <p className="about-intro-experience">
              ผลงานจากโครงการความร่วมมือระหว่างมหาวิทยาลัยและภาคอุตสาหกรรม, โครงการฝึกงาน และผลงานของมหาวิทยาลัย
            </p>
          </div>
        </div>
        <div className="timeline">
          {[...experience].reverse().map((item, index) => (
            <article
              className={`timeline-item${index % 2 === 0 ? " timeline-item--left" : " timeline-item--right"}`}
              key={`${item.role}-${item.date}`}
            >
              <div className="timeline-marker" aria-hidden="true" />
              <div className="timeline-content">
                <p className="timeline-date">{item.date}</p>
                <h3>{item.role}</h3>
                <p className="timeline-company">{item.company}</p>
                {item.project && <p className="timeline-project">{item.project}</p>}
                <ul className="timeline-responsibilities">
                  {item.responsibilities.map((responsibility) => (
                    <li key={responsibility}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="skills-section section-shell">
        <div className="projects-heading about-layout">
          <div className="about-content">
            <div className="about-title">Skill</div>
            <h2 className="about-headline">Skill</h2>
          </div>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => {
            return (
              <article
                className={`skill-card${group.items.some((skill) => typeof skill !== "string") ? " skill-card--logos" : ""}`}
                key={group.title}
              >
                <h3>{group.title}</h3>
                {group.languages ? (
                  <div className="language-list">
                    {group.languages.map((language) => (
                      <div className="language-item" key={language.name}>
                        <strong>{language.name}</strong>
                        <span>{language.level}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="skill-list">
                    {group.items.map((skill) => {
                      if (typeof skill === "string") {
                        return <span className="skill-pill" key={skill}>{skill}</span>;
                      }
                      const SkillIcon = skill.icon;
                      return (
                        <span className="skill-pill skill-pill--icon" key={skill.name}>
                          <SkillIcon size={20} style={{ color: skill.color }} aria-hidden="true" />
                          {skill.name}
                        </span>
                      );
                    })}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>

      <section id="contact" className="contact-section section-shell">
        <div className="contact-grid">
          <div className="contact-copy">
            <h2>Contact Me</h2>
            <p>Currently seeking Business Analyst opportunities. Please use the form or the contact details below to get in touch.</p>
            <div className="contact-details">
              <a className="contact-detail" href="mailto:kronwich29715@gmail.com">
                <span className="contact-detail-icon"><Mail size={21} /></span>
                <span><small>Email</small><strong>kronwich29715@gmail.com</strong></span>
              </a>
              <a className="contact-detail" href="tel:+66948745747">
                <span className="contact-detail-icon"><Phone size={21} /></span>
                <span><small>Phone</small><strong>(+66) 94-874-5747</strong></span>
              </a>
            </div>
            <div className="contact-social-row">
              <strong>Connect with me:</strong>
              <div className="contact-socials" aria-label="Social links">
                <a href="https://www.facebook.com/kronwich2003" target="_blank" rel="noreferrer" aria-label="Facebook">
                  <FaFacebookF size={18} />
                </a>
                <a href="https://www.instagram.com/bexm.krv_" target="_blank" rel="noreferrer" aria-label="Instagram">
                  <FaInstagram size={18} />
                </a>
                <a href="https://x.com/CARAMERI1846" target="_blank" rel="noreferrer" aria-label="X">
                  <FaTwitter size={18} />
                </a>
                <a href="https://www.linkedin.com/in/korawit-rinnairak-220046392/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <FaLinkedinIn size={18} />
                </a>
              </div>
            </div>
          </div>
          <div className="contact-card">
            <ContactForm />
          </div>
        </div>
        <footer className="site-footer">
          <Link href="#home" className="footer-brand">BEAM<span>.</span></Link>
          <span className="footer-year">© 2025 KORAWIT</span>
        </footer>
      </section>
    </main>
  );
}