import { Sparkles, Users, HeartHandshake, UserCheck } from 'lucide-react';

const ATTIRE_GROUPS = [
  {
    category: 'Parents & Principal Sponsors',
    subtitle: 'Ninang, Ninong & Parents of the Couple',
    icon: HeartHandshake,
    roles: [
      {
        title: 'Mother of the Bride & Groom',
        attire: 'Floor-length evening gown or formal dress',
        colors: [
          { name: 'Mocha', hex: '#9E826C' },
          { name: 'Cream', hex: '#EDE3D2' },
        ],
      },
      {
        title: 'Father of the Bride & Groom',
        attire: 'Classic black suit with white dress shirt & tie',
        colors: [{ name: 'Black', hex: '#1C1C1C' }],
      },
      {
        title: 'Ninang & Ninong',
        attire: 'Formal gown, Barong, or dark formal suit',
        colors: [
          { name: 'Champagne', hex: '#E5D3B3' },
          { name: 'Beige', hex: '#D2C1A5' },
          { name: 'Black', hex: '#1C1C1C' },
        ],
      },
    ],
  },
  {
    category: 'Wedding Entourage',
    subtitle: 'Honor Attendants, Bridesmaids, Groomsmen & Little Ones',
    icon: Users,
    roles: [
      {
        title: 'Maid & Matron of Honor',
        attire: 'Full-length formal gown in deep teal green',
        colors: [{ name: 'Teal Green', hex: '#1F5E53' }],
      },
      {
        title: 'Best Man & Groomsmen',
        attire: 'Black suit with teal green tie & pocket square',
        colors: [
          { name: 'Teal Green', hex: '#28665B' },
          { name: 'Black', hex: '#1C1C1C' },
        ],
      },
      {
        title: 'Bridesmaids & Secondary Sponsors',
        attire: 'Flowing formal dresses in soft sage & mint tones',
        colors: [
          { name: 'Mint Green', hex: '#B4C7B7' },
          { name: 'Light Green', hex: '#98AC93' },
        ],
      },
      {
        title: 'Flower Girl & Ring Bearer',
        attire: 'Cream dress with teal sash / Cream vest & teal trousers',
        colors: [
          { name: 'Cream', hex: '#F2ECE1' },
          { name: 'Teal Green', hex: '#266157' },
        ],
      },
    ],
  },
  {
    category: 'Wedding Guests',
    subtitle: 'Semi-Formal Celebration Attire',
    icon: UserCheck,
    roles: [
      {
        title: 'Gentlemen',
        attire: 'Collared polo or long-sleeve button-down with tailored slacks',
        colors: [
          { name: 'Sage / Olive', hex: '#7D8B76' },
          { name: 'Beige / Khaki', hex: '#D5C7B2' },
        ],
      },
      {
        title: 'Ladies',
        attire: 'Midi or maxi dress, cocktail dress, or dressy separates',
        colors: [
          { name: 'Sage Green', hex: '#8FA189' },
          { name: 'Neutral & Earth Tones', hex: '#C7B8A1' },
        ],
      },
    ],
  },
];

export default function DressCodeSection() {
  return (
    <section id="dresscode" className="py-20 px-4 max-w-5xl mx-auto text-center">
      <span className="font-pinyon text-3xl text-[#FCEABB] block">Attire Guidelines</span>
      <h2 className="font-cinzel text-3xl md:text-4xl text-[#FFFCF7] uppercase tracking-widest mt-1">
        Wedding Attire Guide
      </h2>
      <p className="font-sans text-sm text-[#FCEABB]/90 uppercase tracking-widest mt-2">
        Semi-Formal &amp; Coordinated Color Palette
      </p>
      <div className="w-24 h-0.5 bg-[#D4AF37] mx-auto mt-4 mb-10" />

      <div className="glass-card p-6 sm:p-8 md:p-12 rounded-3xl border border-[#D4AF37]/40 text-left">
        <p className="font-sans text-sm md:text-base text-[#FFFCF7]/90 leading-relaxed mb-10 max-w-2xl mx-auto text-center">
          We encourage you to wear Semi-Formal Attire with any color except White, Mocha, and Teal Green. <br> Here are the attire guide for our Principal Sponsors and Entourage:</br>
        </p>

        {/* Grouped Attire Cards */}
        <div className="space-y-8">
          {ATTIRE_GROUPS.map((group) => {
            const IconComponent = group.icon;
            return (
              <div
                key={group.category}
                className="bg-[#031A1C]/50 border border-[#D4AF37]/25 rounded-2xl p-5 md:p-6"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 border-b border-[#D4AF37]/20 pb-3.5 mb-5">
                  <div className="w-9 h-9 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center text-[#FCEABB] shrink-0">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-cinzel text-base md:text-lg text-[#FCEABB] tracking-wider uppercase">
                      {group.category}
                    </h3>
                    <p className="font-sans text-xs text-[#FFFCF7]/60">{group.subtitle}</p>
                  </div>
                </div>

                {/* Role Sub-Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {group.roles.map((role) => (
                    <div
                      key={role.title}
                      className="bg-[#0F383B]/40 border border-[#D4AF37]/20 hover:border-[#D4AF37]/50 rounded-xl p-4 flex flex-col justify-between transition-all"
                    >
                      <div>
                        <h4 className="font-playfair text-base font-semibold text-[#FFFCF7] mb-1">
                          {role.title}
                        </h4>
                        <p className="font-sans text-xs text-[#FFFCF7]/75 leading-relaxed mb-4">
                          {role.attire}
                        </p>
                      </div>

                      {/* Circular Color Swatches */}
                      <div className="pt-3 border-t border-[#D4AF37]/15">
                        <span className="block font-sans text-[10px] uppercase tracking-widest text-[#FCEABB]/60 mb-2">
                          Color Swatches
                        </span>
                        <div className="flex flex-wrap items-center gap-2.5">
                          {role.colors.map((swatch) => (
                            <div key={swatch.name} className="flex items-center gap-1.5">
                              <span
                                className="w-5 h-5 rounded-full border border-[#FCEABB]/60 shadow-inner inline-block shrink-0"
                                style={{ backgroundColor: swatch.hex }}
                                title={swatch.name}
                              />
                              <span className="font-sans text-xs text-[#FFFCF7]/90">
                                {swatch.name}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Reminder Note */}
        <div className="mt-10 pt-6 border-t border-[#D4AF37]/20 text-center">
          <p className="text-xs md:text-sm font-sans text-[#E8C3B9]/90 italic flex items-center justify-center gap-2 flex-wrap">
            <Sparkles className="w-4 h-4 text-[#D4AF37] shrink-0" />
            <span>
              Note: Please reserve pure white and light gray for the Bride &amp; Groom, and kindly avoid casual denim attire.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}