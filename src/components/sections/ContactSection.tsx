import { SECTION_IDS } from "@/constants/navigation";
import { PROFILE } from "@/constants/profile";
import { Button } from "@/components/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Mail, Linkedin, Github, FileText } from "lucide-react";

export function ContactSection() {
  return (
    <section
      id={SECTION_IDS.contact}
      className="scroll-mt-24"
      aria-label="Contact"
    >
      <div className="rounded-card border border-[var(--border-subtle)] bg-[var(--surface-card)] p-8 md:p-12">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center">
            <Eyebrow index="09">Contact</Eyebrow>
          </div>

          <h2 className="mt-5 font-display text-h1 font-semibold text-[var(--text-primary)] text-balance">
            Let&apos;s talk about your backend.
          </h2>

          {/* Availability + timezone — answers the recruiter's next question */}
          <p className="mt-4 inline-flex items-center gap-2 font-mono text-sm text-[var(--color-metric)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-metric)] animate-status-pulse" />
            {PROFILE.availability} · {PROFILE.timezone}
          </p>

          <p className="mx-auto mt-4 max-w-reading text-[var(--text-secondary)] text-pretty">
            If you&apos;re hiring for someone to own production systems — or need a
            second pair of senior hands on architecture — I&apos;d be glad to talk.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {PROFILE.links.email && (
              <Button
                href={`mailto:${PROFILE.links.email}`}
                target="_self"
                variant="primary"
              >
                <Mail size={16} />
                Email me
              </Button>
            )}
            {PROFILE.links.linkedin && (
              <Button href={PROFILE.links.linkedin} variant="outline">
                <Linkedin size={16} />
                LinkedIn
              </Button>
            )}
            {PROFILE.links.github && (
              <Button href={PROFILE.links.github} variant="outline">
                <Github size={16} />
                GitHub
              </Button>
            )}
            {PROFILE.links.resume && (
              <Button href={PROFILE.links.resume} variant="outline">
                <FileText size={16} />
                Download CV
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
