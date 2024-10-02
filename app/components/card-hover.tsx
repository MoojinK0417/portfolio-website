import { HoverEffect } from "../components/ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto py-15 ">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    title: "AI Stock Portfolio Trading Website",
    description:
      "A comprehensive application for real-time tracking and analysis of investment portfolios, featuring personalized insights and predictions to optimize investment strategies",
    link: "https://github.com/MoojinK0417/stock-portfolio",
  },
  {
    title: "AI Saas Pdf Reader Website",
    description:
      "An AI-powered PDF reader that enhances reading and interaction with PDF documents, integrated with payment processing and advanced backend services.",
    link: "https://pdfai-saas.vercel.app",
  },
];
