import React, { useState } from 'react';

const Slide = ({ children, title, subtitle, tag }) => (
  <div className="flex flex-col h-full w-full p-8 md:p-16 bg-[#0A0A0A] text-[#FAFAFA] font-sans selection:bg-[#E85D3A] selection:text-white">
    <div className="flex justify-between items-start border-b border-[#222] pb-6 mb-12">
      <div>
        <h2 className="text-xs font-mono uppercase tracking-[0.2em] text-[#E85D3A]">{subtitle}</h2>
      </div>
      <div className="text-[10px] font-mono uppercase tracking-widest text-[#666]">
        {tag || "Encoded Brand Protocol"}
      </div>
    </div>
    
    <div className="flex-grow flex flex-col justify-center">
      <h1 className="text-4xl md:text-6xl font-display font-bold leading-[1.0] uppercase tracking-tighter mb-10 max-w-[14ch]">
        {title}
      </h1>
      <div className="max-w-3xl">
        {children}
      </div>
    </div>

    <div className="mt-12 text-[10px] font-mono text-[#333] flex justify-between border-t border-[#222] pt-6 uppercase tracking-[0.15em]">
      <span>Bruiser // Encoded Brand Infrastructure</span>
      <span>V1.0.2026 // Machine-Readable Identity</span>
    </div>
  </div>
);

