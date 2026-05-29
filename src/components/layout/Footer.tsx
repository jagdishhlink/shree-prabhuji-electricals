"use client";

import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube, Twitter, ArrowUpRight } from "lucide-react";
import { businessData } from "@/data/site-data";

const socialIcons: Record<string, any> = {
  instagram: Instagram,
  facebook: Facebook,
  youtube: Youtube,
  twitter: Twitter,
};

export function Footer() {
  const year = new Date().getFullYear();
  const socials = businessData.socials || {};
  const hasSocials = Object.entries(socials).some(([platform, url]) => socialIcons[platform] && url);

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
          {/* Brand */}
          <div className="space-y-4 lg:col-span-1">
            {businessData.logo ? (
              <img src={businessData.logo} alt={businessData.name} className="h-9 w-auto" />
            ) : (
              <h3 className="text-xl font-heading font-bold">
                {businessData.name}
              </h3>
            )}
            <p className="text-foreground/50 text-sm leading-relaxed max-w-xs">
              {businessData.description || `${businessData.category} — Trusted by our community.`}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-foreground/70">Quick Links</h4>
            <nav className="space-y-2.5">
              {["About", "Services", "Gallery", "Testimonials", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-sm text-foreground/50 hover:text-primary transition-colors"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-foreground/70">Contact</h4>
            <div className="space-y-3">
              {businessData.address && (
                <div className="flex items-start gap-2.5 text-sm text-foreground/50">
                  <MapPin size={14} className="mt-0.5 flex-shrink-0 text-primary/70" />
                  <span className="leading-relaxed">{businessData.address}</span>
                </div>
              )}
              {businessData.phone && (
                <a href={`tel:${businessData.phone}`} className="flex items-center gap-2.5 text-sm text-foreground/50 hover:text-primary transition-colors">
                  <Phone size={14} className="flex-shrink-0 text-primary/70" />
                  <span>{businessData.phone}</span>
                </a>
              )}
              {businessData.email && (
                <a href={`mailto:${businessData.email}`} className="flex items-center gap-2.5 text-sm text-foreground/50 hover:text-primary transition-colors">
                  <Mail size={14} className="flex-shrink-0 text-primary/70" />
                  <span>{businessData.email}</span>
                </a>
              )}
              {businessData.openingHours && (
                <div className="flex items-start gap-2.5 text-sm text-foreground/50">
                  <Clock size={14} className="mt-0.5 flex-shrink-0 text-primary/70" />
                  <span className="leading-relaxed">{businessData.openingHours}</span>
                </div>
              )}
            </div>
          </div>

          {/* Social + Rating */}
          <div className="space-y-5">
            {hasSocials && (
              <>
                <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-foreground/70">Follow Us</h4>
                <div className="flex gap-2.5">
                  {Object.entries(socials).map(([platform, url]) => {
                    const Icon = socialIcons[platform];
                    if (!Icon || !url) return null;
                    return (
                      <a
                        key={platform}
                        href={url as string}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-lg bg-foreground/5 flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-all"
                        aria-label={platform}
                      >
                        <Icon size={16} />
                      </a>
                    );
                  })}
                </div>
              </>
            )}
            {businessData.rating && (
              <div className="p-3.5 rounded-xl bg-background border border-border">
                <div className="flex items-center gap-2.5">
                  <span className="text-2xl font-bold text-primary">{businessData.rating}</span>
                  <div>
                    <div className="text-yellow-500 text-xs leading-none">{"★".repeat(Math.round(parseFloat(businessData.rating)))}</div>
                    <span className="text-[11px] text-foreground/45 mt-0.5 block">{businessData.reviewsCount} reviews</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-7 border-t border-border/60 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-foreground/40">
            &copy; {year} {businessData.name}. All rights reserved.
          </p>
          {businessData.mapUrl && (
            <a
              href={businessData.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-foreground/40 hover:text-primary transition-colors"
            >
              View on Google Maps
              <ArrowUpRight size={11} />
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
