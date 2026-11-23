"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { ExternalLink, RotateCcw, X, ZoomIn, ZoomOut } from "lucide-react";

type DiagramDetail = {
  title: string;
  description: string;
};

type ProjectDiagramModalProps = {
  buttonLabel: string;
  description: string;
  details: DiagramDetail[];
  eyebrow: string;
  idPrefix: string;
  imageAlt: string;
  imageHeight: number;
  imageSrc: string;
  imageWidth: number;
  title: string;
};

export default function ProjectDiagramModal({
  buttonLabel,
  description,
  details,
  eyebrow,
  idPrefix,
  imageAlt,
  imageHeight,
  imageSrc,
  imageWidth,
  title,
}: ProjectDiagramModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const zoomDialogRef = useRef<HTMLDialogElement>(null);
  const [zoomLevel, setZoomLevel] = useState(1.25);
  const titleId = `${idPrefix}-title`;
  const descriptionId = `${idPrefix}-description`;
  const zoomTitleId = `${idPrefix}-zoom-title`;

  const openZoomDialog = () => {
    setZoomLevel(1.25);
    zoomDialogRef.current?.showModal();
  };

  return (
    <>
      <button
        className="project-document-link"
        type="button"
        onClick={() => dialogRef.current?.showModal()}
      >
        {buttonLabel}
        <ExternalLink aria-hidden="true" size={15} />
      </button>
      <dialog
        aria-describedby={descriptionId}
        aria-labelledby={titleId}
        className="project-diagram-dialog"
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
        ref={dialogRef}
      >
        <div className="project-dialog-card">
          <header className="project-dialog-heading">
            <div>
              <p className="project-dialog-eyebrow">{eyebrow}</p>
              <h2 id={titleId}>{title}</h2>
            </div>
            <button
              aria-label="ปิดหน้าต่าง"
              className="project-dialog-close"
              onClick={() => dialogRef.current?.close()}
              type="button"
            >
              <X size={20} />
            </button>
          </header>
          <div className="project-dialog-content">
            <div className="project-dialog-image">
              <Image
                alt={imageAlt}
                height={imageHeight}
                unoptimized
                sizes="(max-width: 680px) 90vw, 680px"
                src={imageSrc}
                width={imageWidth}
              />
              <button
                aria-label={`ขยายภาพ ${title}`}
                className="project-image-zoom-button"
                onClick={openZoomDialog}
                type="button"
              >
                <ZoomIn aria-hidden="true" size={16} />
                ขยายรูป
              </button>
            </div>
            <div className="project-dialog-details">
              <p id={descriptionId}>{description}</p>
              <ul>
                {details.map((detail) => (
                  <li key={detail.title}>
                    <strong>{detail.title}:</strong> {detail.description}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </dialog>
      <dialog
        aria-labelledby={zoomTitleId}
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
            <h2 id={zoomTitleId}>{title}</h2>
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
          <div
            className={`project-image-zoom-content${zoomLevel > 1 ? " is-zoomed" : ""}`}
          >
            <Image
              alt={`${imageAlt} แบบขยาย`}
              height={imageHeight}
              style={{
                transform: `scale(${zoomLevel})`,
                transformOrigin: zoomLevel > 1 ? "left top" : "center center",
              }}
              unoptimized
              sizes="100vw"
              src={imageSrc}
              width={imageWidth}
            />
          </div>
        </div>
      </dialog>
    </>
  );
}
