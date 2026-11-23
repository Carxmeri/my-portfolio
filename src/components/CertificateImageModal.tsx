"use client";

import Image from "next/image";
import { useId, useRef, useState } from "react";
import { RotateCcw, X, ZoomIn, ZoomOut } from "lucide-react";

type CertificateImageModalProps = {
  imageAlt: string;
  imageSrc: string;
  title: string;
};

export default function CertificateImageModal({
  imageAlt,
  imageSrc,
  title,
}: CertificateImageModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const [zoomLevel, setZoomLevel] = useState(1);

  const openDialog = () => {
    setZoomLevel(1);
    dialogRef.current?.showModal();
  };

  return (
    <>
      <button
        aria-label={`ขยายรูป ${title}`}
        className="certificate-image-expand"
        onClick={openDialog}
        type="button"
      >
        <ZoomIn aria-hidden="true" size={16} />
        ขยายรูป
      </button>
      <dialog
        aria-labelledby={titleId}
        className="project-image-zoom-dialog"
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            event.currentTarget.close();
          }
        }}
        ref={dialogRef}
      >
        <div className="project-image-zoom-card">
          <header className="project-image-zoom-heading">
            <h2 id={titleId}>{title}</h2>
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
                <ZoomOut aria-hidden="true" size={17} />
              </button>
              <span aria-live="polite">{Math.round(zoomLevel * 100)}%</span>
              <button
                aria-label="ขยายรูป"
                className="project-zoom-control"
                disabled={zoomLevel >= 2.5}
                onClick={() => setZoomLevel((level) => Math.min(2.5, level + 0.25))}
                type="button"
              >
                <ZoomIn aria-hidden="true" size={17} />
              </button>
              <button
                aria-label="ปรับภาพให้พอดีหน้าจอ"
                className="project-zoom-control"
                onClick={() => setZoomLevel(1)}
                type="button"
              >
                <RotateCcw aria-hidden="true" size={15} />
              </button>
            </div>
            <button
              aria-label="ปิดภาพขยาย"
              className="project-dialog-close"
              onClick={() => dialogRef.current?.close()}
              type="button"
            >
              <X aria-hidden="true" size={20} />
            </button>
          </header>
          <div
            className={`project-image-zoom-content${zoomLevel > 1 ? " is-zoomed" : ""}`}
          >
            <Image
              alt={imageAlt}
              height={900}
              sizes="100vw"
              src={imageSrc}
              style={{
                transform: `scale(${zoomLevel})`,
                transformOrigin: zoomLevel > 1 ? "left top" : "center center",
              }}
              unoptimized
              width={1200}
            />
          </div>
        </div>
      </dialog>
    </>
  );
}
