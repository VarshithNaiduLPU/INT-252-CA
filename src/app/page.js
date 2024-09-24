import Link from "next/link";

export default function Home() {
  return (
    <div>
        <h2>Goto <Link href="/question1">Question 1</Link></h2>
        <h2>Goto <Link href="/question2">Question 2</Link></h2>
    </div>
);
}
