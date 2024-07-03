import { Seo } from "@/ui/components/seo";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <Seo title="Vbs converter" description="description..." />
    </>
  );
}
