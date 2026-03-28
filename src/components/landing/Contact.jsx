import { Send, Mail } from 'lucide-react';
import developerProfile from '@/assets/developer-profile.jpg';

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
              Questions about the system, beta access, or how the signals work?
              Reach out directly for a clear answer and next steps.
            </p>

            <div className="mt-12 space-y-6">
              <a
                href="https://t.me/tbotsystem"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-lg border border-card-border flex items-center justify-center group-hover:border-neon/30 transition-colors">
                  <Send size={18} className="text-neon" />
                </div>
                <div>
                  <div className="font-inter font-medium text-data-white group-hover:text-neon transition-colors">
                    Telegram
                  </div>
                  <div className="font-mono text-xs text-code-grey/50">
                    @tbotsystem
                  </div>
                </div>
              </a>

              <a
                href="mailto:contact@tbotsystem.com"
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-lg border border-card-border flex items-center justify-center group-hover:border-neon/30 transition-colors">
                  <Mail size={18} className="text-neon" />
                </div>
                <div>
                  <div className="font-inter font-medium text-data-white group-hover:text-neon transition-colors">
                    Email
                  </div>
                  <div className="font-mono text-xs text-code-grey/50">
                    contact@tbotsystem.com
                  </div>
                </div>
              </a>
            </div>

            <p className="mt-8 font-mono text-xs text-code-grey/40">
              Beta access is reviewed manually to keep the testing group focused and manageable.
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
                  Independent - Full-Stack - System Design
                </div>
              </div>
            </div>

            <p className="text-code-grey leading-relaxed mb-6">
              Tbot System is being developed independently with a focus on
              structured execution, risk control, and practical automation.
              The current beta reflects ongoing live testing, iterative
              development, and direct feedback from early users.
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