const SubPoints = ({ items }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 border-t border-[#1A1A1A] pt-10">
    {items.map((item, i) => (
      <div key={i} className="font-mono text-xs text-[#666] leading-relaxed">
        <strong className="block text-[#FAFAFA] uppercase tracking-wider mb-2">{item.label}</strong>
        {item.text}
      </div>
    ))}
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

    setTimeout(() => {
      let response = "";
      if (isGrounded) {
        response = `Direct answer: your brand is invisible to machines. Brand.md fixes that. One file, machine-readable, version-controlled. Every agent reads it. Every output reflects it. No training decks. No style guide PDFs. Infrastructure that enforces itself.\n\n[voice: direct | constraints: no hedge words | tone: confident]`;
      } else {
        response = "I'd be happy to help with that! That's a great question. There are many factors to consider when approaching this topic. It really depends on your specific situation and goals. Here's a general overview of the key considerations you might want to think about...";
      }
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
      setLoading(false);
    }, 800);
  };

  return (
    <div className="flex flex-col h-full bg-[#0A0A0A] border border-[#222]">
      <div className="p-4 border-b border-[#222] flex justify-between items-center bg-black">
        <span className="text-[10px] font-mono uppercase tracking-widest text-[#FAFAFA]">{label}</span>
        {isGrounded && <span className="text-[9px] bg-[#E85D3A] text-white px-2 py-0.5 font-bold uppercase animate-pulse">MCP Connected</span>}
      </div>
      <div className="flex-grow p-6 overflow-y-auto space-y-6 font-mono text-xs">
        {messages.map((m, i) => (
          <div key={i} className="space-y-1">
            <div className={m.role === 'user' ? 'text-[#666] font-bold' : 'text-[#FAFAFA]'}>
              {m.role === 'user' ? '> ' : ''}{m.content}
            </div>
          </div>
        ))}
        {loading && <div className="text-[#333] animate-pulse uppercase tracking-widest text-[10px]">Processing...</div>}
      </div>
      <div className="p-4 border-t border-[#222] bg-black">
        <input 
          className="w-full bg-transparent border-none outline-none text-[#FAFAFA] font-mono text-xs uppercase placeholder:text-[#333]"
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

  const slides = [
    {
      title: "The Disintegration of the Agentic Brand.",
      subtitle: "Encoded Brands",
      tag: "V1.0 // 2026",
      content: "Your brand is being represented by machines you have never briefed. This is the infrastructure to fix that.",
      footer: "Brand.md // Brand MCP // Encoded Identity"
    },
    {
      title: "100+ Agents. Zero Briefing.",
      subtitle: "01 // Context",
      tag: "The Agentic Workforce",
      content: "Customer service bots. Search engine summaries. Commerce copilots. Internal tools. Every one of them is representing your brand right now. None of them have been told what your brand is.",
      subPoints: [
        { label: "The Leak", text: "Perplexity answers about you. ChatGPT recommends your competitors. Shopify agents describe your products in someone else's voice." },
        { label: "The Risk", text: "Your brand identity is eroding in real-time. The more agents you deploy, the faster you lose control." }
      ]
    },
    {
      title: "PDFs Are for Humans. Machines Are Guessing.",
      subtitle: "02 // The Gap",
      tag: "Structural Friction",
      content: "Brand guidelines were designed for designers. They live in Dropbox as 80-page PDFs. No machine has ever parsed one. Your $200K brand system is invisible to the AI workforce.",
      subPoints: [
        { label: "Analog Identity", text: "Schema.org gives machines your address. It does not give them your soul." },
        { label: "The Guesswork", text: "Without a specification, agents default to the average. 'Helpful AI' voice is the death of distinct brands." }
      ]
    },
    {
      title: "The System Prompt for Your Organization.",
      subtitle: "03 // Brand.md",
      tag: "The Specification",
      content: "Brand.md is a single, machine-readable specification that encodes your identity: voice, values, positioning, and constraints. Not a document. Infrastructure.",
      subPoints: [
        { label: "One Source", text: "Every agent reads the same spec. Every interaction reflects the same intent." },
        { label: "No Drift", text: "Manual prompting is replaced by structural coherence. The brief is embedded in the stack." }
      ]
    },
    {
      title: "The Protocol That Connects Everything.",
      subtitle: "04 // Brand MCP",
      tag: "The Connectivity",
      content: "Brand MCP is the real-time connectivity layer. Any AI agent in your stack connects to your Brand.md through the protocol. Persistent coherence. Representation control.",
      subPoints: [
        { label: "Direct Inject", text: "Internal agents stay on-voice. External systems get structured identity data." },
        { label: "Universal Logic", text: "The protocol ensures the spec is enforced, not just suggested." }
      ]
    },
    {
      title: "Three Layers. One Spec.",
      subtitle: "05 // Architecture",
      tag: "Governance Model",
      subPoints: [
        { label: "Internal Coherence", text: "Every employee tool and internal agent pulls brand context automatically. No more 'write in our voice' prompts." },
        { label: "External Representation", text: "Search engines, recommendation systems, and commerce agents get structured data about who you are." },
        { label: "Semantic Governance", text: "One file governs behavior, not just pixels. Every output is audited against the specification." }
      ]
    },
    {
      title: "The Stress Test.",
      subtitle: "06 // Prove It",
      tag: "Live Demo",
      isInteractive: true
    },
    {
      title: "The Infrastructure of Intent.",
      subtitle: "07 // The Spec",
      tag: "YAML Definition",
      content: "We don't write descriptions. We write constraints. We don't define looks. We define logic.",
      isSpec: true
    },
    {
      title: "One File. One Million Interactions.",
      subtitle: "08 // Scale",
      tag: "Algorithmic Efficiency",
      content: "No manual reviews. No brand police. No 'can you make it sound more like us' feedback loops. Brand.md governs every agent output automatically.",
      subPoints: [
        { label: "Infinite Reach", text: "Update the spec, and every touchpoint updates with it instantly." },
        { label: "Git For Brand", text: "Version control for your identity. Roll back a voice change in seconds." }
      ]
    },
    {
      title: "The Cost That Just Disappeared.",
      subtitle: "09 // Economics",
      tag: "The Value Proposition",
      content: "Brand consistency used to be a headcount problem. Style guides no one reads. Brand.md replaces the apparatus with a protocol that enforces itself.",
      subPoints: [
        { label: "Headcount Shift", text: "Move your team from 'brand police' to 'identity strategy.'" },
        { label: "The Briefing Ritual", text: "The ritual of 'brief, review, correct' ends when the brief is in the code." }
      ]
    },
    {
      title: "The Protocol Is the Floor. The Strategy Is the Ceiling.",
      subtitle: "10 // Strategy",
      tag: "The Consultancy",
      content: "Anyone can publish a file. Knowing what to put in it is the hard part. Which constraints matter. Which values machines can actually enforce.",
      subPoints: [
        { label: "Expert Encoding", text: "The spec is open. The expertise to encode your brand into it is not." },
        { label: "Judgment at Scale", text: "We help you define the logic that machines use to represent you." }
      ]
    },
    {
      title: "We Wrote the Playbook.",
      subtitle: "11 // Close",
      tag: "Next Steps",
      content: "We built the Brand.md spec. We implemented the Brand MCP protocol. We deployed it for our own operations before we ever showed it to a client.",
      subPoints: [
        { label: "Bruiser", text: "The encoded brand consultancy. bruiser.co // encodedbrands.com" }
      ]
    }
  ];

  const s = slides[currentSlide];

  return (
    <div className="w-full h-screen bg-[#0A0A0A] select-none overflow-hidden cursor-default">
      {s.isInteractive ? (
        <Slide title={s.title} subtitle={s.subtitle} tag={s.tag}>
          <div className="grid grid-cols-2 gap-[1px] bg-[#222] border border-[#222] h-[450px]">
            <ChatWindow label="Generic LLM (No Context)" isGrounded={false} />
            <ChatWindow label="Brand MCP (Encoded Identity)" isGrounded={true} />
          </div>
          <p className="mt-8 text-[#444] font-mono text-[10px] uppercase tracking-[0.2em] text-center">
            Type any prompt to see the difference between AI slop and encoded identity.
          </p>
        </Slide>
      ) : s.isSpec ? (
        <Slide title={s.title} subtitle={s.subtitle} tag={s.tag}>
          <div className="grid grid-cols-2 gap-16 items-start">
            <p className="text-2xl font-light text-[#AAA] leading-relaxed">
              {s.content}
            </p>
            <div className="bg-black border border-[#222] p-8 font-mono text-xs leading-relaxed text-[#666]">
              <div className="mb-1"><span className="text-[#E85D3A]">voice.tone:</span> <span className="text-[#FAFAFA]">[direct, confident, sharp, wry]</span></div>
              <div className="mb-1"><span className="text-[#E85D3A]">voice.avoids:</span> <span className="text-[#FAFAFA]">["corporate jargon", "hedge words"]</span></div>
              <div className="mb-1"><span className="text-[#E85D3A]">voice.style:</span> <span className="text-[#FAFAFA]">short. declarative.</span></div>
              <div className="mb-1"><span className="text-[#E85D3A]">constraints.never_say:</span> <span className="text-[#FAFAFA]">["I'd be happy to"]</span></div>
              <div className="mb-1"><span className="text-[#E85D3A]">constraints.always_do:</span> <span className="text-[#FAFAFA]">["Lead with the answer"]</span></div>
              <div className="mb-1"><span className="text-[#E85D3A]">mcp.version:</span> <span className="text-[#FAFAFA]">"1.0"</span></div>
            </div>
          </div>
        </Slide>
      ) : (
        <Slide title={s.title} subtitle={s.subtitle} tag={s.tag}>
          {s.content && (
            <p className="text-2xl md:text-3xl font-light text-[#BBB] leading-tight max-w-2xl">
              {s.content}
            </p>
          )}
          {s.subPoints && <SubPoints items={s.subPoints} />}
        </Slide>
      )}

      <div className="fixed bottom-12 right-8 md:right-16 flex items-center space-x-8 z-[100]">
        <div className="text-[10px] font-mono text-[#444] tracking-[0.2em]">
          {currentSlide + 1} / {slides.length}
        </div>
        <div className="flex space-x-2">
          <button 
            onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))} 
            className="border border-[#1A1A1A] text-[#444] hover:text-[#FAFAFA] hover:border-[#666] px-4 py-2 font-mono text-[10px] uppercase tracking-widest transition-all cursor-pointer"
          >
            PREV
          </button>
          <button 
            onClick={() => setCurrentSlide(Math.min(slides.length - 1, currentSlide + 1))} 
            className="border border-[#1A1A1A] text-[#444] hover:text-[#FAFAFA] hover:border-[#666] px-4 py-2 font-mono text-[10px] uppercase tracking-widest transition-all cursor-pointer"
          >
            NEXT
          </button>
        </div>
      </div>
    </div>
  );
}
