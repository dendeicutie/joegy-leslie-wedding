import { useState } from 'react';
import { X, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

const GOOGLE_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbwk8nE5e9yzvwG8IJaqXJut1vs90bdlIL9QhuZa-bGOj3FT9jUHG-bUjkAMIRJ88jtkGA/exec';

export default function RsvpModal({ onClose, showToast }) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    attending: 'yes',
    additionalGuests: '0',
    additionalGuestNames: [],
    message: '',
  });

  const handleAdditionalGuestCountChange = (value) => {
    const count = Number(value);
    setFormData((prev) => ({
      ...prev,
      additionalGuests: value,
      additionalGuestNames: Array.from(
        { length: count },
        (_, idx) => prev.additionalGuestNames[idx] || ''
      ),
    }));
  };

  const handleAdditionalGuestNameChange = (index, value) => {
    setFormData((prev) => {
      const updatedNames = [...prev.additionalGuestNames];
      updatedNames[index] = value;
      return {
        ...prev,
        additionalGuestNames: updatedNames,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);

    const extraCount =
      formData.attending === 'yes' ? Number(formData.additionalGuests) : 0;
    const cleanedNames =
      formData.attending === 'yes'
        ? formData.additionalGuestNames.map((name) => name.trim()).filter(Boolean)
        : [];

    const payload = {
      fullName: formData.fullName.trim(),
      attendance:
        formData.attending === 'yes'
          ? 'Joyfully Accepts'
          : 'Regretfully Declines',
      // Total headcount (primary guest + additional guests)
      guests: formData.attending === 'yes' ? 1 + extraCount : 0,
      additionalGuestsCount: extraCount,
      additionalGuestNames:
        cleanedNames.length > 0 ? cleanedNames.join(', ') : 'None',
      dietary: 'N/A',
      message: formData.message.trim(),
    };

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(payload),
      });

      setSubmitted(true);
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.5 } });
      showToast("RSVP Submitted! We can't wait to celebrate with you.");
    } catch (error) {
      console.error('RSVP submission error:', error);
      showToast('Something went wrong sending your RSVP. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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
                Please confirm your attendance by December 8, 2026
              </p>
            </div>

            <div>
              <label className="block text-xs font-bold font-sans uppercase tracking-wider text-[#031A1C]/80 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                required
                disabled={isSubmitting}
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="e.g. Leslie Marquez"
                className="w-full px-4 py-2.5 rounded-lg border border-[#D4AF37]/40 bg-white text-[#031A1C] focus:ring-2 focus:ring-[#D4AF37] focus:outline-none text-sm disabled:opacity-60"
              />
            </div>

            <div>
              <label className="block text-xs font-bold font-sans uppercase tracking-wider text-[#031A1C]/80 mb-1">
                Will you attend? *
              </label>
              <select
                disabled={isSubmitting}
                value={formData.attending}
                onChange={(e) => setFormData({ ...formData, attending: e.target.value })}
                className="w-full px-4 py-2.5 rounded-lg border border-[#D4AF37]/40 bg-white text-[#031A1C] focus:ring-2 focus:ring-[#D4AF37] focus:outline-none text-sm disabled:opacity-60"
              >
                <option value="yes">Joyfully Accepts (I/We will be there!)</option>
                <option value="no">Regretfully Declines (With warm blessings)</option>
              </select>
            </div>

            {formData.attending === 'yes' && (
              <>
                <div>
                  <label className="block text-xs font-bold font-sans uppercase tracking-wider text-[#031A1C]/80 mb-1">
                    Number of Guests Attending With You
                  </label>
                  <select
                    disabled={isSubmitting}
                    value={formData.additionalGuests}
                    onChange={(e) => handleAdditionalGuestCountChange(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-[#D4AF37]/40 bg-white text-[#031A1C] focus:ring-2 focus:ring-[#D4AF37] focus:outline-none text-sm disabled:opacity-60"
                  >
                    <option value="0">0 (Just me)</option>
                    <option value="1">1 Additional Guest</option>
                    <option value="2">2 Additional Guests</option>
                    <option value="3">3 Additional Guests</option>
                  </select>
                </div>

                {Number(formData.additionalGuests) > 0 && (
                  <div className="space-y-2.5">
                    <label className="block text-xs font-bold font-sans uppercase tracking-wider text-[#031A1C]/80">
                      {Number(formData.additionalGuests) === 1
                        ? 'Name of Additional Guest *'
                        : `Names of ${formData.additionalGuests} Additional Guests *`}
                    </label>
                    {formData.additionalGuestNames.map((guestName, index) => (
                      <input
                        key={index}
                        type="text"
                        required
                        disabled={isSubmitting}
                        value={guestName}
                        onChange={(e) =>
                          handleAdditionalGuestNameChange(index, e.target.value)
                        }
                        placeholder={`Additional Guest ${index + 1} Full Name`}
                        className="w-full px-4 py-2.5 rounded-lg border border-[#D4AF37]/40 bg-white text-[#031A1C] focus:ring-2 focus:ring-[#D4AF37] focus:outline-none text-sm disabled:opacity-60"
                      />
                    ))}
                  </div>
                )}
              </>
            )}

            <div>
              <label className="block text-xs font-bold font-sans uppercase tracking-wider text-[#031A1C]/80 mb-1">
                Warm Message for the Couple
              </label>
              <textarea
                rows="3"
                disabled={isSubmitting}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Share a wish or advice for Joegy & Leslie..."
                className="w-full px-4 py-2.5 rounded-lg border border-[#D4AF37]/40 bg-white text-[#031A1C] focus:ring-2 focus:ring-[#D4AF37] focus:outline-none text-sm disabled:opacity-60"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-shimmer text-[#031A1C] font-bold py-3 rounded-xl text-xs uppercase tracking-widest shadow-xl mt-4 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending RSVP...' : 'Submit RSVP Response'}
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