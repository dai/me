import type { Metadata } from "next"
import LinkTree from "@/components/link-tree"

export const metadata: Metadata = {
  title: "あなたの名前 - パーソナルリンクページ",
  description: "あなたの重要なリンクをまとめたカスタマイズ可能なリンク共有プラットフォーム",
}

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start p-4 pt-8 bg-secondary">
      <LinkTree />
    </main>
  )
}
