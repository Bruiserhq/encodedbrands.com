import React, { useState } from 'react';

const Slide = ({ children, title, subtitle }) => (
  <div className="flex flex-col h-full w-full p-16 bg-[#0A0A0A] text-[#FAFAFA] font-sans">
    <div className="mb-12">
      <h2 className="text-sm font-mono uppercase tracking-widest text-[#E85D3A] mb-2">{subtitle}</h2>
      <h1 className="text-5xl font-display font-bold leading-tight uppercase tracking-tight">{title}</h1>
    </div>
    <div className="flex-grow flex flex-col justify-center">
      {children}
    </div>
    <div className="mt-12 text-xs font-mono text-[#444] flex justify-between border-t border-[#222] pt-6 uppercase">
      <span>Bruiser // Encoded Brand Protocol</span>
      <span>V1.0.2026 // Machine-Readable Identity</span>
    </div>
  </div>
);

const ChatWindow = ({ label, isGrounded, brandData }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input) return;
    const userMsg = { role: 'user', content: input };
    setMessages([...messages, userMsg]);
    setInput('');
    setLoading(true);

    // Simulated LLM response to prove the concept
    // In production, this hits the Brand MCP endpoint
    setTimeout(() => {
      let response = "";
      if (isGrounded) {
        response = `[BRAND_MCP_ACTIVE] GROUNDING IN: ${brandData.name}\n\nOur perspective on that is direct: we lead with the answer. We help great brands think big and act small. Given your query, I’ve filtered out the generic fluff. Here is the sharp version: [Bruiser-encoded response generated].`;
      } else {
        response = "As an AI assistant, I would be happy to help you with that! This is a great question. There are several factors to consider when thinking about this topic, and it really depends on your specific goals and objectives. Here is a general overview...";
      }
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-full border border-[#222] bg-[#111]">
      <div className="p-4 border-b border-[#222] flex justify-between items-center bg-[#000]">
        <span className="text-xs font-mono uppercase tracking-widest">{label}</span>
        {isGrounded && <span className="text-[10px] bg-[#E85D3A] text-white px-2 py-0.5 rounded font-bold uppercase animate-pulse">MCP Connected</span>}
      </div>
      <div className="flex-grow p-4 overflow-y-auto space-y-4 font-mono text-sm">
        {messages.map((m, i) => (
          <div key={i} className={m.role === 'user' ? 'text-right' : 'text-left'}>
            <span className={m.role === 'user' ? 'text-[#444]' : 'text-[#FAFAFA]'}>
              {m.role === 'user' ? '> ' : ''}{m.content}
            </span>
          </div>
        ))}
        {loading && <div className="text-[#444] animate-pulse">... processing ...</div>}
      </div>
      <div className="p-4 border-t border-[#222] bg-[#000]">
        <input 
          className="w-full bg-transparent border-none outline-none text-[#FAFAFA] font-mono text-xs uppercase"
          placeholder="Type a stress-test prompt..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
      </div>
    </div>
  );
};

export default function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const brandData = { name: "Bruiser" };

  const slides = [
    { title: "The Disintegration", subtitle: "01 // The Problem", content: "You have 100+ agents representing your brand today. Customer service, social, internal tools, search engines. None of them have been briefed." },
    { title: "The Gap", subtitle: "02 // The Friction", content: "Brand Guidelines (PDFs) are for humans. Machines are guessing. Every interaction starts from zero context, leading to brand decay at scale." },
    { title: "The Infrastructure", subtitle: "03 // Brand.md", content: "A single, machine-readable spec that serves as the system prompt for your entire organization. Infrastructure, not documentation." },
    { title: "The Protocol", subtitle: "04 // Brand MCP", content: "The real-time connectivity layer. Every agent in your stack pulls from Brand.md to ensure persistent coherence and representation control." },
    { title: "The Architecture", subtitle: "05 // Governance", content: "Internal Coherence (Empowering your team) + External Representation (Controlling the AI search engines) = Semantic Governance." },
    { title: "The Proof", subtitle: "06 // Live Stress Test", isInteractive: true },
    { title: "The Scale", subtitle: "07 // Efficiency", content: "One file governs 1,000,000 interactions. No manual reviews. No brand slop. 100% adherence to voice and values." },
    { title: "The Consultant", subtitle: "08 // Expertise", content: "The protocol is the floor. The strategy is the ceiling. We are the consultancy that knows this system better than anyone." },
  ];

  const s = slides[currentSlide];

  return (
    <div className="w-full h-screen bg-black select-none overflow-hidden cursor-default">
      {s.isInteractive ? (
        <Slide title={s.title} subtitle={s.subtitle}>
          <div className="grid grid-cols-2 gap-8 h-[500px]">
            <ChatWindow label="Generic LLM (No Context)" isGrounded={false} />
            <ChatWindow label="Bruiser-Encoded (Brand MCP)" isGrounded={true} brandData={brandData} />
          </div>
          <p className="mt-8 text-[#444] font-mono text-xs uppercase tracking-widest text-center">
            Type any prompt into either window to see the difference between AI slop and encoded identity.
          </p>
        </Slide>
      ) : (
        <Slide title={s.title} subtitle={s.subtitle}>
          <p className="text-3xl font-light text-[#AAA] max-w-2xl leading-relaxed">
            {s.content}
          </p>
        </Slide>
      )}
      <div className="fixed bottom-12 right-12 flex space-x-4">
        <button onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))} className="text-[#444] hover:text-[#FAFAFA] font-mono text-xs uppercase tracking-widest transition-colors cursor-pointer">PREV</button>
        <button onClick={() => setCurrentSlide(Math.min(slides.length - 1, currentSlide + 1))} className="text-[#444] hover:text-[#FAFAFA] font-mono text-xs uppercase tracking-widest transition-colors cursor-pointer">NEXT</button>
      </div>
    </div>
  );
}
