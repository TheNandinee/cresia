import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

const Contact = ({ onOpenProBono }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    stage: "Idea / Pre-Revenue",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setError(null);
    setSubmitted(false);

    try {
      // ✅ RELATIVE PATH — WORKS IN PROD + LOCAL
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          stage: formData.stage,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Submission failed");
      }

      if (data.success) {
        setSubmitted(true);

        // Optional: reset form after short delay
        setTimeout(() => {
          setFormData({
            name: "",
            email: "",
            stage: "Idea / Pre-Revenue",
          });
        }, 2000);
      } else {
        throw new Error(data?.error || "Submission failed");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-32 bg-neutral-950 relative overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-amber-900/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* MAIN CONTACT CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-neutral-900 border border-neutral-800 p-8 md:p-16 text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl text-white font-bold mb-6 font-serif">
            Ready to stabilize your scale?
          </h2>

          <p className="text-neutral-400 text-lg mb-10 max-w-2xl mx-auto font-light font-sans">
            Book a free 30-minute discovery call to see if your vision aligns with
            our systems.
          </p>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="max-w-md mx-auto space-y-4 text-left font-sans"
          >
            <div>
              <label className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-neutral-950 border border-neutral-800 text-white p-3 focus:outline-none focus:border-white transition-colors"
                placeholder="Founder Name"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-neutral-950 border border-neutral-800 text-white p-3 focus:outline-none focus:border-white transition-colors"
                placeholder="founder@company.com"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2">
                Current Stage
              </label>
              <select
                name="stage"
                value={formData.stage}
                onChange={handleChange}
                className="w-full bg-neutral-950 border border-neutral-800 text-neutral-400 p-3 focus:outline-none focus:border-white transition-colors"
              >
                <option>Idea / Pre-Revenue</option>
                <option>Early Traction ($1k - $10k MRR)</option>
                <option>Scaling ($10k+ MRR)</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-white text-neutral-950 font-bold py-4 mt-4 hover:bg-neutral-200 transition-colors flex items-center justify-center space-x-2 disabled:opacity-60"
            >
              <span>
                {isSubmitting ? "Submitting..." : "Request Discovery Call"}
              </span>
              <ChevronRight size={16} />
            </button>

            {/* STATUS MESSAGES */}
            {submitted && (
              <p className="text-green-500 text-sm text-center mt-4">
                Thank you. We’ll be in touch shortly.
              </p>
            )}

            {error && (
              <p className="text-red-500 text-sm text-center mt-4">
                {error}
              </p>
            )}
          </form>

          <p className="mt-6 text-neutral-600 text-sm font-sans">
            Prefer email?{" "}
            <a
              href="mailto:team.cresia@gmail.com"
              className="text-neutral-400 underline decoration-neutral-600 underline-offset-4 hover:text-white"
            >
              team.cresia@gmail.com
            </a>
          </p>
        </motion.div>

        {/* PRO BONO PROMO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-neutral-950 border border-neutral-800 p-8 flex flex-col md:flex-row items-center justify-between gap-6 hover:border-amber-900/40 transition-colors"
        >
          <div className="text-left font-sans">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 bg-amber-600 rounded-full animate-pulse"></span>
              <h3 className="text-white font-bold uppercase tracking-widest text-sm">
                Community Initiative
              </h3>
            </div>
            <p className="text-neutral-400 max-w-md text-sm">
              Every month, we invest in one high-potential founder through our Pro
              Bono program. No upfront cost, just alignment.
            </p>
          </div>

          <button
            onClick={onOpenProBono}
            className="whitespace-nowrap px-6 py-3 border border-neutral-700 text-neutral-300 text-xs font-bold uppercase tracking-widest hover:text-amber-500 hover:border-amber-600 transition-colors font-sans"
          >
            Explore Program
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
