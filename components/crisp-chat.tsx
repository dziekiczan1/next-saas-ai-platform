"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("e621a098-6432-4e6a-8108-80b1e8284c7b");
  }, []);

  return null;
};
