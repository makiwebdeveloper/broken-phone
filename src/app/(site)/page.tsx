import { buttonVariants } from "@/components/ui/button";
import { auth, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  const { userId } = auth();
  const isAuth = !!userId;

  return (
    <div>
      <h1>Home</h1>
      {isAuth ? (
        <UserButton afterSignOutUrl="/sign-in" />
      ) : (
        <Link href="/sign-in" className={buttonVariants()}>
          Sign in
        </Link>
      )}
    </div>
  );
}
