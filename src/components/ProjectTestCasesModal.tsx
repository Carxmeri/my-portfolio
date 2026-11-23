"use client";

import Image from "next/image";
import { useId, useRef, useState } from "react";
import { ExternalLink, X } from "lucide-react";

type TestCaseImage = {
  alt: string;
  height: number;
  src: string;
  width: number;
};

type TestCase = {
  id: string;
  images: TestCaseImage[];
  label: string;
  title: string;
};

type ProjectTestCasesModalProps = {
  testCases: TestCase[];
};

export default function ProjectTestCasesModal({
  testCases,
}: ProjectTestCasesModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const baseId = useId();
  const [activeIndex, setActiveIndex] = useState(0);
  const activeCase = testCases[activeIndex];

  const selectTab = (index: number) => {
    const nextIndex = (index + testCases.length) % testCases.length;
    setActiveIndex(nextIndex);
    tabRefs.current[nextIndex]?.focus();
  };

  return (
    <>
      <button
        className="project-document-link"
        onClick={() => {
          setActiveIndex(0);
          dialogRef.current?.showModal();
        }}
        type="button"
      >
        Checklist Software
        <ExternalLink aria-hidden="true" size={15} />
      </button>
      <dialog
        aria-labelledby={`${baseId}-title`}
        className="project-diagram-dialog project-test-cases-dialog"
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
              <p className="project-dialog-eyebrow">DENSY · SYSTEM TEST</p>
              <h2 id={`${baseId}-title`}>Checklist Software</h2>
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
          <div className="project-test-content">
            <div
              aria-label="เลือกกรณีทดสอบ"
              className="project-test-tabs"
              role="tablist"
            >
              {testCases.map((testCase, index) => {
                const tabId = `${baseId}-tab-${testCase.id}`;
                const panelId = `${baseId}-panel-${testCase.id}`;

                return (
                  <button
                    aria-controls={panelId}
                    aria-selected={activeIndex === index}
                    className="project-test-tab"
                    id={tabId}
                    key={testCase.id}
                    onClick={() => setActiveIndex(index)}
                    onKeyDown={(event) => {
                      if (event.key === "ArrowRight") {
                        event.preventDefault();
                        selectTab(index + 1);
                      } else if (event.key === "ArrowLeft") {
                        event.preventDefault();
                        selectTab(index - 1);
                      } else if (event.key === "Home") {
                        event.preventDefault();
                        selectTab(0);
                      } else if (event.key === "End") {
                        event.preventDefault();
                        selectTab(testCases.length - 1);
                      }
                    }}
                    ref={(element) => {
                      tabRefs.current[index] = element;
                    }}
                    role="tab"
                    tabIndex={activeIndex === index ? 0 : -1}
                    type="button"
                  >
                    {testCase.label}
                  </button>
                );
              })}
            </div>
            {activeCase && (
              <section
                aria-labelledby={`${baseId}-tab-${activeCase.id}`}
                className="project-test-panel"
                id={`${baseId}-panel-${activeCase.id}`}
                role="tabpanel"
                tabIndex={0}
              >
                <h3>{activeCase.title}</h3>
                <div className="project-test-images">
                  {activeCase.images.map((image) => (
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
              </section>
            )}
          </div>
        </div>
      </dialog>
    </>
  );
}
