"use client";

import Editor from "@/features/editor/components/editor";
import React from "react";

interface EditorProductIdProps {
  params: {
    productId: string;
  };
}

const EditorProductId = ({ params }: EditorProductIdProps) => {
  return <Editor />;
};

export default EditorProductId;
