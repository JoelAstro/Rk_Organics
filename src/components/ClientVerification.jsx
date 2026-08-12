import React from "react";
import { X, CheckCircle, AlertTriangle, HelpCircle } from "lucide-react";
import { verificationList } from "../data/formulationsData";

export default function ClientVerification({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-ivory border border-gold/30 rounded-[28px] max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[85vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-charcoal/60 hover:text-charcoal p-2 rounded-full hover:bg-forest/5 transition-colors cursor-pointer"
          aria-label="Close panel"
        >
          <X size={20} />
        </button>

        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <AlertTriangle className="text-gold w-6 h-6 flex-shrink-0" />
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-forest-dark">
              Content Verification Checklist
            </h2>
          </div>

          <p className="text-xs text-charcoal-light leading-relaxed">
            This internal panel compiles transliterated Telugu terms and missing information slots extracted from the client's initial message. Please verify these with the client prior to final launch.
          </p>

          <div className="border-t border-forest/10 pt-4 space-y-4">
            <h3 className="font-button text-xs font-bold uppercase tracking-wider text-forest">
              Ambiguous / Transliterated Ingredients:
            </h3>

            <div className="space-y-3">
              {verificationList.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 bg-sand/40 border border-forest/5 rounded-xl flex items-start gap-3"
                >
                  <HelpCircle className="text-gold w-4 h-4 mt-0.5 flex-shrink-0" />
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-forest-dark">{item.term}</p>
                    <p className="text-[10px] text-charcoal-light">
                      <span className="font-semibold">Category:</span> {item.formulation}
                    </p>
                    <p className="text-xs text-charcoal-light italic font-sans">
                      {item.note}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-forest/10 pt-4 space-y-3">
            <h3 className="font-button text-xs font-bold uppercase tracking-wider text-forest">
              Pending General Client Assets:
            </h3>
            <ul className="space-y-2 text-xs text-charcoal-light list-disc pl-5 font-sans">
              <li>Official brand story details, establishment date, and Vaidya profiles.</li>
              <li>Actual high-resolution product/formulation photography (currently using botanical placeholders).</li>
              <li>Approved usage, dosage guidelines, and traditional preparation steps.</li>
              <li>Official contact phone number, email, and clinic location.</li>
            </ul>
          </div>

          <div className="flex justify-end pt-4 border-t border-forest/10">
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-forest hover:bg-forest-light text-white text-xs font-semibold uppercase tracking-wider rounded-full shadow transition-all font-button cursor-pointer"
            >
              Close Review Panel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
