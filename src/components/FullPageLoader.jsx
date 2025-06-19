import React from "react";

export default function FullPageLoader() {
  return (
    <div className="fixed inset-0 z-50 bg-base-100 flex items-center justify-center">
      <span className="loading loading-infinity loading-xl text-white"></span>
    </div>
  );
}
