import { Send, Mail } from 'lucide-react';
import developerProfile from '@/assets/developer-profile.jpg';

const trustPoints = [
  'Primary support via Telegram',
  'Fast response during beta phase',
  'Business inquiries available by email',
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left */}
          <div>
            <span className="font-mono text-xs text-neon tracking-widest uppercase">
              // Connect
            </span>
            <h2 className="mt-4 font-inter font-bold text-4xl md:text-5xl text-data-white leading-tight">
              Contact
            </h2>
            <p className="mt-4 text-code-grey text-lg leading-relaxed max-w-xl">
              If you have questions about beta access, support, or collaboration,
              you can reach out through the channels below.
            </p>

            <div className="mt-8 monolith-card rounded-lg p-6">
              <div className="space-y-4">
                {trustPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-neon mt-2 shrink-0" />
                    <span className="text-code-grey leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 space-y-6">
              <a
                href="https://t.me/tbotsystem"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-lg border border-card-border flex items-center justify-center group-hover:border-neon/30 transition-colors shrink-0">
                  <Send size={18} className="text-neon" />
                </div>
                <div>
                  <div className="font-inter font-medium text-data-white group-hover:text-neon transition-colors">
                    Open Telegram
                  </div>
                  <div className="font-mono text-xs text-code-grey/50 mt-1">
                    Primary support channel · Fastest way to get in touch
                  </div>
                  <div className="font-mono text-xs text-code-grey/40 mt-2">
                    @tbotsystem
                  </div>
                </div>
              </a>

              <a
                href="mailto:support@tbotsystem.eu"
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 rounded-lg border border-card-border flex items-center justify-center group-hover:border-neon/30 transition-colors shrink-0">
                  <Mail size={18} className="text-neon" />
                </div>
                <div>
                  <div className="font-inter font-medium text-data-white group-hover:text-neon transition-colors">
                    Send Email
                  </div>
                  <div className="font-mono text-xs text-code-grey/50 mt-1">
                    For business, support, or formal inquiries
                  </div>
                  <div className="font-mono text-xs text-code-grey/40 mt-2">
                    support@tbotsystem.eu
                  </div>
                </div>
              </a>
            </div>

            <p className="mt-8 font-mono text-xs text-code-grey/40">
              Beta access and support requests are reviewed manually to keep communication focused and useful.
            </p>
          </div>

          {/* Right: Dev card */}
          <div className="monolith-card rounded-lg p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-lg border border-card-border overflow-hidden bg-void shrink-0">
                <img
                  src={developerProfile}
                  alt="Developer profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="font-inter font-semibold text-data-white">
                  Developer
                </div>
                <div className="font-mono text-xs text-code-grey/50">
                  Independent - System Design - Risk-Controlled Automation
                </div>
              </div>
            </div>

            <p className="text-code-grey leading-relaxed mb-6">
              Independent developer focused on systematic trading systems,
              execution logic, and risk-controlled automation. Tbot is being
              built as a long-term infrastructure project, not a short-term
              signal product.
            </p>

            <div className="flex flex-wrap gap-2">
              {[
                'Python',
                'Trading Systems',
                'Risk Management',
                'APIs',
                'VPS Infrastructure',
              ].map((skill, i) => (
                <span key={i} className="syntax-highlight text-xs">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
