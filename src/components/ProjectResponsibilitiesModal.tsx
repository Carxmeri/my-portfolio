"use client";

import Image from "next/image";
import { useId, useRef, useState, type KeyboardEvent } from "react";
import { Download, ExternalLink, RotateCcw, X, ZoomIn, ZoomOut } from "lucide-react";

type ResponsibilityDiagram = {
  description: string;
  details: { title: string; description: string }[];
  eyebrow: string;
  href: string;
  idPrefix: string;
  imageAlt: string;
  imageHeight: number;
  imageWidth: number;
  label: string;
  title: string;
};

type ResponsibilityTestCaseImage = {
  alt: string;
  height: number;
  src: string;
  width: number;
};

type ResponsibilityTestCase = {
  id: string;
  images: ResponsibilityTestCaseImage[];
  label: string;
  title: string;
};

type ProjectResponsibilitiesModalProps = {
  diagrams: ResponsibilityDiagram[];
  projectCode?: "SPEC" | "DENSY" | "PSF";
  testCases?: ResponsibilityTestCase[];
};

export default function ProjectResponsibilitiesModal({
  diagrams,
  projectCode = "SPEC",
  testCases = [],
}: ProjectResponsibilitiesModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const zoomDialogRef = useRef<HTMLDialogElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const baseId = useId();
  const [activeTab, setActiveTab] = useState<"requirement" | "design" | "document" | "team" | "test" | "ux">("design");
  const [selectedDiagram, setSelectedDiagram] = useState(0);
  const [selectedDocument, setSelectedDocument] = useState(0);
  const [selectedRequirement, setSelectedRequirement] = useState(0);
  const [selectedUx, setSelectedUx] = useState(0);
  const [activeTestIndex, setActiveTestIndex] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(1.25);
  const activeTestCase = testCases[activeTestIndex];

  const documents = [
    {
      label: "User-manual Document",
      href: "/projects/spec-user-manual.pdf",
    },
    {
      label: "Requirements Prototype",
      href: "/projects/spec-requirements-prototype.pdf",
    },
  ];

  const requirements = [
    {
      title: "หน้ารายการข้อมูลการพัฒนา",
      purpose: "แสดงรายการประวัติการพัฒนาสมรรถนะของอาจารย์ทั้งหมด",
      details: [
        "แสดงรายการข้อมูลในรูปแบบตาราง",
        "ค้นหาและกรองข้อมูลตามชื่อกิจกรรม ชื่ออาจารย์ ปี ประเภทกิจกรรม สมรรถนะ และหน่วยงานผู้จัด",
        "เรียงลำดับ ดูรายละเอียด แก้ไขและลบข้อมูล",
        "ส่งออกข้อมูลเป็น Excel และ PDF",
      ],
      fields: "ปี · ชื่ออาจารย์ · ประเภทกิจกรรม · ชื่อกิจกรรม · ชั่วโมง · สมรรถนะ · จำนวนไฟล์หลักฐาน",
    },
    {
      title: "หน้าบันทึกข้อมูลการพัฒนา",
      purpose: "ใช้สำหรับเพิ่มข้อมูลกิจกรรมการพัฒนาสมรรถนะ",
      details: [
        "เลือกอาจารย์และแสดงข้อมูลบุคลากรอัตโนมัติ",
        "บันทึกประเภท ชื่อ รายละเอียด หน่วยงานผู้จัด วันที่ จำนวนชั่วโมง ผลลัพธ์และหมายเหตุ",
        "เลือก Competency หลายรายการและระดับ Thailand PSF",
        "อัปโหลดหลักฐาน PDF, Word, Excel, PowerPoint, รูปภาพและวิดีโอ",
        "บันทึก ยกเลิก หรือบันทึกและเพิ่มรายการใหม่",
      ],
    },
    {
      title: "หน้าแก้ไขและรายละเอียดข้อมูลการพัฒนา",
      purpose: "แก้ไขและแสดงรายละเอียดกิจกรรมที่บันทึกไว้",
      details: [
        "แก้ไขข้อมูลกิจกรรม Competency ชั่วโมงและผลลัพธ์",
        "เพิ่มและลบไฟล์หลักฐาน พร้อมบันทึกประวัติการแก้ไข",
        "แสดงข้อมูลอาจารย์ Competency ระดับ Thailand PSF และไฟล์หลักฐาน",
        "ดาวน์โหลดไฟล์หลักฐานและพิมพ์ข้อมูล",
      ],
    },
    {
      title: "หน้าโปรไฟล์การพัฒนาของอาจารย์",
      purpose: "แสดงประวัติการพัฒนาของอาจารย์รายบุคคล",
      details: [
        "แสดงข้อมูลพื้นฐาน จำนวนชั่วโมงสะสมและจำนวนกิจกรรม",
        "แสดง Competency ที่เกี่ยวข้องและ Timeline การพัฒนา",
        "แสดงกิจกรรมย้อนหลัง หลักฐาน และสรุปการพัฒนาแยกตามปี",
      ],
    },
    {
      title: "หน้าจัดการข้อมูลพื้นฐาน",
      purpose: "บริหารข้อมูลอ้างอิงที่ใช้ในระบบ",
      details: [
        "เพิ่ม แก้ไข และลบประเภทกิจกรรม",
        "เพิ่ม แก้ไข และลบหน่วยงานผู้จัด",
        "จัดการ Competency และกำหนดกลุ่ม A, K, V",
        "เปิดหรือปิดการใช้งาน Competency และระดับ Thailand PSF",
      ],
    },
    {
      title: "หน้านำเข้าข้อมูล (Import)",
      purpose: "บันทึกข้อมูลประวัติการพัฒนาจำนวนมาก",
      details: [
        "ดาวน์โหลด Template Excel และนำเข้าข้อมูล",
        "ตรวจสอบข้อมูลก่อนบันทึกและแสดงรายการข้อมูลที่ผิดพลาด",
        "บันทึกข้อมูลแบบกลุ่มและแสดงผลการนำเข้า",
      ],
      fields: "ps_id · ปี · ประเภทกิจกรรม · ชื่อกิจกรรม · ชั่วโมง · Competency · หน่วยงานผู้จัด",
    },
    {
      title: "หน้ารายงาน",
      purpose: "สรุปข้อมูลการพัฒนาตามมุมมองผู้ใช้งาน",
      details: [
        "รายงานประวัติรายบุคคลและรายงานแยกตามคณะหรือภาควิชา",
        "รายงานสมรรถนะ A1-A5, K1-K5 และ V1-V4",
        "รายงานชั่วโมงสะสมและกิจกรรมตามประเภท",
        "ส่งออก Excel, PDF และพิมพ์รายงาน",
      ],
    },
  ];

  const uxScreens = [
    {
      title: "หน้ารายการข้อมูลการพัฒนา",
      src: "/projects/psf-ui-list.png",
      alt: "หน้าจอรายการข้อมูลการพัฒนาสมรรถนะของอาจารย์",
      height: 853,
      width: 768,
    },
    {
      title: "หน้าบันทึกข้อมูลการพัฒนา",
      src: "/projects/psf-ui-create.png",
      alt: "หน้าจอบันทึกข้อมูลการพัฒนาสมรรถนะของอาจารย์",
      height: 961,
      width: 768,
    },
    {
      title: "หน้าแก้ไขและรายละเอียดข้อมูลการพัฒนา",
      src: "/projects/psf-ui-edit.png",
      alt: "หน้าจอแก้ไขและรายละเอียดข้อมูลการพัฒนาสมรรถนะ",
      height: 961,
      width: 768,
    },
    {
      title: "หน้าโปรไฟล์การพัฒนาของอาจารย์",
      src: "/projects/psf-ui-profile.png",
      alt: "หน้าจอโปรไฟล์การพัฒนาสมรรถนะของอาจารย์",
      height: 853,
      width: 768,
    },
    {
      title: "หน้าจัดการข้อมูลพื้นฐาน",
      src: "/projects/psf-ui-master.png",
      alt: "หน้าจอจัดการ Competency และข้อมูลพื้นฐาน Thailand PSF",
      height: 853,
      width: 768,
    },
    {
      title: "หน้านำเข้าข้อมูล (Import)",
      src: "/projects/psf-ui-import.png",
      alt: "หน้าจอนำเข้าข้อมูลการพัฒนาจาก Excel",
      height: 853,
      width: 768,
    },
    {
      title: "หน้ารายงาน",
      src: "/projects/psf-ui-report.png",
      alt: "หน้าจอรายงานข้อมูลการพัฒนารายบุคคล",
      height: 853,
      width: 768,
    },
  ];

  const currentDiagram = diagrams[selectedDiagram] ?? diagrams[0];
  const currentDocument = documents[selectedDocument];
  const currentRequirement = requirements[selectedRequirement] ?? requirements[0];
  const currentUx = uxScreens[selectedUx] ?? uxScreens[0];
  const zoomImage = activeTab === "team"
    ? {
        alt: "โครงสร้างทีม TEAM CLUSTER SIX",
        height: 768,
        src: "/projects/spec-team-cluster-six.png",
        title: "โครงสร้างทีม",
        width: 1365,
      }
    : activeTab === "ux" && currentUx
      ? {
          alt: currentUx.alt,
          height: currentUx.height,
          src: currentUx.src,
          title: currentUx.title,
          width: currentUx.width,
        }
    : currentDiagram
      ? {
          alt: currentDiagram.imageAlt,
          height: currentDiagram.imageHeight,
          src: currentDiagram.href,
          title: currentDiagram.title,
          width: currentDiagram.imageWidth,
        }
      : null;

  const openZoomDialog = () => {
    setZoomLevel(1.25);
    zoomDialogRef.current?.showModal();
  };

  const selectTab = (tab: "requirement" | "design" | "document" | "team" | "test" | "ux") => {
    setActiveTab(tab);
  };

  const handleTabKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
  ) => {
    if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
      event.preventDefault();
      const tabs = projectCode === "DENSY"
        ? (["design", "test"] as const)
        : projectCode === "PSF"
          ? (["requirement", "design", "ux"] as const)
          : (["design", "document", "team"] as const);
      const currentIndex = tabs.findIndex((tab) => tab === activeTab);
      const direction = event.key === "ArrowRight" ? 1 : -1;
      const nextIndex = (currentIndex + direction + tabs.length) % tabs.length;
      selectTab(tabs[nextIndex]);
      tabRefs.current[nextIndex]?.focus();
    } else if (event.key === "Home") {
      event.preventDefault();
      selectTab("design");
      tabRefs.current[0]?.focus();
    } else if (event.key === "End") {
      event.preventDefault();
      if (projectCode === "DENSY") {
        selectTab("test");
        tabRefs.current[1]?.focus();
      } else if (projectCode === "PSF") {
        selectTab("ux");
        tabRefs.current[2]?.focus();
      } else {
        selectTab("team");
        tabRefs.current[2]?.focus();
      }
    }
  };

  return (
    <>
      <button
        className="project-document-link"
        onClick={() => {
          setActiveTab(projectCode === "PSF" ? "requirement" : "design");
          setActiveTestIndex(0);
          setSelectedRequirement(0);
          setSelectedUx(0);
          dialogRef.current?.showModal();
        }}
        type="button"
      >
        งานที่รับผิดชอบ
        <ExternalLink aria-hidden="true" size={15} />
      </button>
      <dialog
        aria-labelledby={`${baseId}-title`}
        className={`project-diagram-dialog project-responsibility-dialog project-responsibility-dialog--${projectCode.toLowerCase()}`}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            event.currentTarget.close();
          }
        }}
        ref={dialogRef}
      >
        <div className="project-dialog-card">
          <header className="project-dialog-heading">
            <div>
              <p className="project-dialog-eyebrow">{projectCode} · RESPONSIBILITIES</p>
              <h2 id={`${baseId}-title`}>งานที่รับผิดชอบ</h2>
            </div>
            <button
              aria-label="ปิดหน้าต่าง"
              className="project-dialog-close"
              onClick={() => dialogRef.current?.close()}
              type="button"
            >
              <X aria-hidden="true" size={20} />
            </button>
          </header>
          <div className="project-responsibility-content">
            <div
              aria-label="เลือกหมวดงาน"
              className="project-responsibility-tabs"
              role="tablist"
            >
              {projectCode === "PSF" ? (
                <>
                  <button
                    aria-controls={`${baseId}-requirement-panel`}
                    aria-selected={activeTab === "requirement"}
                    className="project-responsibility-tab"
                    id={`${baseId}-requirement-tab`}
                    onClick={() => selectTab("requirement")}
                    onKeyDown={handleTabKeyDown}
                    ref={(element) => {
                      tabRefs.current[0] = element;
                    }}
                    role="tab"
                    tabIndex={activeTab === "requirement" ? 0 : -1}
                    type="button"
                  >
                    Requirement Gathering
                  </button>
                  <button
                    aria-controls={`${baseId}-design-panel`}
                    aria-selected={activeTab === "design"}
                    className="project-responsibility-tab"
                    id={`${baseId}-design-tab`}
                    onClick={() => selectTab("design")}
                    onKeyDown={handleTabKeyDown}
                    ref={(element) => {
                      tabRefs.current[1] = element;
                    }}
                    role="tab"
                    tabIndex={activeTab === "design" ? 0 : -1}
                    type="button"
                  >
                    Software Designs
                  </button>
                  <button
                    aria-controls={`${baseId}-ux-panel`}
                    aria-selected={activeTab === "ux"}
                    className="project-responsibility-tab"
                    id={`${baseId}-ux-tab`}
                    onClick={() => selectTab("ux")}
                    onKeyDown={handleTabKeyDown}
                    ref={(element) => {
                      tabRefs.current[2] = element;
                    }}
                    role="tab"
                    tabIndex={activeTab === "ux" ? 0 : -1}
                    type="button"
                  >
                    UX/UI Design
                  </button>
                </>
              ) : (
                <>
                  <button
                    aria-controls={`${baseId}-design-panel`}
                    aria-selected={activeTab === "design"}
                    className="project-responsibility-tab"
                    id={`${baseId}-design-tab`}
                    onClick={() => selectTab("design")}
                    onKeyDown={handleTabKeyDown}
                    ref={(element) => {
                      tabRefs.current[0] = element;
                    }}
                    role="tab"
                    tabIndex={activeTab === "design" ? 0 : -1}
                    type="button"
                  >
                    Software Designs
                  </button>
                  {projectCode === "SPEC" ? (
                    <>
                      <button
                        aria-controls={`${baseId}-document-panel`}
                        aria-selected={activeTab === "document"}
                        className="project-responsibility-tab"
                        id={`${baseId}-document-tab`}
                        onClick={() => selectTab("document")}
                        onKeyDown={handleTabKeyDown}
                        ref={(element) => {
                          tabRefs.current[1] = element;
                        }}
                        role="tab"
                        tabIndex={activeTab === "document" ? 0 : -1}
                        type="button"
                      >
                        Document
                      </button>
                      <button
                        aria-controls={`${baseId}-team-panel`}
                        aria-selected={activeTab === "team"}
                        className="project-responsibility-tab"
                        id={`${baseId}-team-tab`}
                        onClick={() => selectTab("team")}
                        onKeyDown={handleTabKeyDown}
                        ref={(element) => {
                          tabRefs.current[2] = element;
                        }}
                        role="tab"
                        tabIndex={activeTab === "team" ? 0 : -1}
                        type="button"
                      >
                        Team Structure
                      </button>
                    </>
                  ) : (
                    <button
                      aria-controls={`${baseId}-test-panel`}
                      aria-selected={activeTab === "test"}
                      className="project-responsibility-tab"
                      id={`${baseId}-test-tab`}
                      onClick={() => selectTab("test")}
                      onKeyDown={handleTabKeyDown}
                      ref={(element) => {
                        tabRefs.current[1] = element;
                      }}
                      role="tab"
                      tabIndex={activeTab === "test" ? 0 : -1}
                      type="button"
                    >
                      การทดสอบระบบ
                    </button>
                  )}
                </>
              )}
            </div>
            {activeTab === "requirement" ? (
              <section
                aria-labelledby={`${baseId}-requirement-tab`}
                className="project-responsibility-panel"
                id={`${baseId}-requirement-panel`}
                role="tabpanel"
                tabIndex={0}
              >
                <div className="project-responsibility-requirement-heading">
                  <div>
                    <h3>Requirement Gathering</h3>
                    <p className="project-responsibility-description">
                      เลือกหน้าจอหรือหัวข้อเพื่อดูรายละเอียดขอบเขตฟังก์ชันตามเอกสารการพัฒนาสมรรถนะ Thailand PSF
                    </p>
                  </div>
                  <label className="project-responsibility-select project-responsibility-select--requirement">
                    เลือกหัวข้อ Requirement
                    <select
                      onChange={(event) => setSelectedRequirement(Number(event.target.value))}
                      value={selectedRequirement}
                    >
                      {requirements.map((requirement, index) => (
                        <option key={requirement.title} value={index}>
                          {requirement.title}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
                <div className="project-responsibility-requirement-layout">
                  <div className="project-responsibility-requirement-details">
                    <h4>{currentRequirement.title}</h4>
                    <p className="project-responsibility-purpose">{currentRequirement.purpose}</p>
                    <ul>
                      {currentRequirement.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                    {currentRequirement.fields && (
                      <p className="project-responsibility-fields">
                        <strong>ข้อมูลที่เกี่ยวข้อง:</strong> {currentRequirement.fields}
                      </p>
                    )}
                  </div>
                </div>
              </section>
            ) : activeTab === "design" ? (
              <section
                aria-labelledby={`${baseId}-design-tab`}
                className="project-responsibility-panel"
                id={`${baseId}-design-panel`}
                role="tabpanel"
                tabIndex={0}
              >
                <h3>Software Designs</h3>
                <p className="project-responsibility-description">
                  เลือกแผนภาพการออกแบบระบบเพื่อดูโครงสร้างการทำงานและลำดับการใช้งานของระบบ
                </p>
                {currentDiagram && (
                  <div className="project-responsibility-design-layout">
                    <div className="project-responsibility-preview">
                      <div className="project-responsibility-image">
                        <Image
                          alt={currentDiagram.imageAlt}
                          height={currentDiagram.imageHeight}
                          unoptimized
                          sizes="(max-width: 680px) 90vw, 680px"
                          src={currentDiagram.href}
                          width={currentDiagram.imageWidth}
                        />
                        <button
                          aria-label={`ขยายภาพ ${currentDiagram.title}`}
                          className="project-image-zoom-button"
                          onClick={openZoomDialog}
                          type="button"
                        >
                          <ZoomIn aria-hidden="true" size={16} />
                          ขยายรูป
                        </button>
                      </div>
                      <p className="project-responsibility-preview-title">{currentDiagram.title}</p>
                    </div>
                    <label className="project-responsibility-select">
                      เลือก Software Design
                      <select
                        onChange={(event) => setSelectedDiagram(Number(event.target.value))}
                        value={selectedDiagram}
                      >
                        {diagrams.map((diagram, index) => (
                          <option key={diagram.href} value={index}>
                            {diagram.label}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>
                )}
              </section>
            ) : activeTab === "document" ? (
              <section
                aria-labelledby={`${baseId}-document-tab`}
                className="project-responsibility-panel"
                id={`${baseId}-document-panel`}
                role="tabpanel"
                tabIndex={0}
              >
                <h3>Document</h3>
                <div className="project-responsibility-document-layout">
                  <div className="project-responsibility-pdf">
                    <iframe
                      aria-label={currentDocument.label}
                      src={`${currentDocument.href}#view=FitH`}
                      title={currentDocument.label}
                    />
                    <div className="project-responsibility-pdf-actions">
                      <a
                        className="project-document-link"
                        href={currentDocument.href}
                        rel="noreferrer"
                        target="_blank"
                      >
                        เปิดเอกสาร
                        <ExternalLink aria-hidden="true" size={15} />
                      </a>
                      <a
                        className="project-document-link"
                        download
                        href={currentDocument.href}
                      >
                        ดาวน์โหลด
                        <Download aria-hidden="true" size={15} />
                      </a>
                    </div>
                  </div>
                  <label className="project-responsibility-select">
                    เลือกเอกสาร
                    <select
                      onChange={(event) => setSelectedDocument(Number(event.target.value))}
                      value={selectedDocument}
                    >
                      {documents.map((document, index) => (
                        <option key={document.href} value={index}>
                          {document.label}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
              </section>
            ) : activeTab === "ux" ? (
              <section
                aria-labelledby={`${baseId}-ux-tab`}
                className="project-responsibility-panel"
                id={`${baseId}-ux-panel`}
                role="tabpanel"
                tabIndex={0}
              >
                <h3>UX/UI Design</h3>
                <p className="project-responsibility-description">
                  ออกแบบประสบการณ์ผู้ใช้และหน้าจอสำหรับการจัดการข้อมูลการพัฒนาสมรรถนะของอาจารย์
                </p>
                <label className="project-responsibility-select project-ux-select">
                  เลือกหน้าจอ UX/UI
                  <select
                    onChange={(event) => setSelectedUx(Number(event.target.value))}
                    value={selectedUx}
                  >
                    {uxScreens.map((screen, index) => (
                      <option key={screen.title} value={index}>
                        {screen.title}
                      </option>
                    ))}
                  </select>
                </label>
                {currentUx && (
                  <div className="project-ux-layout">
                    <div className="project-ux-preview">
                      <Image
                        alt={currentUx.alt}
                        height={currentUx.height}
                        unoptimized
                        sizes="(max-width: 680px) 90vw, 680px"
                        src={currentUx.src}
                        width={currentUx.width}
                      />
                      <button
                        aria-label={`ขยายภาพ ${currentUx.title}`}
                        className="project-image-zoom-button"
                        onClick={openZoomDialog}
                        type="button"
                      >
                        <ZoomIn aria-hidden="true" size={16} />
                        ขยายรูป
                      </button>
                    </div>
                    <div className="project-ux-details">
                      <h4>{currentUx.title}</h4>
                      <p>{requirements[selectedUx]?.purpose ?? ""}</p>
                      <ul>
                        {(requirements[selectedUx]?.details ?? []).map((detail) => (
                          <li key={detail}>{detail}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </section>
            ) : activeTab === "team" ? (
              <section
                aria-labelledby={`${baseId}-team-tab`}
                className="project-responsibility-panel"
                id={`${baseId}-team-panel`}
                role="tabpanel"
                tabIndex={0}
              >
                <h3>Team Structure</h3>
                <p className="project-responsibility-description">
                  โครงสร้างและบทบาทความรับผิดชอบของ TEAM CLUSTER SIX ในระบบ SPEC
                </p>
                <div className="project-responsibility-team">
                  <div className="project-responsibility-team-image">
                    <Image
                      alt="โครงสร้างทีม TEAM CLUSTER SIX"
                      height={768}
                      unoptimized
                      sizes="(max-width: 680px) 90vw, 1100px"
                      src="/projects/spec-team-cluster-six.png"
                      width={1365}
                    />
                    <button
                      aria-label="ขยายภาพโครงสร้างทีม"
                      className="project-image-zoom-button"
                      onClick={openZoomDialog}
                      type="button"
                    >
                      <ZoomIn aria-hidden="true" size={16} />
                      ขยายรูป
                    </button>
                  </div>
                </div>
              </section>
            ) : (
              <section
                aria-labelledby={`${baseId}-test-tab`}
                className="project-responsibility-panel"
                id={`${baseId}-test-panel`}
                role="tabpanel"
                tabIndex={0}
              >
                <h3>การทดสอบระบบ</h3>
                {activeTestCase && (
                  <>
                    <div
                      aria-label="เลือกกรณีทดสอบ"
                      className="project-test-tabs"
                      role="tablist"
                    >
                      {testCases.map((testCase, index) => (
                        <button
                          aria-controls={`${baseId}-test-result-${testCase.id}`}
                          aria-selected={activeTestIndex === index}
                          className="project-test-tab"
                          id={`${baseId}-test-tab-${testCase.id}`}
                          key={testCase.id}
                          onClick={() => setActiveTestIndex(index)}
                          onKeyDown={(event) => {
                            if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
                              event.preventDefault();
                              const direction = event.key === "ArrowRight" ? 1 : -1;
                              const nextIndex = (index + direction + testCases.length) % testCases.length;
                              setActiveTestIndex(nextIndex);
                              const nextTab = document.getElementById(`${baseId}-test-tab-${testCases[nextIndex].id}`);
                              nextTab?.focus();
                            } else if (event.key === "Home") {
                              event.preventDefault();
                              setActiveTestIndex(0);
                              document.getElementById(`${baseId}-test-tab-${testCases[0].id}`)?.focus();
                            } else if (event.key === "End") {
                              event.preventDefault();
                              const lastIndex = testCases.length - 1;
                              setActiveTestIndex(lastIndex);
                              document.getElementById(`${baseId}-test-tab-${testCases[lastIndex].id}`)?.focus();
                            }
                          }}
                          role="tab"
                          tabIndex={activeTestIndex === index ? 0 : -1}
                          type="button"
                        >
                          {testCase.label}
                        </button>
                      ))}
                    </div>
                    <div className="project-test-panel">
                      <h4>{activeTestCase.title}</h4>
                      <div className="project-test-images">
                        {activeTestCase.images.map((image) => (
                          <Image
                            alt={image.alt}
                            className="project-test-image"
                            height={image.height}
                            key={image.src}
                            sizes="(max-width: 680px) 90vw, 1000px"
                            src={image.src}
                            unoptimized
                            width={image.width}
                          />
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </section>
            )}
          </div>
        </div>
      </dialog>
      {zoomImage && (
        <dialog
          aria-labelledby={`${baseId}-zoom-title`}
          className="project-image-zoom-dialog"
          onCancel={(event) => {
            event.preventDefault();
            event.currentTarget.close();
          }}
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              event.currentTarget.close();
            }
          }}
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              event.preventDefault();
              event.currentTarget.close();
            }
          }}
          ref={zoomDialogRef}
        >
          <div className="project-image-zoom-card">
            <header className="project-image-zoom-heading">
              <h2 id={`${baseId}-zoom-title`}>{zoomImage.title}</h2>
              <div
                aria-label="ควบคุมขนาดภาพ"
                className="project-image-zoom-controls"
                role="group"
              >
                <button
                  aria-label="ย่อรูป"
                  className="project-zoom-control"
                  disabled={zoomLevel <= 0.75}
                  onClick={() => setZoomLevel((level) => Math.max(0.75, level - 0.25))}
                  type="button"
                >
                  <ZoomOut size={17} />
                </button>
                <span aria-live="polite">{Math.round(zoomLevel * 100)}%</span>
                <button
                  aria-label="ขยายรูป"
                  className="project-zoom-control"
                  disabled={zoomLevel >= 2.5}
                  onClick={() => setZoomLevel((level) => Math.min(2.5, level + 0.25))}
                  type="button"
                >
                  <ZoomIn size={17} />
                </button>
                <button
                  aria-label="ปรับภาพให้พอดีหน้าจอ"
                  className="project-zoom-control"
                  onClick={() => setZoomLevel(1)}
                  type="button"
                >
                  <RotateCcw size={15} />
                </button>
              </div>
              <button
                aria-label="ปิดภาพขยาย"
                className="project-dialog-close"
                onClick={() => zoomDialogRef.current?.close()}
                type="button"
              >
                <X size={20} />
              </button>
            </header>
            <div className={`project-image-zoom-content${zoomLevel > 1 ? " is-zoomed" : ""}`}>
              <Image
                alt={`${zoomImage.alt} แบบขยาย`}
                height={zoomImage.height}
                style={{
                  transform: `scale(${zoomLevel})`,
                  transformOrigin: zoomLevel > 1 ? "left top" : "center center",
                }}
                unoptimized
                sizes="100vw"
                src={zoomImage.src}
                width={zoomImage.width}
              />
            </div>
          </div>
        </dialog>
      )}
    </>
  );
}