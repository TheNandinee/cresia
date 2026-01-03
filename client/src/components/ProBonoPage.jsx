import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  X,
  Briefcase,
  Heart
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] }
  }
};

const ProBonoPage = ({ onBack }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 min-h-screen bg-neutral-950"
    >
      <div className="max-w-4xl mx-auto px-6">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-neutral-500 hover:text-amber-500 transition-colors mb-12 group font-sans"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-bold uppercase tracking-widest">
            Back to Home
          </span>
        </button>

        <motion.div variants={fadeInUp} initial="hidden" animate="visible">
          <div className="mb-16">
            <span className="text-amber-600 text-xs font-bold tracking-[0.2em] uppercase block mb-4 font-sans">
              CRESIA Pro Bono Program
            </span>
            <h1 className="text-4xl md:text-6xl text-white font-bold mb-6 leading-tight font-serif">
              Building founders <br /> before profits.
            </h1>
            <p className="text-xl text-neutral-400 font-light leading-relaxed max-w-2xl font-sans">
              At CRESIA, we believe strong foundations matter more than early capital.
              Every month, we partner with one founder to build their startup’s digital and business foundation at no upfront cost.
            </p>
            <div className="mt-6 p-4 border-l-2 border-amber-600 bg-amber-900/10 inline-block">
              <p className="text-neutral-300 italic font-serif">
                "This is not charity. This is a long-term partnership based on alignment and execution."
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 font-sans">
            <div>
              <h3 className="text-2xl text-white font-bold mb-6 flex items-center gap-3 font-serif">
                <Briefcase size={24} className="text-neutral-500" />
                What You Receive
              </h3>
              <p className="text-neutral-400 mb-6 font-light">
                The selected founder receives a <strong className="text-white">Pro Bono Gold Engagement</strong>, delivered with the same standards as our paid work:
              </p>
              <ul className="space-y-4">
                {[
                  "Complete, custom-built website",
                  "Clear business plan & execution roadmap",
                  "Core brand structure & positioning",
                  "Launch support and handover"
                ].map((item, i) => (
                  <li key={i} className="flex items-start space-x-3 text-neutral-300">
                    <Check size={18} className="text-amber-600 mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-neutral-500">
                *Includes everything typically offered under our Silver and Gold tiers.
              </p>
            </div>

            <div className="bg-neutral-900 border border-neutral-800 p-8">
              <h3 className="text-xl text-white font-bold mb-6 font-serif">
                The Partnership Model
              </h3>
              <p className="text-neutral-400 mb-8 text-sm">
                To ensure sustainability and long-term alignment, founders choose one of the following <strong className="text-white">after launch</strong>:
              </p>

              <div className="space-y-6">
                <div className="border-b border-neutral-800 pb-6">
                  <h4 className="text-white font-bold mb-2">
                    Option 1: Revenue Share
                  </h4>
                  <ul className="text-sm text-neutral-400 space-y-1 pl-4 list-disc marker:text-amber-600">
                    <li>2% of net profit</li>
                    <li>Applicable only after revenue generation</li>
                    <li>No upfront or fixed fees</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-bold mb-2">
                    Option 2: Monthly Maintenance
                  </h4>
                  <ul className="text-sm text-neutral-400 space-y-1 pl-4 list-disc marker:text-amber-600">
                    <li>Ongoing website maintenance & support</li>
                    <li>Transparent monthly fee</li>
                    <li>Feature updates as you evolve</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="border-y border-neutral-800 py-16 mb-20 font-sans">
            <h3 className="text-2xl text-white font-bold mb-8 text-center font-serif">
              Who Should Apply
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-neutral-900/50 border border-neutral-800/50">
                <h4 className="text-green-500 font-bold mb-4 uppercase tracking-wider text-xs flex items-center gap-2">
                  <Check size={14} /> Perfect For
                </h4>
                <ul className="space-y-3 text-neutral-300 text-sm">
                  <li>• Founders building a real product/business</li>
                  <li>• Execution-focused, not just idea-focused</li>
                  <li>• Those who value structure & long-term systems</li>
                  <li>• Founders lacking access to premium support</li>
                </ul>
              </div>
              <div className="p-6 bg-neutral-900/50 border border-neutral-800/50">
                <h4 className="text-red-500 font-bold mb-4 uppercase tracking-wider text-xs flex items-center gap-2">
                  <X size={14} /> Not Suitable For
                </h4>
                <ul className="space-y-3 text-neutral-300 text-sm">
                  <li>• Hobby or side projects</li>
                  <li>• Short-term experiments</li>
                  <li>• Founders seeking "free design" without commitment</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center max-w-2xl mx-auto font-sans">
            <Heart size={32} className="text-amber-600 mx-auto mb-6 fill-amber-900/20" />
            <h3 className="text-2xl text-white font-bold mb-4 font-serif">
              Why We Run This Program
            </h3>
            <p className="text-neutral-400 mb-10 leading-relaxed">
              Many strong founders fail early, not because of weak ideas, but because of weak foundations. CRESIA exists to change that.
            </p>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScZg8hifKUWMx4vHbhFkX79cWOw6xJRC1DKqzLQIbpzkdMFvQ/viewform?usp=sharing&ouid=114223450707501944466"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-5 bg-white text-neutral-950 font-bold hover:bg-amber-500 transition-colors w-full md:w-auto font-sans"
            >
              Apply for CRESIA Pro Bono
              <ArrowRight size={20} className="ml-2" />
            </a>

            <div className="mt-12 text-xs text-neutral-600 space-y-2 border-t border-neutral-900 pt-6">
              <p className="font-bold text-neutral-500">PROGRAM DISCLAIMER</p>
              <p>
                Only one pro bono engagement is offered each month. Scope is defined and agreed upon before work begins. Maintenance fees or revenue share apply only after launch.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProBonoPage;
