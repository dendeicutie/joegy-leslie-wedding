import { useState } from 'react';
import { X, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function RsvpModal({ onClose, showToast }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    attending: 'yes',
    guestCount: '1',
    dietary: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.5 } });
    showToast("RSVP Submitted! We can't wait to celebrate with you.");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="glass-card-light text-[#031A1C] max-w-lg w-full rounded-2xl p-6 md:p-8 relative shadow-2xl overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#031A1C]/60 hover:text-[#031A1C]"
        >
          <X className="w-6 h-6" />
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="text-center mb-6">
              <span className="font-pinyon text-2xl text-[#B3924E] block">Celebration of Love</span>
              <h3 className="font-cinzel text-2xl font-bold uppercase tracking-wider">RSVP Confirmation</h3>
              <p className="text-xs font-sans text-[#031A1C]/70 mt-1">
                Please confirm your attendance by November 18, 2026
              </p>
            </div>

            <div>
              <label className="block text-xs font-bold font-sans uppercase tracking-wider text-[#031A1C]/80 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="e.g. Mr. & Mrs. John Doe"
                className="w-full px-4 py-2.5 rounded-lg border border-[#D4AF37]/40 bg-white text-[#031A1C] focus:ring-2 focus:ring-[#D4AF37] focus:outline-none text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-bold font-sans uppercase tracking-wider text-[#031A1C]/80 mb-1">
                Will you attend? *
              </label>
              <select
                value={formData.attending}
                onChange={(e) => setFormData({ ...formData, attending: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-[#D4AF37]/40 bg-white text-[#031A1C] focus:ring-2 focus:ring-[#D4AF37] focus:outline-none text-sm"
              >
                <option value="yes">Joyfully Accepts (I/We will be there!)</option>
                <option value="no">Regretfully Declines (With warm blessings)</option>
              </select>
            </div>

            {formData.attending === 'yes' && (
              <>
                <div>
                  <label className="block text-xs font-bold font-sans uppercase tracking-wider text-[#031A1C]/80 mb-1">
                    Number of Guests Attending
                  </label>
                  <select
                    value={formData.guestCount}
                    onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-[#D4AF37]/40 bg-white text-[#031A1C] focus:ring-2 focus:ring-[#D4AF37] focus:outline-none text-sm"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 Persons</option>
                    <option value="3">3 Persons</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold font-sans uppercase tracking-wider text-[#031A1C]/80 mb-1">
                    Dietary Restrictions / Allergies
                  </label>
                  <input
                    type="text"
                    value={formData.dietary}
                    onChange={(e) => setFormData({ ...formData, dietary: e.target.value })}
                    placeholder="e.g. Vegetarian, Seafood Allergy, None"
                    className="w-full px-4 py-2.5 rounded-lg border border-[#D4AF37]/40 bg-white text-[#031A1C] focus:ring-2 focus:ring-[#D4AF37] focus:outline-none text-sm"
                  />
                </div>
              </>
            )}

            <div>
              <label className="block text-xs font-bold font-sans uppercase tracking-wider text-[#031A1C]/80 mb-1">
                Warm Message for the Couple
              </label>
              <textarea
                rows="3"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Share a wish or advice for Joegy & Leslie..."
                className="w-full px-4 py-2.5 rounded-lg border border-[#D4AF37]/40 bg-white text-[#031A1C] focus:ring-2 focus:ring-[#D4AF37] focus:outline-none text-sm"
              />
            </div>

            <button
              type="submit"
              className="w-full btn-shimmer text-[#031A1C] font-bold py-3 rounded-xl text-xs uppercase tracking-widest shadow-xl mt-4"
            >
              Submit RSVP Response
            </button>
          </form>
        ) : (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-[#D4AF37]/20 text-[#B3924E] rounded-full flex items-center justify-center mx-auto mb-4 border border-[#D4AF37]">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="font-playfair text-2xl font-bold text-[#031A1C]">
              Thank You, {formData.fullName}!
            </h3>
            <p className="font-pinyon text-2xl text-[#B3924E] my-2">Your response has been received.</p>
            <p className="text-xs font-sans text-[#031A1C]/80 leading-relaxed mb-6">
              We look forward to sharing this magical day with you.
            </p>
            <button
              onClick={onClose}
              className="btn-shimmer text-[#031A1C] font-bold px-8 py-2.5 rounded-full text-xs uppercase tracking-widest"
            >
              Close Window
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
