import React from "react";
import { usePageManager } from "@/hooks/pageManager";

// See /src/hooks/pageManager.tsx
const condRenderHome = () => {
  const { currentPage } = usePageManager();

  return <div>{currentPage.render()}</div>;
};

export default condRenderHome;
