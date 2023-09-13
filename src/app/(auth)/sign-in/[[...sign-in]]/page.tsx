"use client";

import Loader from "@/components/loader";
import { useMount } from "@/hooks/useMount";
import { SignIn } from "@clerk/nextjs";

export default function page() {
  const { isMounted } = useMount();

  if (!isMounted) {
    return <Loader />;
  }

  return <SignIn />;
}
