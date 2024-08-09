"use client";
import ContentstackLivePreview from "@contentstack/live-preview-utils";
import { Stack } from "@/app/components/stack";
import { useEffect } from "react";

export const LivePreviewInit = () => {
  useEffect(() => {
    ContentstackLivePreview.init({
      stack: Stack,
      ssr: true,
    });
  });

  return <></>;
};
