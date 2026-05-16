/**
 * Oasis Al-Ibda - Type Definitions
 * All TypeScript interfaces and types used across the app
 */

export interface NavLink {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface HeroStat {
  icon?: string;
  value: string;
  label: string;
}

export interface WhyCard {
  icon: string;
  title: string;
  description: string;
  color: 'green' | 'orange';
}

export interface ProgramCard {
  number: string;
  icon: string;
  title: string;
  description: string;
  accent?: boolean;
}

export interface TimelineStep {
  step: string;
  title: string;
  description: string;
}

export interface OutcomeCard {
  emoji: string;
  title: string;
  description: string;
}

export interface PersonaCard {
  icon: string;
  title: string;
  description: string;
  color: 'green' | 'orange' | 'purple';
}

export interface PartnerLogo {
  name: string;
  logo?: string;
}

export interface ContactInfo {
  icon: string;
  title: string;
  content: string;
}

export interface FounderInfo {
  name: string;
  role: string;
  bio: string;
  quote: string;
  image?: string;
}

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export interface CardProps {
  variant?: 'default' | 'highlight' | 'stat' | 'persona';
  className?: string;
  children: React.ReactNode;
}

export interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}
